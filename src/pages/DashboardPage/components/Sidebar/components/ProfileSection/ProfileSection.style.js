import styled from "styled-components/macro";

export const Outer = styled.section`
  width: 100%;
  min-height: 150px;
`;

export const ImageOuter = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  padding: 0.5rem;
  outline: 1px solid ${({ secondaryColor }) => secondaryColor};
  margin: 0.5rem auto;

  & > img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ secondaryColor }) => secondaryColor};
  text-align: center;
  margin-bottom: unset;
  margin-top: 0.5rem;
`;
export const SubTitle = styled.p`
  font-size: 0.6rem;
  font-weight: 400;
  color: ${({ secondaryColor }) => secondaryColor};
  margin: unset;
  display: flex;
  gap: 0.3rem;
  justify-content: center;
  padding: 0.3px;
  border: 1px solid #000;

  & > svg {
    cursor: pointer;
  }
`;
