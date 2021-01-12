import * as Actions from '../ActionTypes';

const initialUserState = {
  user: {
    name: '',
    lastAction: '',
    isLoggedIn: false
  }
}

export default function userReducer(state = initialUserState, action) {
  switch (action.type) {
    case Actions.SET_LOGGEDIN: 
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: true
        }
      };
    default:
      return state
  }
}
