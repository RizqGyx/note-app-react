import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { AiOutlineGooglePlus } from "react-icons/ai";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";

function Footer() {
    const sosMed = [
        <FaFacebookF />,
        <FaTwitter />,
        <AiOutlineGooglePlus />,
        <BiLogoInstagramAlt />,
        <FaLinkedinIn />,
        <BsGithub />
    ]

    return (
        <div>
            <footer className="bg-neutral-100 text-center font-bold mt-10 text-neutral-600 dark:bg-[#1F222A] dark:text-neutral-200 lg:text-left border-b-[2px] dark:border-[#ffffff0d]">
                <div className="flex flex-col lg:flex-row items-center justify-center w-10/12 mx-auto py-4 lg:justify-between px-5">
                    <div className="hidden lg:block">
                        <span>Get connected with me on social networks:</span>
                    </div>
                    <div className="flex items-center text-2xl lg:mt-0">
                        {sosMed.map((icon, index) => (
                            <a key={index} href='#' className="mr-6 text-neutral-600 dark:text-neutral-200">
                                {icon}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="bg-neutral-200 p-4 text-center dark:bg-[#1F222A] border-t-2 rounded-full border-neutral-200 dark:border-neutral-500">
                    <span>© 2023 Copyright - Muhammad Rizki</span>
                </div>
            </footer>
        </div>
    )
}

export default Footer