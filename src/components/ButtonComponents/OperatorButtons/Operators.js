import React, {useState} from "react";
import {operators} from "../../../data";
import OperatorButton from "./OperatorButton";

//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operatorsState, setOperatorsState] = useState(operators); 
  return (
    <div>
      {operatorsState.map((character, index) => (
        <OperatorButton key = {index} display = {character}/>
      ))

      }
    </div>
  );
};

export default Operators;
