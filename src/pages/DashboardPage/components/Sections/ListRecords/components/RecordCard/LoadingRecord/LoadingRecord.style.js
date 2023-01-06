import styled from "styled-components/macro";
import { Card } from "../../../../../../../../components/Cards/Card";

export const LoadingOuterCard = styled(Card)`
  width: 100%;
  min-height: 200px;
  margin: 0.5rem 0;
  box-sizing: border-box;

  .first-section {
    width: 100%;
    padding: 0.5rem;
    box-sizing: border-box;
    min-height: 150px;
    display: flex;
    align-items: center;

    & > div {
      width: 50%;
      height: 150px;
      border: 1px solid red;
    }
  }

  .second-section {
    width: 100%;
    padding: 0.5rem;
    box-sizing: border-box;

    & > div {
      height: 10px;
      border: 1px solid red;
      margin-bottom: 0.3rem;
    }
  }
`;
