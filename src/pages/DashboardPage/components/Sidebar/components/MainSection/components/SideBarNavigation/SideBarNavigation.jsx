import useTheme from "../../../../../../../../customHooks/useTheme";
import Tab from "./components/Tab";
import { NavOuter } from "./SideBarNavigation.style";

const SideBarNavigation = ({
  setActiveSection = () => {},
  activeSection = "profile",
}) => {
  console.log("The active section => ", activeSection);
  const { theme } = useTheme();
  return (
    <NavOuter {...theme}>
      <Tab
        title="Profile"
        onClick={setActiveSection.bind(null, "profile")}
        {...theme}
        active={activeSection === "profile"}
      />
      <Tab
        onClick={setActiveSection.bind(null, "actions")}
        title="Actions"
        {...theme}
        active={activeSection === "actions"}
      />
    </NavOuter>
  );
};
export default SideBarNavigation;
