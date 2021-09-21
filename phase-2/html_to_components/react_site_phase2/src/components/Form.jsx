


function Form(){

  return(
    <div id="new-card">
      <form >
        <label for="card-title">Title</label>
        <input type="text" placeholder="Create Title" id="card-title" />
        <label for="card-price">Price</label>
        <input type="text" placeholder="Add price" id="card-price" />
        <label for="card-image">Image</label>
        <input type="text" placeholder="Add Image URL" id="card-image" />
        <input id="create-btn" type="submit" value="Create Card" />
      </form>
    </div>
  ) 
 }
 
 
 export default Form