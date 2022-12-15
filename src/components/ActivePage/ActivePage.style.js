import styled from "styled-components/macro";

export const Outer = styled.div`
  height: 100vh;
  width: 40px;
  background: ${({ primaryColor }) => primaryColor};
  position: fixed;
  top: 0px;
  right: 0px;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ secondaryColor }) => secondaryColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 0.5rem grey;
  text-align: center;
  justify-content: center;
  gap: 0.5rem;
  transform: translateX(50%);
  transition: all 300ms;
  opacity: 0.7;
  z-index: 2;
  &:hover {
    transform: translateX(0%);
    opacity: 1;
  }
`;
