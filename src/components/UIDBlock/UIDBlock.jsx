import { UIDOuter } from "./UIDBlock.style";

const UIDBlock = ({ uId, ...props }) => {
  return <UIDOuter {...props}>{uId}</UIDOuter>;
};

export default UIDBlock;
