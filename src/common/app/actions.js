export const APP_START = 'APP_START';
export const APP_INIT_COMPLETE = 'APP_INIT_COMPLETE';

const asyncInit = async (dispatch) => {
  // do any async init stuff here
  dispatch({ type: APP_INIT_COMPLETE });
};

export function start() {
  return ({ dispatch }) => {
    asyncInit(dispatch);

    return {
      type: APP_START
    };
  };
}
