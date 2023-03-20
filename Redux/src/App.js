import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { incNumber,decNumber } from "./actions/index";

function App() {
  const myState = useSelector((state)=> state.changeTheNumber )
  const dispatch = useDispatch();
  const [first, setfirst] = useState("")    
return (
<>
    <div className="container"><h4>
    Enter Increment value : <input value={first} onChange={(e)=>setfirst(e.target.value)}/>
    </h4>
      <h1> Increment/Decrement Counter</h1>
      <h4>using React and Redux</h4>
      <div className="quantity" style={{"margin" : "10px"}}>
        <button className="quantity_minus" title="Decrement" onClick={()=> dispatch(decNumber(Number(first)))}>
          <span> - </span>
        </button>
        <input name="quantity" type="text" className="quantity_input" value={myState}  />
        <button className="quantity_minus" title="Increment" onClick={()=> dispatch(incNumber(Number(first)))}>
          <span> + </span>
        </button>
      </div>
    </div>
</>
  );
}

export default App;
