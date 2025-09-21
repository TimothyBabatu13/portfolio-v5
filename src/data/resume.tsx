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
    "Node.js",
    "TailwindCSS",
    "web3.js",
    "Solana sdk",
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
        `A web-based campaign platform built on Solana that turns ordinary promotions into real on-chain value. Instead of paper vouchers or clunky coupon codes, brands and influencers mint tokens and distribute them directly to people. These tokens can be redeemed for products, services, or experiences, creating a seamless and engaging way to connect with customers.`,
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
      image: "/stampchain.png",
      video: "",
    },
    {
      title: "Vensol",
      href: "https://vensol.vercel.app/",
      active: true,
      description:
        "A decentralized web-based payment platform built on Solana that makes everyday transactions fast, secure, and wallet-friendly. Instead of relying on traditional banking apps or manual bill splitting, users connect with their crypto wallets to send and receive SOL instantly. QR codes are generated for seamless bill sharing between friends, making group payments simple and transparent. VenSol brings the power of blockchain to daily spending, creating a smooth and trustless way to manage money with others.",
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
      image: "/Vensol.png",
      video: "",
    },
    {
      title: "TokenMind",
      href: "https://token-mind.vercel.app/",
      active: false,
      description:
        "TokenMind is a web-based AI agent built with Next.js and powered by Vercel AI SDK. It helps users explore the crypto space by discovering trending tokens and retrieving detailed token information using wallet addresses. Users can log in securely with Civic authentication, ensuring a smooth and decentralized experience. While the platform showcases intelligent token insights, functionalities are limited due to external API rate limit.",
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
      image: "/tokenMind.png",
      video: "",
    },
    {
      title: "AegisHealth Smart",
      href: "https://aegis-health-smart.vercel.app/",
      active: true,
      description:
        "AegisHealth Smart is a web-based health and wellness platform designed to help individuals take charge of their wellbeing. The frontend was built to deliver a smooth, user-friendly experience that encourages proactive health management. From tracking wellness goals to accessing personalized insights, the platform empowers users to make informed decisions about their lifestyle—all through an intuitive and responsive interface.",
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
      image: "/project-1.jpg",
      video: "",
    },
    {
      title: "TexttIt",
      href: "https://textit.vercel.app/",
      active: true,
      description:
        "TextIt is a web-based messaging platform designed to make communication effortless and real-time. Built with simplicity and clarity in mind, the app allows users to connect instantly, share thoughts, and engage in meaningful conversations.",
      technologies: ["React.js", "Javascript", "Firebase"],
      links: [
        {
          type: "Website",
          href: "https://textit.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/TimothyBabatu13/Textit",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/project-2.jpg",
      video: "",
    },
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



