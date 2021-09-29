import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, updatePlant, deletePlant }) {
  return (
    <ul className="cards">{ plants.map(plantObj => <PlantCard deletePlant={deletePlant} updatePlant={updatePlant} key={plantObj.id} plantData={plantObj}/>) }</ul>
  );
}

export default PlantList;
