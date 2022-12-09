import styled from "styled-components/macro";

export const NavBarBlock = styled.div`
  padding: 1rem;
  box-sizing: border-box;
  background: linear-gradient(
    to right,
    #fff,
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
