import useUser from "../../../../../../../../customHooks/useUser";
import { Outer } from "../ProfileSection/ProfileSection.style";
import Action from "./components/Action";

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
