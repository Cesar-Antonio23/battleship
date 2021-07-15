const getState = ({ getStore, getActions, setStore }) => {
    return {
      store: {
        board: [
            [0, 0, 0, 0, 0, 6, 6, 6, 0, 0],
            [0, 0, 0, 7, 0, 0, 0, 0, 0, 4],
            [0, 0, 0, 7, 0, 0, 0, 0, 0, 4],
            [0, 0, 0, 7, 0, 0, 0, 0, 0, 4],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
            [5, 0, 0, 0, 0, 0, 0, 0, 0, 4],
            [5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [5, 0, 0, 0, 0, 8, 8, 0, 0, 0],
            [5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          ],
        ship1: {
          length: 5,
          sunken: false,
          pos: [
            [9, 1],
            [9, 2],
            [9, 3],
            [9, 4],
            [9, 5],
          ],
          hits: 0,
        },
        ship2: {
          length: 4,
          sunken: false,
          pos: [
            [0, 5],
            [0, 6],
            [0, 7],
            [0, 8],
          ],
          hits: 0,
        },
        ship3: {
          length: 3,
          sunken: false,
          pos: [
            [5, 0],
            [6, 0],
            [7, 0],
          ],
          hits: 0,
        },
        ship4: {
          length: 3,
          sunken: false,
          pos: [
            [3, 1],
            [3, 2],
            [3, 3],
          ],
          hits: 0,
        },
        ship5: {
          length: 2,
          sunken: false,
          pos: [
            [5, 7],
            [6, 7],
          ],
          hits: 0,
        },
        lastShoot: [0, 0],
        shoots: 0,
        victory: false,
        
      },
      actions: {
        action: (x, y) => {
          let auxArray = getStore().board.slice();
          let number = getStore().board[x][y];
          let shipPosition = [];
          switch (number) {
            case 0:
              auxArray[x][y] = 2;
              break;
            case 1:
            case 2:
            case 3:
              break;
            default:
              auxArray[x][y] = 1;
              setStore({ board: auxArray });
              if (getActions().checkSunken(number)) {
                switch (number) {
                  case 4:
                    shipPosition = getStore().ship1.pos.slice();
                    break;
                  case 5:
                    shipPosition = getStore().ship2.pos.slice();
                    break;
                  case 6:
                    shipPosition = getStore().ship3.pos.slice();
                    break;
                  case 7:
                    shipPosition = getStore().ship4.pos.slice();
                    break;
                  case 8:
                    shipPosition = getStore().ship5.pos.slice();
                    break;
                  default:
                    break;
                }
                getStore().board.map((element, index) => {
                  getStore().board[index].map((thing, thindex) => {
                    shipPosition.map((position) => {
                      console.log(`${position}, ${index},${thindex}`);
                      if (position[0] === index && position[1] === thindex)
                        auxArray[thindex][index] = 3;
                      return true;
                    });
                    return true;
                  });
                  return true;
                });
              } else auxArray[x][y] = 1;
              break;
          }
          setStore({ board: auxArray });
          setStore({ shoots: getStore().shoots + 1 });
          setStore({ lastShoot: [x, y] });
          let successCounter=0;
          getStore().board.map((element, index) => {
            getStore().board[index].map((thing, thindex) => {
              if(getStore().board[index][thindex]===0||getStore().board[index][thindex]===3||getStore().board[index][thindex]===2)
              successCounter+=1;
              return true;
            });
            return true;
          });
          
        },
  
  
        checkSunken: (boat) => {
          let aux = 0;
          getStore().board.map((_, index) => {
            getStore().board[index].map((element) => {
              if (element === boat) {
                aux += 1;
              }
              return null;
            });
            return null;
          });
          switch (boat) {
            case 4:
              if (getStore().ship1.length - aux === 5) {
                setStore(
                  Object.assign(getStore().ship1, {
                    sunken: true,
                    hits: 5,
                  })
                );
                return true;
              } else
                setStore(
                  Object.assign(getStore().ship1, {
                    sunken: false,
                    hits: 4 - aux,
                  })
                );
              return false;
            case 5:
              if (getStore().ship2.length - aux === 4) {
                setStore(
                  Object.assign(getStore().ship2, {
                    sunken: true,
                    hits: 4,
                  })
                );
                return true;
              } else
                setStore(
                  Object.assign(getStore().ship2, {
                    sunken: false,
                    hits: 4 - aux,
                  })
                );
              return false;
            case 6:
              if (getStore().ship3.length - aux === 3) {
                setStore(
                  Object.assign(getStore().ship3, { sunken: true, hits: 3 })
                );
                return true;
              } else
                setStore(
                  Object.assign(getStore().ship3, {
                    sunken: false,
                    hits: 3 - aux,
                  })
                );
              return false;
            case 7:
              if (getStore().ship4.length - aux === 3) {
                setStore(
                  Object.assign(getStore().ship4, { sunken: true, hits: 3 })
                );
                return true;
              } else
                setStore(
                  Object.assign(getStore().ship4, {
                    sunken: false,
                    hits: 3 - aux,
                  })
                );
              return false;
            case 8:
              if (getStore().ship5.length - aux === 2) {
                setStore(
                  Object.assign(getStore().ship5, { sunken: true, hits: 2 })
                );
                return true;
              } else
                setStore(
                  Object.assign(getStore().ship5, {
                    sunken: false,
                    hits: 2 - aux,
                  })
                );
              return false;
              default:
                
          }
        },
      },
    };
  };
  export default getState;
  