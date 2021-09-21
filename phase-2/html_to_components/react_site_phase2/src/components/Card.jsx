

function Card(props){

  console.log(props);

  return(
  <div class='card'>
    <div class='card-overlay'>
      <h2>{props.name}</h2>
      <p>price: ${props.price}</p>
      <img class="content-img" src={props.img_url}/>
    </div>
  </div> 
  )
}


export default Card