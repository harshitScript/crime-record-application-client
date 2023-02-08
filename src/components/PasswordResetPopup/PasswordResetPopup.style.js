import styled from "styled-components/macro";

export const RequestSentOuter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;

  .title {
    font-size: 1rem;
    font-weight: bold;
  }
  .image {
    width: 150px;
    height: 150px;
  }
  .helper {
    color: grey;
    text-align: center;
  }
`;
