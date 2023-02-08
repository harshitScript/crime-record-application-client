import styled from "styled-components/macro";
export const TitleLg = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  color: ${({ secondaryColor }) => secondaryColor};
  margin: unset;
  word-break: break-word;
`;
export const TitleMd = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  color: ${({ secondaryColor }) => secondaryColor};
  margin: unset;
  word-break: break-word;
`;
export const TitleSm = styled.h1`
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  color: ${({ secondaryColor }) => secondaryColor};
  margin: unset;
  word-break: break-word;
`;

export const LinkText = styled.p`
  color: #1e90ff;
  font-size: 0.8rem;
  font-weight: bold;
  margin: unset;
  cursor: pointer;
`;
