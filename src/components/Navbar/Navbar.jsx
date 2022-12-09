import useTenantConfiguration from "../../customHooks/useTenantConfiguration";
import useTheme from "../../customHooks/useTheme";
import { NavBarBlock } from "./Navbar.style";

const Navbar = ({ ...props }) => {
  const { tenantLogo } = useTenantConfiguration();
  const { theme } = useTheme();
  return (
    <NavBarBlock {...props} {...theme}>
      <img
        src={tenantLogo}
        title={"Harshit's Organization"}
        alt="harshit's org"
      />
    </NavBarBlock>
  );
};
export default Navbar;
