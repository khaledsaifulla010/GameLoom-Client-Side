import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <h1>Heloo Game</h1>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
