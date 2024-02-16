import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <>
      <nav className="w-full h-[60px] bg-gray-900 p-3 text-white flex items-center justify-between">
        <NavLink to="/">
          <h1 className="font-extrabold">CodeOpen</h1>
        </NavLink>
        <ul className="flex gap-2 ">
          <li>
            <NavLink to={"/compile"}>
              <Button variant="outline">Compiler</Button>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
