import { TabSection } from "../SideBarNavigation.style";

const Tab = ({ title = "", onClick = () => {}, active = false }) => {
  return (
    <TabSection onClick={onClick} active={active}>
      {title}
    </TabSection>
  );
};

export default Tab;
