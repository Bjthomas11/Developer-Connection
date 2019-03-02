// dashboard profile reducer
import {
  GET_PROFILE,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE
} from "../actions/types";
const initalState = {
  profile: null,
  profiles: null,
  loading: false
};

export default function(state = initalState, action) {
  switch (action.type) {
    case PROFILE_LOADING:
      return {
        ...state,
        laoding: true
      };
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
        loading: false
      };
    case CLEAR_CURRENT_PROFILE:
      return {
        ...state,
        profile: null
      };
    default:
      return state;
  }
}
