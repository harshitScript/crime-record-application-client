import { useLocation } from "react-router-dom";
import useTheme from "../../../../customHooks/useTheme";
import { Outer } from "./ActiveSection.style";

const ActiveSection = () => {
  const { theme } = useTheme();
  const location = useLocation();
  const sectionCode = location.pathname.split("/")?.[2];
  let displayTextArray = ["W", "E", "L", "C", "O", "M", "E"];
  if (sectionCode) {
    displayTextArray = sectionCode?.toUpperCase()?.split("");
  }

  return (
    <Outer {...theme}>
      {displayTextArray.map((char, index) => (
        <span key={`${char}-${index}`}>{char}</span>
      ))}
    </Outer>
  );
};
export default ActiveSection;
