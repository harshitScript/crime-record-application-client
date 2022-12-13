import styled from "styled-components/macro";
import useTheme from "../../../customHooks/useTheme";
import { Link } from "react-router-dom";
import React from "react";

const ViewCard = ({ title, description, code, imageURL }) => {
  const { theme } = useTheme();
  return (
    <Outer
      primaryColor={theme?.primaryColor}
      className="flip"
      to={`/authentication/${code}`}
      image={imageURL}
    >
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
  color: ${({ primaryColor }) => primaryColor} !important;

  .main {
    background-image: url(${({ image }) => image});
    background-size: cover;
    border-radius: 0.5rem 0.5rem 0 0;
    flex: 3;
    padding: 0.5rem;
    box-sizing: border-box;

    &:hover {
      opacity: 0.6;
    }

    & > span {
      font-size: 1rem;
      font-weight: 600;
      width: 100%;
      color: #fff;
      text-shadow: 1rem 0.5rem 0.5rem grey;
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
    justify-content: flex-start;
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: uppercase;
  }
`;

export default ViewCard;
