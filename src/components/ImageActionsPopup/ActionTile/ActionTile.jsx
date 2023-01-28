import useTheme from "../../../customHooks/useTheme";
import { ActionTileOuter } from "./ActionTile.styled";

const ActionTile = ({ LogoComp = {}, action = "", onClick = () => {} }) => {
  const { theme } = useTheme();
  return (
    <ActionTileOuter {...theme} onClick={onClick}>
      <LogoComp size={"1.5rem"} />
      <span className="action">{action}</span>
    </ActionTileOuter>
  );
};
export default ActionTile;
