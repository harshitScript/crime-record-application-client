import {
  SubTitleMd,
  SubTitleSm,
} from "../../../../../../../components/Typography/SubTitle";
import { TitleMd } from "../../../../../../../components/Typography/Title";
import ImageSection from "./ImageSection/ImageSection";
import ListCrimes from "./ListCrimes/ListCrimes";
import { OuterCard } from "./RecordCard.style";

const RecordCard = ({ record }) => {
  return (
    <OuterCard>
      <section className="first-section">
        <ImageSection recordId={record?._id} imageData={record?.imageData} />
      </section>
      <section className="second-section">
        <TitleMd>{record?.name}</TitleMd>
        <hr />
        <SubTitleSm>
          {record?.mobile},{record?.address}
        </SubTitleSm>
        <SubTitleMd>
          {record?.city}, {record?.state}
        </SubTitleMd>
        <hr />
        <ListCrimes crimesList={record?.crimes} />
      </section>
    </OuterCard>
  );
};
export default RecordCard;
