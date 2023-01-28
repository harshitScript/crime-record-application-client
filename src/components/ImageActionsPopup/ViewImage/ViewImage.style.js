import styled from "styled-components/macro";
import { AiOutlineClose } from "react-icons/ai";

export const ViewImageDisplay = styled.img`
  width: 100%;
  height: auto;
`;

export const ImageViewBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
`;

export const CloseButton = styled(AiOutlineClose)`
  color: grey;
  position: fixed;
  top: 1rem;
  right: 0.5rem;
  font-size: 2rem;
  cursor: pointer;
`;
