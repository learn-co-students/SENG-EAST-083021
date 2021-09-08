const BASE_URL = 'http://localhost:3000/ramens'



// make a GET requesdt ramen data
fetch(BASE_URL)
 .then(function(res){
     return res.json() 
 })
 .then(function(ramenData){
    // for every piece of data we get we'll render it
    ramenData.forEach((ramen) => renderRamen(ramen));

    //for each takes each element in the array and PASSES it to our callback function
   
 })


function renderRamen(ramenObj){
    // create a img el
    const ramenImg = document.createElement('img');

    // tell that img el to point it src attribute towards the ramenObj image string
    ramenImg.src = ramenObj.image

    // add 'click' evenListener to the ramenImg element
    ramenImg.addEventListener('click', function(e){
        console.log(ramenObj);
        // grab the elements for name, image, Restaurant
        const detName = document.querySelector('.name')
        detName.textContent = ramenObj.name

        const detImg = document.querySelector('#ramen-img')
        detImg.src = ramenObj.image;

        const detRest = document.querySelector('.restaurant')
        detRest.innerText = ramenObj.restaurant

        const rating = document.querySelector('#rating-display')
        rating.textContent = ramenObj.rating

        const comment = document.querySelector('#comment-display')
        comment.textContent = ramenObj.comment

    })
    

    // grab the div with id='ramen-menu'
    const menu = document.getElementById('ramen-menu')

    // append the image to the div\
    menu.appendChild(ramenImg)
}

// Grab the new ramen form
const newRamenForm = document.getElementById('new-ramen')
// Attach a 'submit' evenListener to the "add-new-ramen form"
newRamenForm.addEventListener('submit', submitHandler)


function submitHandler(e){
    e.preventDefault()

    //create a new ramen object using the values from the form
    const newRamen = {
        name: e.target["name"].value,
        restaurant: e.target["restaurant"].value,
        image: e.target["image"].value,
        rating: +e.target["rating"].value,
        comment: e.target["new-comment"].value
    }

    //use the event object as opposed querying
    renderRamen(newRamen)
    
    e.target.reset()
}