import { Outer } from "./Action.style";
import useTheme from "../../../../../../../../../customHooks/useTheme";

const Action = ({
  config = { title: "", description: "", onClick: () => {} },
}) => {
  const { theme } = useTheme();
  return (
    <Outer title={config?.description} {...theme} onClick={config?.onClick}>
      <span className="rounded-letter">
        {config?.title?.slice(0, 1)?.toUpperCase()}
      </span>
      <span className="title">{config?.title}</span>
    </Outer>
  );
};

export default Action;
