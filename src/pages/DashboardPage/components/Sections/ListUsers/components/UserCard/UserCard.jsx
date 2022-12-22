import { useState } from "react";
import { SubTitleSm } from "../../../../../../../components/Typography/SubTitle";
import { TitleSm } from "../../../../../../../components/Typography/Title";
import {
  CardOuter,
  CriminalDDBody,
  CriminalDDHeader,
  Image,
  Main,
  Option,
  Permissions,
  RelativeOuter,
  TrashIcon,
} from "./UserCard.style";
import { HiChevronDoubleDown, HiChevronDoubleUp } from "react-icons/hi";
import InvisibleBackdrop from "../../../../../../../components/InvisibleBackdrop";

const UserCard = ({ user }) => {
  return (
    <CardOuter id={user?.id}>
      <Image src={user?.imageData?.url} alt={user?.id} />
      <DetailsSection user={user} />
    </CardOuter>
  );
};

const DetailsSection = ({ user }) => {
  const deleteClickHandler = () => {};

  return (
    <Main>
      {user.permissions.includes("root") ? (
        <></>
      ) : (
        <TrashIcon onClick={deleteClickHandler} />
      )}
      <TitleSm>{user?.name}</TitleSm>
      <SubTitleSm>{user?.email}</SubTitleSm>
      <SubTitleSm>{user?.mobile}</SubTitleSm>
      <Permissions>{user?.permissions?.join(", ")}</Permissions>
      <CriminalsListDropDown rawCriminalsList={user?.criminalsList} />
    </Main>
  );
};

const CriminalsListDropDown = ({ rawCriminalsList }) => {
  const [show, setShow] = useState(false);
  const toggle = () => setShow((current) => !current);
  const recordsFound = !!rawCriminalsList?.length;
  return (
    <RelativeOuter>
      <CriminalDDHeader
        onClick={recordsFound ? toggle : () => {}}
        active={recordsFound}
      >
        <span>Records</span>
        {show ? <HiChevronDoubleUp /> : <HiChevronDoubleDown />}
      </CriminalDDHeader>
      {show ? (
        <>
          <InvisibleBackdrop onClick={toggle} />
          <CriminalDDBody>
            <Option title={"Click to copy record's uid."}>
              <span>Criminal Name</span>
              <code>random-uid</code>
            </Option>
          </CriminalDDBody>
        </>
      ) : (
        <></>
      )}
    </RelativeOuter>
  );
};

export default UserCard;
