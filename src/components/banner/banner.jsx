import './banner.css';
import image from "../../assets/images/harry.jpg";

function Banner() {
  return (
    <div id="banner" className="container">
      <div className="d-flex banner">
        <div className="banner-text">
          <p>Hi!&nbsp;I'm</p>
          <h1 className="mb-2">Harry</h1>
          <p>
           A <span className="secondary-color">React-Focused</span> Front-End Developer.
          </p>
        </div>
        <img
          className="banner-img"
          src={image}
          alt="designer"
        />
      </div>
    </div>
  );
}

export default Banner;
