import { IContentsValue } from "@/types/IContentsValue";
import { IErrorValue } from "@/types/IErrorValue";
import { Dispatch, SetStateAction, useState } from "react";

const ErrorHandler = (contentValue: IContentsValue) => {
  const regName = /\s/g;
  const regPhone = /^01([0|1|6|7|8|9])([0-9]{3,4})([0-9]{4})$/;
  const regSchoolNumber = /[1-3][1-4][0-2][0-9]/;

  const initError: IErrorValue = {
    name: {
      context: "",
      isError: false,
    },
    schoolNumber: {
      context: "",
      isError: false,
    },
    phoneNumber: {
      context: "",
      isError: false,
    },
    introduce: {
      context: "",
      isError: false,
    },
  };

  if (regName.test(contentValue.name) || contentValue.name === "") {
    initError.name.isError = true;
    if (regName.test(contentValue.name)) {
      initError.name.context = "띄어쓰기를 없애주세요.";
    } else if (contentValue.name === "") {
      initError.name.context = "필수 입력 항목 입니다.";
    } else {
      initError.name.context = "필수 입력 항목 입니다.";
    }
  }

  if (
    !regSchoolNumber.test(contentValue.schoolNumber) ||
    contentValue.schoolNumber.length !== 4 ||
    contentValue.schoolNumber === ""
  ) {
    initError.schoolNumber.isError = true;
    if (contentValue.schoolNumber === "") {
      initError.schoolNumber.context = "필수 입력 항목 입니다.";
    } else if (
      !regSchoolNumber.test(contentValue.schoolNumber) ||
      contentValue.schoolNumber.length !== 4
    ) {
      initError.schoolNumber.context = "학번을 정확하게 입력해주세요.";
    } else {
      initError.schoolNumber.context = "필수 입력 항목 입니다.";
    }
  }

  if (
    !regPhone.test(contentValue.phoneNumber) ||
    contentValue.phoneNumber === ""
  ) {
    initError.phoneNumber.isError = true;
    if (contentValue.phoneNumber === "") {
      initError.phoneNumber.context = "필수 입력 항목 입니다.";
    } else if (!regPhone.test(contentValue.phoneNumber)) {
      initError.phoneNumber.context = "전화 번호를 정확하게 입력해주세요.";
    } else {
      initError.phoneNumber.context = "필수 입력 항목 입니다.";
    }
  }

  if (contentValue.introduce.length < 3 || contentValue.introduce === "") {
    initError.introduce.isError = true;
    if (contentValue.introduce === "") {
      initError.introduce.context = "필수 입력 항목 입니다.";
    } else if (contentValue.introduce.length < 3) {
      initError.introduce.context = "3자이상 자기소개를 정확하게 입력해주세요.";
    } else {
      initError.introduce.context = "필수 입력 항목 입니다.";
    }
  }

  return initError;
};

export default ErrorHandler;
