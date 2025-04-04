import { Link } from "react-router-dom";
import logoImage from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 border-b border-[#E4E4E8]">
      <div className="flex gap-12 items-center">
        <Link to="/">
          <img src={logoImage} className="h-[44px]"></img>
        </Link>
        <div className="flex gap-6 font-[600] text-base text-[#474653]">
          <Link to="/about">About</Link>
          <Link to="/features">Features</Link>
          <Link to="/team">Team</Link>
        </div>
      </div>
    </nav>
  );
}
