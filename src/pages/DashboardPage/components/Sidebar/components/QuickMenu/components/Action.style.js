import styled from "styled-components/macro";

export const Outer = styled.div`
  width: 100%;
  height: 40px;
  border-radius: 0.5rem;
  box-shadow: 0 0 4px grey;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.3rem;
  background: ${({ ternaryColor }) => ternaryColor};
  box-sizing: border-box;
  transition: all 300ms;
  cursor: pointer;
  margin: 1rem 0;

  &:hover {
    transform: scale(1.1);
  }

  .rounded-letter {
    width: 35px;
    height: 35px;
    color: #fff;
    font-weight: bold;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: ${({ primaryColor }) => primaryColor};
  }

  .title {
    font-size: 1rem;
    font-weight: bold;
  }
`;
