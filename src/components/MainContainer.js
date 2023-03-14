import Footer from "./Footer";
import Navbar from "./Navibar";

export default function MainContainer({ children }) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
}
