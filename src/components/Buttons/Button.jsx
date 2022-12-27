import styled from "styled-components/macro";
import useTheme from "../../customHooks/useTheme";
import { MdWbTwighlight } from "react-icons/md";
const Button = ({
  children,
  loader = false,
  fullWidth = false,
  disabled = false,
  ...props
}) => {
  const { theme } = useTheme();

  return (
    <StyledButton {...theme} fullWidth={fullWidth} {...props}>
      {children} {loader ? <MdWbTwighlight className="blink" /> : <></>}
    </StyledButton>
  );
};
const StyledButton = styled.button`
  min-width: ${({ fullWidth }) => (fullWidth ? "100%" : "100px")};
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
  &:hover {
    background: transparent;
    color: ${({ secondaryColor }) => secondaryColor};
    border: 1px solid ${({ secondaryColor }) => secondaryColor};
  }
`;
export default Button;
