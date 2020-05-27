import {EUserAction} from '../actions/user.action';
import {UserAction} from '../actions/user.action';
import {initialUserState, IUserState} from '../state/user.state';

export const userReducer = (
  state = initialUserState,
  action: UserAction,
): IUserState => {
  switch (action.type) {
    case EUserAction.getUsersSuccess: {
      return {
        ...state,
        users: action.payload,
      };
    }
    case EUserAction.getUserSuccess: {
      return {
        ...state,
        selectedUser: action.payload,
      };
    }
    default : return state;
  }
};
