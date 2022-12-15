import { forwardRef, useEffect, useState } from "react";
import styled from "styled-components/macro";
import { HiChevronDoubleDown, HiChevronDoubleUp } from "react-icons/hi";
import InvisibleBackdrop from "../InvisibleBackdrop";
import { GrContactInfo } from "react-icons/gr";
import useTheme from "../../customHooks/useTheme";
const MultiSelectDD = forwardRef(({ options = [], readOnly }, ref) => {
  const [selectedValues, setSelectedValues] = useState([]);
  const [openDD, setOpenDD] = useState(false);

  const { theme } = useTheme();

  const toggleSelectedValues = (code) => {
    if (selectedValues.includes(code)) {
      //? Remove value.
      setSelectedValues((current) =>
        current.filter((currentCode) => currentCode !== code)
      );
    } else {
      //? Add value.
      setSelectedValues((current) => [...current, code]);
    }
  };

  useEffect(() => {
    if (openDD) {
      document.querySelector("#dd").scrollIntoView();
    }
  }, [openDD]);

  return (
    <Container>
      <InputOuter {...theme} readOnly={readOnly}>
        <Input
          type="text"
          name="multiSelect"
          placeholder="Select values"
          value={selectedValues.join(", ")}
          onClick={readOnly ? () => {} : setOpenDD.bind(null, true)}
          readOnly
          ref={ref}
        />
        {openDD ? (
          <HiChevronDoubleUp onClick={setOpenDD.bind(null, false)} />
        ) : (
          <HiChevronDoubleDown
            onClick={readOnly ? () => {} : setOpenDD.bind(null, true)}
          />
        )}
      </InputOuter>
      {openDD ? (
        <>
          <InvisibleBackdrop onClick={setOpenDD.bind(null, false)} />
          <DropDown id="dd">
            {options.map(({ code, label, description }) => (
              <Option
                key={code}
                active={selectedValues.includes(code)}
                onClick={toggleSelectedValues.bind(null, code)}
                {...theme}
              >
                <span>{label}</span> <Info {...theme} title={description} />
              </Option>
            ))}
          </DropDown>
        </>
      ) : (
        <></>
      )}
    </Container>
  );
});

const Container = styled.section`
  position: relative;
`;

const InputOuter = styled.div`
  padding: 0 0.5rem;
  height: 40px;
  box-sizing: border-box;
  width: 100%;
  border-bottom: 0.3rem solid ${({ secondaryColor }) => secondaryColor};
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  opacity: ${({ readOnly }) => (readOnly ? 0.8 : 1)};
  cursor: ${({ readOnly }) => (readOnly ? "not-allowed" : "pointer")};
`;

const Input = styled.input`
  border: unset;
  outline: unset;
  font-size: 0.7rem;
`;

const DropDown = styled.section`
  width: 100%;
  height: 60px;
  overflow: auto;
  margin-top: 0.3rem;
  position: absolute;
  box-sizing: border-box;
  box-shadow: 0 0 0.5rem grey;
  z-index: 1;
`;

const Option = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  box-sizing: border-box;
  font-size: 0.7rem;
  background: ${({ active, primaryColor }) => (active ? primaryColor : "#fff")};
  color: ${({ secondaryColor }) => secondaryColor};
  &:hover {
    background: ${({ primaryColor }) => primaryColor};
  }
`;

const Info = styled(GrContactInfo)`
  color: ${({ secondaryColor }) => secondaryColor};
`;

export default MultiSelectDD;
