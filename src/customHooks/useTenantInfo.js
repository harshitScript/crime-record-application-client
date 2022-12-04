import raidLogo from "../assets/logos/raid-logo.png";
import { useGetConfigurationQuery } from "../store/configurationApi";
import { envUtility } from "../utils/helper";
const useTenantConfiguration = () => {
  const { tenant } = envUtility();

  const { data, isLoading, isFetching, isUninitialized } =
    useGetConfigurationQuery();

  const appViews = data?.data?.config?.views;

  const configurationLoading = isLoading || isFetching || isUninitialized;

  const logos = {
    harshitScript: raidLogo,
  };

  const tenantLogo = logos?.[tenant];

  return { tenantLogo, configurationLoading, appViews };
};

export default useTenantConfiguration;
