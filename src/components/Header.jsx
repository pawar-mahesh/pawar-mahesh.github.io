import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-black flex text-gray-200 justify-between p-4 px-16 sticky top-0">
      <Link to="/">
        <div className="hover:text-gray-50 cursor-pointer">LOGO</div>
      </Link>
      <ul className="flex gap-x-16">
        <Link to="/">
          <li className="hover:text-gray-50 cursor-pointer ">Home</li>
        </Link>
        <Link to="/projects">
          <li className="hover:text-gray-50 cursor-pointer">Projects</li>
        </Link>
        <Link to="/experience">
          <li className="hover:text-gray-50 cursor-pointer">Experience</li>
        </Link>
        <Link to="/education">
          <li className="hover:text-gray-50 cursor-pointer">Education</li>
        </Link>
        <Link to="/contact-me">
          <li className="hover:text-gray-50 cursor-pointer">Contact Me</li>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
