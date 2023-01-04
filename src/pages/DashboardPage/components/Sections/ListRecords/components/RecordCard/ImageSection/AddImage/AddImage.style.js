import styled from "styled-components/macro";

export const AddImageOuter = styled.section`
  width: 50%;
  height: 150px;
  border: 1px dashed grey;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: grey;
  cursor: pointer;
  & > svg {
    font-size: 2rem;
  }
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const PreviewImage = styled.img`
  width: 100%;
  height: 150px;
`;
export const PreviewImageBox = styled.div`
  opacity: ${({ loading }) => (loading ? 0.7 : 1)};
`;
