import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { store } from './redux/store/configureStore';
import { getNewPositionMovement, getNextLevelNumber, hasNextLevel, isSupportedMovement } from './utils';
import { decrementLeftMovements, goToLevel, movePosition, restartToFirstLevel } from './redux/reducers/level';
import { addResultGame } from './redux/reducers/score';
import { setMessageLevel } from './redux/reducers/game';

window.addEventListener('keydown', event => {
  if (isSupportedMovement(event)) {
    const currentLocation = store.getState().level.level.currentLocation;
    const matrix = store.getState().level.level.matrix;
    const finishLocation = store.getState().level.level.finishLocation;
    const leftMovements = store.getState().level.level.leftMovements;
    const currentLevelNumber = store.getState().level.currentLevelNumber;
    const nextLocation: CoordinatePosition = getNewPositionMovement(event, currentLocation, matrix);
    const isMoved = nextLocation.column !== currentLocation.column || nextLocation.row !== currentLocation.row;

    if (isMoved) {
      store.dispatch(decrementLeftMovements());
      store.dispatch(movePosition(nextLocation));
      const isWinnerPlayer = finishLocation.row === nextLocation.row && finishLocation.column === nextLocation.column;
      const isLoserPlayer = leftMovements < 2;
      if (isLoserPlayer) {
        setTimeout(() => {
          store.dispatch(
            addResultGame({
              leftMovements: leftMovements,
              winner: false
            })
          );
          store.dispatch(setMessageLevel('You lose but you can try again.'));
          store.dispatch(restartToFirstLevel());
        }, 1500);
      }
      if (isWinnerPlayer) {
        setTimeout(() => {
          store.dispatch(
            addResultGame({
              leftMovements: leftMovements,
              winner: true
            })
          );
          if (hasNextLevel(currentLevelNumber)) {
            store.dispatch(setMessageLevel('You win! keep playing all day long.'));
            store.dispatch(goToLevel(getNextLevelNumber(currentLevelNumber)));
          } else {
            store.dispatch(setMessageLevel('Congratulations now Batman have all the diamonds and is more richer!!. You can star again and break records :D'));
            store.dispatch(restartToFirstLevel());
          }
        }, 1500);
      }
    }
  }
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
