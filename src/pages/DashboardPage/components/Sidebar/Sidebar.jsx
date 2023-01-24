import { useState } from "react";
import useTheme from "../../../../customHooks/useTheme";
import { Backdrop, Toggle } from "./Sidebar.style";
import { FaArrowRight } from "react-icons/fa";
import MainSection from "./components/MainSection/MainSection";

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
      <MainSection sideBar={sideBar} />
    </>
  );
};

export default Sidebar;
