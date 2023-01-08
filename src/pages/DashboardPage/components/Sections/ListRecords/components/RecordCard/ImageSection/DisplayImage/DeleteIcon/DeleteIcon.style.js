import styled from "styled-components/macro";
import { BsFillTrashFill } from "react-icons/bs";
import { RiLoader4Fill } from "react-icons/ri";

export const TrashIcon = styled(BsFillTrashFill)`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  font-size: 1.2rem;
  cursor: pointer;
`;

export const RelativeOuter = styled.div`
  position: relative;
`;

export const TrashLoader = styled(RiLoader4Fill)`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  font-size: 1.2rem;
  cursor: loader;
`;
