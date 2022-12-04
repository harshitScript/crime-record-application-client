import useTenantConfiguration from "../../customHooks/useTenantInfo";
import useTheme from "../../customHooks/useTheme";
import { Outer } from "./ServerDownPage.style";

const ServerDownPage = ({ refetch }) => {
  const { tenantLogo } = useTenantConfiguration();
  const { theme } = useTheme();
  return (
    <Outer {...theme}>
      <main>
        <img
          src={tenantLogo}
          title={"Harshit's Organization"}
          alt="harshit's org"
        />
        <section className="error-block">
          We are temporarily Out of Service, please retry after some time or{" "}
          <span className="retry" onClick={refetch}>
            RETRY.
          </span>
        </section>
      </main>
    </Outer>
  );
};
export default ServerDownPage;
