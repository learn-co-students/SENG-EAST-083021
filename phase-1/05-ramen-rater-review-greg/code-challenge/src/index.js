// write your code here
getAllRamens()

const ramenMenuDiv = document.querySelector("#ramen-menu")
const newRamenForm = document.querySelector("#new-ramen")

newRamenForm.addEventListener("submit", getInfoFromForm)

// ramenMenuDiv.addEventListener('click', handleClick)

// function handleClick(e) {
//   if (e.target.className === "img-class"){
//     getSingleRamen(e)
//   }
// }

function getAllRamens(){
  fetch('http://localhost:3000/ramens')
  .then(res => res.json())
  .then(ramenArray => createImgBar(ramenArray))
}

function getSingleRamen(e){
  // const ramenId = e.target.id
  const ramenId = e.target.dataset.ramenId

  fetch(`http://localhost:3000/ramens/${ramenId}`)
  .then(res => res.json())
  .then(singleRamenObj => displayRamenDetail(singleRamenObj))
}


function getInfoFromForm(e){
  e.preventDefault()
  // debugger
  // const name = document.querySelector('#new-name').value
  const image = e.target.image.value
  const name = e.target.name.value
  const restaurant = e.target.restaurant.value
  const rating = e.target.rating.value
  const comment = e.target['new-comment'].value



  const ramenObj = {
    image: image,
    name: name,
    restaurant: restaurant,
    rating: rating,
    comment: comment
  }
  const ramenArray = [ramenObj]

  createImgBar(ramenArray)
}

function createImgBar(ramenArray){
  ramenArray.forEach(ramenObj => {
    const img = document.createElement('img')
    img.src = ramenObj.image
    img.dataset.ramenId = ramenObj.id
    // img.id = ramenObj.id

    img.addEventListener('click', getSingleRamen)

    ramenMenuDiv.append(img)
  })
}



function displayRamenDetail(singleRamenObj){
  const detailImage = document.querySelector(".detail-image")
  detailImage.src = singleRamenObj.image
  detailImage.alt = singleRamenObj.name

  const name = document.querySelector(".name")
  name.textContent = singleRamenObj.name

  const restaurant = document.querySelector(".restaurant")
  restaurant.textContent = singleRamenObj.restaurant
  
  const rating = document.querySelector("#rating-display")
  rating.textContent = singleRamenObj.rating

  const comment = document.querySelector("#comment-display")
  comment.textContent = singleRamenObj.comment
}





