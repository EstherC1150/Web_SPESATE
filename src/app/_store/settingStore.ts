import { create } from "zustand";

type SettingState = {
  headerType: "black" | "white";
  handleHeaderType: (type: "black" | "white") => void;
};

const useSettingStore = create<SettingState>()((set) => ({
  headerType: "black",
  handleHeaderType: (type) => set(() => ({ headerType: type })),
}));

export default useSettingStore;
