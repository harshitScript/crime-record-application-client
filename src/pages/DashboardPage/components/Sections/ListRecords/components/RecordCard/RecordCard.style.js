import styled from "styled-components/macro";
import { Card } from "../../../../../../../components/Cards/Card";
import { LinkText } from "../../../../../../../components/Typography/Title";

export const OuterCard = styled(Card)`
  width: 100%;
  min-height: 200px;
  margin: 0.5rem 0;
  box-sizing: border-box;

  .first-section {
    width: 100%;
    padding: 0 0.5rem;
    box-sizing: border-box;
    min-height: 150px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .second-section {
    width: 100%;
    padding: 0.5rem;
    box-sizing: border-box;
  }
`;

export const CenterLink = styled(LinkText)`
  text-align: center;
`;
