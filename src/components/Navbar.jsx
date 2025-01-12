
import { Navbar as BootstrapNavbar, Nav,  } from 'react-bootstrap';
import logo from '../assets/RK.png';
import { motion } from 'framer-motion';

const NavbarComponent = () => {
  return (
    <BootstrapNavbar className=" mx-4 mb-20 flex items-center justify-between py-6">
      
        <div className="flex flex-shrink-0 items-center">
          <motion.img
            whileHover={{ rotate: 360 }}
            transition={{ duration: 2 }}
            className="m-2 w-10"
            src={logo}
            alt="logo"
          />
         
        </div>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" /> 
        <div className="m-8 flex items-center justify-center gap-3 ms-2 text-lg p-2">

           <Nav className="inline-flex  gap-3"> 
            
            <Nav.Link href="#about-id" className="hover:text-purple-300  text-gray-400">About</Nav.Link>
            <Nav.Link href="#experience-id"className="hover:text-purple-300 text-gray-400">Experience</Nav.Link>
            <Nav.Link href="#rec-id" className="hover:text-purple-300 text-gray-400">Skills</Nav.Link>
            <Nav.Link href="#work-id" className="hover:text-purple-300 text-gray-400">Projects</Nav.Link>
            <Nav.Link href="#contact-id" className="hover:text-purple-300 text-gray-400">Contact</Nav.Link>
            
            <div >
              
             
            </div>
          </Nav>
      </div>
     
    </BootstrapNavbar>
  );
};

export default NavbarComponent;


