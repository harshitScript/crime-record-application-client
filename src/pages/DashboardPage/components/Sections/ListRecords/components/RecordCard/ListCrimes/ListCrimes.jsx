import { useState } from "react";
import { HiChevronDoubleDown, HiChevronDoubleUp } from "react-icons/hi";
import InvisibleBackdrop from "../../../../../../../../components/InvisibleBackdrop";
import {
  SubTitleLg,
  SubTitleMd,
  SubTitleSm,
} from "../../../../../../../../components/Typography/SubTitle";
import {
  CrimesDDBody,
  CrimesDDHeader,
  Option,
  RelativeOuter,
} from "./ListCrimes.style";

const ListCrimes = ({ crimesList = [] }) => {
  const [show, setShow] = useState(false);
  const toggle = () => setShow((current) => !current);
  const crimesFound = !!crimesList?.length;
  return (
    <RelativeOuter>
      <CrimesDDHeader
        onClick={crimesFound ? toggle : () => {}}
        active={crimesFound}
      >
        <span>Crimes</span>
        {show ? <HiChevronDoubleUp /> : <HiChevronDoubleDown />}
      </CrimesDDHeader>
      {show ? (
        <>
          <InvisibleBackdrop onClick={toggle} />
          <CrimesDDBody>
            {crimesList?.map((crime) => (
              <Crime crime={crime} key={crime?.dateAndTime} />
            ))}
          </CrimesDDBody>
        </>
      ) : (
        <></>
      )}
    </RelativeOuter>
  );
};

const Crime = ({ crime }) => {
  const {
    dateAndTime,
    place: { address, city, state },
    description,
  } = crime;
  const date = dateAndTime.split("T")[0];
  const time = dateAndTime.split("T")[1];
  return (
    <Option key={crime?.id}>
      <SubTitleLg>{`On ${date} at ${time}`}</SubTitleLg>
      <SubTitleSm>{description}</SubTitleSm>

      <SubTitleMd>
        {`${address}, `}
        <b>{city}</b>, <b>{state}</b>
      </SubTitleMd>
    </Option>
  );
};
export default ListCrimes;
