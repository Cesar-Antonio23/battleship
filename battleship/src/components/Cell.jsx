import React, {useContext, useEffect, useState} from "react";
import { Context } from "../store/appContext";

  const Cell = (props) => {
  const { store, actions } = useContext(Context);

  const [ squared, setSquare]= useState(props.value);

  useEffect(()=>{
    let aux=store.board[props.pos[0]][props.pos[1]];
    setSquare(aux);

  },[store.board,props.pos]);
  return (
    <>
      <td 
      key={`${Math.random()}`}
        className={squared=== 1
            ? "bg-success border border-4"
            : squared === 2
            ? "bg-secondary"
            : squared === 3
            ? "bg-danger"
            : squared === 10
            ? "border border-4 border-warning bg-light"
            :"bg-primary"
        }
        onClick={() => {actions.action(props.pos[0], props.pos[1])}}
      ></td>
    </>
  );
};
export default Cell;
