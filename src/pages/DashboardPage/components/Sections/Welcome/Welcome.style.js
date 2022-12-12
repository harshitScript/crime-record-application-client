import styled from "styled-components/macro";

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  color: ${({ secondaryColor }) => secondaryColor};
  margin-bottom: 0.5rem;
`;

export const SubTitle = styled.p`
  margin: unset;
  font-size: 1rem;
  text-align: center;
  color: ${({ secondaryColor }) => secondaryColor};
  font-weight: 400;
`;
