import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    
    <nav className="fixed top-0 left-0 w-full bg-black text-white shadow-sm py-4 px-6 flex items-center justify-between z-50">
      <Link to="/" className="flex items-center">
        <img src="./logo1.jpg" alt="Company Logo" className="h-8 w-auto" />
      </Link>

      <div className="flex items-center space-x-6">
        <Link to="/about" className="   text-xl ">
          About Us
        </Link>
        <Link to="/waitlist" className=" text-xl px-16">
          Waitlist
        </Link>
        <Link to="/cart" className="  text-xl  ">
          Cart
        </Link>
    
      </div>
      
    </nav>
  );
};

export default Navbar;
