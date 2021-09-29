import { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [searchTerm, setSearch] = useState("")

  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(r => r.json())
      .then(plantData => setPlants(plantData))
  }, [])

  const addNewPlant = (newPlantObj) => {
    setPlants((prevArray) => [...prevArray, newPlantObj])
  }

  const updatePlant = (updatedPlant) => {
    // Keep every object the same, and in order
    // save for the "updatedPlant" passed to this callback

    const updatedArray = plants.map((oldPlantObj) => {
      if(updatedPlant.id === oldPlantObj.id) {
        return {...updatedPlant}
      } else {
        return oldPlantObj
      }
    })

    setPlants(updatedArray)

  }

  const deletePlant = (clickedPlant) => {
    // for each plant we will check if the clicked plants id is
    // the same as the plant in the current loop
    // and if they ARE the same we DONT want that plant in the new array
    const newArray = plants.filter((oldPlantObj) => oldPlantObj.id !== clickedPlant.id)
    setPlants(newArray)
  }

  // When the plantObj.name contains letters from the searchTerm return that plant
  // into the new array
  const filteredPlants = plants.filter((plantObj) => plantObj.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant}/>
      <Search setSearch={setSearch}/>
      <PlantList deletePlant={deletePlant} updatePlant={updatePlant} plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
