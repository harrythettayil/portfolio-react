import portfolioImage from "../../assets/images/portfolio.png";
import boardroomsImage from "../../assets/images/boardrooms.png";
import forgonyxImage from "../../assets/images/forgonyx.png";
import otnaImage from "../../assets/images/otna.png";
import grandcochinImage from "../../assets/images/grand-cochin.png";
import clymateImage from "../../assets/images/clymate.png";

const projects = [
  {
    href: "https://harrythettayil.github.io/portfolio/",
    img: portfolioImage, // Use the imported image
    title: "this.site()",
    tools: "React.js",
  },
  {
    href: "https://harrythettayil.github.io/clymate/",
    img: clymateImage, // Use the imported image
    title: "Clymate Weather Dashboard",
    tools: "React.js, Tailwind, Shadcn, Recharts",
  },
  {
    href: "https://board-rooms.vercel.app/",
    img: boardroomsImage, // Use the imported image
    title: "Boardrooms",
    tools: "React.js, Next.js, Tailwind",
  },
  {
    href: "https://www.grandcochin.com",
    img: grandcochinImage, // Use the imported image
    title: "Grand Cochin",
    tools: "Landing page, responsive, web3 form",
  },
  {
    href: "https://www.otnainfotech.com/",
    img: otnaImage, // Use the imported image
    title: "OTNA Infotech",
    tools: "Landing page, responsive",
  },
  {
    href: "https://harrythettayil.github.io/forgonyx/",
    img: forgonyxImage, // Use the imported image
    title: "Forgonyx",
    tools: "Landing page, responsive",
  },
];

export default projects;
