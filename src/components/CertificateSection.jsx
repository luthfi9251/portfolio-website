import Button from "./Button";
import Modal from "./Modals";
import Image from "next/image";
import { dataItem } from "../../dataText";
import { useState } from "react";

function CertificateModal({ handleClose, item }) {
    return (
        <Modal handleClose={handleClose}>
            <h1>{item.name}</h1>
            <div className="flex flex-col gap-3 overflow-y-auto">
                <Image src={item.img} alt="gambar" className="w-full" />
                <p className="text-sm font-light">{item.brief}</p>
                <table className="text-sm font-light">
                    <tr className="border-b border-white/20">
                        <td>Company</td>
                        <td>{item?.company}</td>
                    </tr>
                    <tr className="border-b border-white/20">
                        <td>Date Issued</td>
                        <td>{item?.date}</td>
                    </tr>
                    <tr className="border-b border-white/20">
                        <td>Certificate URL</td>
                        <td>
                            {item.link === "-" ? (
                                "-"
                            ) : (
                                <a
                                    href={item.link}
                                    target="_blank"
                                    className="underline text-blue-400"
                                >
                                    Click To see certificate
                                </a>
                            )}
                        </td>
                    </tr>
                </table>
            </div>
        </Modal>
    );
}

export default function CertificateSection() {
    let [isModalOpen, setIsModalOpen] = useState(false);
    let [activeDataModal, setActiveDataModal] = useState({});

    let handleClickItem = (item) => {
        setActiveDataModal(item);
        setIsModalOpen(true);
        document.body.style.overflowY = "hidden";
    };

    let handleCloseModal = (item) => {
        setIsModalOpen(false);
        document.body.style.overflowY = "auto";
    };

    return (
        <>
            {isModalOpen && (
                <CertificateModal
                    handleClose={handleCloseModal}
                    item={activeDataModal}
                />
            )}
            <h1 className="font-semibold text-lg block">My Certificate</h1>
            <div className="flex flex-col py-2 gap-3">
                {dataItem.certificate.map((item, key) => {
                    return (
                        <div
                            className="flex w-100 rounded-md bg-c-dark px-2 py-3 justify-between items-center text-xs lg:text-sm"
                            key={key}
                        >
                            <div className="flex flex-col gap-1">
                                <h2>{item.name}</h2>
                                <p className=" font-light">{item.company}</p>
                            </div>
                            <button
                                onClick={() => handleClickItem(item)}
                                className="text-c-dark-green hover:text-c-light-green"
                            >
                                View Certificate
                            </button>
                        </div>
                    );
                })}
                {/* <div className="self-center">
          <Button href="/certificate" className="p-4 rounded-lg">
            Show all Certificate
          </Button>
        </div> */}
            </div>
        </>
    );
}
