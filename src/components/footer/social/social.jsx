import socials from "./socials";

function Social() {
  return (
    <div className="contact-box">
      {socials.map((social, index) => (
        <a key={index} href={social.href} target="_blank">
          <img className="contact-icon" src={social.img} alt={social.title} />
        </a>
      ))}
    </div>
  );
}

export default Social;
