import create from "zustand";
import { devtools } from "zustand/middleware";

import {
  decideWhetherOrNotToAddDecimal,
  handleInputNum,
  processNumberForDisplay,
  safeEval,
  squareRootCalculation,
  toggleNegative,
} from "./utils";

let useStore = (set) => ({
  /*
   * LOGIC
   */
  currentCalc: 0,
  inputNum: "0",
  currentDecimalPlaces: 0,
  inDecimalCalculation: false,
  calcError: false,
  lastInput: "",
  setLastInput: (input) => set({ lastInput: input }),

  /*
   * POWER FUNCTIONS
   */
  power: true,
  powerOn: () => {
    set({
      power: true,
      display: "0",
      displayLeftSide: "",
      currentCalc: 0,
      inputNum: 0,
    });
  },
  powerOff: () => {
    set({
      power: false,
    });
    setTimeout(
      () =>
        set({
          currentCalculation: 0,
          inputNum: 0,
          displayLeftSide: "",
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
      currentCalc: 0,
      inputNum: 0,
      displayLeftSide: "",
      sciMode: true,
      sciModeEvalString: "",
    });
  },
  sciModeOff: () => {
    set({
      currentCalc: 0,
      inputNum: 0,
      displayLeftSide: "",
      sciMode: false,
      sciModeEvalString: "",
    });
  },

  sciModeEvalString: "",

  /*
   *
   * CALCULATOR BUTTONS - REGULAR MODE
   *
   */

  /*
   * CE/C Button
   */
  inputClear: () => {
    set((state) => ({
      displayLeftSide: "",
      currentCalculation:
        state.lastInput === "clear" ? "0" : state.currentCalculation,
      sciEvalString:
        state.lastInput === ("clear" && "equals") ? "0" : state.sciEvalString,
      inputNum: "0",
      lastInput: "clear",
    }));
  },

  /*
   * Number Input
   */
  inputNumber: (number) => {
    console.log("inputNumber " + number);
    set((state) => ({
      inputNum: handleInputNum({
        num: number,
        inputNum: state.inputNum,
        lastInput: state.lastInput,
      }),
      lastInput: "num",
    }));
  },

  /*
   * DECIMAL POINT INPUT
   */
  inputDecimal: () => {
    set((state) => ({
      inputNum: decideWhetherOrNotToAddDecimal(state.inputNum),
      lastInput: "decimal",
    }));
  },

  /*
   * ARITHMETIC
   */
  inputPlus: () => {
    set({ displayLeftSide: "+", lastInput: "plus" });
  },
  inputMinus: () => {
    set({ displayLeftSide: "-", lastInput: "minus" });
  },
  inputTimes: () => {
    set({ displayLeftSide: "x", lastInput: "times" });
  },
  inputDivideBy: () => {
    set((state) =>
      state.sciMode
        ? {
            sciModeEvalString: state.sciModeEvalString + "/",
            lastInput: "divideBy",
          }
        : {
            displayLeftSide: "/",
            lastInput: "divideBy",
          }
    );
  },

  /*
   * In Place Calculations
   */
  inputSqrt: () => {
    set((state) => ({
      inputNum:
        state.inputNum !== ("" && "0")
          ? squareRootCalculation(state.inputNum)
          : state.inputNum,
      currentCalc:
        state.inputNum === ("" && "0")
          ? squareRootCalculation(state.inputNum)
          : state.inputNum,
      lastInput: "sqrt" // maybe do this only if it was successful?
    }));
    // state.inputNum !== ("" && "0")
    //   ? set({ inputNum: Math.sqrt(state.inputNum), lastInput: "sqrt" })
    //   : set({ currentCalc: Math.sqrt(state.currentCalc), lastInput: "sqrt" });
  },
  // !!! this use of state is wrong
  inputPercent: (state) => {
    state.inputNum !== ("" && "0")
      ? set({ inputNum: state.inputNum / 100, lastInput: "percent" })
      : set({ currentCalc: state.currentCalc / 100, lastInput: "percent" });
  },
  // !!! this use of state is wrong
  inputInverse: () => {
    set((state) =>
      state.inputNum !== ("" && "0")
        ? {
            inputNum: processNumberForDisplay(1 / state.inputNum),
            lastInput: "inverse",
          }
        : {
            currentCalc: processNumberForDisplay(1 / state.currentCalc),
            lastInput: "inverse",
          }
    );
  },
  inputNegative: () => {
    set(
      (state) =>
        state.inputNum !== ("" && "0") && {
          inputNum: processNumberForDisplay(toggleNegative(state.inputNum)),
        }
    );
  },

  /*
   * Equals
   */
  inputEquals: () => {
    set({
      displayLeftSide: "",
      lastInput: "equals",
    });
  },

  /*
   * Memory Functions
   */
  memory: 0,
  inputMPlus: (state) =>
    set({ memory: state.memory + state.inputNum, lastInput: "mplus" }),
  inputMMinus: (state) =>
    set({ memory: state.memory - state.inputNum, lastInput: "mminus" }),
  inputMRecall: (state) =>
    set({
      inputNum: state.memory,
      display: state.memory,
      lastInput: "mrecall",
    }),
  inputMClear: () => set({ memory: 0, lastInput: "mclear" }),

  /*
   *
   * CALCULATOR BUTTONS - SCIENTIFIC MODE
   *
   */

  /*
   * Number Input
   */
  sciResult: "",
  sciEvalString: "",
  sciInputPlus: () =>
    set((state) => ({
      sciEvalString: state.sciEvalString + state.inputNum + "+",
      inputNum: "",
      lastInput: "plus",
    })),
  sciInputMinus: () =>
    set((state) => ({
      sciEvalString: state.sciEvalString + state.inputNum + "-",
      inputNum: "",
      lastInput: "minus",
    })),
  sciInputTimes: () =>
    set((state) => ({
      sciEvalString: state.sciEvalString + state.inputNum + "*",
      inputNum: "",
      lastInput: "times",
    })),
  sciInputDivideBy: () =>
    set((state) => ({
      sciEvalString: state.sciEvalString + state.inputNum + "/",
      inputNum: "",
      lastInput: "divideby",
    })),
  sciInputEquals: () =>
    set((state) => ({
      sciEvalString: state.sciEvalString + state.inputNum,
      inputNum: "",
      sciResult: safeEval(state.sciEvalString + state.inputNum),
      lastInput: "equals",
    })),
});

useStore = devtools(useStore); // TEMP - remove in prod
useStore = create(useStore);
export default useStore;
