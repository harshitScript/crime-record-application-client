import useTheme from "../../customHooks/useTheme";
import BorderedButton from "../Buttons/BorderedButton";
import LinkButton from "../Buttons/LinkButton";
import { FullScreenErrorOuter } from "./FullScreenError.style";

const FullScreenError = ({
  refetch,
  title = "",
  image = "",
  back = () => {},
}) => {
  const { theme } = useTheme();
  return (
    <FullScreenErrorOuter {...theme}>
      <main>
        {title ? <section className="error-block">{title}</section> : <></>}
        {image ? <img src={image} title={title} alt="harshit's org" /> : <></>}
        <div className="button-group">
          {refetch ? (
            <BorderedButton onClick={refetch}>Retry</BorderedButton>
          ) : (
            <></>
          )}
          {back ? <LinkButton onClick={back}>{"< Go Back"}</LinkButton> : <></>}
        </div>
      </main>
    </FullScreenErrorOuter>
  );
};
export default FullScreenError;
