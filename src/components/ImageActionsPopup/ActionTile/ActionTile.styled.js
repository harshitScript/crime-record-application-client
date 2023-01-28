import styled from "styled-components/macro";

export const ActionTileOuter = styled.section`
  width: 100%;
  height: 50px;
  border: 1px solid black;
  margin: 0.5rem 0;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  box-sizing: border-box;
  gap: 1rem;
  cursor: pointer;
  background: linear-gradient(
    to right,
    ${({ primaryColor }) => primaryColor},
    ${({ ternaryColor }) => ternaryColor}
  );
  .action {
    font-size: 1.2rem;
    font-weight: bold;
  }
`;
