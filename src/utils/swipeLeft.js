import cloneDeep from 'lodash.clonedeep';
import addNumber from "./addNumber";
import isGameOver from "./isGameOver";

const swipeLeft = ({ setGameGrid }) => {
  setGameGrid((gameGrid) => {
    let newGrid = cloneDeep(gameGrid);

    for (let i = 0; i < newGrid.length; i++) {
      for (let j = 0; j < newGrid[i].length; j++) {
        if (newGrid[i][j] !== 0) {
          let k = j;
          while (k - 1 >= 0 && newGrid[i][k - 1] === 0) {
            newGrid[i][k - 1] = newGrid[i][k];
            newGrid[i][k] = 0;
            k--;
          }
          if (
            k - 1 < newGrid[i].length &&
            newGrid[i][k - 1] === newGrid[i][k]
          ) {
            newGrid[i][k - 1] *= 2;
            newGrid[i][k] = 0;
          }
        }
      }
    }
    // Check if there was any movement in the grid
    if (JSON.stringify(gameGrid) !== JSON.stringify(newGrid)) {
      addNumber(newGrid);
    }
    if (isGameOver(newGrid)) {
      alert('game over');
    }

    return newGrid;
  });
};

export default swipeLeft;