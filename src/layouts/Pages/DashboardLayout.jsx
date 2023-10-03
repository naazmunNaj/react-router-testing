import { Link, Outlet } from "react-router-dom";
const DashboardLayout = () => {
  return (
    <div className="flex gap-72">
      <ul className="bg-lime-100 px-5 py-3 h-screen">
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/dashboard/profile">Profile</Link>
        </li>
        <li>
          <Link to="/dashboard/about">About</Link>
        </li>
      </ul>
      <Outlet></Outlet>
    </div>
  );
};

export default DashboardLayout;
