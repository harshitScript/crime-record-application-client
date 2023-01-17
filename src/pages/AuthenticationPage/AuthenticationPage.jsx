import { useParams } from "react-router-dom";
import Page from "../../components/Page/Page";
import LoginForm from "./Components/LoginForm/LoginForm";
import ViewRedirection from "./Components/ViewRedirection/ViewRedirection";

const AuthenticationPage = () => {
  const { type } = useParams();

  return <Page>{type === "view" ? <ViewRedirection /> : <LoginForm />}</Page>;
};
export default AuthenticationPage;
