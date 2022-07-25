import {createStore, combineReducers} from 'redux';
import TaskListReduxReducer from './TaskListRedux/tasks.reducer';

const rootReducer = combineReducers({
   
    TaskListRedux: TaskListReduxReducer,
  });
  
const store = createStore(rootReducer);

export default store
