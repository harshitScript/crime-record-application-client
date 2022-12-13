import { useLocation } from "react-router-dom";
import useTheme from "../../customHooks/useTheme";
import { Outer } from "./ActivePage.style";

const ActivePage = () => {
  const { theme } = useTheme();
  const location = useLocation();
  const sectionCode = location.pathname.split("/")?.[1];
  let displayTextArray = sectionCode?.toUpperCase()?.split("");

  return (
    <Outer {...theme}>
      {displayTextArray.map((char, index) => (
        <span key={`${char}-${index}`}>{char}</span>
      ))}
    </Outer>
  );
};
export default ActivePage;
