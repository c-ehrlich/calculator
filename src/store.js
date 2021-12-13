import create from "zustand";
import { devtools } from "zustand/middleware";

let useStore = (set) => ({
  power: true,
  powerOn: () => set((state) => ({ power: true })),
  powerOff: () => {
    set((state) => ({ power: false }));
    setTimeout(() => set((state) => ({ display: "0" })), 200);
  },

  display: "1234.5678",
  setDisplay: (display) => set((state) => ({ display: display })),

  sciMode: false,
  sciModeOn: () => {
    set((state) => ({ display: 0, sciMode: true }));
  },
  sciModeOff: () => {
    set((state) => ({ display: 0, sciMode: false }));
  }
});

useStore = devtools(useStore); // TEMP - remove in prod
useStore = create(useStore);
export default useStore;
