import { FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../assets";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#0B1120] to-[#0B1120] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Ragib Hasan</h3>
        <p className="text-lg font-normal text-gray-400">
          CS Student
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Hey this is Ragib Welcome my Portfolio 
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+8801318063272</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">admin@ragib.flicksall.top</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a href="https://www.youtube.com/c/itsragib" target="_blank">
            <span className="bannerIcon">
              <FaYoutube />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/ragibhasan2"
            target="_blank"
          >
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
          <a href="https://www.facebook.com/ragibhasan2.0/" target="_blank">
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
