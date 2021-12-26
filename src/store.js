import create from "zustand";
import { devtools } from "zustand/middleware";

import {
  handleInputDecimal,
  handleInputNum,
  handleInputPercent,
  performArithmeticOperationRegularMode,
  performEqualsRegularMode,
  processNumberForDisplay,
  safeEval,
  squareRootCalculation,
  toggleNegative,
} from "./utils";

let useStore = (set) => ({
  /**
   * UI
   */
  modalOpen: false,
  openModal: () => set({ modalOpen: true }),
  closeModal: () => set({ modalOpen: false }),

  display: "0",

  /*
   * LOGIC
   */
  inputNum: "0",
  evalString: "",
  currentCalc: "",
  result: "0",
  lastInput: "",

  /*
   * POWER FUNCTIONS
   */
  power: true,
  powerOn: () => {
    set({
      power: true,
      displayLeftSide: "",
      currentCalc: "",
      inputNum: "0",
      result: "0",
    });
  },
  powerOff: () => {
    set({
      power: false,
    });
    setTimeout(
      () =>
        set({
          currentCalc: 0,
          inputNum: 0,
          displayLeftSide: "",
          memory: "0",
          haveMemory: false,
        }),
      200
    );
  },

  /*
   * DISPLAY FUNCTIONS
   * Maybe we can get rid of these and instead just have a function in
   * Display.jsx that uses the other values to decide what to display?
   */
  displayLeftSide: "",
  setdisplayLeftSide: (displayLeftSide) =>
    set({ displayLeftSide: displayLeftSide }),

  /*
   * SCIENTIFIC MODE
   */
  sciMode: false,
  sciModeOn: () => {
    set({
      currentCalc: "0",
      inputNum: "0",
      result: "0",
      displayLeftSide: "",
      sciMode: true,
      evalString: "",
    });
  },
  sciModeOff: () => {
    set({
      currentCalc: "0",
      inputNum: "0",
      result: "0",
      displayLeftSide: "",
      sciMode: false,
      evalString: "",
    });
  },

  /*
   * CE/C Button
   */
  inputClear: () => {
    set({
      inputNum: "0",
      evalString: "",
      result: "0",
      currentCalc: "",
      lastInput: "clear",
    });
    // TODO recreate this to function like a "real" CE/C button
    // set((state) => ({
    //   displayLeftSide: "",
    //   currentCalc: state.lastInput === "clear" ? "0" : state.currentCal,
    //   evalString:
    //     state.lastInput === ("clear" && "equals") ? "0" : state.evalString,
    //   inputNum: "0",
    //   lastInput: "clear",
    // }));
  },

  /*
   * Number Input
   */
  inputNumber: (number) => {
    set((state) => ({
      ...handleInputNum({
        num: number,
        inputNum: state.inputNum,
      }),
    }));
  },

  /*
   * DECIMAL POINT INPUT
   */
  inputDecimal: () => {
    set((state) => ({
      ...handleInputDecimal(state.inputNum),
    }));
  },

  /*
   * Plus Minus Times DivideBy Equals - Regular Mode
   */
  inputPlus: () => {
    set((state) => ({
      ...performArithmeticOperationRegularMode({
        inputNum: state.inputNum,
        evalString: state.evalString,
        operationToPerform: "plus",
        lastInput: state.lastInput,
        result: state.result,
      }),
    }));
  },
  inputMinus: () => {
    set((state) => ({
      ...performArithmeticOperationRegularMode({
        inputNum: state.inputNum,
        evalString: state.evalString,
        operationToPerform: "minus",
        lastInput: state.lastInput,
        result: state.result,
      }),
    }));
  },
  inputTimes: () => {
    set((state) => ({
      ...performArithmeticOperationRegularMode({
        inputNum: state.inputNum,
        evalString: state.evalString,
        operationToPerform: "times",
        lastInput: state.lastInput,
        result: state.result,
      }),
    }));
  },
  inputDivideBy: () => {
    set((state) => ({
      ...performArithmeticOperationRegularMode({
        inputNum: state.inputNum,
        evalString: state.evalString,
        operationToPerform: "divideby",
        lastInput: state.lastInput,
        result: state.result,
      }),
    }));
  },
  inputEquals: () => {
    set((state) => ({
      ...performEqualsRegularMode({
        inputNum: state.inputNum,
        evalString: state.evalString,
        lastInput: state.lastInput,
      }),
    }));
  },

  /*
   *
   * Plus Minus Times DivideBy Equals - SCIENTIFIC MODE
   *
   */
  sciInputPlus: () =>
    set((state) => ({
      evalString:
        (state.evalString !== "0" && state.evalString) +
        (state.inputNum !== "0" && state.inputNum) +
        "+",
      inputNum: "0",
      lastInput: "plus",
      displayLeftSide: "+",
    })),
  sciInputMinus: () =>
    set((state) => ({
      evalString:
        (state.evalString !== "0" && state.evalString) +
        (state.inputNum !== "0" && state.inputNum) +
        "-",
      inputNum: "0",
      lastInput: "minus",
      displayLeftSide: "-",
    })),
  sciInputTimes: () =>
    set((state) => ({
      evalString:
        (state.evalString !== "0" && state.evalString) +
        (state.inputNum !== "0" && state.inputNum) +
        "*",
      inputNum: "0",
      lastInput: "times",
      displayLeftSide: "*",
    })),
  sciInputDivideBy: () =>
    set((state) => ({
      evalString:
        (state.evalString !== "0" && state.evalString) +
        (state.inputNum !== "0" && state.inputNum) +
        "/",
      inputNum: "0",
      lastInput: "divideby",
      displayLeftSide: "/",
    })),
  sciInputEquals: () =>
    set((state) => ({
      result: safeEval(state.evalString + state.inputNum),
      evalString: "0",
      inputNum: "",
      lastInput: "equals",
      displayLeftSide: "",
    })),

  /*
   * In Place Calculations
   */
  inputSqrt: () => {
    set((state) =>
      state.lastInput === "equals"
        ? {
            result: squareRootCalculation(state.result),
          }
        : state.inputNum !== ("" && "0")
        ? {
            inputNum: squareRootCalculation(state.inputNum),
            currentCalc: state.inputNum, // what does this do?
            lastInput: "sqrt",
          }
        : {
            currentCalc: squareRootCalculation(state.inputNum),
            lastInput: "sqrt",
          }
    );
  },
  inputPercent: () => {
    set((state) => ({
      ...handleInputPercent({
        inputNum: state.inputNum,
        evalString: state.evalString,
        sciModeOn: state.sciModeOn,
      }),
      lastInput: "percent",
    }));
  },
  inputInverse: () => {
    set((state) =>
      state.lastInput === "equals"
        ? {
            result: processNumberForDisplay(1 / state.result),
          }
        : state.inputNum !== ("" && "0")
        ? {
            inputNum: processNumberForDisplay(1 / state.inputNum),
            currentCalc: state.inputNum, // what does this do?
            lastInput: "sqrt",
          }
        : {
            currentCalc: processNumberForDisplay(1 / state.currentCalc),
            lastInput: "sqrt",
          }
    );
  },
  inputNegative: () => {
    set(
      (state) =>
        state.inputNum !== ("" && "0") && {
          ...toggleNegative(state.inputNum),
        }
    );
  },

  /*
   * Memory Functions
   */
  memory: "0",
  haveMemory: false,
  inputMPlus: () =>
    set((state) => ({
      memory: processNumberForDisplay(
        (
          Number(state.memory) +
          Number(state.lastInput === "equals" ? state.result : state.inputNum)
        ).toString()
      ),
      haveMemory: true,
    })),
  inputMMinus: () =>
    set((state) => ({
      memory: processNumberForDisplay(
        (
          Number(state.memory) -
          Number(state.lastInput === "equals" ? state.result : state.inputNum)
        ).toString()
      ),
      haveMemory: true,
    })),
  inputMRecall: () =>
    set((state) => ({
      inputNum: state.memory,
      display: state.memory,
      lastInput: "mrecall",
    })),
  inputMClear: () =>
    set({
      memory: "0",
      haveMemory: false,
      lastInput: "mclear",
    }),
});

useStore = devtools(useStore); // TEMP - remove in prod
useStore = create(useStore);
export default useStore;
