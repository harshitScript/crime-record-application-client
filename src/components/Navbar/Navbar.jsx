import { Link } from "react-router-dom";
import useTenantConfiguration from "../../customHooks/useTenantConfiguration";
import useTheme from "../../customHooks/useTheme";
import { NavBarBlock } from "./Navbar.style";

const Navbar = ({ ...props }) => {
  const { tenantLogo } = useTenantConfiguration();
  const { theme } = useTheme();

  return (
    <NavBarBlock {...props} {...theme}>
      <Link to={"/"}>
        <img
          className="logo"
          src={tenantLogo}
          title={"Harshit's Organization"}
          alt="harshit's org"
        />
      </Link>
    </NavBarBlock>
  );
};
export default Navbar;
