"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import ellipse from "../../public/ellipse.svg";
import heroImage from "../../public/hero-image.png";
import Button from "./Button";

export default function HeroSection({ children }) {
    return (
        <div className="text-white md:h-[32rem] relative md:block flex flex-col-reverse items-center gap-10 md:gap-0 md:mt-20 overflow-hidden">
            <motion.div
                className="w-full md:w-5/12 lg:w-4/12  p-4 flex flex-col gap-2 lg:gap-3 items-start md:absolute left-14 z-10"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <span className="block font-extralight text-2xl lg:text-3xl">
                    Hello, I am
                </span>
                <span className="block font-extrabold text-3xl lg:text-4xl">
                    Muhammad Luthfi Irfan
                </span>
                <div className="w-full h-1 bg-c-line-green"></div>
                <p className="text-xs lg:text-sm w-11/12 lg:w-full">
                    {children}
                </p>
                <Button className=" w-36 h-10 mt-4" href="/#contact">
                    Contact Me
                </Button>
            </motion.div>
            <motion.div
                className="md:absolute md:w-1/2 lg:w-1/3 w-full md:left-1/2 md:-translate-x-1/3 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <Image
                    src={ellipse}
                    className="w-5/6 md:w-10/12 absolute md:left-0"
                />
                <Image
                    src={heroImage}
                    className="w-11/12 md:w-full md:-left-12 left-0 relative"
                />
            </motion.div>
            <motion.div
                className="relative md:absolute right-5 md:right-0 w-full md:w-4/12 overflow-hidden top-2 md:top-32 z-10 flex flex-col items-end md:items-start"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <p className="font-light text-2xl lg:text-3xl">I'm a</p>
                <p className="font-black text-3xl lg:text-4xl ml-6">
                    Web Developer
                </p>
                <div className="mt:2 md:mt-0 w-2/3 md:w-full h-1 bg-c-line-green"></div>
            </motion.div>
        </div>
    );
}
