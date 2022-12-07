// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const [honda, tesla] = cars;
//honda object destructuring
const {coloursByPopularity:[hondaTopColour, hondaSecondTopColour]}=honda;
const {speedStats:{topSpeed:hondaTopSpeed, zeroToSixty:hondaZeroToSixty}}=honda;
//tesla object destructuring
const {coloursByPopularity:[teslaTopColour, teslaSecondTopColour]}=tesla;
const {speedStats:{topSpeed:teslaTopSpeed, zeroToSixty:teslaZeroToSixty}}=tesla;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>topcolour</th>
      <th>SecondTopColour</th>
      <th>zeroToSixty</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
      <td>{teslaSecondTopColour}</td>
      <td>{teslaZeroToSixty}</td>
      
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
      <td>{hondaSecondTopColour}</td>
      <td>{hondaZeroToSixty}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
