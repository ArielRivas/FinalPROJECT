import { createStore, combineReducers } from 'redux';
import AuthReducer from './auth/auth.reducer';
import TaskListReduxReducer from './TaskListRedux/tasks.reducer';

const rootReducer = combineReducers({
  auth: AuthReducer,
  TaskListRedux: TaskListReduxReducer,
});

const store = createStore(rootReducer);

export default store
