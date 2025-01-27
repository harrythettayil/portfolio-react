function ExperienceItem(props) {
  return (
    <div className="exp-box bg-color">
      <h5>{props.title}</h5>
      <p className="third-color">{props.time}</p>
    </div>
  );
}

export default ExperienceItem;
