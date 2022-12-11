import styled from "styled-components/macro";
import useTheme from "../../customHooks/useTheme";

const Page = ({ children }) => {
  const { theme } = useTheme();
  return <Wrapper background={theme.ternaryColor}>{children}</Wrapper>;
};

export const Wrapper = styled.div`
  padding: 1rem;
  box-sizing: border-box;
  background: ${({ background }) => background};
  min-height: 100vh;
`;

export default Page;
