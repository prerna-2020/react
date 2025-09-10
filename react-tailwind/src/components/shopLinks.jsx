import {
  faBaseball,
  faMicrophone,
  faWindowRestore,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ShopLinks() {
  return (
    <>
      <div className="my-20">
        <ul className="flex justify-center items-center flex-wrap">
          <li className="text-center mx-5 mb-6">
            <a href="#" className="inline-block ">
              <span className="font-medium text-4xl">
                <FontAwesomeIcon icon={faMicrophone} />
              </span>
              <p className="mt-4 underline text-sky-700 text-[14px] font-semibold">
                Choose your Microsoft 36ș
              </p>
            </a>
          </li>
          <li className="text-center mx-5 mb-6">
            <a href="#" className="inline-block ">
              <span className="font-medium text-4xl">
                <FontAwesomeIcon icon={faBaseball} />
              </span>
              <p className="mt-4 underline text-sky-700 text-[14px] font-semibold">
                Shop xbox
              </p>
            </a>
          </li>
          <li className="text-center mx-5 mb-6">
            <a href="#" className="inline-block ">
              <span className="font-medium text-4xl">
                <FontAwesomeIcon icon={faMicrophone} />
              </span>
              <p className="mt-4 underline text-sky-700 text-[14px] font-semibold">
                Get Windows 11
              </p>
            </a>
          </li>
          <li className="text-center mx-5 mb-6">
            <a href="#" className="inline-block ">
              <span className="font-medium text-4xl">
                <FontAwesomeIcon icon={faMicrophone} />
              </span>
              <p className="mt-4 underline text-sky-700 text-[14px] font-semibold">
                Explore surface devices
              </p>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ShopLinks;
