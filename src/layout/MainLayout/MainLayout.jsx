import { Outlet } from "react-router-dom";
import NavBar from "../../components/HomePage/NavBar/NavBar";

const MainLayout = () => {
  return (
    <div className="border-2 border-red-600  mt-8 max-w-[1500px] h-80 mx-auto">
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
