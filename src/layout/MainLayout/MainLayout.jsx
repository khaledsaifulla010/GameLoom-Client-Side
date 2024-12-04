import { Outlet } from "react-router-dom";
import NavBar from "../../components/HomePage/NavBar/NavBar";
import Footer from "../../components/HomePage/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="  mt-8 max-w-[1500px] mx-auto">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
