import * as actions from "./tasks.actions";

const INITIAL_STATE = {
  taskList: [],
  description: {},
  isLoading: false,
  error: null,
};
const taskReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case actions.FETCH_TASK: {
      return { ...state, isLoading: true };
    }
    case actions.FETCH_TASK_OK: {
      return {
        ...state,
        taskList: [],
        description: {},
        isLoading: false,
      };
    }
    case actions.FETCH_TASK_ERROR: {
      return { ...state, error: payload, isLoading: false };
    }
    default: {
      return state;
    }
  }
};

export default taskReducer;
