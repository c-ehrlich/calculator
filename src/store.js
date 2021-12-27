import create from "zustand";
import { devtools } from "zustand/middleware";

import {
  handleInputClear,
  handleInputDecimal,
  handleInputInverse,
  handleInputMMinus,
  handleInputMPlus,
  handleInputNum,
  handleInputPercent,
  handleInputSqrt,
  performArithmeticOperationRegularMode,
  performEqualsRegularMode,
  performEqualsSciMode,
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
      display: "0",
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
          display: "0",
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
      display: "0",
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
      display: "0",
      displayLeftSide: "",
      sciMode: false,
      evalString: "",
    });
  },

  /*
   * CE/C Button
   */
  inputClear: () => {
    set((state) => ({
      ...handleInputClear({
        lastInput: state.lastInput,
      }),
    }));
  },

  /*
   * Number Input
   */
  inputNumber: (number) => {
    set((state) => ({
      ...handleInputNum({
        num: number,
        inputNum: state.inputNum,
        lastInput: state.lastInput,
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
      ...performEqualsSciMode({
        evalString: state.evalString,
        inputNum: state.inputNum,
        lastInput: state.lastInput,
      })
    })),

  /*
   * In Place Calculations
   */
  inputSqrt: () => {
    set((state) => ({
      ...handleInputSqrt({
        inputNum: state.inputNum,
        lastInput: state.lastInput,
        result: state.result,
      }),
    }));
  },
  inputPercent: () => {
    set((state) => ({
      ...handleInputPercent({
        inputNum: state.inputNum,
        evalString: state.evalString,
        sciModeOn: state.sciModeOn,
      }),
    }));
  },
  inputInverse: () => {
    set((state) => ({
      ...handleInputInverse({
        inputNum: state.inputNum,
        currentCalc: state.currentCalc,
        lastInput: state.lastInput,
        result: state.result,
      }),
    }));
  },
  inputNegative: () => {
    set((state) => ({
      ...toggleNegative({
        inputNum: state.inputNum,
        result: state.result,
        lastInput: state.lastInput,
      }),
    }));
  },

  /*
   * Memory Functions
   */
  memory: "0",
  haveMemory: false,
  inputMMinus: () =>
    set((state) => ({
      ...handleInputMMinus({
        inputNum: state.inputNum,
        lastInput: state.lastInput,
        memory: state.memory,
        result: state.result,
      }),
    })),
  inputMPlus: () =>
    set((state) => ({
      ...handleInputMPlus({
        inputNum: state.inputNum,
        lastInput: state.lastInput,
        memory: state.memory,
        result: state.result,
      }),
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
