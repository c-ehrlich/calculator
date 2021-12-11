import create from "zustand";
import { devtools } from "zustand/middleware";

let useStore = (set) => ({
  power: false,
  powerOn: () => set((state) => ({ power: true })),
  powerOff: () => set((state) => ({ power: false })),

  display: "1234.5678",
  setDisplay: (display) => set((state) => ({ display: display })),
});

useStore = devtools(useStore); // TEMP - remove in prod
useStore = create(useStore);
export default useStore;
