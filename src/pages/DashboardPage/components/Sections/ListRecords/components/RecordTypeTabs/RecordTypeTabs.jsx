import useUser from "../../../../../../../customHooks/useUser";
import { RecordTypeOuter } from "./RecordTypeTabs.style";
import Tab from "./Tab/Tab";

const RecordTypeTabs = ({ setCreator = () => {}, creator = "all" }) => {
  const { userData } = useUser();

  return (
    <RecordTypeOuter>
      <Tab
        title="Created By me"
        active={creator !== "all"}
        onClick={setCreator.bind(null, userData?._id)}
      />
      <Tab
        title="All"
        active={creator === "all"}
        onClick={setCreator.bind(null, "all")}
      />
    </RecordTypeOuter>
  );
};
export default RecordTypeTabs;
