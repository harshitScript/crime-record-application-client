import FullScreenError from "../components/FullScreenError/FullScreenErrorPage";
import FullScreenLoader from "../components/FullScreenLoader/FullScreenLoader";
import useUser from "../customHooks/useUser";
import retryImage from "../assets/svg/retry.svg";
import { useNavigate } from "react-router-dom";
import useAuth from "../customHooks/useAuth";

const CheckUser = ({ children }) => {
  const navigate = useNavigate();

  const { removeAuthData } = useAuth();

  const { userDataLoading, userDataError, userDataRefetch } = useUser();

  const goBackHandler = () => {
    removeAuthData();
    navigate(`/authentication/user`, { replace: true });
  };

  if (userDataLoading) return <FullScreenLoader />;

  if (userDataError)
    return (
      <FullScreenError
        refetch={userDataRefetch}
        image={retryImage}
        title={"Failed To fetch user details."}
        back={goBackHandler}
      />
    );

  return children;
};
export default CheckUser;
