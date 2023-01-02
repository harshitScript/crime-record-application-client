import styled from "styled-components/macro";

export const CrimesDDHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: ${({ active }) => (active ? "pointer" : "not-allowed")};
  opacity: ${({ active }) => (active ? 1 : 0.7)};
  & > span {
    font-size: 1rem;
    font-weight: bold;
  }

  & > svg {
    font-size: 1rem;
  }
`;

export const CrimesDDBody = styled.div`
  min-height: 40px;
  position: absolute;
  width: 100%;
  background: #fff;
  z-index: 1;
  border-radius: 0.3rem;
  max-height: 100px;
  overflow: auto;
  box-shadow: 0 0 0.4rem grey;
  margin-top: 0.5rem;
`;

export const RelativeOuter = styled.section`
  position: relative;
`;

export const Option = styled.div`
  width: 100%;
  min-height: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0.5rem;
  box-sizing: border-box;
  font-size: 0.7rem;
  background: ${({ active, primaryColor }) => (active ? primaryColor : "")};
  color: ${({ secondaryColor }) => secondaryColor};
  &:hover {
    background: ${({ primaryColor }) => primaryColor};
  }
  & > code {
    font-size: 0.6rem;
  }
`;
