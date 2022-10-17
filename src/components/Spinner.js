import React from "react";
import Loading from "../loading.gif.gif"
const Spinner = () => {
return (
      <div className="text-center my-3" >
        <img src={Loading} alt="Loading..." />
      </div>
    );
  
}

export default Spinner;