const searchBtn = document.querySelector("#searchbtn")
const searchInput = document.querySelector("#inpt")

const getUrl = (e) => {
  e.preventDefault()
  
  let a = ``
  let finalUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput.value}`
  fetch(finalUrl).then(data => data.json()).then(item => item.meals.forEach(val => {

    a += `
      <div class="col-lg-3 col-md-6 col-sm-10 col-10 col1">
      <div class="card cd1" style="width: 18rem;" onclick="getRecipie(event)">
  <img src="${val.strMealThumb}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${val.strMeal}</h5>
    <p class="card-text">${val.strTags}</p>
    <a href="${val.strSource}" target="_blank
" class="btn btn-primary ">View Reipe</a>
  </div>
</div>
</div>

`

    n1.innerHTML = a

  })
  
).catch(err => { let e=`<h1 class="text-center"> Sorry Not found!!</h1>`
  n1.innerHTML=e
  
 })

}




