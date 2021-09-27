import React, { useState } from "react";



function ToyForm({addNewToy}) {

  const [name, setName] = useState("")
  const [image, setImage] = useState("")

  // const handleNameChange = (e) =>{
  //   const newName = e.target.value
  //   setName(newName)
  // } 
  
  const handleImageChange = (e) =>{
    const newImage = e.target.value
    setImage(newImage)
  } 

  const handleSubmit = (e) => {
    e.preventDefault()

    const toyObj = {
      name: name,
      image: image,
      likes: 0
    }

    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(toyObj)
    })
    // .then(res => res.json())
    // .then(toyObj => addNewToy(toyObj))

    addNewToy(toyObj)
    setName("")
    setImage("")

  }



  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={image}
          onChange={handleImageChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
