import styled from "styled-components/macro";
import { RiImageEditFill } from "react-icons/ri";

export const FullScreenBackdrop = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  background: rgba(0, 0, 0, 0.7);
`;

export const BottomTray = styled.div`
  position: fixed;
  bottom: 0;
  min-height: 100px;
  width: 100%;

  & .sliderContainer {
    min-height: 40px;
    padding: 0 0.5rem;
    display: grid;
    place-items: center;
    & > input {
      width: 100%;
      color: ${({ primaryColor }) => primaryColor};
    }
  }

  & .ddContainer {
    padding: 0 0.5rem;
  }

  & .btn-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 0.5rem;
  }
`;

export const EditIcon = styled(RiImageEditFill)`
  position: absolute;
  right: 0.5rem;
  top: 1rem;
  cursor: pointer;
  font-size: 1.5rem;
`;
