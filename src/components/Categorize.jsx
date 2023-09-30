"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Categorize({ data }) {
    const item1 = {
        hidden: { x: 30, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
        },
        transition: {
            delay: 5,
            duration: 2,
        },
    };

    return (
        <motion.div
            className="w-full flex text-white shadow-lg md:flex-row flex-col"
            variants={item1}
        >
            <Image
                className="w-full md:w-1/3 h-1/4 object-cover"
                src={data.img}
            />
            <div className=" h-11/12 flex flex-col justify-between px-2 gap-2 md:gap-0">
                <h1 className="font-semibold text-lg block">{data.title}</h1>
                <p className="text-white text-xs lg:text-sm text-justify block">
                    {data.detail}
                </p>
                <p className="text-xs md:text-sm text-c-dark-green block">
                    {data.total} Projects
                </p>
            </div>
        </motion.div>
    );
}
