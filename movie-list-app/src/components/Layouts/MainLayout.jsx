import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="px-4 py-10">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
