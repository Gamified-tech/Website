import { useLocation } from "react-router-dom";
import { gameify} from "../assets";
import { useState } from "react";

const Header = () => {
  const pathname = useLocation();
  const openNavigation = useState(false);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[5rem] xl:mr-8" href="/">
          <img src={gameify} width={800} height={15} alt="Game-fiy" />
        </a>
      </div>
    </div>
  );
};

export default Header;
