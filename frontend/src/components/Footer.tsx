import { Link } from "react-router-dom";

const Footer = () => {
  return (

    <footer className="bg-black text-white py-12 px-6 md:px-12">
        <hr></hr>
      <div className="max-w-6xl mx-auto">
        <Link to="/" className="flex items-center">
         <h1 className="text-3xl mt-4 mb-8">ECLYPSE ↗</h1>
        </Link>
        
         
       
        <div className="flex flex-wrap gap-6 mb-12 text-gray-400">
          <a href="/" className="hover:text-white transition-colors">
            Home
          </a>
          <a href="/about" className="hover:text-white transition-colors">
            About
          </a>
          <a href="/buy" className="hover:text-white transition-colors">
            Buy
          </a>
          <a href="/customers" className="hover:text-white transition-colors">
            Our Customers
          </a>
          <a href="/contacts" className="hover:text-white transition-colors">
            Contacts
          </a>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-lg font-semibold mb-2">CONTACT</h2>
            <p className="text-gray-400">+91123-456-7890</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">EMAIL</h2>
            <a
              href="mailto:eclypse@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              eclipse@gmail.com
            </a>
          </div>
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;
