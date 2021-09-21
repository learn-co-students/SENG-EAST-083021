import Card from "./Card";

import pumkinSpicedEverything from '../fall_products'

function CardContainer(){


  let cardsArray = pumkinSpicedEverything.map(product => <Card name={product.name} price={product.price} img_url={product.img_url}/> )
  // cardsArray = [<Card />,<Card />,<Card />,<Card />,<Card />,<Card />]


  return(
    <div class='main-container' >
      {cardsArray}
    </div>
  ) 
 }
 
 
 export default CardContainer