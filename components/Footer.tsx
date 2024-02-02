import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="flex justify-center flex-col w-full bg-orange-400 cursor-pointer">
      <table className="flex justify-center px-20 py-10 gap-5">
        <tr className="flex">
          <td className="flex flex-col gap-3 px-20">
            <Image
              src="/Logos.png"
              alt="Nihon Craft Box Logo"
              width={200}
              height={150}
            />
            <div>Unlock Joyful Creativity with Nihon Craft Box!</div>
            <div className="flex gap-2">
              Follow Us: <FontAwesomeIcon icon={faFacebookF} width={10} />
              <FontAwesomeIcon icon={faInstagram} width={15} />
            </div>
          </td>
          <td className="px-20">
            <h4>Quick Links</h4>
            <ul className="p-0">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Returns</li>
              <li>Contact Us</li>
              <li>Order Tracking</li>
            </ul>
          </td>
          <td className="px-20">
            <h4>Subscription</h4>
            <ul className="p-0">
              <li>This Month Box</li>
              <li>Gift A Box</li>
              <li>Past Boxes</li>
              <li>My Vouchers</li>
            </ul>
          </td>
          <td className="px-20">
            <h4>Informations</h4>
            <ul className="p-0">
              <li>Careers</li>
              <li>Mobile Apps</li>
              <li>Loyalty</li>
              <li>Press Collective</li>
              <li>Our Affiliates</li>
            </ul>
          </td>
        </tr>
      </table>
      {/* <div className="flex justify-around">
        <p>Nihon Craft Box | All right reserved 2024.</p>
        <Image
          src="/cards.png"
          alt="credit cards icons"
          width={100}
          height={10}
        />
      </div> */}
    </div>
  );
};

export default Footer;
