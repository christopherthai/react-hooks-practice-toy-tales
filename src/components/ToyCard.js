import React from "react";

function ToyCard({ toy, onDeleteToy, onLikeToy }) {
  const { id, name, image, likes } = toy;

  // Function to handle the delete button click
  const handleDeleteClick = () => {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => onDeleteToy(id));
  }

  // Function to handle the like button click
  const handleLikeClick = () => {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: likes + 1,
      }),
    })
      .then((response) => response.json())
      .then((updatedToy) => onLikeToy(id));
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button onClick={handleLikeClick} className="like-btn">Like {"<3"}</button>
      <button onClick={handleDeleteClick} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
