import styled from "styled-components/macro";

export const Outer = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  background: #fff;
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  place-items: center;
  & img {
    width: 150px;
  }
  & main {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }
`;
