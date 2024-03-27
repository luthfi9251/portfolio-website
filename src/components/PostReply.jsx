import Image from "next/image";

import PostAvatar from "../../public/profile-pict-empty.jpg";

export default function PostReplyItem({ data }) {
    return (
        <div className="bg-c-dark-background py-2 px-2 my-3 rounded-md">
            <Image
                alt="profile"
                src={PostAvatar}
                className="w-1/12 rounded-full inline-block align-top mt-2"
            />
            <div className="w-11/12 inline-block pl-5">
                <h3 className="text-lg font-medium py-2">{data.name}</h3>
                <p>{data.text}</p>
            </div>
        </div>
    );
}
