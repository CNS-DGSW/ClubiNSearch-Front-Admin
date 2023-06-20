import { Dispatch, SetStateAction } from "react";
import { IMemberBoxValue } from "./IMemberBoxValue";

export interface IMemberPropsValue {
  state: IMemberBoxValue[];
  setState: Dispatch<SetStateAction<IMemberBoxValue[]>>;
  userIndex: number;
  BeforeContainerIndex: number;
  memberValue: IServerMemberValue;
}

export interface IServerMemberValue {
  id: number;
  name: string;
  studentNo: string;
  contact: string;
  introduction: string;
  link: string;
  fileUrl: string;
  resumeId: number;
}
