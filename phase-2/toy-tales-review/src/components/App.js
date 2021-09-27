import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toyArray, setToyArray] = useState([]);

  const addNewToy = (newToy) => {
    setToyArray(toyArray => [...toyArray, newToy])
  }

  useEffect(() => {  

    fetch("http://localhost:3001/toys")
    .then(res => res.json())
    .then(toys => setToyArray(toys))

  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm addNewToy={addNewToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toyArray={toyArray}/>
    </>
  );
}

export default App;
