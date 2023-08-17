import { atom } from "recoil";

export const clubNameAtom = atom<string>({
  key: "clubNameAtom",
  default: "",
});

export const titleAtom = atom<string>({
  key: "titleAtom",
  default: "",
});

export const positionAtom = atom<string>({
  key: "positionAtom",
  default: "",
});

export const startDateAtom = atom<string>({
  key: "startDateAtom",
  default: "",
});

export const endDateAtom = atom<string>({
  key: "endDateAtom",
  default: "",
});

export const employmentTypeAtom = atom<string>({
  key: "employmentTypeAtom",
  default: "",
});

export const detailContentAtom = atom<string>({
  key: "detailContentAtom",
  default: "",
});

export const isOpenAtom = atom<boolean>({
  key: "isOpenAtom",
  default: false,
});
