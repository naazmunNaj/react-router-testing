import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <section className="flex justify-between shadow-md px-5 py-7">
        <div>
          <h1 className="text-3xl font-bold">Amazon</h1>
        </div>
        <nav>
          <ul className="flex gap-5">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-purple-200" : ""
              }
            >
              Home
            </NavLink>
            
            <NavLink
              to="/products"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-purple-200" : ""
              }
            >
              Products
            </NavLink>
            
            <NavLink
              to="/dashboard"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-purple-200" : ""
              }
            >
              Dashboard
            </NavLink>
            
          </ul>
        </nav>
      </section>
    </div>
  );
};

export default Header;
