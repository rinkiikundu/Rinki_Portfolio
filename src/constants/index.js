import project1 from "../assets/projects/Project-1.jpg";
import project3 from "../assets/projects/Project-3 .jpg";
import project4 from "../assets/projects/projectt-4.jpg";

export const HERO_CONTENT = `I’m pursuing a Master of Science in Information Systems at Northeastern University. As a passionate full stack developer, I excel in crafting robust and scalable web applications. With expertise in network technologies, automation, and full stack development, my goal is to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications.\n
After gaining industry experience, I pursued a Master of Science in Information Systems at Northeastern University, where I honed my skills in JavaScript, TypeScript, Python, and React.\n
During my Software Engineer Co-op at Philips, I played a pivotal role in advancing the iX architecture, further developing my expertise in software development and cloud technologies.\n`;


export const EXPERIENCES = [
  {
    year: "Jan 2024 - Aug 2024",
    role: "Software Engineer",
    company: "Philips",
    description: `
    Performed thorough clinical network infrastructure testing and automated web interface testing with Selenium and Cucumber to streamline the process. Administered virtual machines with VMware, optimizing system operations through Linux OS configuration and shell scripting to enhance efficiency and reduce manual tasks.`,
    technologies: ["Linux","Automation","Network Technologies"],
  },
  {
    year: "Jan 2023 - Dec 2023",
    role: "Application Processor(Part-time)",
    company: "Northeastern university",
    description: `
    Skilled in evaluating domestic and international academic records, ensuring thorough document review and accuracy. Proficient in using Salesforce for managing cases and student inquiries, with a commitment to maintaining data integrity and providing exceptional admissions assistance.`,
    technologies: ["Salesforce","Case Management","Communication"],
  },
  {
    year: "Sep 2021 - Aug 2022",
    role: "Associate Software Engineer",
    company: "TCS",
    description: `Implemented responsive design principles to enhance application accessibility and utilized Agile practices to streamline feature development and improve customer satisfaction. Resolved core network issues to enhance stability and performance, while proficiently handling routing, switching, and various networking protocols to ensure optimal network operation.`,
    technologies: ["ServiceNow","Web development", "Network Technologies"],
  },
 
  {
    year: "Mar 2021 - Aug 2021",
    role: "Software Engineer Trainee",
    company: "TCS",
    description: `Acquired proficiency in HTML, CSS, JavaScript, jQuery, and AWS, creating dynamic web solutions and enhancing application performance. Proficient in Git, combining JavaScript and CSS for user-friendly websites, and applying best practices in responsive design and cross-browser compatibility, with a solid foundation in Node.js.`,
    technologies: ["Web Development", "Version Control","AWS"],
  },
];

export const PROJECTS = [
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "Built a blogging application that allows administrators to share insights and create engaging content on various topics. Users can read, comment, like, and share, fostering a rich and interactive community experience.",
    technologies: ["React", "Node.js", "MongoDB","Redux","Express"],
    link:"https://blog-5z5y.onrender.com",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "Built a comprehensive portfolio website showcasing my projects, skills, and work experience.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Student Care",
    image: project1,
    description:
      "The Student Care Application is an interactive application designed to track and manage student information, including registration renewal, immunization anniversaries, teacher assignments, and employee reviews.",
    technologies: ["Java","NetBeans"],
    link:"https://github.com/rinkiikundu/Student-Care.git"
  },
  
];


