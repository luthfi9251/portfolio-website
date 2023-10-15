import Image from "next/image";
import TitleText from "./TitleText";
import Button from "./Button";
import { dataItem, dataText } from "../../dataText";
import { useEffect, useState } from "react";
import Modal from "./Modals";

function ModalProject({ handleClose, item }) {
    return (
        <Modal handleClose={handleClose}>
            <h1 className=" font-bold">{item?.nama}</h1>
            <div className="gap-3 h-full overflow-y-auto px-3 py-5">
                <div className="relative h-2/3">
                    <Image
                        src={item?.img}
                        alt="gambar"
                        className="object-contain"
                        fill={true}
                    />
                </div>
                <p className="text-sm font-light my-3">{item.text}</p>
                <table className="text-sm font-light w-full">
                    <tr className="border-b border-white/20">
                        <td>Type</td>
                        <td>{item.detail?.type}</td>
                    </tr>
                    <tr className="border-b border-white/20">
                        <td>Stack</td>
                        <td>{item.detail?.stack}</td>
                    </tr>
                    <tr className="border-b border-white/20">
                        <td>Database</td>
                        <td>{item.detail?.database}</td>
                    </tr>
                    <tr className="border-b border-white/20">
                        <td>Repository</td>
                        <td>
                            {item.detail?.repository === "-" ? (
                                "-"
                            ) : (
                                <a
                                    href={item.detail?.repository}
                                    target="_blank"
                                    className="underline text-blue-400"
                                >
                                    Github
                                </a>
                            )}
                        </td>
                    </tr>
                    <tr className="border-b border-white/20">
                        <td>Live Preview</td>
                        <td>
                            {item.detail?.livePreview === "-" ? (
                                "-"
                            ) : (
                                <a
                                    href={item.detail?.livePreview}
                                    target="_blank"
                                    className="underline text-blue-400"
                                >
                                    Click To visit app
                                </a>
                            )}
                        </td>
                    </tr>
                </table>
            </div>
        </Modal>
    );
}

export default function Project() {
    let [active, setActive] = useState(0);
    let [activeDataModal, setActiveDataModal] = useState({});

    let [data, setData] = useState([]);
    let [dataInitial, setDataInitial] = useState(dataItem.projectList);
    let [isModalOpen, setIsModalOpen] = useState(false);

    let handleClick = (number) => {
        setActive(number);
    };

    let handleClickItem = (item) => {
        setActiveDataModal(item);
        setIsModalOpen(true);
        document.body.style.overflowY = "hidden";
    };

    let handleCloseModal = (item) => {
        setIsModalOpen(false);
        document.body.style.overflowY = "auto";
    };

    useEffect(() => {
        switch (active) {
            case 0:
                setData(
                    dataInitial.filter(
                        (item) => item.kategori === "web development"
                    )
                );
                break;
            case 1:
                setData(
                    dataInitial.filter(
                        (item) => item.kategori === "android development"
                    )
                );
                break;
            case 2:
                setData(
                    dataInitial.filter(
                        (item) => item.kategori === "python project"
                    )
                );
                break;
            case 3:
                setData(
                    dataInitial.filter(
                        (item) => item.kategori === "iot project"
                    )
                );
                break;
            default:
                setData(dataInitial);
                break;
        }
    }, [active]);

    return (
        <>
            {isModalOpen && (
                <ModalProject
                    handleClose={handleCloseModal}
                    item={activeDataModal}
                />
            )}
            <div
                className=" w-full py-10 px-3 md:px-6 my-8 md:my-0"
                id="project"
            >
                <div className="flex flex-col items-center gap-4">
                    <TitleText>My Recent Project</TitleText>
                    <p className="text-white text-xs lg:text-sm text-center w-full md:w-2/4">
                        {dataText.project.text.indo}
                    </p>
                    <div className="grid grid-cols-4 gap-x-1">
                        <button
                            className={`w-full ${
                                active === 0
                                    ? "bg-c-dark-green"
                                    : "bg-c-dark-grey text-white"
                            } text-center hover:bg-c-dark-green transition-all py-3 px-1 md:px-4 font-medium rounded-l-md text-xs md:text-base`}
                            onClick={() => handleClick(0)}
                        >
                            Web Development
                        </button>
                        <button
                            className={`w-full ${
                                active === 1
                                    ? "bg-c-dark-green"
                                    : "bg-c-dark-grey text-white"
                            } text-center hover:bg-c-dark-green transition-all py-3 px-1 md:px-4 font-medium text-xs md:text-base`}
                            onClick={() => handleClick(1)}
                        >
                            Android Development
                        </button>
                        <button
                            className={`w-full ${
                                active === 2
                                    ? "bg-c-dark-green"
                                    : "bg-c-dark-grey text-white"
                            } text-center hover:bg-c-dark-green transition-all py-3 px-1 md:px-4 font-medium text-xs md:text-base`}
                            onClick={() => handleClick(2)}
                        >
                            Python Project
                        </button>
                        <button
                            className={`w-full ${
                                active === 3
                                    ? "bg-c-dark-green"
                                    : "bg-c-dark-grey text-white"
                            } text-center hover:bg-c-dark-green transition-all py-3 px-1 md:px-4 font-medium text-xs md:text-base rounded-r-md`}
                            onClick={() => handleClick(3)}
                        >
                            IOT Project
                        </button>
                    </div>
                </div>
                <div className="w-full flex md:py-8 justify-center items-stretch flex-wrap gap-4">
                    <div className=" py-2 grid grid-cols-1 md:grid-cols-3 w-full gap-3">
                        {data.map((item, index) => {
                            return (
                                <div
                                    className="group w-full h-56 relative rounded-md overflow-hidden"
                                    key={index}
                                >
                                    <Image
                                        src={item.img}
                                        className="object-cover h-full absolute w-full"
                                        alt="background project"
                                        fill={true}
                                    />
                                    <div className="w-full h-full group-hover:backdrop-brightness-50 transition-all flex items-center justify-center flex-col gap-3">
                                        <p className="text-white font-bold opacity-0 group-hover:opacity-100 transition-all">
                                            {item.nama}
                                        </p>
                                        <button
                                            onClick={() =>
                                                handleClickItem(item)
                                            }
                                            className=" bg-c-dark-grey py-2 px-7 invisible group-hover:visible text-white text-sm font-medium rounded-md hover:bg-white hover:text-black"
                                        >
                                            Detail
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}
