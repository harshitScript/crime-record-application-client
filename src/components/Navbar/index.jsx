import { NavBarBlock } from "./index.style";
import logo from "../../assets/Harshit Org.png";

const Navbar = ({ ...props }) => {
  return (
    <NavBarBlock {...props}>
      <img src={logo} title={"Harshit's Organization"} alt="harshit's org" />
      {/*  <p>{process.env.REACT_APP_TITLE}</p> */}
    </NavBarBlock>
  );
};
export default Navbar;
