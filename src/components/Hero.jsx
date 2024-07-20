import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/profilee.png";
import {motion} from "framer-motion"
const container= (delay)=>({
    hidden:{x:-100, opacity:0},
    visible:{
        x:0,
        opacity:1,
        transition:{duration:0.5, delay:delay}
    }
})
const Hero = () => {
  return (
    <div className="pb-4 lg:mb-35">
        <div className="flex flex-wrap">
        <div className=" w-full lg:w-1/2">
        <div className="flex flex-col items-center lg:items-start">
        
        <motion.h1 
    variants={container(0)}
    initial="hidden"
    animate="visible"
    className="mx-8 pb-16 lg:mt-16 lg:text-8xl">
    <span className="block text-base mx-1 font-normal leading-tight mb-2 lg:text-lg text-purple-400">Hi, my name is</span>
    <span className="block text-6xl font-thon tracking-tight">Rinki Kundu</span>
</motion.h1>

            <motion.span variants={container(0.5)}
        initial="hidden"
        animate="visible"className="mx-8 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Software Engineer</motion.span>
            <motion.p variants={container(1)}
        initial="hidden"
        animate="visible"className="mx-8 my-1  max-w-xl py-6 font-light tracking-tighter">
               {HERO_CONTENT} 
            </motion.p>
        
        </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center">
                <motion.img initial={{x:100, opacity:0}} animate={{x:0, opacity:1}}  
                transition={{duration:1, delay:1.2}}src={profilePic} alt="profile"/>
            </div>
        </div>
        </div>
    </div>);

  
};

export default Hero;
