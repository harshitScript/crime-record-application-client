import styled from "styled-components/macro";
import { AiOutlineClose } from "react-icons/ai";
const Backdrop = ({ zIndex = 0, onClick = () => {}, onCancel = () => {} }) => {
  return (
    <StyledBackdrop onClick={onClick} zIndex={zIndex}>
      {onCancel ? <StyledCancel onClick={onCancel} /> : <></>}
    </StyledBackdrop>
  );
};

const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: ${({ zIndex }) => zIndex};
  background: rgba(0, 0, 0, 0.9);
`;

const StyledCancel = styled(AiOutlineClose)`
  position: fixed;
  color: grey;
  font-size: 30px;
  cursor: pointer;
  right: 1rem;
  top: 1rem;
`;

export default Backdrop;
