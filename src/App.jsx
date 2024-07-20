
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Hero from './components/Hero';
import Navbar from './components/Navbar'
import Projects from './components/Projects';
import Technologies from './components/Technologies';


const App = () => {
  

  return (
    <div  className=" spotlight overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 
    selection:text-cyan-900" >
      <div className="fixed top-0 -z-10 h-full w-full"></div>
      <div className="relative h-full w-full bg-slate-950">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]">
          </div>
          <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]">
            </div>
            <div className='container mx-auto px-8'>
            <Navbar/>
            <div id="home"><Hero /></div>
          <div id="about-id"><About /></div>
          <div id="experience-id"><Experience /></div>
         
          <div id="rec-id"><Technologies /></div>
          <div id="work-id"><Projects /></div>
          <div id="contact-id"><Contact /></div>
          
            </div>
            
      
      

     
      </div>
    
  </div>
  )
}

export default App;
