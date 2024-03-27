"use client";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PostItem from "@/components/Post";
import HeroImage from "../../../public/post-hero-image.png";

import { getDatPost } from "../action";

export default function Posts() {
    let [post, setPost] = useState([]);
    let [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        getDatPost().then((data) => {
            setPost(data);
            setIsLoading(false);
        });
    }, []);

    return (
        <>
            <Head>
                <title>My Post</title>
            </Head>
            <div className="w-full min-h-screen bg-c-dark-background text-white px-3 md:px-2 flex justify-center">
                <div className="w-full md:w-1/2 py-8 flex flex-col items-center">
                    <Image src={HeroImage} className="w-full px-8" />
                    <span className="mt-8 mb-4 text-xl md:text-2xl font-thin">
                        29.03
                    </span>
                    {isLoading ? (
                        <div className="border-gray-300 h-10 w-10 animate-spin rounded-full border-8 border-t-c-dark-background" />
                    ) : null}
                    <div className="w-full">
                        {post?.map((item, i) => (
                            <PostItem dataPost={item} key={i} />
                        ))}
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    );
}
