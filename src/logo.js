import React, { useState } from "react";
import Serie from "./serie";
import Serie2 from "./serie2";

let Series = {
  serieOrig: [],
  serie: [],
  serie2: []
};
let OurContext = React.createContext(Series);

function Logo(props) {
  const [ mySerieOrig, updateMySerieOrig ] = useState(Series.serieOrig);
  const [ mySerie, updateMySerie ] = useState(Series.serie);
  const [ mySerie2, updateMySerie2 ] = useState(Series.serie2);

  function calcularSerie(numSerie) {
    const howMany = numSerie[0];
    const fromNum = numSerie[1];
    const toNum = numSerie[2];
    const mySerie = [];
    let myNum;
    if (howMany > 0 && fromNum < toNum) {
      let i = 1;
      do {
        myNum = Math.floor((Math.random() * toNum) + fromNum);
        if (!mySerie.includes(myNum)) {
          mySerie.push(myNum);
          i++;
        }
      }
      while (i <= howMany);
    }
    return mySerie;
  }

  function calcularSeries(numSerie1, numSerie2) {
    const mySerie = calcularSerie(numSerie1);
    const mySerie2 = calcularSerie(numSerie2);
    updateMySerieOrig(mySerie);
    updateMySerie(mySerie);
    updateMySerie2(mySerie2);
    Series = {
      serieOrig: mySerie,
      serie: mySerie,
      serie2: mySerie2
    };
    OurContext = React.createContext(Series);
  }

  return (
    <React.Fragment>
      <button onClick={() => calcularSeries(props.numSerie1, props.numSerie2)}>
        <img src={props.logo} className="App-logo" alt="Logo Juego" />
      </button>
      <OurContext.Provider value={Series}>
        <Serie mySerieOrig={mySerieOrig} mySerie={mySerie} />
        <Serie2 mySerie={mySerie2} nomSerie2={props.nomSerie2}/>
      </OurContext.Provider>
    </React.Fragment>
  );
}

export default Logo;