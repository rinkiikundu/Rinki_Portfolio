import aboutImg from "../assets/Profile.png"
import { ABOUT_TEXT } from "../constants"
import {motion} from 'framer-motion'

const About = () => {
  return (
    <div className=" border-neutral-900 pb-4 "> 
    <h1 className="my-20 text-center text-4xl">About 
    <span className="text-neutral-500"> Me</span> 
    </h1>
    <div className="flex flex-wrap">
        <motion.div whileInView={{opacity:1, x:0}} initial ={{opacity:0, x:100}} tansition={{duration:0.5}}className="w-full lg:w-1/2 lg:p-8">

        <motion.div className="flex items-center justify-center">
        <img className=" rounded-2xl w-3/4"src={aboutImg} alt="about"/>
        </motion.div>
        </motion.div>
        <div className="w-full lg:w-1/2">
                <motion.div whileInView={{opacity:1, x:0}} 
                initial={{opacity:0, x:100}}
                transition={{duration:0.5}}
                className="flex flex-col items-center lg:items-start">
                    <p className="my-2 max-w-xl py-6 tracking-tighter">{ABOUT_TEXT}</p>
  <div className="text-center mt-4">
  <a 
                href="/Rinki_Kundu_Resumee.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-style border p-2"
              >
      Resume
    </a>
  </div>
                 

                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default About
