import useTenantConfiguration from "../../customHooks/useTenantConfiguration";
import useTheme from "../../customHooks/useTheme";
import { ServerDownOuter } from "./FullScreenError.style";

const ServerDownPage = ({ refetch }) => {
  const { tenantLogo } = useTenantConfiguration();
  const { theme } = useTheme();
  return (
    <ServerDownOuter {...theme}>
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
    </ServerDownOuter>
  );
};
export default ServerDownPage;
