import useTenantConfiguration from "../../customHooks/useTenantConfiguration";
import Loader1 from "../Loaders/Loader1";
import { Outer } from "./FullScreenLoader.style";

const FullScreenLoader = () => {
  const { tenantLogo } = useTenantConfiguration();

  return (
    <Outer>
      <main>
        <img
          src={tenantLogo}
          title={"Harshit's Organization"}
          alt="harshit's org"
        />

        <Loader1 />
      </main>
    </Outer>
  );
};
export default FullScreenLoader;
