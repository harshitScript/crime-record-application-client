import { GreenLamp, RedLamp, YellowLamp } from "./Lamp";
import styled from "styled-components/macro";

const LampsGroup = ({ status = "close" }) => {
  console.log("The status => ", status);
  return (
    <Outer>
      <GreenLamp active={status === "done"} />
      <YellowLamp active={status === "pending"} />
      <RedLamp active={status === "close"} />
    </Outer>
  );
};

const Outer = styled.span`
  display: flex;
  gap: 0.5rem;
`;

export default LampsGroup;
