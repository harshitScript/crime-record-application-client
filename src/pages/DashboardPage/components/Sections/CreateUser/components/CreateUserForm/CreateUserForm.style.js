import styled from "styled-components/macro";
import { Box } from "../../../../../../../components/Box/Box";
import { Card } from "../../../../../../../components/Cards/Card";

export const Box50 = styled(Box)`
  width: 50%;
`;

export const FlexBlock = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ButtonGroup = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
