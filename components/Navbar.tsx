import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full px-10 py-3 text-orange-500 shadow-md bg-white sticky top-0 right-0 z-10">
      <div className="font-bold">
        <Image
          src="/Logos.png"
          alt="Nihon Craft Box Logo"
          width={150}
          height={100}
        />
      </div>
      <ul className="flex items-center mb-0 gap-4 text-black font-montserrat">
        <li className="hover:text-orange-500 cursor-pointer">Home</li>
        <li className="hover:text-orange-500 cursor-pointer">Shop</li>
        <li className="hover:text-orange-500 cursor-pointer">Past Boxes</li>
        <li className="hover:text-orange-500 cursor-pointer">Blogs</li>
        <li className="hover:text-orange-500 cursor-pointer">About Us</li>
        <li className="hover:text-orange-500 cursor-pointer">
          <FontAwesomeIcon icon={faSearch} className="w-4" />
        </li>
        <li className="hover:text-orange-500 cursor-pointer">
          <FontAwesomeIcon icon={faUser} className="w-4" />
        </li>
        <li className="hover:text-orange-500 cursor-pointer">
          <FontAwesomeIcon icon={faCartShopping} className="w-4" />
        </li>
        <li>
          <button className="py-1 px-2 bg-orange-400 text-black text-sm">
            SUBSCRIBE
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
