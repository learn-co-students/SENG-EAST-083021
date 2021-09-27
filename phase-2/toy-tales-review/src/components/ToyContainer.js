import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer(props) {
  // const toyCards = props.toyArray.map(toy => <ToyCard key={toy.id} name={toy.name} image={toy.image} id={toy.id} likes={toy.likes}/>)
  const toyCards = props.toyArray.map(toy => <ToyCard key={toy.id} {...toy} />)

  return (
    <div id="toy-collection">
      {toyCards}
    </div>
  );
}

export default ToyContainer;
