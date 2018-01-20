import axios from 'axios';

const fetchAllCampers = () => {
  return (dispatch, getState) => {
    dispatch({
      type: 'APP_LOADING',
      payload: true
    });

    function recentCampers() {
      return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent');
    }

    function allTimeCampers() {
      return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime');
    }

    axios.all([recentCampers(), allTimeCampers()])
      .then(axios.spread((recentCampers, allTimeCampers) => {
        dispatch({
          type: 'FETCH_CAMPERS',
          recentCampers: recentCampers.data,
          allTimeCampers: allTimeCampers.data
        });

        dispatch({
          type: 'APP_LOADING',
          payload: false
        });
      }));
  }
}

export const actionCreators = {
  fetchAllCampers
};
