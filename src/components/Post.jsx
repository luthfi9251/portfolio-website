import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";

import PostAvatar from "../../public/post-avatar.png";
import PostReplyItem from "./PostReply";
import { insertPostReply, getDataReplyPerPost } from "@/app/action";
import Button from "./Button";
import { useState } from "react";

export default function PostItem({ dataPost }) {
    let [data, setData] = useState(dataPost);
    let handleSubmit = (e) => {
        e.preventDefault(0);
        let replyData = {
            post_id: data?.id_post,
            name: e.target[0].value,
            text: e.target[1].value,
        };

        let handleDB = new Promise((resolve, reject) => {
            insertPostReply(replyData)
                .then((res) => updateReply().then((res) => resolve(res)))
                .catch((err) => reject(err));
        });
        toast.promise(
            handleDB,
            {
                pending: "Mengirim balasan ...",
                error: "Gagal mengirim balasan",
                success: "Balasan berhasil terkirim!",
            },
            {
                position: toast.POSITION.BOTTOM_RIGHT,
            }
        );
    };

    let updateReply = async () => {
        let id = data.id_post;
        let newReply = await getDataReplyPerPost(id);
        let updatedData = {
            data,
            reply: newReply,
        };
        console.log(updatedData);
        setData(updatedData);
    };

    return (
        <div className="bg-c-dark py-3 px-2 rounded-lg">
            <Image
                alt="profile"
                src={PostAvatar}
                className="w-1/12 rounded-full inline-block align-top mt-2"
            />
            <div className="w-11/12 inline-block pl-5">
                <h3 className="text-lg font-medium py-2 text-yellow-500">
                    {data?.name}
                </h3>
                <p>{data?.text}</p>
            </div>
            <div className="ml-10">
                <p className="my-7">Balasan</p>
                {data?.reply.map((item, i) => (
                    <PostReplyItem data={item} key={i} />
                ))}
                <div className="bg-c-dark-background py-2 px-2 my-3 mt-5 rounded-md overflow-auto">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Nama"
                            className="w-full px-2 py-2 rounded-sm outline-none bg-c-light-grey"
                        />
                        <textarea
                            name="message"
                            placeholder="Balas"
                            className="w-full outline-none px-2 py-2 mt-2 bg-c-light-grey resize-none"
                            rows="3"
                        ></textarea>
                        <button
                            className="text-white text-center hover:bg-c-light-green transition-all bg-c-dark-green rounded-lg w-1/5 py-2 float-right"
                            type="submit"
                        >
                            Kirim
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
