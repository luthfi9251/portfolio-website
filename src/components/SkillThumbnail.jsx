import { motion } from "framer-motion";
import Image from "next/image";

export default function SkillThumbnail({ img, text, target }) {
  const item1 = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className=" bg-c-dark-background mx-1 p-2 md:aspect-square md:p-7">
      <Image src={img} className="w-full" alt={text} />
    </div>
  );
}
