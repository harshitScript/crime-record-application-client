import styled from "styled-components/macro";
import useTheme from "../../customHooks/useTheme";
const Loader1 = () => {
  const { theme } = useTheme();

  return <StyledLoader {...theme} />;
};

const StyledLoader = styled.span`
  border: 34px solid #fff;
  border-bottom-color: ${({ primaryColor }) => primaryColor};
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loader1;
