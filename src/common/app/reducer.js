import * as actions from './actions';
import { Record } from 'immutable';

const InitialState = Record({
  initComplete: false
});

export default function appReducer(state = new InitialState, action) {
  if (!(state instanceof InitialState)) return new InitialState(state);

  switch (action.type) {

    case actions.APP_INIT_COMPLETE:
      return state.set('initComplete', true);

  }

  return state;
}
