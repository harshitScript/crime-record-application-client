import { useState } from "react";
import { SubTitleSm } from "../../../../../../../components/Typography/SubTitle";
import { TitleSm } from "../../../../../../../components/Typography/Title";
import {
  CardOuter,
  Image,
  Main,
  Option,
  Permissions,
  RecordDDBody,
  RecordDDHeader,
  RelativeOuter,
} from "./UserCard.style";
import { HiChevronDoubleDown, HiChevronDoubleUp } from "react-icons/hi";
import InvisibleBackdrop from "../../../../../../../components/InvisibleBackdrop";
import DeleteIcon from "../DeleteIcon/DeleteIcon";
import useRecord from "../../../../../../../customHooks/useRecord";
import { MdWbTwighlight } from "react-icons/md";
import { copyToClipBoard } from "../../../../../../../utils/helper";
import { toast } from "react-hot-toast";

const UserCard = ({ user }) => {
  return (
    <CardOuter id={user?.id}>
      <Image src={user?.imageData?.url} alt={user?.id} />
      <DetailsSection user={user} />
    </CardOuter>
  );
};

const DetailsSection = ({ user }) => {
  return (
    <Main>
      <DeleteIcon user={user} />
      <TitleSm>{user?.name}</TitleSm>
      <SubTitleSm>{user?.email}</SubTitleSm>
      <SubTitleSm>{user?.mobile}</SubTitleSm>
      <Permissions>{user?.permissions?.join(", ")}</Permissions>
      <RecordsDropDown records={user?.records} />
    </Main>
  );
};

const RecordsDropDown = ({ records }) => {
  const [show, setShow] = useState(false);
  const toggle = () => setShow((current) => !current);
  const recordsFound = !!records?.length;
  return (
    <RelativeOuter>
      <RecordDDHeader
        onClick={recordsFound ? toggle : () => {}}
        active={recordsFound}
      >
        <span>Records</span>
        {show ? <HiChevronDoubleUp /> : <HiChevronDoubleDown />}
      </RecordDDHeader>
      {show ? (
        <>
          <InvisibleBackdrop onClick={toggle} />
          <RecordDDBody>
            {records.map((recordId) => (
              <RecordOption recordId={recordId} key={recordId} />
            ))}
          </RecordDDBody>
        </>
      ) : (
        <></>
      )}
    </RelativeOuter>
  );
};

const RecordOption = ({ recordId }) => {
  const { recordData, recordDataLoading } = useRecord({ recordId });
  const copySuccess = () => toast.success("Record UID copied.");
  const copyFailure = () => toast.error("Failed to copy Record UID. ");
  return (
    <Option
      title={"Click to copy record's uid."}
      onClick={copyToClipBoard.bind(null, {
        text: recordId,
        success: copySuccess,
        failure: copyFailure,
      })}
    >
      {recordDataLoading ? (
        <MdWbTwighlight className="blink" />
      ) : (
        <>
          <span>{recordData?.name}</span>
          <code>{recordData?._id}</code>
        </>
      )}
    </Option>
  );
};

export default UserCard;
