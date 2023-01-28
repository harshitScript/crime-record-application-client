import useTheme from "../../../../../../../../../customHooks/useTheme";
import { TabSection } from "../SideBarNavigation.style";

const Tab = ({ title = "", onClick = () => {}, active = false }) => {
  const { theme } = useTheme();
  return (
    <TabSection {...theme} onClick={onClick} active={active}>
      {title}
    </TabSection>
  );
};

export default Tab;
