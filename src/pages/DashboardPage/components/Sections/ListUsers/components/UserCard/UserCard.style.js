import styled from "styled-components/macro";
import { BsFillTrashFill } from "react-icons/bs";
import { RiLoader4Fill } from "react-icons/ri";
import { Card } from "../../../../../../../components/Cards/Card";

export const CardOuter = styled(Card)`
  width: 45%;
  min-height: 200px;
  padding: unset;
`;

export const Image = styled.img`
  width: 100%;
  height: 130px;
  object-fit: cover;
`;

export const Main = styled.main`
  padding: 0.5rem;
  position: relative;
`;

export const Permissions = styled.pre`
  padding: 0.2rem;
  background: lightgrey;
  text-align: center;
  margin-top: -187px;
  margin-left: -8px;
  display: inline;
  position: absolute;
  font-size: 0.6rem;
  border-radius: 0 0 0.3rem 0;
`;

export const RelativeOuter = styled.section`
  position: relative;
`;

export const RecordDDHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: ${({ active }) => (active ? "pointer" : "not-allowed")};
  opacity: ${({ active }) => (active ? 1 : 0.7)};
  & > span {
    font-size: 0.7rem;
    font-weight: bold;
  }

  & > svg {
    font-size: 0.7rem;
  }
`;

export const RecordDDBody = styled.div`
  min-height: 40px;
  position: absolute;
  width: 100%;
  background: #fff;
  z-index: 1;
  border-radius: 0.3rem;
  max-height: 100px;
  overflow: auto;
  box-shadow: 0 0 0.4rem grey;
  margin-top: 0.5rem;
  padding: 0.5rem 0;
`;

export const Option = styled.div`
  width: 100%;
  min-height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  box-sizing: border-box;
  font-size: 0.7rem;
  color: ${({ secondaryColor }) => secondaryColor};
  &:hover {
    background: ${({ primaryColor }) => primaryColor};
  }
  & > span {
    font-weight: bold;
  }
  & > code {
    font-size: 0.5rem;
  }
  border-bottom: 1px solid grey;
`;

export const TrashIcon = styled(BsFillTrashFill)`
  color: ${({ primaryColor }) => primaryColor};
  cursor: pointer;
  position: absolute;
  top: -130px;
  right: 5px;
`;

export const TrashLoader = styled(RiLoader4Fill)`
  color: ${({ primaryColor }) => primaryColor};
  cursor: pointer;
  position: absolute;
  top: -130px;
  right: 5px;
`;
