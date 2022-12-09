import styled from "styled-components/macro";

export const Input = styled.input`
  width: 100%;
  height: 40px;
  outline: unset;
  box-sizing: border-box;
  border: unset;
  border-radius: 0.5rem;
  border-bottom: 0.3rem solid ${({ secondaryColor }) => secondaryColor};
  font-size: 0.7rem;
  padding: 0 0.5rem;
  color: ${({ primaryColor }) => primaryColor};
`;
