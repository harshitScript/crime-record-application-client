import styled from "styled-components/macro";
import { Card } from "../../../../../../../components/Cards/Card";

export const HorizontalScroll = styled.section`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  justify-content: space-between;
  width: 100%;
  overflow-x: auto;
  box-sizing: border-box;
  scroll-behavior: smooth;
  & > form {
    min-width: 100%;
  }
`;

export const FormSectionCard = styled(Card)`
  min-height: 200px;
  min-width: 100%;
  position: relative;
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.5rem 0;
`;
