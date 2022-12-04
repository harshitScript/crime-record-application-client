import { useGetConfigurationQuery } from "../store/configurationApi";
import { envUtility } from "../utils/helper";

const useTheme = () => {
  const { data } = useGetConfigurationQuery();
  const { theme: envTheme } = envUtility();

  const theme = data?.data?.theme || envTheme;

  return { theme };
};
export default useTheme;
