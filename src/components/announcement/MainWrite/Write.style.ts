import styled from "styled-components";

const BasicColor1 = "#394050";
const BasicColor2 = "#1556F7";
const BasicColor3 = "#F9FAFB";
const BasicColor4 = "#666666";
const BasicColor5 = "#D9D9D9";

export const mainContainer = styled.div`
  margin: auto;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: ${BasicColor3};
  padding: 2rem;
`;

export const mainTitle = styled.h4`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;

  color: ${BasicColor4};
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
  color: #666;
  padding-left: 1%;
  background-color: ${BasicColor3};
  border: none;
  border-bottom: 1px solid ${BasicColor5};
  width: 100%;
  outline: none;
  height: 30px;
`;

export const mainTextarea = styled.textarea`
  ::placeholder {
    color: ${BasicColor5};
  }
  background-color: transparent;
  border: none;
  width: 100%;
  height: 20rem;
  resize: none;
  font-size: 0.75rem;
`;

export const MarkdownViewWrap = styled.div`
  padding: 1%;
  background-color: ${BasicColor3};
  border: none;
  border-top: 1px solid ${BasicColor5};
  color: #666;
  width: 98%;
  height: 20rem;
  resize: none;
  font-size: 0.75rem;
`;

export const PreviewMarkdown = styled.p`
  border: none;
  width: 100%;
  height: 20rem;
  font-size: 0.75rem;
  overflow: auto;
`;

export const subButton = styled.button`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  width: 5rem;
  height: 2.5rem;
  background: ${BasicColor2};
  border: none;
  color: white;
  border-radius: 5px;
  margin-top: 1rem;
  text-overflow: auto;
`;

export const EditTextareaForm = styled.div`
  width: 100%;
  border: 1px solid ${BasicColor5};
`;

interface IIsEdit {
  isEdit: boolean;
}

export const StatusButton = styled.button`
  margin: 0.5rem 0rem 0.5rem 0.5rem;
  padding: 0.2rem 0.5rem;
  border: none;
  border-radius: 5px;
  color: ${(props: IIsEdit) => (props.isEdit ? `#ffffff` : BasicColor5)};
  background-color: ${(props: IIsEdit) =>
    props.isEdit ? BasicColor4 : `transparent`};
`;
