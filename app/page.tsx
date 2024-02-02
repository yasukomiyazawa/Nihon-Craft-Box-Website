import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import { Footer, Navbar } from "@/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-50 font-montserrat">
      <div className="flex justify-center bg-orange-400 w-full text-sm py-2 text-black">
        SUBSCRIBERS GET UP TO 15% OFF SELECTED ITEMS. LEARN MORE
      </div>
      <Navbar />
      <div className="bg-hero bg-cover bg-bottom h-[800px] w-full flex flex-col items-center text-white pt-40">
        <h1 className="font-playfair">Nihon Craft Box Subscriptions</h1>
        <h2 className="font-light font-playfair">
          Different Themed Stationary Boxes Monthly
        </h2>
        <div className="flex justify-center gap-4 pt-20">
          <div className="bg-white text-black py-2 px-3 hover:bg-orange-700 cursor-pointer">
            SUBSCRIBE NOW
          </div>
          <div className="bg-white text-black py-2 px-3 hover:bg-orange-700 cursor-pointer">
            REGISTER ACCOUNT
          </div>
        </div>
      </div>
      <h2 className="text-4xl pt-24 pb-12 font-light">
        Why <span className="font-bold">Nihon Craft Box?</span>
      </h2>
      <table className="flex justify-center pb-10">
        <tbody>
          <tr>
            <td className="px-20 py-10">
              <h3 className="font-bold text-black">
                Premium Japanese Stationery
              </h3>
              <p>Handpicked assortment of top-quality Japanese stationery.</p>
            </td>
            <td rowSpan={3}>
              <Image src="/sample.jpeg" alt="sample" width={400} height={600} />
            </td>
            <td className="px-20 py-10">
              <h3 className="font-bold text-black">
                Unique Themes Every Month
              </h3>
              <p>Fresh and exciting themes with each monthly box.</p>
            </td>
          </tr>
          <tr>
            <td className="px-20 py-10">
              <h3 className="font-bold text-black">
                Collaborations with Japanese Brands
              </h3>
              <p>
                Limited-edition items crafted through exclusive partnerships.
              </p>
            </td>
            <td className="px-20 py-10">
              <h3 className="font-bold text-black">
                Surprise Elements in Every Box
              </h3>
              <p>Thrill of discovering surprise additions in every shipment.</p>
            </td>
          </tr>
          <tr>
            <td className="px-20 py-10">
              <h3 className="font-bold text-black">
                Thoughtfully Designed Packaging
              </h3>
              <p>Stationery treasures in beautifully designed packaging.</p>
            </td>
            <td className="px-20 py-10">
              <h3 className="font-bold text-black">
                Community of Stationery Enthusiasts
              </h3>
              <p>Community of fellow stationery lovers.</p>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex gap-20 items-center pt-32 pb-20">
        <div>
          <Image
            src="/mockup.jpeg"
            alt="mystery box mockup"
            width={600}
            height={400}
          />
        </div>
        <div>
          <h3 className="text-3xl font-light pb-8">
            Nihon Craft Box's <span className="font-bold">Member Benefits</span>
          </h3>
          <ul className="flex flex-col gap-4">
            <li className="flex gap-3">
              <FontAwesomeIcon icon={faCheckCircle} width={20} />
              100% Satisfaction Guarantee
            </li>
            <li className="flex gap-3">
              <FontAwesomeIcon icon={faCheckCircle} width={20} />
              Stay Up-To-Date Through Newsletter
            </li>
            <li className="flex gap-3">
              <FontAwesomeIcon icon={faCheckCircle} width={20} />
              Member Pricing Discounts
            </li>
            <li className="flex gap-3">
              <FontAwesomeIcon icon={faCheckCircle} width={20} />
              Award-Winning Customer Support
            </li>
            <li className="flex gap-3">
              <FontAwesomeIcon icon={faCheckCircle} width={20} />
              Early Access to Limited-Edition Releases
            </li>
            <li className="flex gap-3">
              <FontAwesomeIcon icon={faCheckCircle} width={20} />
              Join Our Vibrant Community
            </li>
            <li className="mt-4">
              <button className="py-2 px-3 bg-orange-400 text-black text-md ">
                JOIN US NOW
              </button>
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </main>
  );
}
