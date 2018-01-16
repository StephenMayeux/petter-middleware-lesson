import _ from 'lodash';

const DEFAULT_STATE = {
  campers: null,
  loading: false
};

export default (state = DEFAULT_STATE, action) => {
  let newState = null;

  switch (action.type) {
    case 'FETCH_ALL_CAMPERS':
      newState = _.cloneDeep(state);
      newState.campers = action.payload
      return newState;
    case 'APP_LOADING':
      newState = _.cloneDeep(state);
      newState.loading = action.payload;
      return newState;
    default:
      return state;
  }
}
