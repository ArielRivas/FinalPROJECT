export const FETCH_TASK = 'FETCH_TASK';
export const FETCH_TASK_OK = 'FETCH_TASK_OK';
export const FETCH_TASK_ERROR = 'FETCH_TASK_ERROR';

export const getTaskList = (url) => dispatch => {
    dispatch({ type: FETCH_TASK });
  
    const pageFromUrl = url.split('=')[1];
  
    fetch(url)
        .then((res) => res.json())
        .then((res) => {
          if (res.error) throw new Error(res.error);
          
          dispatch({
            type: FETCH_TASK_OK,
            payload: { ...res, page: pageFromUrl },
          });
        })
        .catch((error) => {
          console.log('error', error.message);
          dispatch({
            type: FETCH_TASK_ERROR,
            payload: error.message,
          });
        });
  };
  