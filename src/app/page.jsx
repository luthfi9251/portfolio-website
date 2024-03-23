"use client";
import { motion } from "framer-motion";
import Head from "next/head";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import SkillSection from "@/components/SkillSection";
import TitleText from "@/components/TitleText";
import Categorize from "@/components/Categorize";
import Project from "@/components/Project";
import Button from "@/components/Button";
import ContactMe from "@/components/ContactSection";
import CertificateSection from "@/components/CertificateSection";

import { dataItem, dataText } from "../../dataText";

import aboutMePhoto from "../../public/aboutme.png";
import backgroundAboutMe from "../../public/bgAboutMe.png";

export default function Home() {
    const containerCategorize = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.8,
                staggerChildren: 0.2,
            },
        },
    };

    const containerProject = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.8,
                staggerChildren: 0.2,
            },
        },
    };

    const containerContact = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1,
            },
        },
    };

    return (
        <main
            className="bg-c-dark-background scroll-smooth overflow-x-hidden"
            id="home"
        >
            <Navbar />
            <HeroSection>{dataText.hero.text.indo}</HeroSection>
            <SkillSection />
            <div
                className="mt-14 md:py-4 px-6 flex justify-around items-center gap-8 md:gap-2 flex-col md:flex-row"
                id="skills"
            >
                <motion.div
                    className="w-full p-1 md:w-2/5 md:p-4 flex flex-col gap-4"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    // viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                >
                    <TitleText>What Can I Do For You?</TitleText>
                    <p className="text-white text-xs lg:text-sm text-justify">
                        {dataText.capabilities.text.indo}
                    </p>
                    <div className="flex text-white justify-between mt-3">
                        <div>
                            <h2 className="text-4xl text-c-light-green">5</h2>
                            <p className="font-semibold text-sm md:text-lg">
                                Projects Completed
                            </p>
                        </div>
                        <div>
                            <h2 className="text-4xl text-c-light-green">3</h2>
                            <p className="font-semibold text-sm md:text-lg">
                                Years Experiences
                            </p>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    className="md:w-1/2 flex flex-col gap-10 md:gap-4"
                    variants={containerCategorize}
                    whileInView="visible"
                    // viewport={{ once: true }}
                    initial="hidden"
                >
                    {dataItem.jobDesk.map((item, key) => (
                        <Categorize data={item} key={key} />
                    ))}
                </motion.div>
            </div>
            <Project />
            <div
                className="w-full py-3 md:py-10 flex justify-around items-center flex-wrap"
                id="about"
            >
                <motion.div
                    className="relative md:w-2/5 flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    // viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                >
                    <Image src={backgroundAboutMe} />
                    <Image src={aboutMePhoto} className="absolute top-0" />
                </motion.div>
                <motion.div
                    className="md:w-2/5 p-3  text-white flex flex-col gap-5"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    // viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 1 }}
                >
                    <TitleText className={"text-center"}>About Me</TitleText>
                    <p className="text-justify text-xs lg:text-sm">
                        {dataText.aboutMe.text.indo}
                    </p>
                    <div>
                        <CertificateSection />
                    </div>
                </motion.div>
            </div>
            <div
                className="w-full flex justify-around p-3 md:p-5 flex-wrap gap-10 mt-10 md:mt-0"
                id="contact"
            >
                <motion.div
                    className="text-white w-full md:w-2/6 p-0 md:p-5"
                    variants={containerContact}
                    whileInView="visible"
                    initial="hidden"
                >
                    <TitleText>Get In Touch With Me</TitleText>
                    <p className="text-xs lg:text-sm">
                        {dataText.contactMe.text.indo}
                    </p>
                    <div className="flex flex-col mt-6">
                        <h1 className="font-semibold text-lg block">
                            My Social
                        </h1>
                        <div className="flex flex-col gap-3">
                            {dataItem.contact.map((item, index) => {
                                return (
                                    <a
                                        key={index}
                                        href={item.target}
                                        className="flex items-center gap-3 bg-c-dark hover:bg-c-dark-grey rounded-lg pointer"
                                    >
                                        <Image
                                            src={item.img}
                                            className="w-14 p-2"
                                        />
                                        <p className="text-xs lg:text-sm">
                                            {item.username}
                                        </p>
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>
                <ContactMe />
            </div>
            <div className="w-full p-10 text-white text-center bg-c-dark font-light">
                Thank you for visiting my website.
            </div>
        </main>
    );
}
