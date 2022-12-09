import styled from "styled-components/macro";
import useTheme from "../../../customHooks/useTheme";
import { Link } from "react-router-dom";

const ViewCard = ({ title, description, code }) => {
  const { theme } = useTheme();
  return (
    <Outer {...theme} className="flip" to={`/authentication/${code}`}>
      <main className="main">
        <span>{description}</span>
      </main>
      <div className="footer">{title}</div>
    </Outer>
  );
};

const Outer = styled(Link)`
  width: 100%;
  height: 150px;
  box-shadow: 0 0 0.5rem grey;
  border-radius: 0.5rem;
  margin: 0.5rem 0;
  display: flex;
  flex-direction: column;
  text-decoration: unset;
  color: ${({ secondaryColor }) => secondaryColor} !important;

  .main {
    background: linear-gradient(
      to left,
      ${({ primaryColor }) => primaryColor},
      #fff
    );
    border-radius: 0.5rem 0.5rem 0 0;
    flex: 3;
    padding: 0.5rem;
    box-sizing: border-box;

    & > span {
      font-size: 0.8rem;
      font-weight: 600;
      width: 100%;
    }
  }

  .footer {
    background: #fff;
    flex: 1;
    border-radius: 0 0 0.5rem 0.5rem;
    padding: 0.5rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

export default ViewCard;
