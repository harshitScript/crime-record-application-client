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

const UserCard = ({ user }) => {
  return (
    <CardOuter id={user?.id}>
      <Image src={user?.imageData?.url} alt={user?.id} />
      <DetailsSection user={user} />
    </CardOuter>
  );
};

const DetailsSection = ({ user }) => {
  console.log("The user => ", user);
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
            <Option title={"Click to copy record's uid."}>
              <span>Criminal Name</span>
              <code>random-uid</code>
            </Option>
          </RecordDDBody>
        </>
      ) : (
        <></>
      )}
    </RelativeOuter>
  );
};

export default UserCard;
