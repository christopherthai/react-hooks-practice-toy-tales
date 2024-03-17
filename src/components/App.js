import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((response) => response.json())
      .then((toys) => setToys(toys));
  }, []);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  const handleAddNewToy = (newToy) => {
    setToys([...toys, newToy]);
  }

  const handleDeleteToy = (id) => {
    const updatedToys = toys.filter((toy) => toy.id !== id);
    setToys(updatedToys);
  }

  const handleLikeToy = (id) => {
    const updatedToys = toys.map((toy) => {
      if (toy.id === id) {
        return {
          ...toy,
          likes: toy.likes + 1,
        };
      } else {
        return toy;
      }
    });
    setToys(updatedToys);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddNewToy={handleAddNewToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer
        toys={toys}
        onDeleteToy={handleDeleteToy}
        onLikeToy={handleLikeToy}
      />
    </>
  );
}

export default App;
