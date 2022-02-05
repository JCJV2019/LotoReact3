import React, { useEffect, useState } from "react";

function Serie2(props) {
  const [ mySerie, updateMySerie ] = useState(props.mySerie);

  return (
    <React.Fragment>
      <p>
        {mySerie.length > 0 && props.nomSerie2}
      </p>
      <ol className="serie2">
        {mySerie.map((x) => <li key={x}>{x}</li>)}
      </ol>
    </React.Fragment>
  );
}

export default Serie2