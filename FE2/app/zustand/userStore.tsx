import { create } from "zustand";
import { persist } from "zustand/middleware";
import User from "~/interface/User";

interface UserState {
  id: string;
  name: string;
  mail: string;
  phone: string;
  password: string;
  isAuthenciated: boolean;
  isAdmin: boolean;
  save:(mail:string, pwd: string) => void;
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
      mail: "",
      phone: "",
      password:"",
      isAdmin: false,
      save: (mail, pwd)=> {
        set({password:pwd, mail: mail});
      },
      login: (userInfo, isAdmin) =>
        set({ isAuthenciated: true, name: userInfo.name, id: userInfo.id,phone:userInfo.phone, isAdmin: isAdmin }),
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
