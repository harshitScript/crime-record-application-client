import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Layout1 = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
export default Layout1;
