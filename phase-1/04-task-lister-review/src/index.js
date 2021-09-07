// ------------- Grab element from DOM
const form = document.querySelector("#create-task-form")
const taskUl = document.querySelector("#tasks")


// -------------- Add Event listener
form.addEventListener('submit', gatherFormInfo)


// ----------- Functions to manipulate the DOM
function gatherFormInfo(e) {
  e.preventDefault()

  const todoDescription = e.target.task.value
  // const todoDescription = e.target['new-task-description'].value
  
  createTodoLi(todoDescription)
  e.target.reset()
}

function createTodoLi(todo) {
  const li = document.createElement('li')
  li.textContent = todo
  
  const btn = document.createElement('button')
  btn.textContent = 'X'

  btn.addEventListener('click', deleteTask)

  li.append(btn)
  taskUl.append(li)
}


function deleteTask(e) {
  // e.target = the button (we do not want to just remove the button)
  // e.target.parentElement = the entire li

  const taskLi = e.target.parentElement
  taskLi.remove()
}