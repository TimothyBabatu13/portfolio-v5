import { Icons } from "@/components/icons";
import { Download, HomeIcon } from "lucide-react";

export const DATA = {
  name: "Timothy Babatunde Akanbi",
  initials: "TM",
  url: "https://portfolio-v5-navy.vercel.app/",
  location: "Lagos, Nigeria",
  // locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description: "engineer | web3 developer",
  summary:
    "I like exploring computer science concepts, especially their theoretical aspects. I'm currently learning Web 3.0 stuff.",
  avatarUrl: "/timothy_img.png",
  skills: [
    "TypeScript",
    "JavaScript",
    "React.js",
    "Next.js",
    "Express.js",
    "PostgreSQL",
    "Git",
    "Vercel",
    "Vercel AI SDK",
    "Node.js",
    "Supabase",
    "Firebase"
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/timothy_resume.pdf", icon: Download, label: "Resume" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "knbtimothy@gmail.com",
    // tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/TimothyBabatu13",
        icon: Icons.github,

        navbar: true,
      },
      // LinkedIn: {
      //   name: "LinkedIn",
      //   url: "https://linkedin.com/in/nileshpahari",
      //   icon: Icons.linkedin,

      //   navbar: true,
      // },
      X: {
        name: "X",
        url: "https://x.com/timothy_akanbii",
        icon: Icons.x,

        navbar: true,
      },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://youtube.com/@nileshpahari",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "mailto:knbtimothy@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  // work: [
  // {
  //   company: "Google Developer Groups",
  //   href: "https://gdghit.site",
  //   badges: [],
  //   location: "Haldia, India",
  //   title: "Web Developer",
  //   logoUrl: "/gdg.png",
  //   start: "March 2025",
  //   end: "Present",
  //   description:
  //     "Developed a website for Google Developer Groups Haldia. Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
  // },
  // ],
  education: [
    {
      school: "Federak University of Technology, Minna",
      degree: "Bachelor of Engineering in Agricultural and Bio-Resources Engineering",
      logoUrl: "/futlogo.png",
      start: "2019",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Stampchain",
      href: "https://stampchain-eight.vercel.app/",
      active: true,
      description:
        "A web app where users can see upcoming coding contests from various platforms like Codeforces, Leetcode, CodeChef, etc., bookmark them, and enable notifications.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "NextAuth",
        "Supabase",
        "web3.js",
        "Solana sdk",
      ],
      links: [
        {
          type: "Website",
          href: "https://stampchain-eight.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/TimothyBabatu13/Stampchain",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/contestpulse.webp",
      video: "",
    },
    {
      title: "Vensol",
      href: "https://vensol.vercel.app/",
      active: true,
      description:
        "A web app to download videos or audio from YouTube and other platforms using yt-dlp and FFmpeg, with custom options.",
      technologies: [
        "TypeScript",
        "React.js",
        "web3js",
        "solana sdk",
        "firebase"
      ],
      links: [
        {
          type: "Website",
          href: "https://vensol.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/TimothyBabatu13/VenSol",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/clipzo.webp",
      video: "",
    },
    {
      title: "TokenMind",
      href: "https://token-mind.vercel.app/",
      active: false,
      description:
        "A decentralized voting platform built on the solana blockchain.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Vercel AI SDK",
        "web3js",
        "Civic Auth",
      ],
      links: [
        {
          type: "Website",
          href: "https://token-mind.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/TimothyBabatu13/TokenMind",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/votana.png",
      video: "",
    },
    {
      title: "AegisHealth Smart",
      href: "https://aegis-health-smart.vercel.app/",
      active: false,
      description:
        "A web-based crypto wallet where users can store private keys and interact with smart contracts.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Firebase"
      ],
      links: [
        {
          type: "Website",
          href: "https://aegis-health-smart.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/TimothyBabatu13/AegisHealth-Smart",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/wallet.png",
      video: "",
    },
    // {
    //   title: "CF MCP Server",
    //   href: "https://cf-mcp.vercel.app/",
    //   active: false,
    //   description:
    //     "A MCP server for Codeforces to fetch contest data and other resources programmatically.",
    //   technologies: ["Node.js", "TypeScript", "zod"],
    //   links: [
    //     /*{
    //       type: "Website",
    //       href: "https://cf-mcp.vercel.app/",
    //       icon: <Icons.globe className="size-3" />,
    //     },*/
    //     {
    //       type: "GitHub",
    //       href: "https://github.com/nileshpahari/codeforces-mcp",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "/cfmcp.png",
    //   video: "",
    // },
    // {
    //   title: "Media Sphere",
    //   href: "",
    //   active: false,
    //   description: "Backend for a media sharing platform similar to YouTube.",
    //   technologies: ["Node.js", "Express", "MongoDB", "TypeScript"],
    //   links: [
    //     {
    //       type: "GitHub",
    //       href: "https://github.com/nileshpahari/media-sphere/",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "/mediasphere.webp",
    //   video: "",
    // },
    // {
    //   title: "Basic React Blog",
    //   href: "https://basic-react-blogging-app.netlify.app/",
    //   active: false,
    //   description:
    //     "A blogging platform like Medium, allowing users to create, read, update, and delete articles.",
    //   technologies: ["React", "Redux", "TinyMCE", "Appwrite"],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://basic-react-blogging-app.netlify.app/",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "GitHub",
    //       href: "https://github.com/nileshpahari/react-blog",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "/blog.png",
    //   video: "",
    // },
    // {
    //   title: "Top Chess",
    //   href: "https://topchess.netlify.app/",
    //   active: false,
    //   description:
    //     "A multiplayer real-time chess platform similar to chess.com or lichess.org.",
    //   technologies: ["React", "WebSockets", "TypeScript", "Prisma"],
    //   links: [
    //     {
    //       type: "GitHub",
    //       href: "https://github.com/nileshpahari/topchess",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "/topchess.jpeg",
    //   video: "",
    // },
  ],

  hackathons: [
    // {
    //   title: "Hack Western 5",
    //   dates: "November 23rd - 25th, 2018",
    //   location: "London, Ontario",
    //   description:
    //     "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
    //   links: [],
    // },
  ],
} as const;
