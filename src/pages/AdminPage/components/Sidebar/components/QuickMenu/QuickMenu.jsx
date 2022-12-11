import Action from "./components/Action";
import { Outer } from "./QuickMenu.style";

const QuickMenu = () => {
  return (
    <Outer>
      <Action config={{ title: "List Users" }} />
      <Action config={{ title: "Create User" }} />
      <Action config={{ title: "List Records" }} />
      <Action config={{ title: "Create Record" }} />
      <Action config={{ title: "Send Alert" }} />
      <Action config={{ title: "Update Tenant" }} />
    </Outer>
  );
};

export default QuickMenu;
