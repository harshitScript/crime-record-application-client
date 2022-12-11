import styled from "styled-components/macro";

export const Card = styled.section`
  padding: 0.5rem;
  box-sizing: border-box;
  box-shadow: 0 0 0.5rem grey;
  border-radius: 0.5rem;
  background: ${({ primaryColor }) => primaryColor};
`;

Card.Header = styled.div`
  border-bottom: 1px solid ${({ primaryColor }) => primaryColor};
  width: 100%;
  padding: 0.5rem 0;
  box-sizing: border-box;
`;
Card.Header.Title = styled.div`
  color: ${({ secondaryColor }) => secondaryColor};
  font-weight: bold;
  font-size: 1.2rem;
`;
Card.Header.Description = styled.small`
  color: ${({ secondaryColor }) => secondaryColor};
`;
Card.Body = styled.div``;
Card.Footer = styled.div`
  padding: 0.5rem 0;
`;
