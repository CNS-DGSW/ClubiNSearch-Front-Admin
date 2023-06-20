import { Dispatch, SetStateAction } from "react";
import { IMemberValue } from "@/types/IMemberValue";

interface IMember {
  title: string;
  contents: IMemberValue[];
}

export interface IChangeValue {
  state: IMember[];
  setState: Dispatch<SetStateAction<IMember[]>>;
  containerIndex: number;
  userIndex: number;
  BeforeContainerIndex: number;
}
