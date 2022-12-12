import useAuth from "../../customHooks/useAuth";
import BorderedButton from "../Buttons/BorderedButton";

const LogoutButton = ({ hard = false, ...props }) => {
  const { removeAuthDataAndReload, removeAuthData } = useAuth();
  return (
    <BorderedButton
      {...props}
      onClick={hard ? removeAuthDataAndReload : removeAuthData}
    >
      Logout
    </BorderedButton>
  );
};
export default LogoutButton;
