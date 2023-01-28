import styled from "styled-components/macro";

export const ImageOuter = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  padding: 0.5rem;
  outline: 1px solid ${({ secondaryColor }) => secondaryColor};
  margin: 0.5rem auto;
  cursor: pointer;

  & > img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;
