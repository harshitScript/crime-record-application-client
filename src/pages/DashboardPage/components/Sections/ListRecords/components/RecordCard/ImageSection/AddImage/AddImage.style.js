import styled from "styled-components/macro";

export const AddImageOuter = styled.section`
  width: 50%;
  height: 150px;
  border: 1px dashed grey;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: grey;
  cursor: pointer;
  & > svg {
    font-size: 2rem;
  }
`;
