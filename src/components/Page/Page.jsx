import styled from "styled-components/macro";

const Page = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export const Wrapper = styled.div`
  padding: 1rem;
  box-sizing: border-box;
`;

export default Page;
