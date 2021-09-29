import { useState }from "react";

function PlantCard({ plantData, updatePlant, deletePlant }) {
  const { name, image, price, id } = plantData;

  const [inStock, setInStock] = useState(true);

  const [showForm, setShowForm] = useState(false)
  const [newPrice, setPrice] = useState(0)

  const handleUpdate = (e) => {
    e.preventDefault();

    //url, newData, id
    fetch('http://localhost:6001/plants/'+id, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({price: newPrice})
    })
      .then(r => r.json())
      .then(updatedPlant => updatePlant(updatedPlant))
  }

  const deleteHandler = () => {
    fetch('http://localhost:6001/plants/'+id, {method: "DELETE"})
      .then(() => deletePlant(plantData))
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      { inStock ? (
        <button onClick={() => setInStock((preVal) => !preVal)} className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}<br />
      <button onClick={() => setShowForm(!showForm)} >Edit Price</button>
      <button onClick={deleteHandler} style={{backgroundColor: "red"}}>DELETE</button>
      { showForm ? <form onSubmit={handleUpdate}>
        <input onChange={(e) => setPrice(e.target.value)} value={newPrice} placeholder="input new price" name="price" type="text" />
        <input  type="submit" />
      </form>: null}
    </li>
  );
}

export default PlantCard;
