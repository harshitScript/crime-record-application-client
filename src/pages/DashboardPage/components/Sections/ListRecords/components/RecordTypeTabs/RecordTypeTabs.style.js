import styled from "styled-components/macro";
import { Card } from "../../../../../../../components/Cards/Card";

export const TabOuter = styled.section`
  height: 40px;
  width: 50%;
  display: grid;
  place-items: center;
  font-size: 1rem;
  font-weight: bold;
  background: ${({ active, ternaryColor }) => (active ? ternaryColor : "#FFF")};
  transition: all 500ms;
  cursor: pointer;
`;

export const RecordTypeOuter = styled(Card)`
  display: flex;
  padding: unset;
`;
