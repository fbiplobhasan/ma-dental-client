import bgImg from "../../assets/08.jpg";
import { easeOut, motion } from "motion/react";
import bannerMove1 from "../../assets/bannerMove1.jpg";
import bannerMove2 from "../../assets/bannerMove2.jpg";

const Banner2 = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div>
          <div className="max-w-md">
            <motion.h1
              animate={{ x: -100 }}
              transition={{
                duration: 2,
                delay: 1,
                ease: easeOut,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="mb-5 text-5xl font-bold"
            >
              Ma{" "}
              <motion.span
                animate={{ color: ["#A6C4F7", "#000000", "#A6F7D7"] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                Dental
              </motion.span>{" "}
              Care Ulipur.
            </motion.h1>
          </div>
          <div className="divider w-full"></div>
          <div>
            <motion.img
              src={bannerMove1}
              className="w-64 max-w-sm rounded-t-[40px] rounded-br-[40px] border-l-4 border-violet-500 shadow-2xl"
              animate={{ y: [0, 50, 0] }}
              transition={{ duration: 5, delay:3, repeat: Infinity }}
              alt=""
            />
            <motion.img
              src={bannerMove2}
              className="w-64 max-w-sm rounded-t-[40px] rounded-br-[40px] border-l-4 border-violet-500 shadow-2xl"
              animate={{ x: [100, 120, 50] }}
              transition={{ duration: 5,delay:5, repeat: Infinity }}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
