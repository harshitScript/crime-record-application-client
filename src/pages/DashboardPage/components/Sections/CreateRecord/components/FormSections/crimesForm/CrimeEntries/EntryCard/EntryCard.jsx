import { Card } from "../../../../../../../../../../components/Cards/Card";
import {
  EntryCardOuter,
  FlexedHeader,
  MiddleSubTitle,
  SmallSubTitle,
  SmallTitle,
  TrashIcon,
} from "../../CrimesForm.style";

const EntryCard = ({
  place = {},
  description = "",
  dateAndTime = "",
  removeEntry = () => {},
}) => {
  return (
    <EntryCardOuter>
      <FlexedHeader>
        <SmallTitle>{dateAndTime}</SmallTitle>
        <TrashIcon onClick={removeEntry} />
      </FlexedHeader>
      <Card.Body>
        <SmallSubTitle>{description}</SmallSubTitle>
        <MiddleSubTitle>at {`${place?.city}, ${place?.state}`}</MiddleSubTitle>
      </Card.Body>
    </EntryCardOuter>
  );
};

export default EntryCard;
