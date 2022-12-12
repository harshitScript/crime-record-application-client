import { useState } from "react";
import useTheme from "../../../../customHooks/useTheme";
import ProfileSection from "./components/ProfileSection/ProfileSection";
import QuickMenu from "./components/QuickMenu/QuickMenu";
import { Backdrop, Outer, Toggle } from "./Sidebar.style";
import { FaArrowRight } from "react-icons/fa";
import LogoutButton from "../../../../components/LogoutButton/LogoutButton";

const Sidebar = () => {
  const { theme } = useTheme();
  const [sideBar, setSideBar] = useState(true);
  return (
    <>
      {sideBar ? (
        <></>
      ) : (
        <Toggle {...theme} onClick={setSideBar.bind(null, true)}>
          <FaArrowRight />
        </Toggle>
      )}
      {sideBar ? <Backdrop onClick={setSideBar.bind(null, false)} /> : <></>}
      <Outer {...theme} open={sideBar}>
        <ProfileSection />
        <QuickMenu />
        <LogoutButton hard={true} fullWidth={true} />
      </Outer>
    </>
  );
};

export default Sidebar;
