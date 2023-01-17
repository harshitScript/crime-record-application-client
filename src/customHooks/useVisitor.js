import { useLazyTrackVisitorQuery } from "../store/viewApi";

const useVisitor = () => {
  const [triggerTrackVisitorQuery, trackVisitorQuery] =
    useLazyTrackVisitorQuery();

  return {
    triggerTrackVisitorQuery,
    trackVisitorQuery,
  };
};
export default useVisitor;
