"use client";
import SkillThumbnail from "./SkillThumbnail";
import TitleText from "./TitleText";
import Button from "./Button";
import Slider from "react-slick";
import { dataItem } from "../../dataText";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { Component } from "react";

export default class AutoPlay extends Component {
    render() {
        let settingsCarrousel = {
            className: "w-full md:w-5/6 mx-auto",
            dots: true,
            infinite: true,
            centerMode: true,
            speed: 500,
            //variableWidth: true,
            autoplay: true,
            autoplaySpeed: 1000,
            speed: 2000,
            slidesToShow: 5,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true,
                    },
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        initialSlide: 2,
                        infinite: true,
                        dots: true,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true,
                    },
                },
            ],
        };
        return (
            <div className="w-full px-6 text-center relative mt-5 md:mt-0">
                <TitleText className="absolute -top-5 left-1/2 -translate-x-1/2">
                    My Tech Skill
                </TitleText>
                <div className="px-6 text-white bg-c-dark py-6">
                    <Slider {...settingsCarrousel}>
                        {dataItem.skill.map((item, key) => {
                            return (
                                <div key={key}>
                                    <SkillThumbnail
                                        img={item.img}
                                        text={item.text}
                                    />
                                </div>
                            );
                        })}
                    </Slider>
                </div>
            </div>
        );
    }
}
