import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="bg-white">
      <p className="p-3 max-w-[1400px] w-full mx-auto font-semibold md:text-2xl">
        <Link to="/">AES Blockchain Explorer</Link>
      </p>
    </nav>
  );
}

export default Header;
