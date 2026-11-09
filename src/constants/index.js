import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a versatile software engineer with a knack for building seamless and intuitive web applications. With two years of hands on experience, I’ve dived into a dynamic tech stack, mastering Python, Django, React, Node.js, SQL, and Java. My fascination with how things work evolved into a thriving career where I embrace every challenge as an opportunity to innovate and grow. I thrive in collaborative settings, turning complex problems into elegant solutions. When I’m not coding, you’ll find me exploring the latest tech trends, contributing to open-source projects, or staying active to keep both mind and body sharp.`;

export const EXPERIENCES = [
  {
    year: "June 2025 - Present",
    role: "Coast IT",
    company: "Coast IT",
    description: `Developed and maintained cross-platform application features using Flutter and Dart, delivering responsive and user-friendly interfaces across mobile and web platforms while integrating Firebase, REST APIs, and JSON-based services to support core functionality. Worked within an Agile environment using Git and GitHub for version control, collaboration, and code reviews, while actively participating in sprint planning and task delivery. Conducted thorough testing, debugging, and performance optimization using tools such as Android Studio, Visual Studio Code, and Postman to ensure application stability and quality. Translated Figma designs into scalable, production-ready interfaces and contributed to improving overall system maintainability through clean code practices and continuous enhancements.`,
    technologies: ["Javascript", "React.js", "Next.js", "Node.js", "SQL"],
  },
  {
    year: "January 2024 - October 2024",
    role: "Systems Developer",
    company: "SoftWave Technology",
    description: `Developed and maintained enterprise-level software solutions using Python, Django, React.js, and Node.js, delivering scalable and high-performance applications aligned with business requirements. Designed and optimized REST APIs and relational databases using PostgreSQL and MySQL to ensure efficient data flow, consistency, and system reliability. Built responsive frontend interfaces and robust backend services following modern software engineering principles, focusing on scalability and maintainability. Implemented CI/CD pipelines using Azure DevOps and Docker to automate deployment workflows, improving delivery efficiency and system stability. Collaborated in Agile teams using Git and GitHub, contributing to code reviews, debugging, testing, and technical documentation throughout the development lifecycle.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
];

export const PROJECTS = [
  {
    title: "AgentOne",
    image: project1,
    description:
      "A mobile agent AI application that completes tasks for you, uses your browser as well as connected applications, inspired by MuseAI.",
    technologies: ["React Native", "Expo", "OpenAi", "Browserbase", "SupaBase"],
    github: "https://github.com/Marivate/AgentOne",
    live: "",
  },
  {
    title: "Eye tracking cursor",
    image: project1,
    description:
      "This project uses computer vision techniques to track eye movements and control the cursor on the screen accordingly.",
    technologies: ["Python", "PyAutoGUI", "OpenCV", "Mediapie"],
    github: "https://github.com/Marivate/eye-tracking-cursor",
    live: "",
  },
  {
    title: "Zenny Tombstones Website",
    image: project2,
    description:
      "A Company website for a client, the website showcases their business of selling tombstones, offering memorial services and more.",
    technologies: ["HTML", "Typescript", "Javacript"],
    github: "",
    live: "https://www.zennytombstones.co.za/",
  },
  {
    title: "Macbook M4 Landing Page",
    image: project2,
    description:
      "A product landing page for the Macbook M4, inspired by Apple original sites.",
    technologies: ["React", "ThreeJS", "GSAP", "TailwindCSS"],
    github: "https://github.com/Marivate/macbook",
    live: "https://macbook-marivate.vercel.app/",
  },
  {
    title: "Techflow Landing Page",
    image: project2,
    description:
      "A product landing page for the a note taking app.",
    technologies: ["React", "ThreeJS", "TailwindCSS"],
    github: "https://github.com/Marivate/TechFlow-Landing-Page",
    live: "https://techflow-marivate1.netlify.app/",
  },
  {
    title: "ATM System",
    image: project3,
    description:
      "This project is a simple ATM (Automated Teller Machine) transaction system implemented in Python.",
    technologies: ["Python", "possible expansion with TKinter, MongoDB and FastAPI"],
    github: "https://github.com/Marivate/ATM-system",
    live: "",
  },
  {
    title: "CTU Buddy",
    image: project2,
    description:
      "This system aims to provide an interactive and comprehensive platform for students of City Technical University (CTU) to manage their schedules, engage in discussions, share resources, and contact university staff.",
    technologies: ["HTML", "CSS", "PHP", "Javasscript", "MySQL"],
    github: "https://github.com/Marivate/TechFlow-Landing-Page",
    live: "https://techflow-marivate1.netlify.app/",
  },
  {
    title: "Marivate Associates Website",
    image: project2,
    description:
      "This is a website for a law firm I have made for my brother as law is a family business.",
    technologies: ["Typescript", "CSS", "Javascript", "Resend"],
    github: "",
    live: "https://techflow-marivate1.netlify.app/",
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "Centurion, Gauteng ",
  phoneNo: "+27 63 361 1413 ",
  email: "tk.marivate@gmail.com",
};
