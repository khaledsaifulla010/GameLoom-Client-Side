import { Outlet } from "react-router-dom";
import NavBar from "../../components/HomePage/NavBar/NavBar";

const MainLayout = () => {
  return (
    <div className="  mt-8 max-w-[1500px] mx-auto">
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
