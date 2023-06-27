import { atom } from "recoil";

export const isSignIn = atom<boolean>({
  key: "isSignIn",
  default: true,
});
