import styled from "styled-components";
import { Ipayload } from "../Ipaylod";

export const clubNameSelect = styled.select`
  padding-left: 1%;
  width: 95%;
  height: 38px;
  border-color: ${(props: Ipayload) =>
    props.isOpen && props.clubName == "" ? "red" : "#d9d9d9"};
  border-radius: 5px;
  background: #ffffff;
`;
