import create from "zustand";
import { devtools } from "zustand/middleware";

let useStore = (set) => ({
  /*
   * LOGIC
   */
  currentCalc: 0,
  currentInputNum: 0,
  inDecimalCalculation: false,
  calcError: false,
  lastInput: "",
  setLastInput: (input) => set((state) => ({ lastInput: input })),

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
      currentInputNum: 0,
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
          currentInputNum: 0,
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
  // display: "0",
  // setDisplay: (display) => set((state) => ({ display: display })),
  displayLeftSide: "",
  setdisplayLeftSide: (displayLeftSide) =>
    set((state) => ({ displayLeftSide: displayLeftSide })),

  /*
   * SCIENTIFIC MODE
   */
  sciMode: false,
  sciModeOn: () => {
    set({
      currentCalc: 0,
      currentInputNum: 0,
      displayLeftSide: "",
      sciMode: true,
      sciModeEvalString: "",
    });
  },
  sciModeOff: () => {
    set({
      currentCalc: 0,
      currentInputNum: 0,
      displayLeftSide: "",
      sciMode: false,
      sciModeEvalString: "",
    });
  },

  sciModeEvalString: "",

  /*
   * CE/C BUTTON
   */
  inputClear: () => {
    set((state) => ({
      displayLeftSide: "",
      currentCalculation:
        state.lastInput === "clear" ? null : state.currentCalculation,
      currentInputNum:
        state.lastInput === "clear" ? null : 0,
      lastInput: "clear",
    }));
  },

  /*
   * NUMBER INPUT
   */
  inputNumber: (number) => {
    console.log("inputNumber " + number);
    set({ currentInputNum: number, lastInput: "num" });
  },
  inputDecimal: () => console.log("decimal"),

  /*
   * ARITHMETIC
   */
  inputPlus: () => {
    set({ displayLeftSide: "+" });
  },
  inputMinus: () => {
    set({ displayLeftSide: "-" });
  },
  inputTimes: () => {
    set({ displayLeftSide: "x" });
  },
  inputDivideBy: () => {
    set((state) =>
      state.sciMode
        ? { sciModeEvalString: state.sciModeEvalString + "/" }
        : {
            displayLeftSide: "/",
          }
    );
  },

  /*
   * IN PLACE CALCULATIONS
   */
  inputSqrt: (state) => {
    state.currentInputNum != null
      ? set({ currentInputNum: Math.sqrt(state.currentInputNum) })
      : set({ currentCalc: Math.sqrt(state.currentCalc) });
  },
  inputPercent: (state) => {
    state.currentInputNum != null
      ? set({ currentInputNum: state.currentInputNum / 100 })
      : set({ currentCalc: state.currentCalc / 100 });
  },
  inputInverse: (state) => {
    state.currentInputNum != null
      ? set({ currentInputNum: 1 / state.currentInputNum })
      : set({ currentCalc: 1 / state.currentCalc });
  },
  inputNegative: (state) => {
    console.log("negative");
  },

  /*
   * EQUALS
   */
  inputEquals: () => {
    set({
      displayLeftSide: "",
    });
  },

  /*
   * MEMORY FUNCTIONS
   */
  memory: 0,
  inputMPlus: (state) => set({ memory: state.memory + state.currentInputNum }),
  inputMMinus: (state) => set({ memory: state.memory - state.currentInputNum }),
  inputMRecall: (state) =>
    set({ currentInputNum: state.memory, display: state.memory }),
  inputMClear: () => set({ memory: 0 }),
});

useStore = devtools(useStore); // TEMP - remove in prod
useStore = create(useStore);
export default useStore;
