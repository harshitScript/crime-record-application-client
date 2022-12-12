import styled from "styled-components/macro";

export const NavBarBlock = styled.div`
  padding: 1rem;
  height: 65px;
  box-sizing: border-box;
  position: relative;
  z-index: 1;
  background: linear-gradient(
    to right,
    ${({ ternaryColor }) => ternaryColor},
    ${({ primaryColor }) => primaryColor}
  );
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  & > img {
    width: 100px;
    object-fit: contain;
  }
  & > p {
    font-size: 1.5rem;
    font-weight: bold;
    margin: unset;
  }
`;
