import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import TaskCard from "../TaskCard/TaskCard";

const TaskListFromBack = () => {
	const dispatch = useDispatch();
	const { task, error, isLoading } = useSelector(state => state.tasks);
	const getTask = (url = `https://backend-grupo1.vercel.app/users/task/`) => {
		dispatch(TaskListFromBack(url));
	  };
	
	  useEffect(() => {
		getTask();
	  });

      return (
        <div className="">
          {isLoading && <div>Loading...</div>}
    
          {error && <div>{error}</div>}
    
          {!error && task.map((task) => <TaskCard key={task.id} task={task} />)}
        </div>
      );
    
      
}

export default TaskListFromBack;