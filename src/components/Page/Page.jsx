import styled from "styled-components/macro";

const Page = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export const Wrapper = styled.div`
  padding: 0.5rem;
  box-sizing: border-box;
  min-height: 100vh;
  position: relative;
`;

export default Page;
