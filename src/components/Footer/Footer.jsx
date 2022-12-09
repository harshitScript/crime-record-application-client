import { Outer } from "./Footer.style";
import pack from "../../../package.json";

const Footer = () => {
  return <Outer>{`v${pack?.version} | Harshit's Organization`}</Outer>;
};
export default Footer;
