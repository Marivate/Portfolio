import profilePic from "../assets/tintswaloProfile.jpg";
import { motion } from "framer-motion"
import { Analytics } from "@vercel/analytics/react"

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1 
            variants={container(0)}
            initial="hidden"
            animate="visible" 
            className="pb-16 text-6xl font-thin tracking-tight text-center lg:mt-14 lg:text-6xl lg:text-left">
              Tintswalo Marivate
            </motion.h1>
            <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible" 
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Software Engineer
            </motion.span>
            <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible" 
            className="my-2 max-w-xl py-6 font-light tracking-tighter">
            As a detail-oriented software engineer, I specialize in developing scalable and high-performance software solutions. With my hands-on experience, I focus on creating innovative systems that enhance efficiency and user satisfaction. I thrive on solving complex challenges and refining software to deliver seamless experiences. My approach blends technical expertise with a problem-solving mindset, ensuring that every solution is both practical and impactful.
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2}}
            src={profilePic} alt="Tintswalo Marivate" style={{ width: '80%', height: 'auto', borderRadius: '15px' }} />
          </div>
        </div>
      </div>
    </div>
  );
};
  
  export default Hero;