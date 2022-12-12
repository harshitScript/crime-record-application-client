import useUser from "../../../../../../customHooks/useUser";
import Action from "./components/Action";
import { Outer } from "./QuickMenu.style";

const QuickMenu = () => {
  const { actions } = useUser();

  return (
    <Outer>
      {actions.map(({ title, onClick, description }) => {
        return (
          <Action
            key={`${description}-${title}`}
            config={{ title, onClick, description }}
          />
        );
      })}
    </Outer>
  );
};

export default QuickMenu;
