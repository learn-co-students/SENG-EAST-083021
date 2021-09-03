/***** Deliverable 1 *****/
const header = document.querySelector("#header")

console.log("Here's your header:", header)


/***** Deliverable 2 *****/
// header.className = "red"
// header.style = "color: red;"
header.style.color = "red"
// a fontColor method?? google --- deprication warning (not currently recomended)


/***** Deliverable 3 *****/
console.log("PLAYERS array looks like this:", PLAYERS)

// Grab the html area where the players will be added (Grab element from DOM)
const playersDiv = document.querySelector(".player-container")
console.dir(playersDiv);

// Iterate through PLAYERS
// forEach player I am going to create HTML
PLAYERS.forEach(playerObj => {
  const div = document.createElement('div')
  div.className = 'player'
  div.dataset.number = playerObj.number
  

  
  const h3 = document.createElement('h3')
  h3.textContent = playerObj.name 
  
  const em = document.createElement('em')
  em.textContent = ` (${playerObj.nickname})`
  
  const img = document.createElement('img')
  img.src = playerObj.photo
  img.alt = playerObj.name
  
  
  // ADD that new HTML back onto the page!!!
  h3.append(em)
  div.append(h3)
  div.append(img)
  playersDiv.append(div)

})

// PLAYERS.forEach(playerObj => {
//   playersDiv.innerHTML += `
//   <div class="player" data-number="(Player Number)">
//     <h3>
//       ${playerObj.name} (<em>${playerObj.nickname}</em>)
//     </h3>
//     <img src="${playerObj.photo}" alt="${playerObj.name}">
//   </div> ` 
// })





/***** Deliverable 4 *****/

const findWrongPlayer = document.querySelector(`[data-number='7']`)
findWrongPlayer.remove()
// findWrongPlayer.innerHTML = ''



// You can grab HTML elements by attributes as well as tag,class, and id
// const getByStyle = document.querySelector(`[style="color: red;"]`)
// console.log(getByStyle);