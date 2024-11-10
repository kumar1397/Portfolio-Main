import {
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  nextjs,
  redux,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  gssoc,
  wiZe,
  threejs,
  collegemart,
  Shopsy,
  Techblog,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name:"Next JS",
    icon: nextjs
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Next js Developer",
    company_name: "Mylamp.ai",
    icon: wiZe,
    iconBg: "#383E56",
    date: "May 2024 - August 2024",
    points: [
      "Developed an ed-tech platform using Next.js, built a responsive and user-friendly front-end with Next.js.",
      "Engineered secure NextAuth authentication, implemented secure NextAuth authentication.",
      "Utilized Prisma ORM for efficient database management, optimized database management with Prisma ORM.",
      "Collaborated with a cross-functional team to integrate user feedback and iterate on features.",
    ],
  },
  {
    title: "Contributor",
    company_name: "GSSoC 24",
    icon: gssoc,
    iconBg: "#E6DEDD",
    date: "May 2024 - July 2024",
    points: [
      "Participating in GSSoC 2024 by contributing to open-source projects, focusing on developing and enhancing software solutions.",
      "Actively collaborating with the developer community to share knowledge and implement best practices.",
      "This engagement has led to optimized code quality and improved project efficiency.",
     
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "CollegeMart",
    description:
      "A marketplace for college student to buy and sell items, using the MERN stack, focused on creating a user friendly interface and efficient backend to facilitate smooth transactions and enhance campus connectivity.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: collegemart,
    source_code_link: "https://github.com/kumar1397/College-Mart",
  },
  {
    name: "Shopsy",
    description:
      "A dynamic React project enabling users to browse and manage product listings, utilizing React Redux for state management, using various React hooks for functionality, fetching all the data using API integration",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Shopsy,
    source_code_link: "https://github.com/kumar1397/Ecomzy",
  },
  {
    name: "Techblog",
    description:
      "A tech blog platform built with Next.js, Prisma, and MongoDB, allowing users to post articles with images, tags, and author profiles. The blog provides an intuitive interface for reading and sharing the latest in technology.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "prisma",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Techblog,
    source_code_link: "https://github.com/kumar1397/nextjs-blog-app",
  },
];

export { services, technologies, experiences, testimonials, projects };
