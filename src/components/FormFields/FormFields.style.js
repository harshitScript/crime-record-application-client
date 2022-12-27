import styled from "styled-components/macro";
import { BiImageAdd } from "react-icons/bi";

export const TextField = styled.input`
  width: 100%;
  height: 40px;
  outline: unset;
  box-sizing: border-box;
  border: unset;
  border-radius: 0.5rem;
  border-bottom: 0.3rem solid ${({ secondaryColor }) => secondaryColor};
  font-size: 0.7rem;
  padding: 0 0.5rem;
  color: ${({ primaryColor }) => primaryColor};
`;
export const TextArea = styled.textarea`
  width: 100%;
  outline: unset;
  box-sizing: border-box;
  border: unset;
  border-radius: 0.5rem;
  border-bottom: 0.3rem solid ${({ secondaryColor }) => secondaryColor};
  font-size: 0.7rem;
  padding: 0 0.5rem;
  color: ${({ primaryColor }) => primaryColor};
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const MockFileOuter = styled.div`
  width: 100%;
  height: 140px;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px dashed ${({ secondaryColor }) => secondaryColor};
  opacity: ${({ readOnly }) => (readOnly ? 0.8 : 1)};
  cursor: ${({ readOnly }) => (readOnly ? "not-allowed" : "pointer")};
`;

export const ImageUploadIcon = styled(BiImageAdd)`
  width: 50px;
  height: 50px;
  color: ${({ secondaryColor }) => secondaryColor};
`;

export const UploadDisplaySectionOuter = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  .title {
    font-size: 0.8rem;
    font-weight: bold;
    margin: 0.5rem 0;
    word-break: break-all;
    text-align: center;
  }
  .sub-title {
    font-size: 0.6rem;
    margin: unset;
  }
`;

export const ImageOuter = styled.div`
  height: 80%;
  width: 50%;
  padding: 0.5rem;
  box-sizing: border-box;
  & > img {
    box-sizing: border-box;
    width: clamp(100px, 100%, 150px);
    height: clamp(100px, 100%, 150px);
    object-fit: contain;
    border-radius: 0.5rem;
  }
`;

export const DetailsOuter = styled.div`
  padding: 0.5rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50%;
`;

export const Select = styled.select`
  width: 100%;
  height: 40px;
  outline: unset;
  box-sizing: border-box;
  border: unset;
  border-radius: 0.5rem;
  border-bottom: 0.3rem solid ${({ secondaryColor }) => secondaryColor};
  font-size: 0.7rem;
  padding: 0 0.5rem;
  color: ${({ primaryColor }) => primaryColor};
  & > option {
    box-sizing: border-box;
  }
`;
