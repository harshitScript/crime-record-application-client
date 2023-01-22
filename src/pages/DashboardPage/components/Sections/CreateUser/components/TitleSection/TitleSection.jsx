import styled from "styled-components/macro";
//import LampsGroup from "../../../../../../../components/Lamps/LampsGroup";
import { TitleSm } from "../../../../../../../components/Typography/Title";
import useTheme from "../../../../../../../customHooks/useTheme";
const TitleSection = ({ title = "" /* status = "pending" */ }) => {
  const { theme } = useTheme();
  return (
    <Outer>
      <SectionTitle {...theme}>{title}</SectionTitle>{/*  */}
      {/* <LampsGroup status={status} /> */}
    </Outer>
  );
};

const Outer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.3rem 0;
  box-sizing: border-box;
  border-bottom: 1px solid grey;
`;

const SectionTitle = styled(TitleSm)`
  text-align: left;
  color: ${({ primaryColor }) => primaryColor};
`;
export default TitleSection;
