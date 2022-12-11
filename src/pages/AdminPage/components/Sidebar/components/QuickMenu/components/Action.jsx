import useTheme from "../../../../../../../customHooks/useTheme";
import { Outer } from "./Action.style";

const Action = ({ config = { title: "", helper: "" }, onClick = () => {} }) => {
  const { theme } = useTheme();
  return (
    <Outer title={config.helper} {...theme} onClick={onClick}>
      <span className="rounded-letter">
        {config?.title?.slice(0, 1)?.toUpperCase()}
      </span>
      <span className="title">{config?.title}</span>
    </Outer>
  );
};

export default Action;
