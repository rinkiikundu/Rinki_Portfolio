
import{motion} from 'framer-motion'
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="border-b  pb-20"> 
    <motion.h1 whileInView ={{opacity:1, y:0}}
    initial={{opacity:0, y:-100}} transition=
   {{duration:1}}className=" my-10 text-center text-4xl">Get in Touch</motion.h1>
    <motion.div whileInView={{opacity:1, x:0}} 
                initial={{opacity:0, x:100}}
                transition={{duration:1}}className="text-center tracking-tighter ml-2 mt-5">
       
       <p className="para-style my-10">
          Looking forward to
          connecting with you! 
        </p>
             <a href="mailto:kundu.rin@northeastern.edu"
              className="text-style border border-info center p-2"
            >
              Get In Touch
            </a>
            <div className="flex justify-center mt-10">
          <a
            href="https://github.com/rinkiikundu"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-gray-900 mr-4"
          >
            <FaGithub className="text-4xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/rinkikundu/"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-gray-900"
          >
            <FaLinkedin className="text-4xl" />
          </a>
        </div>
            </motion.div>
            </div>
            
           
  )
}

export default Contact
