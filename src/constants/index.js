import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a passionate and versatile software engineer with a knack for building seamless and intuitive web applications. With two years of hands on experience, I’ve dived into a dynamic tech stack, mastering Python, Django, React, Node.js, SQL, and Java. My fascination with how things work evolved into a thriving career where I embrace every challenge as an opportunity to innovate and grow. I thrive in collaborative settings, turning complex problems into elegant solutions. When I’m not coding, you’ll find me exploring the latest tech trends, contributing to open-source projects, or staying active to keep both mind and body sharp.`;

export const EXPERIENCES = [
  {
    year: "April 2025 - September 2025",
    role: "Software Engineer",
    company: "SoftWave Technology",
    description: `During my work-integrated learning at Softwave Technology, I designed and implemented comprehensive book management features to enhance the efficiency of library operations. I developed user registration and book management modules that streamlined user access and resource organization. Additionally, I implemented transaction processing for book borrowing and returns, ensuring accurate reporting and smooth day to day library operations.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "May 2024 - September",
    role: "Web App Developer",
    company: "Freelance",
    description: `As a freelance web app developer, I designed and developed responsive web applications using modern frameworks and technologies. I collaborated closely with clients to gather requirements and deliver customized solutions that met their business needs. My work involved integrating APIs, optimizing performance, and ensuring a seamless user experience across devices. I also handled deployment, maintenance, and security updates to guarantee ongoing functionality and reliability of each application.`,
    technologies: ["Javascript", "React.js", "Next.js", "Node.js", "SQL"],
  },
  {
    year: "February 2023 - March 2024",
    role: "Software Engineer",
    company: "KATIBA.",
    description: `Contributed to the development and maintenance of software systems as a trainee using Python, Django, React, Node.js, and SQL. Implemented RESTful APIs and integrated with SQL databases. Worked closely with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "January 2022 - December 2022",
    role: "Frontend Developer",
    company: "Marivate Realty",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
];

export const PROJECTS = [
  {
    title: "Eye tracking cursor",
    image: project1,
    description:
      "This project uses computer vision techniques to track eye movements and control the cursor on the screen accordingly.",
    technologies: ["Python", "PyAutoGUI", "OpenCV", "Mediapie"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "ATM System",
    image: project3,
    description:
      "This project is a simple ATM (Automated Teller Machine) transaction system implemented in Python.",
    technologies: ["Python", "possible expansion with TKinter, MongoDB and FastAPI"],
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
  email: "marivate.tk@gmail.com",
};
