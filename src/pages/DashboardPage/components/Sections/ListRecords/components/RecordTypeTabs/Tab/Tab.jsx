import useTheme from "../../../../../../../../customHooks/useTheme";
import { TabOuter } from "../RecordTypeTabs.style";

const Tab = ({ title = "", onClick = () => {}, active = false }) => {
  const { theme } = useTheme();
  return (
    <TabOuter onClick={onClick} active={active} {...theme}>
      {title}
    </TabOuter>
  );
};
export default Tab;
