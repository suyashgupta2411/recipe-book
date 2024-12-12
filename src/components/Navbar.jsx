import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="p-4 bg-gray-800 text-white flex justify-between">
    <Link to="/" className="font-bold text-lg">
      Recipe Book
    </Link>
  </nav>
);

export default Navbar;
