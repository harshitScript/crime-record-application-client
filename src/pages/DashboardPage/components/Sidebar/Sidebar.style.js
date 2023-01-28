import styled from "styled-components/macro";

export const Outer = styled.section`
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: auto;
  width: 55%;
  background: ${({ primaryColor }) => primaryColor};
  z-index: 4;
  box-sizing: border-box;
  box-shadow: 0 0 4px grey;
  transition: all 300ms;
  ${({ open }) => (open ? "" : "transform: translateX(-100%)")};
`;

export const PaddingBox = styled.div`
  padding: 1rem;
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 3;
`;

export const Toggle = styled.div`
  width: 25px;
  height: 50px;
  background: ${({ primaryColor }) => primaryColor};
  position: fixed;
  z-index: 2;
  top: 40%;
  left: 0;
  border-radius: 0 0.5rem 0.5rem 0;
  display: grid;
  opacity: 0.7;
  cursor: pointer;
  place-items: center;

  & > svg {
    font-weight: bold;
    color: #fff;
  }

  &:hover {
    opacity: 1;
  }
`;
