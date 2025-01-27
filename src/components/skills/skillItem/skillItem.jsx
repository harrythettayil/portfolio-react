function SkillItem(props) {
  return (
    <div className="tool-box text-center">
      <img 
        className="tool-img" 
        src={props.img} 
        alt={props.title} 
        loading="lazy" 
      />
      <h5>{props.title}</h5>
    </div>
  );
}

export default SkillItem;
