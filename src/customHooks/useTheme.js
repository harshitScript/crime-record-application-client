import { useGetConfigurationQuery } from "../store/configurationApi";
import { envUtility } from "../utils/helper";
import backgroundImage from "../assets/Wallpaper/CrimeTapes.png";

const useTheme = () => {
  const { data } = useGetConfigurationQuery();
  const { theme: envTheme } = envUtility();

  const theme = data?.data?.theme || envTheme;

  return { theme, backgroundImage };
};
export default useTheme;
