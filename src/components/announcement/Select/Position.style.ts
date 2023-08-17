import styled from "styled-components";

export const positionSelect = styled.select`
  padding-left: 1%;
  width: 95%;
  height: 38px;
  border-color: ${(props) => (props.isOpen ? "red" : "#d9d9d9")};
  border-radius: 5px;
  background: #ffffff;
`;
