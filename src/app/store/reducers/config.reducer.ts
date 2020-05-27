import {EConfigAction} from '../actions/config.action';
import {ConfigAction} from '../actions/config.action';
import {initialConfigState, IConfigState} from '../state/config.state';

export const configReducer = (
  state = initialConfigState,
  action: ConfigAction,
): IConfigState => {
  switch (action.type) {
    case EConfigAction.getConfigSuccess: {
      return {
        ...state,
        config: action.payload,
      };
    }
    default : return state;
  }
};
