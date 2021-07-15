import React, {useContext, useEffect, useState} from "react";
import { Context } from "../store/appContext";

  const Cell = (props) => {
  const { store, actions } = useContext(Context);

  const [ cell, setCell]= useState(props.value);

  useEffect(()=>{
    let aux=store.board[props.pos[0]][props.pos[1]];
    setCell(aux);

  },[store.board,props.pos]);
  return (
    <>
      <td 
      key={`${Math.random()}`}
        className={cell=== 1
            ? "bg-success border border-4"
            : cell === 2
            ? "bg-secondary"
            : cell === 3
            ? "bg-danger"
            : cell === 10
            ? "border border-4 border-warning bg-light"
            :"bg-primary"
        }
        onClick={() => {actions.action(props.pos[0], props.pos[1])}}
      ></td>
    </>
  );
};
export default Cell;
