import { forwardRef, useEffect, useState } from "react";
import styled from "styled-components/macro";
import { HiChevronDoubleDown, HiChevronDoubleUp } from "react-icons/hi";
import InvisibleBackdrop from "../InvisibleBackdrop";
import { GrContactInfo } from "react-icons/gr";
import useTheme from "../../customHooks/useTheme";
const DropDown = forwardRef(
  ({ options = [], readOnly, defaultValue = "", onChange = () => {} }, ref) => {
    const [value, setValue] = useState(defaultValue);
    const [openDD, setOpenDD] = useState(false);

    const { theme } = useTheme();

    useEffect(() => {
      if (openDD) {
        document.querySelector("#dd").scrollIntoView();
      }
    }, [openDD]);

    useEffect(() => {
      if (value) {
        onChange(value);
      }
    }, [value]);

    return (
      <Container>
        <InputOuter {...theme} readOnly={readOnly}>
          <Input
            type="text"
            name="multiSelect"
            placeholder="Select values"
            value={value}
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
            <DropDownOuter id="dd">
              {options.map(({ code, label, description }) => (
                <Option
                  key={code}
                  active={value === code}
                  onClick={setValue.bind(null, code)}
                  {...theme}
                >
                  <span>{label}</span> <Info {...theme} title={description} />
                </Option>
              ))}
            </DropDownOuter>
          </>
        ) : (
          <></>
        )}
      </Container>
    );
  }
);

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
  background: #fff;
  opacity: ${({ readOnly }) => (readOnly ? 0.8 : 1)};
  cursor: ${({ readOnly }) => (readOnly ? "not-allowed" : "pointer")};
`;

const Input = styled.input`
  border: unset;
  outline: unset;
  font-size: 0.7rem;
  background: #fff;
`;

const DropDownOuter = styled.section`
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

export default DropDown;
