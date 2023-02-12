import styled from "styled-components/macro";
import LinkButton from "../Buttons/LinkButton";
import { Card } from "../Cards/Card";
const CardError = ({ height = "", helperText = "", refetch = () => {} }) => {
  return (
    <CardOuter height={height}>
      {helperText ? <HelperText>{helperText}</HelperText> : <></>}
      <LinkButton onClick={refetch}>Retry</LinkButton>
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

export default CardError;
