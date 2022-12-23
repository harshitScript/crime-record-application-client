import styled from "styled-components/macro";
import { Card } from "../../../../../../../components/Cards/Card";

export const HorizontalScrollForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  overflow-x: auto;
  min-height: 250px;
  background: blue;
  padding: 0.5rem;
  box-sizing: border-box;
`;

export const FormSectionCard = styled(Card)`
  min-height: 200px;
  min-width: 100%;
`;
