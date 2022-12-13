import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import styled from "styled-components/macro";
import useTheme from "../../customHooks/useTheme";
import ActivePage from "../ActivePage/ActivePage";

const Layout1 = ({ children }) => {
  const { backgroundImage } = useTheme();
  return (
    <>
      <ActivePage />
      <Navbar />
      <Main backgroundImage={backgroundImage}>{children}</Main>
      <Footer />
    </>
  );
};

const Main = styled.main`
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: cover;
  background-attachment: fixed;
`;

export default Layout1;
