import React, { useState } from "react";

function Serie(props) {
  const [ mySerieOrig, updateMySerieOrig ] = useState(props.mySerieOrig);
  const [ mySerie, updateMySerie ] = useState(props.mySerie);

  function ordenar() {
    updateMySerieOrig(mySerie.slice());
    updateMySerie(mySerie.sort((a,b) => a - b));
  }

  function desordenar() {
    //updateMySerieOrig(mySerieOrig);
    updateMySerieOrig(mySerieOrig.slice());
    updateMySerie(mySerieOrig);
  }

  return (
    <React.Fragment>
    {mySerie.length > 0 &&
      <div className="serie"
      onMouseEnter={() => ordenar()}
      onMouseLeave={() => desordenar()}
      >
      <ol>
        {mySerie.map((x) => <li key={x}>{x}</li>)}
      </ol>
    </div>
    }
    </React.Fragment>
  );
}

export default Serie;