import { LoadingOuterCard } from "./LoadingRecord.style";

const LoadingRecord = () => {
  return (
    <LoadingOuterCard>
      <section className="first-section">
        <div></div>
        <div></div>
      </section>
      <section className="second-section">
        <div></div>
        <hr />
        <div></div>
        <div></div>
        <hr />
        <div></div>
      </section>
    </LoadingOuterCard>
  );
};

export default LoadingRecord;
