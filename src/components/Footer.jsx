import { FaFacebookF } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <section
      id="footer-section"
      className="bg-black w-full lg:px-[10%] text-white  py-[80px] px-5"
    >
      {/* first section  */}
      <div
        id="footer-section-first-div"
        className="grid lg:grid-cols-5 grid-cols-1 gap-y-7"
      >
        <div>
          <p>GALLERY</p>
          <p>VIDEO</p>
        </div>
        <div>
          <p>CAREER</p>
          <p>CSR</p>
          <p>CONTACT</p>
        </div>
        <div>
          <p>CONSTRUCTION STATUS</p>
          <p>NEWS & EVENTS</p>
        </div>
      </div>
      {/* second section  */}
      <p className="lg:my-10 my-0">Privacy Policy</p>
      {/* third section  */}
      <div className="flex lg:flex-row md:flex-row flex-col-reverse justify-between items-center gap-5 my-5 lg:my-0 md:my-0">
        <div className="w-full lg:w-1/2 md:w-1/2  flex lg:flex-row flex-col lg:justify-between md:justify-between">
          <p>© 2025 JCX BD | All Rights Reserved.</p>
          <p>Designed & Developed by Dcastalia</p>
        </div>

        <div className="w-full lg:w-1/2 md:w-1/2 flex lg:justify-end md:justify-end items-center gap-8 ">
          <span>
            <FaFacebookF />
          </span>
          <span>
            <IoLogoLinkedin />
          </span>
          <span>
            <FaYoutube />
          </span>
          <span>
            <FaInstagram />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
