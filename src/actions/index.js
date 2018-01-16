import axios from 'axios';

const fetchAllCampers = () => {
  return (dispatch, getState) => {
    dispatch({
      type: 'APP_LOADING',
      payload: true
    });

    axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
      .then(({ data }) => {
        dispatch({
          type: 'FETCH_ALL_CAMPERS',
          payload: data
        });

        dispatch({
          type: 'APP_LOADING',
          payload: false
        });
      });
  }
}

export const actionCreators = {
  fetchAllCampers
};
