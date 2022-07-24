const TaskCard = ({Task}) => {
    return (
      <>
        <h3>{Task._id}</h3>
        <p>{Task.descripcion}</p>
        <span>{Task.check}</span>
      </>
    )
  };
  export default TaskCard;
  