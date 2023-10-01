import { create } from "zustand";
import { SignUpFormData } from "~/screens/sign-up-screen/validation/sign-up-form-validation";

type UserStore = {
  user: SignUpFormData;
  setUser: (user: SignUpFormData) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  user: {
    email: "",
    password: "",
  },
  setUser: (user) => set(() => ({ user })),
}));
