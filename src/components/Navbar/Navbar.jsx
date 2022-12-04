import useTenantConfiguration from "../../customHooks/useTenantInfo";
import { NavBarBlock } from "./Navbar.style";

const Navbar = ({ ...props }) => {
  const { tenantLogo } = useTenantConfiguration();
  return (
    <NavBarBlock {...props}>
      <img
        src={tenantLogo}
        title={"Harshit's Organization"}
        alt="harshit's org"
      />
    </NavBarBlock>
  );
};
export default Navbar;
