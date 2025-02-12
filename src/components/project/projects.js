import portfolioImage from "../../assets/images/portfolio.png";
import boardroomsImage from "../../assets/images/boardrooms.png";
import forgonyxImage from "../../assets/images/forgonyx.png";
import conversaxImage from "../../assets/images/conversax.png";

const projects = [
  {
    href: "https://harrythettayil.github.io/portfolio/",
    img: portfolioImage, // Use the imported image
    title: "this.site()",
    tools: "React",
  },
  {
    href: "https://board-rooms.vercel.app/",
    img: boardroomsImage, // Use the imported image
    title: "Boardrooms",
    tools: "Next.js, Tailwind",
  },
  {
    href: "https://harrythettayil.github.io/forgonyx/",
    img: forgonyxImage, // Use the imported image
    title: "Forgonyx",
    tools: "Landing page, responsive",
  },
  {
    href: "https://harrythettayil.github.io/conversax/",
    img: conversaxImage, // Use the imported image
    title: "ConversaX",
    tools: "Landing Page, responsive",
  },
];

export default projects;
