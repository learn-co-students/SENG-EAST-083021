import { useState }from "react";

function NewPlantForm({ addNewPlant }) {

  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState(0)

  // const [newPlant, setNewPlant] = useState({})

  // const handleChange = (e) => {
  //   setNewPlant((prevObj) => { return {...prevObj, [e.target.name]: e.target.value}} )
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    //create a new object to send to the server, from state
    const newPlant = {
      name: name,
      image: image,
      price: price
    }
    //create an options object in which that newPlant will reside
    const options = {
      headers: {"Content-Type": "application/json"},
      method: "POST",
      body: JSON.stringify(newPlant)
    }
    //make our POST fetch
    fetch('http://localhost:6001/plants', options)
      .then(r => r.json())
      .then(newPlant => {
        addNewPlant(newPlant)
        setImage("");
        setPrice(0);
        setName("")
      })
    //send that newPlant from the server up to PlantPage
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" placeholder="Plant name" />
        <input value={image} onChange={(e) => setImage(e.target.value)} type="text" name="image" placeholder="Image URL" />
        <input value={price} onChange={(e) => setPrice(e.target.value)} type="text" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
