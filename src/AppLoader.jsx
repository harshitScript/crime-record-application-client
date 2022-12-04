import ServerDownPage from "./components/FullScreenError/ServerDownPage";
import FullScreenLoader from "./components/FullScreenLoader/FullScreenLoader";
import { useGetConfigurationQuery } from "./store/configurationApi";

const AppLoader = ({ children }) => {
  const { isLoading, isFetching, isUninitialized, error, refetch } =
    useGetConfigurationQuery();
  const loading = isLoading || isFetching || isUninitialized;

  if (loading) {
    return <FullScreenLoader />;
  }
  if (error) {
    return <ServerDownPage refetch={refetch} />;
  }
  return children;
};
export default AppLoader;
