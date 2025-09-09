import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faShoppingCart,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <>
      <header className="text-center">
        <nav
          className="p-4 text-sm w-full
         lg:m-auto justify-between items-center font-normal text-[13px] text-gray-900 hidden lg:flex lg:px-15 xl:px-20"
        >
          <div className="flex">
            <img
              src="../src/assets/logo.png"
              alt=""
              className="h-5 w-auto mr-4"
            />

            <ul className="list-none flex items-center">
              <li className="mx-2.5">
                <a href="#" className="hover:border-b-2 border-gray-900 p-1">
                  Microsoft 365
                </a>
              </li>
              <li className="mx-2.5">
                <a href="#" className="hover:border-b-2 border-gray-900 p-1">
                  Teams
                </a>
              </li>
              <li className="mx-2.5">
                <a href="#" className="hover:border-b-2 border-gray-900 p-1">
                  Copilot
                </a>
              </li>
              <li className="mx-2.5">
                <a href="#" className="hover:border-b-2 border-gray-900 p-1">
                  Windows{" "}
                </a>
              </li>
              <li className="mx-2.5">
                <a href="#" className="hover:border-b-2 border-gray-900 p-1">
                  Surface
                </a>
              </li>
              <li className="mx-2.5">
                <a href="#" className="hover:border-b-2 border-gray-900 p-1">
                  Xbox
                </a>
              </li>
              <li className="mx-2.5">
                <a href="#" className="hover:border-b-2 border-gray-900 p-1">
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div className="flex">
            <ul className="list-none  flex">
              <li className="mx-2.5">
                <a href="#">
                  <span className="hover:border-b-2 border-gray-900 p-1">
                    Search
                  </span>
                  <span className="ml-1">
                    <FontAwesomeIcon
                      icon={faMagnifyingGlass}
                      className="text-gray-900 text-sm rotate-90"
                    />
                  </span>
                </a>
              </li>
              <li className="mx-2.5">
                <a href="#">
                  <span className="hover:border-b-2 border-gray-900 p-1">
                    Cart
                  </span>
                  <span>
                    <span className="ml-1">
                      <FontAwesomeIcon
                        icon={faShoppingCart}
                        className="text-gray-900 text-sm"
                      />
                    </span>
                  </span>
                </a>
              </li>
              <li className="mx-2.5">
                <a href="#">
                  <span className="hover:border-b-2 border-gray-900 p-1">
                    Sign in
                  </span>
                  <span>
                    <span className="ml-1">
                      <FontAwesomeIcon
                        icon={faUserPlus}
                        className="text-gray-900 text-sm"
                      />
                    </span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <nav className="lg:hidden flex justify-between items-center font-normal text-[13px] text-gray-900 p-2 h-12 text-sm">
          <ul className="list-none flex">
            <li className="mx-2">
              <a href="#">
                <FontAwesomeIcon
                  icon={faBars}
                  className="text-gray-900 text-lg lg:text-sm"
                />
              </a>
            </li>
            <li className="mx-2">
              <a href="#">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="text-gray-900 text-lg lg:text-sm xl:text-sm rotate-90"
                />
              </a>
            </li>
          </ul>
          <div className="">
            <img
              src="../src/assets/logo.png"
              alt=""
              className="h-5 w-auto mr-4"
            />
          </div>
          <ul className="list-none flex">
            <li className="mx-2">
              <a href="#">
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  className="text-gray-900 text-lg lg:text-sm xl:text-sm"
                />
              </a>
            </li>
            <li className="mx-2">
              <a href="#">
                <FontAwesomeIcon
                  icon={faUserPlus}
                  className="text-gray-900 text-lg lg:text-sm xl:text-sm"
                />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
