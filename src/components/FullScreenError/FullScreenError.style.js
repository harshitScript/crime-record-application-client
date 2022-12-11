import styled from "styled-components/macro";

export const ServerDownOuter = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
  padding: 1rem;
  box-sizing: border-box;
  & img {
    width: 150px;
  }
  & main {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }
  .error-block {
    width: 100%;
    padding: 0.5rem;
    box-shadow: 0 0 0.2rem ${({ primaryColor }) => primaryColor};
    border-radius: 0.5rem;
    text-align: center;
    font-weight: bold;
    color: ${({ primaryColor }) => primaryColor};
  }

  .retry {
    color: ${({ secondaryColor }) => secondaryColor};
    cursor: pointer;
  }
`;

export const FullScreenErrorOuter = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
  padding: 1rem;
  box-sizing: border-box;
  & img {
    width: 300px;
  }
  & main {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }
  .error-block {
    width: 100%;
    padding: 0.5rem;
    box-shadow: 0 0 0.2rem ${({ primaryColor }) => primaryColor};
    border-radius: 0.5rem;
    text-align: center;
    font-weight: bold;
    color: ${({ primaryColor }) => primaryColor};
  }
  .retry {
    color: ${({ secondaryColor }) => secondaryColor};
    cursor: pointer;
  }
  .button-group {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;
