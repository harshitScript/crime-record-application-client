import { ServerDownOuter } from "./FullScreenError.style";

const ServerDownPage = ({ refetch }) => {
  return (
    <ServerDownOuter
      primary_color={process.env.PRIMARY_COLOR}
      secondary_color={process.env.SECONDARY_COLOR}
    >
      <main>
        <section className="error-block">
          We are temporarily Out of Service, please retry after some time or{" "}
          <span className="retry" onClick={refetch}>
            RELOAD.
          </span>
        </section>
      </main>
    </ServerDownOuter>
  );
};
export default ServerDownPage;
