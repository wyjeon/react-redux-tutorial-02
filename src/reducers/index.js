// Root Reducer
import { combineReducers } from 'redux';
import counter from './counter';
import ui from './ui';

// combineReducers()를 이용하여 다수의 리듀서를 하나로 묶음
const reducers = combineReducers({
  counter,
  ui,
});

export default reducers;
