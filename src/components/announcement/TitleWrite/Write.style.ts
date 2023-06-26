import styled from "styled-components";

const BasicColor1 = "#394050";
const BasicColor2 = "#1556F7";
const BasicColor3 = "##FFFFFF";
const BasicColor4 = "#666666";
const BasicColor5 = "#D9D9D9";

export const MainContainer = styled.div`
  margin: 5rem auto;
  width: 27rem;
`;

export const parentTitle = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 150%;
  color: ${BasicColor1};
`;

export const titleContainer = styled.div`
  margin: 1rem auto;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: ${BasicColor3};
  height: 22rem;
  border-top: 15px solid ${BasicColor2};
  border-radius: 10px 10px 0px 0px;
`;

export const titleContent = styled.div`
  margin-left: 5%;
`;

export const content = styled.div`
  display: flex;
  padding-top: 6%;
  padding-bottom: 1%;
`;

export const contentTitle = styled.h4`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 100%;
  color: ${BasicColor4};
`;
export const contentPoint = styled.h4`
  color: red;
`;

export const titleInput = styled.input`
  ::placeholder {
    color: ${BasicColor5};
  }
  padding-left: 1%;
  background-color: ${BasicColor3};
  border-top-width: 0;
  border-right-width: 0;
  border-left-width: 0;
  border-bottom-width: 1;
  border-color: ${BasicColor5};
  width: 94%;
  outline: none;
  height: 30px;
`;

export const selectContainer = styled.div`
  display: flex;
  color: ${BasicColor5};
`;
export const dateSelect = styled.input`
  padding-left: 2%;
  background: ${BasicColor3};
  border: 1px solid ${BasicColor5};
  border-radius: 5px;
  width: 43%;
  height: 30px;
`;
export const dateSign = styled.pre`
  margin-top: 8px;
`;
