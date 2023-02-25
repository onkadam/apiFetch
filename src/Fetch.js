import React, { useState } from "react";

function Fetch() {
  const [state, setState] = useState();

  const getApi = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setState(json);
      });
  };

  return (
    <>
      <h2>Get API</h2>
      <button onClick={getApi}>Fetch API</button>
      <br></br>

      <pre>{JSON.stringify(state, null, 2)}</pre>
    </>
  );
}
export default Fetch;
