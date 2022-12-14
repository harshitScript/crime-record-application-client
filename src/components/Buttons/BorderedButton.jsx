import styled from "styled-components/macro";
import useTheme from "../../customHooks/useTheme";
import { MdWbTwighlight } from "react-icons/md";
const BorderedButton = ({
  children,
  loader = false,
  fullWidth = false,
  ...props
}) => {
  const { theme } = useTheme();

  return (
    <StyledButton {...theme} fullWidth={fullWidth} {...props}>
      {loader ? <MdWbTwighlight className="blink" /> : children}
    </StyledButton>
  );
};
const StyledButton = styled.button`
  min-width: ${({ fullWidth }) => (fullWidth ? "100%" : "100px")};
  min-height: 40px;
  border: 1px solid ${({ secondaryColor }) => secondaryColor};
  font-weight: bold;
  background: transparent;
  color: ${({ secondaryColor }) => secondaryColor};
  border-radius: 0.5rem;
  font-size: 1rem;
  width: ${({ wd }) => wd};
  height: ${({ hg }) => hg};
  opacity: ${({ disabled }) => (disabled ? "0.7" : "1")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  &:hover {
    background: ${({ secondaryColor }) => secondaryColor};
    color: #fff;
  }
`;
export default BorderedButton;
