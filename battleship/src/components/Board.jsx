import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import Cell from "./Cell";

const Board = (props) => {
  const { store } = useContext(Context);

  let posicion = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  useEffect(() => {

  }, [store.board]);

  return (
    <div className="container ">
      <table className="table bg-info rounded table-bordered ">
        <thead>
          <tr>
            <th scope="col"></th>
            {[...Array(10)].map((_, nindex) => {
              return (
                <th scope="col" key={`n${nindex}`}>
                  {nindex + 1}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {store.board.map((i, index) => {
            return (
              <tr key={index}>
                <th key={`b${index}`} scope="row">
                  {posicion[index]}
                </th>
                {store.board[index].map((l, lindex) => {
                  return (
                    <Cell
                      key={`c${lindex}`}
                      value={store.board[index][lindex]}
                      pos={[index, lindex]}
                    />
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

Board.propTypes = {
  board: PropTypes.array,
};
export default Board;
