import styled from "styled-components/macro";

export const Outer = styled.section`
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: auto;
  width: 50%;
  background: ${({ primaryColor }) => primaryColor};
  z-index: 2;
  padding: 1rem;
  box-sizing: border-box;
  box-shadow: 0 0 4px grey;
  border-top: 1rem solid ${({ ternaryColor }) => ternaryColor};
  transition: all 300ms;
  ${({ open }) => (open ? "" : "transform: translateX(-100%)")};
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export const Toggle = styled.div`
  width: 25px;
  height: 50px;
  background: ${({ primaryColor }) => primaryColor};
  position: fixed;
  z-index: 2;
  top: 30%;
  left: 0;
  border-radius: 0 0.5rem 0.5rem 0;
  display: grid;
  cursor: pointer;
  place-items: center;

  & > svg {
    font-weight: bold;
    color: #fff;
  }
`;
