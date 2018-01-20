import _ from 'lodash';

const DEFAULT_STATE = {
  recentCampers: null,
  allTimeCampers: null,
  loading: false
};

export default (state = DEFAULT_STATE, action) => {
  let newState = null;

  switch (action.type) {
    case 'FETCH_CAMPERS':
      newState = _.cloneDeep(state);
      newState.recentCampers = action.recentCampers;
      newState.allTimeCampers = action.allTimeCampers;
      return newState;
    case 'APP_LOADING':
      newState = _.cloneDeep(state);
      newState.loading = action.payload;
      return newState;
    default:
      return state;
  }
}
