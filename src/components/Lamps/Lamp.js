import styled from "styled-components/macro";
export const GreenLamp = styled.span`
  width:0.8rem;
  height:0.8rem;
  border-radius: 50%;
  opacity: 0.5;
  background: green;
  ${({ active }) => {
    return active
      ? "animation: blink-g 1000ms linear infinite; opacity : 1; box-shadow: 0 0 0.5rem grey;"
      : "";
  }}

  @keyframes blink-g {
    from {
      background: green;
    }
    to {
      background: lightgreen;
    }
  }
`;
export const YellowLamp = styled.span`
  width:0.8rem;
  height:0.8rem;
  border-radius: 50%;
  opacity: 0.5;
  background: #ffff00;
  ${({ active }) => {
    return active
      ? "animation: blink-y 1000ms linear infinite; opacity : 1; box-shadow: 0 0 0.5rem grey;"
      : "";
  }}

  @keyframes blink-y {
    from {
      background: #ffff00;
    }
    to {
      background: gold;
    }
  }
`;
export const RedLamp = styled.span`
  width:0.8rem;
  height:0.8rem;
  border-radius: 50%;
  opacity: 0.5;
  background: red;
  ${({ active }) => {
    return active
      ? "animation: blink-r 1000ms linear infinite; opacity : 1; box-shadow: 0 0 0.5rem grey;"
      : "";
  }}

  @keyframes blink-r {
    from {
      background: red;
    }
    to {
      background: #ffacac;
    }
  }
`;
