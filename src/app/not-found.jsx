import Navbar from "@/components/Navbar";

import notFoundImage from "../../public/under-construction-removebg.png";

import Image from "next/image";

export default function NotFound() {
    return (
        <div className="w-screen h-screen bg-c-dark-background text-white relative">
            <Navbar />
            <div className="flex flex-col gap-1 items-start absolute top-1/4 md:top-1/2 md:-translate-y-1/2 md:left-[20%]">
                <h1 className="text-3xl font-extrabold">I'm Sorry</h1>
                <p className="text-xl font-light">
                    this website is under construction
                </p>
                <a className="text-white my-2 hover:bg-c-light-green transition-all bg-c-dark-green py-3 px-5 inline-block rounded-lg">
                    Back to Home
                </a>
            </div>
            <Image
                src={notFoundImage}
                className="absolute w-1/2 md:w-1/5 bottom-0 right-0"
            />
        </div>
    );
}
