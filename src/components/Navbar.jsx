"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import githubIcon from "../../public/github.svg";
import linkedinIcon from "../../public/linkedin.svg";
import hamburgerIcon from "../../public/hamburger.svg";
import closeIcon from "../../public/close.svg";
import { useState } from "react";

export default function Navbar() {
    let [isOpen, setIsOpen] = useState(false);

    function openNavbar() {
        setIsOpen((prev) => !prev);
    }

    return (
        <>
            <motion.div
                className={`text-white md:hidden top-0 left-2 h-12 fixed flex items-center w-screen `}
                style={{ zIndex: "55" }}
            >
                <span
                    className={`${
                        isOpen ? "hidden" : "block"
                    } h-full w-16 flex items-center justify-center`}
                    onClick={openNavbar}
                >
                    <Image src={hamburgerIcon} className="w-7" />
                </span>
                <span
                    className={` ${
                        isOpen ? "block" : "hidden"
                    } fixed top-2 right-4 text-xl font-bold text-white md:hidden`}
                    onClick={openNavbar}
                >
                    <Image src={closeIcon} className="w-7" />
                </span>
            </motion.div>
            <motion.nav
                className={`flex text-slate-200 justify-center md:justify-between px-3 md:px-5 md:h-14 items-center flex-col md:flex-row h-screen w-screen md:w-screen gap-3 overflow-y-hidden fixed ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                } md:translate-x-0 transition-transform z-50 bg-c-dark-background`}
            >
                <ul className="flex flex-col md:flex-row text-sm md:px-4 items-center md:w-1/2 lg:w-2/5 justify-around md:gap-0 gap-3">
                    <li className="group w-full md:w-auto text-center hover:bg-slate-200 md:hover:bg-transparent">
                        <a
                            href="#home"
                            className="md:group-hover:text-white group-hover:text-c-dark-background"
                        >
                            Home
                        </a>
                    </li>
                    <li className="group w-full md:w-auto text-center hover:bg-slate-200 md:hover:bg-transparent">
                        <a
                            href="#skills"
                            className="md:group-hover:text-white group-hover:text-c-dark-background"
                        >
                            Skills
                        </a>
                    </li>
                    <li className="group w-full md:w-auto text-center hover:bg-slate-200 md:hover:bg-transparent">
                        <a
                            href="#project"
                            className="md:group-hover:text-white group-hover:text-c-dark-background"
                        >
                            Portfolio
                        </a>
                    </li>
                    <li className="group w-full md:w-auto text-center hover:bg-slate-200 md:hover:bg-transparent">
                        <a
                            href="#about"
                            className="md:group-hover:text-white group-hover:text-c-dark-background"
                        >
                            About Me
                        </a>
                    </li>
                    <li className="group w-full md:w-auto text-center hover:bg-slate-200 md:hover:bg-transparent">
                        <a
                            href="#contact"
                            className="md:group-hover:text-white group-hover:text-c-dark-background"
                        >
                            Contact Me
                        </a>
                    </li>
                </ul>
                <div className="flex items-center w-20 md:w-48 justify-center md:justify-end gap-x-1 md:h-3/5">
                    <a href="https://github.com/luthfi9251" className="h-full">
                        <Image
                            src={githubIcon}
                            className="w-full h-full object-cover"
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/muhammad-luthfi-irfan/"
                        className="h-full"
                    >
                        <Image
                            src={linkedinIcon}
                            className="w-full h-full object-cover"
                        />
                    </a>
                </div>
            </motion.nav>
        </>
    );
}
