import { HiShoppingCart } from "react-icons/hi2";
import techEagleLogo from "../assets/TechEagle logo.svg";

const Navbar = () => {
  return (
    <div className="shadow sm p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={techEagleLogo} alt="Logo" className="cursor-pointer h-8" />
        </div>
        <div className="flex items-center gap-4">
          <button className="text-white">Login</button>

          <button className="relative">
            <HiShoppingCart />

            <span className="text-red-500 absolute top-0 right-2"></span>
          </button>

          <button>My Order</button>

          <div className="flex items-center gap-4 hidden xl:flex lg:flex md:flex sm:hidden">
            <button>Add Product</button>

            <button>Dashboard</button>

            <button>ALL Orders</button>
          </div>

          <button className="text-red-500" onClick={"handleLogout"}>
            Logout
          </button>

          <div className="block xl:hidden lg:hidden md:hidden sm:block">
            {/* Your responsive menu here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
