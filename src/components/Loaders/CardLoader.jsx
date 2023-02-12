import styled from "styled-components/macro";
import { Card } from "../Cards/Card";
import Loader1 from "./Loader1";
const CardLoader = ({ height = "", helperText = "" }) => {
  return (
    <CardOuter height={height}>
      <Loader1 />
      {helperText ? <HelperText>{helperText}</HelperText> : <></>}
    </CardOuter>
  );
};

const CardOuter = styled(Card)`
  width: 100%;
  min-height: ${({ height }) => (height ? height : "100px")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HelperText = styled.p`
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: grey;
`;

export default CardLoader;
