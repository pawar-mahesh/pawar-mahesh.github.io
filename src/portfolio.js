const settings = {
  isSplash: true,
};

const seo = {
  title: "Mahesh's Portfolio",
  description:
    "To implement my knowledge with dedication, team spirit and co-operation in order to leverage organizational and research skills and accept challenges.",
  og: {
    title: "Mahesh Pawar Portfolio",
    type: "website",
    url: "https://pawar-mahesh.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Mahesh Pawar",
  logo_name: "MaheshPawar",
  nickname: "mahi",
  subTitle:
    "To implement my knowledge with dedication, team spirit and co-operation in order to leverage organizational and research skills and accept challenges.",
  resumeLink: "",
  portfolio_repository:
    "https://github.com/pawar-mahesh/pawar-mahesh.github.io",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/pawar-mahesh",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/maheshpawar14/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:pawar.mahesh2345@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/mahi_pawar_14",
    fontAwesomeIcon: "fa-twitter",
    backgroundColor: "#1DA1F2",
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/mahi.pawar.14",
    fontAwesomeIcon: "fa-facebook-f",
    backgroundColor: "#1877F2",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/mahesh.pawar_/",
    fontAwesomeIcon: "fa-instagram",
    backgroundColor: "#E4405F",
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using React",
        "⚡ Creating application backend in Node & Express",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/maheshpawar14",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Walchand Institute of Technology, Solapur",
      subtitle: "B.E. in Information Technology",
      logo_path: "degreeCard.jpg",
      alt_name: "WIT Solapur",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, AI etc.",
      ],
      website_link: "https://www.witsolapur.org/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Infosys Certified Software Programmer",
      subtitle: "- Python Programming",
      logo_path: "certificate.jpg",
      certificate_link: "",
      alt_name: "Infosys Certified Software Programmer",
      color_code: "#8C151599",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I am working with Infosys Ltd as a Digital Specialist Engineer (DSE). I have also worked with Android Open Source Project (AOSP). I used to maintain custom roms for Android. I love to help people to build the custom roms",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Digital Specialist Engineer (DSE)",
          company: "Infosys Ltd",
          company_url: "https://www.infosys.com/",
          logo_path: "",
          duration: "Nov 2020 - PRESENT",
          location: "Hyderabad, Telangana",
          description:
            "I am working with PricewaterhouseCoopers (PwC). The projects invovle Microsoft Powerapps, automation. I am currently working on End User Toolkit Application.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Ashwini Hospital Management System",
          company: "Ashwini Hospital, Solapur",
          company_url: "http://www.ashwinihospital.co.in/",
          logo_path: "",
          duration: "May 2019 - Feb 2020",
          location: "Solapur, Maharashtra",
          description:
            "I have worked on project of Hospital Management System. We in a team created a admission form for patient admission, billng system. Also we worked on the recruitment process for the jobs in hospital",
          color: "#ee3c26",
        },
        {
          title: "Helmet Detection System",
          company: "Traffic Police",
          company_url: "",
          logo_path: "",
          duration: "Jun 2019 - May 2020",
          location: "Solapur, Maharashtra",
          description:
            "This is about the Detecting Helmets of the two wheeler bikers from the traffic camera videos.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Pixel Experience",
          company: "Github",
          company_url: "https://github.com/PixelExperience",
          logo_path: "",
          duration: "Feb 2020 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like LineageOS, PixelExperience, ColtOS, HavocOS, etc. These contributions include building a custom roms for android, bug fixes, feature requests and maintaing regular latest as security patches release.",
          color: "#181717",
        },
        {
          title: "Colt OS",
          company: "Github",
          company_url: "https://github.com/PixelExperience",
          logo_path: "",
          duration: "Feb 2020 - July 2020",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like LineageOS, PixelExperience, ColtOS, HavocOS, etc. These contributions include building a custom roms for android, bug fixes, feature requests and maintaing regular latest as security patches release.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to build a Custom roms for android and publish them on XDA-Developers.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with React, Python, Custom Roms.",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Pandharpur Road, Mitra-Nagar, Mangalwedha - 413305, Dist.-Solapur, Maharashtra",
    avatar_image_path: "address_image.svg",
    location_map_link: "",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 8055580245",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
