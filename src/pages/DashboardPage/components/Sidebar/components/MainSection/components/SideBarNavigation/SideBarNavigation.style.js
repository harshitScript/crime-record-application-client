import styled from "styled-components/macro";

export const NavOuter = styled.nav`
  width: 100%;
  position: relative;
  background: ${({ ternaryColor }) => ternaryColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TabSection = styled.section`
  height: 20px;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: bold;
  cursor: pointer;

  background: ${({ active, secondaryColor }) =>
    active ? secondaryColor : "transparent"};

  color: ${({ active, ternaryColor, secondaryColor }) =>
    active ? ternaryColor : secondaryColor};
`;
