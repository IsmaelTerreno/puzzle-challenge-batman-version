import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { store } from './redux/store/configureStore';
import { getNewPositionMovement, isSupportedMovement } from './utils';
import { decrementLeftMovements, movePosition } from './redux/reducers/level';

window.addEventListener('keydown', event => {
  if (isSupportedMovement(event)) {
    const currentLocation = store.getState().level.currentLocation;
    const rows = store.getState().level.rows;
    const nextLocation: CoordinatePosition = getNewPositionMovement(event, currentLocation, rows);
    console.log(nextLocation);
    store.dispatch(decrementLeftMovements());
    store.dispatch(movePosition(nextLocation));
    console.log('Moved.');
  }
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
