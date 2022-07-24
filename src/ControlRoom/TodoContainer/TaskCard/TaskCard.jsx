const TaskCard = ({Task}) => {
    return (
      <>
        <h3>{Task.id}</h3>
        <p>{Task.description}</p>
        <span>{Task.active}</span>
      </>
    )
  };
  export default TaskCard;
  