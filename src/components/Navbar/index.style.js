import styled from "styled-components/macro";

export const NavBarBlock = styled.div`
  padding: 1rem;
  block-sizing: border-box;
  background: grey;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-shadow: 0 0 0.5rem grey;
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
