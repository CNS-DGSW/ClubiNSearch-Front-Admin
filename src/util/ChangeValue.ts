import React, { SetStateAction, Dispatch } from "react";
import { IMemberBoxValue } from "@/types/IMemberBoxValue";
import API from "./api";

interface IChangeValue {
  State: {
    stateValue: IMemberBoxValue[];
    setState: Dispatch<SetStateAction<IMemberBoxValue[]>>;
  };
  Dnd: {
    containerIndex: number;
    userIndex: number;
    BeforeContainerIndex: number;
    resumeId: string;
    state: string;
  };
}

const ChangeServerMember = async (id: string, state: string) => {
  try {
    const Token: string | null = localStorage.getItem("accessToken");
    if (!Token) return;
    const data = await API.post(
      `api/resume/admin/state`,
      {
        id: id,
        state: state,
      },
      {
        headers: { Authorization: `Bearer ${Token}` },
      }
    );
  } catch (_) {}
};

const DeleteValue = ({
  copy,
  props,
}: {
  copy: IMemberBoxValue[];
  props: IChangeValue;
}) => {
  copy[props.Dnd.BeforeContainerIndex].member.splice(props.Dnd.userIndex, 1);
};

const AddValue = ({
  copy,
  props,
}: {
  copy: IMemberBoxValue[];
  props: IChangeValue;
}) => {
  let copy2 = [...copy];
  copy[props.Dnd.containerIndex].member.push(
    copy2[props.Dnd.BeforeContainerIndex].member[props.Dnd.userIndex]
  );
};

const ChangeValue = async (props: IChangeValue) => {
  const pageId = location.href.split("/"); //useRouter 쓰면 invaild hooks인가 뜸
  const Token: string | null = localStorage.getItem("accessToken");
  let copy: IMemberBoxValue[] = [];
  await API.get(
    `api/resume/admin/list/${pageId[location.href.split("/").length - 1]}`,
    {
      headers: { Authorization: `Bearer ${Token}` },
    }
  )
    .then((e) => {
      if (e.data) {
        copy = [...e.data];
        const state: string = copy[props.Dnd.containerIndex].state;
        const resumeId: string = String(
          copy[props.Dnd.BeforeContainerIndex].member[props.Dnd.userIndex]
            .resumeId
        );
        ChangeServerMember(resumeId, state);

        AddValue({ copy, props });
        DeleteValue({ copy, props });
      }
    })
    .catch(() => {});

  props.State.setState([...copy]);
};

export default ChangeValue;
