import { Dispatch, SetStateAction } from "react";
import { IServerMemberValue } from "./IMemberValue";

export interface IMemberBoxValue {
  state: string;
  member: IServerMemberValue[];
}

export interface IMemberBoxPropsValue {
  state: IMemberBoxValue[];
  setState: Dispatch<SetStateAction<IMemberBoxValue[]>>;
  title: string;
  Boxindex: number;
  member: IServerMemberValue[];
}
