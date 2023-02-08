import { useState } from "react";
import useTheme from "../../../../../../customHooks/useTheme";
import { Outer, PaddingBox } from "../../Sidebar.style";
import ProfileSection from "./components/ProfileSection/ProfileSection";
import QuickMenu from "./components/QuickMenu/QuickMenu";
import SideBarNavigation from "./components/SideBarNavigation/SideBarNavigation";

const MainSection = ({ sideBar = false }) => {
  const { theme } = useTheme();
  const [activeSection, setActiveSection] = useState("profile");
  return (
    <Outer {...theme} open={sideBar}>
      <SideBarNavigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <PaddingBox>
        {activeSection === "profile" ? <ProfileSection /> : <></>}
        {activeSection === "actions" ? (
          <>
            <QuickMenu />
          </>
        ) : (
          <></>
        )}
      </PaddingBox>
    </Outer>
  );
};

export default MainSection;
