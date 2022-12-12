import { useLocation } from "react-router-dom";
import useTheme from "../../../../customHooks/useTheme";
import { Outer } from "./ActiveSection.style";

const ActiveSection = () => {
  const { theme } = useTheme();
  const location = useLocation();
  const sectionCode = location.pathname.split("/")?.[2];
  let displayTextArray = "WELCOME";
  if (sectionCode) {
    displayTextArray = sectionCode?.toUpperCase()?.split("");
  }

  return (
    <Outer {...theme}>
      {displayTextArray.map((char) => (
        <span key={char}>{char}</span>
      ))}
    </Outer>
  );
};
export default ActiveSection;
