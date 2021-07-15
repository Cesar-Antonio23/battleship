import React from "react";
import Board from "../components/Board.jsx";
import '../../src/home.css';

export const Home = () => {
  return (
    <div className=" background container text-center mb-5">
      <div className="row">
        <div className="col-12 ">
          <h3 className="text-warning mt-2 ">BattleShip</h3>

          <Board />
          
        </div>
      </div>
    </div>
  );
};
export default Home;
