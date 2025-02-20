// Jeel tikiwala

import type {
  NavBarLink,
  SocialLink,
  Identity,
  AboutPageContent,
  ProjectPageContent,
  BlogPageContent,
  HomePageContent,
} from "./types/config";

export const identity: Identity = {
  name: "Jeel Tikiwala",
  logo: "/emoji_1.webp",
  email: "tikiwalajeel@gmail.com",
};

export const navBarLinks: NavBarLink[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Projects",
    url: "/projects",
  },
  {
    title: "Blog",
    url: "/blog",
  },
];

export const socialLinks: SocialLink[] = [
  {
    title: "GitHub",
    url: "https://github.com/JeelTikiwala",
    icon: "mdi:github",
    external: true,
  },
  {
    title: "Mail",
    url: "mailto:tikiwalajeel@gmail.com",
    icon: "mdi:email",
  },
  {
    // this is left
    title: "Resume",
    url: "/JeelTikiwala_NA.pdf",
    icon: "mdi:resume",
  }
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Jeel Tikiwala",
    description:
      "Full time student based out of Toronto, Canada who loves building cool things using code.",
    image: identity.logo,
  },
  role: "Student & Software Developer",
  description:
    "I'm Jeel Tikiwala, a full time student based out of Toronto, Canada who loves building cool things using code.",
  socialLinks: socialLinks,
  links: [
    {
      title: "My Projects",
      url: "/projects",
    },
    {
      title: "About Me",
      url: "/about",
    },
  ],
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "About | Jeel Tikiwala",
    description:
      "Full time student from Canada who loves building cool things using code.",
    image: identity.logo,
  },
  subtitle: "Some information about myself",
  about: {
    description: `
I'm Jeel Tikiwala, a full time student based out of Toronto, Canada who loves building cool things using code.
<br/><br/>
Loves traveling, exploring new places, savoring delicious food, watching movies, and embracing exciting adventures! <br/><br/>
Learning in public.`, // Markdown is supported
    image_l: {
      url: "/img2.jpg",
      alt: "",
    },
    image_r: {
      url: "/img.png",
      alt: "",
    },
  },
  work: {
    description: `I've worked with a variety of technologies and tools to build cool things. Here are some of my work experience.`, // Markdown is supported
    items: [
      {
        title: "Unnified Communications Analyst Intern",
        company: {
          name: "OMERS",
          image: "/OMERS.jpg",
          url: "https://github.com/JeelTikiwala",
        },
        date: "Jan 2025 - Apr 2025",
      },
      {
        title: "Data Engineer Intern",
        company: {
          name: "OMERS",
          image: "/OMERS.jpg",
          url: "https://github.com/JeelTikiwala",
        },
        date: "Sept 2024 - Dec 2024",
      },
      {
        title: "User Device Managament Analyst Intern",
        company: {
          name: "OMERS",
          image: "/OMERS.jpg",
          url: "https://github.com/JeelTikiwala",
        },
        date: "May 2024 - Aug 2024",
      },
    ],
  },
  connect: {
    description: `I'm always interested in meeting new people and learning new things. Feel free to connect with me on any of the following platforms.`, // Markdown is supported
    links: socialLinks,
  },
};

// Projects (/projects)
export const projectsPageContent: ProjectPageContent = {
  seo: {
    title: "Projects | Jeel Tikiwala",
    description: "Explore the projects I've worked on, showcasing my skills and creativity.",
    image: identity.logo,
  },
  subtitle: "Explore the projects I've worked on.",
  projects: [
    {
      title: "Machine Learning for Kyphosis Disease Classification",
      description: "Developed a machine learning model to classify kyphosis, a spinal condition, using surgical data to aid in diagnosis and treatment.",
      image: "/robot_face.png",
      year: "2024",
      url: "https://github.com/JeelTikiwala/Machine-Learning-for-Kyphosis-Disease-Classification",
    },
    {
      title: "Tweet Emotion Recognition",
      description: "Built a system to detect the emotion conveyed in a tweet using natural language processing.",
      image: "/hash.png",
      year: "2024",
      url: "https://github.com/JeelTikiwala/Tweet-Emotion-Recognition",
    },
    {
      title: "FileDonut: File Sharing Platform",
      description: "Created a peer-to-peer file-sharing platform using WebTorrent technology for browser-based sharing.",
      image: "/file_folder.png",
      year: "2021",
      url: "https://github.com/JeelTikiwala/FileDonut",
    },
    {
      title: "StarShip",
      description: "Decentralized Prediction Market Platform",
      image: "/rocket.png",
      year: "2023",
      url: "https://github.com/trillaboi/starship",
    },
    {
      title: "Lofy Mid Night Focus Website",
      description: "Lofy is a mid night focus website for all things with ambient sounds ,task list,pomodaro timer and spotify lofi playlist.",
      image: "/musical_note.png",
      year: "2021",
      url: "https://github.com/JeelTikiwala/lofy-Mid-Night-Focus-Website",
    },
    {
      title: "MerlinDemonWar: An Interactive Card Combat Game",
      description: "'Merlin Demon War' is a single-player card battler game featuring dynamic gameplay and a fully functional card combat system.",
      image: "/video_game.png",
      year: "2021",
      url: "https://github.com/JeelTikiwala/MerlinDemonWar-An-Interactive-Card-Combat-Game",
    },
    {
      title: "TheReturn: Text Adventure Game",
      description: "'The Return' is a text-based adventure game developed using a flexible and expandable architecture.",
      image: "/space_invader.png",
      year: "2020",
      url: "https://github.com/JeelTikiwala/MerlinDemonWar-An-Interactive-Card-Combat-Game",
    },
  ],
};


// Blog (/blog)
export const blogPageContent: BlogPageContent = {
  seo: {
    title: "Blog | Jeel Tikiwala",
    description: "Thoughts, stories and ideas.",
    image: identity.logo,
  },
  subtitle: "Thoughts, stories and ideas.",
};
