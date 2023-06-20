import { Dispatch, SetStateAction } from "react";
import { IServerMemberValue } from "@/types/IMemberValue";

interface IMember {
  title: string;
  contents: IServerMemberValue[];
}

export interface IChangeValue {
  state: IMember[];
  setState: Dispatch<SetStateAction<IMember[]>>;
  containerIndex: number;
  userIndex: number;
  BeforeContainerIndex: number;
}
