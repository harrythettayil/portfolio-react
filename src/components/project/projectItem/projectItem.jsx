import arrow from "../../../assets/images/arrow-up-right.svg";

function ProjectItem(props) {
  return (
    <a className="project" href={props.href} target="_blank" rel="noopener noreferrer">
      <div className="project-box">
        <img 
          className="project-img" 
          src={props.img} 
          alt={props.title} 
          loading="lazy" 
        />
        <div className="d-flex project-details">
          <div>
            <h5 className="mb-1">{props.title}</h5>
            <p className="third-color">{props.tools}</p>
          </div>
          <img className="arrow" src={arrow} alt="arrow" />
        </div>
      </div>
    </a>
  );
}

export default ProjectItem;
