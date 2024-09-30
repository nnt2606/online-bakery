import { create } from "zustand";
import { persist } from "zustand/middleware";
import User from "~/interface/User";

interface UserState {
  id: string;
  name: string;
  isAuthenciated: boolean;
  isAdmin: boolean;
  login: (userInfo: User, isAdmin: boolean) => void;
  logout: () => void;
  isRehydrated: boolean;
}

const userStore = create<UserState>()(
  persist(
    (set) => ({
      isAuthenciated: false,
      id: "",
      name: "",
      isAdmin: false,
      login: (userInfo, isAdmin) =>
        set({ isAuthenciated: true, name: userInfo.name, id: userInfo.id, isAdmin: isAdmin }),
      logout: () => {
        set({ isAuthenciated: false, name: "", id : "", isAdmin: false });
      },
      isRehydrated: false,
    }),
    {
      name: "auth-storage",
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.isRehydrated = true;
        }
      },
    }
  )
);

export default userStore;
