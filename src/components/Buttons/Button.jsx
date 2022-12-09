import styled from "styled-components/macro";
import useTheme from "../../customHooks/useTheme";
import { MdWbTwighlight } from "react-icons/md";
const Button = ({ children, loader = false, ...props }) => {
  const { theme } = useTheme();

  return (
    <StyledButton {...theme} {...props}>
      {loader ? <MdWbTwighlight className="blink" /> : children}
    </StyledButton>
  );
};
const StyledButton = styled.button`
  min-width: 100px;
  min-height: 40px;
  background: ${({ secondaryColor }) => secondaryColor};
  font-weight: bold;
  color: #fff;
  border-radius: 0.5rem;
  font-size: 1rem;
  width: ${({ wd }) => wd};
  height: ${({ hg }) => hg};
  opacity: ${({ disabled }) => (disabled ? "0.7" : "1")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;
export default Button;
