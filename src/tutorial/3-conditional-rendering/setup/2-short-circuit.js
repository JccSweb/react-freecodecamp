import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");

  const [isError, setIsError] = useState(false);
  /* const firstValue = text || "hello world";
  const secondValue = text && "hello world"; */

  return (
    <>
      {/* <>{/* firstValue 
     Value {secondValue} */}

      {/* text && <h1>Hello world</h1> */}
      {/* !text && <h1>Hello world</h1> */}

      <h1>{text || "john doe"}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        Toggle error
      </button>

      {isError && <h1>Error...</h1>}
      {isError ? <h1>Another Error...</h1>  : <h1>Its is not an error</h1>}
    </>
  );
};

export default ShortCircuit;
