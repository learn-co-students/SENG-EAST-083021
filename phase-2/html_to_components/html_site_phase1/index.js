

const mainContainer = document.querySelector('.main-container')


function createProductCards(){
  pumkinSpicedEverything.forEach(product => {
    mainContainer.innerHTML += `
    <div class='card'>
      <div class='card-overlay'>
        <h2>${product.name}</h2>
        <p>price: $${product.price}</p>
        <img class="content-img" src=${product.img_url} />
      </div>
    </div>
    `
  });
}

createProductCards()






















{/* 
<div class='card'>
  <div class='card-overlay'>
    <h2>product name</h2>
    <p>price: $</p>
    <img class="content-img" src="./assets/fall_water.png"/>
  </div>
</div> 
*/}