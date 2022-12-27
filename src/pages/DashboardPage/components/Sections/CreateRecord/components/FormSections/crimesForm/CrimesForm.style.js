import styled from "styled-components/macro";
import { Box } from "../../../../../../../../components/Box/Box";
import { Card } from "../../../../../../../../components/Cards/Card";
import { BsFillTrashFill } from "react-icons/bs";
import {
  SubTitleMd,
  SubTitleSm,
} from "../../../../../../../../components/Typography/SubTitle";
import { TitleSm } from "../../../../../../../../components/Typography/Title";

export const FlexBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

export const BorderedBox = styled(Box)`
  border: 1px dashed #000;
  width: 100%;
  min-height: 50px;
  padding: 0.5rem;
`;

export const SmallTitle = styled(TitleSm)`
  text-align: left;
  font-size: 0.8rem;
`;

export const SmallSubTitle = styled(SubTitleSm)`
  text-align: left;
  word-break: break-word;
`;

export const MiddleSubTitle = styled(SubTitleMd)`
  text-align: right;
`;

export const FlexedHeader = styled(Card.Header)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TrashIcon = styled(BsFillTrashFill)`
  cursor: pointer;
`;

export const EntryCardOuter = styled(Card)`
  margin: 0.5rem 0;
`;
