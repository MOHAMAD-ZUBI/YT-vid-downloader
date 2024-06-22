import Link from "next/link";
import React from "react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="mt-[100px]">
      <div className="max-w-[1024px] mx-auto flex justify-center items-center">
        <hr className="border-b-2 border-gray-400 opacity-30 w-1/2" />
      </div>

      <div className=" h-[100px] flex flex-col items-center justify-center bg-white">
        <p className="py-2">© 2024 Mohamad Zubi</p>
        <div className=" flex justify-between gap-2 items-center">
          <Link
            href="https://github.com/MOHAMAD-ZUBI"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <BsGithub size={30} />{" "}
          </Link>
          <Link
            href="https://www.linkedin.com/in/mohamad-zubi-725840252/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <BsLinkedin size={30} />{" "}
          </Link>
          <Link
            href="https://www.instagram.com/mhmd.codes"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <BsInstagram size={30} />{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
