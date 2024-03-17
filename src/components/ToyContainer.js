import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onDeleteToy, onLikeToy }) {

  // Render ToyCard components for each toy
  const renderToys = toys.map((toy) => {
    return <ToyCard
      key={toy.id}
      toy={toy}
      onDeleteToy={onDeleteToy}
      onLikeToy={onLikeToy}
    />;
  })

  return (
    <div id="toy-collection">{renderToys}</div>
  );
}

export default ToyContainer;
