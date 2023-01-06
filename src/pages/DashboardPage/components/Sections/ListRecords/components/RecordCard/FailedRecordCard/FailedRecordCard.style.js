import styled from "styled-components/macro";
import { Card } from "../../../../../../../../components/Cards/Card";

export const FailedOuterCard = styled(Card)`
  width: 100%;
  min-height: 200px;
  margin: 0.5rem 0;
  box-sizing: border-box;
  display: grid;
  place-items: center;

  & > main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .title {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  .uid {
    padding: 0.3rem;
    border: 1px dashed #000;
    cursor: copy;
    font-size: 0.6rem;
    margin-bottom: 0.5rem;
  }
`;
