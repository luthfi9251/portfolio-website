import Image from "next/image";
import { IoClose } from "react-icons/io5";

export default function Modal({ children, handleClose }) {
  return (
    <div
      className="fixed left-0 top-0 h-screen w-screen overscroll-none z-50 backdrop-blur-lg flex items-center justify-center"
      onClick={handleClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className=" bg-c-dark w-11/12 md:w-1/2 p-4 text-white relative flex items-center pt-5 flex-col rounded-md gap-4 h-1/2 md:h-3/4"
      >
        <IoClose
          className="absolute right-3 text-white cursor-pointer"
          color="#ffffff"
          size={"2rem"}
          onClick={handleClose}
        />
        {children}
      </div>
    </div>
  );
}
