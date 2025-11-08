import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a passionate and versatile software engineer with a knack for building seamless and intuitive web applications. With two years of hands on experience, I’ve dived into a dynamic tech stack, mastering Python, Django, React, Node.js, SQL, and Java. My fascination with how things work evolved into a thriving career where I embrace every challenge as an opportunity to innovate and grow. I thrive in collaborative settings, turning complex problems into elegant solutions. When I’m not coding, you’ll find me exploring the latest tech trends, contributing to open-source projects, or staying active to keep both mind and body sharp.`;

export const EXPERIENCES = [
  {
    year: "12 Month Contract",
    role: "Software Engineer Training",
    company: "KATIBA.",
    description: `Contributed to the development and maintenance of software systems as a trainee using Python, Django, React, Node.js, and SQL. Implemented RESTful APIs and integrated with SQL databases. Worked closely with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "12 Month Contract",
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
