import app from './app/reducer';
import config from './config/reducer';
import device from './device/reducer';
import { combineReducers } from 'redux';
import { fieldsReducer as fields } from './lib/redux-fields';
import { routerReducer as routing } from 'react-router-redux';

const resetStateOnLogout = (reducer, initialState) => (state, action) => {
  // Reset app state on logout, stackoverflow.com/q/35622588/233902.
  state = {
    app: state.app,
    config: initialState.config,
    device: initialState.device,
    routing: state.routing // Routing state has to be reused.
  };
  return reducer(state, action);
};

export default function configureReducer(initialState, platformReducers) {
  let reducer = combineReducers({
    ...platformReducers,
    app,
    config,
    device,
    fields,
    routing,
  });

  // The power of higher-order reducers, http://slides.com/omnidan/hor
  reducer = resetStateOnLogout(reducer, initialState);

  return reducer;
}
