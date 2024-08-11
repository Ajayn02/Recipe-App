const searchBtn = document.querySelector("#searchbtn")
const searchInput = document.querySelector("#inpt")

const keyWords = [`egg`, `lamb`, `chicken`, `noodles`, `cake`, `fish`, `seafood`, `milk`, `veg`, `pork`,`duck`,`lemon`, `yogurt`,`honey`,]

const getSugg = (e) => {
  let suggetions = searchInput.value
  // console.log(suggetions)
  let resKey = [];
  if (suggetions) {

    suggs.style.display = "block"

    resKey = keyWords.filter((key) => {
      return key.toLocaleLowerCase().includes(suggetions.toLocaleLowerCase())
    })
    // console.log(resKey)

  }
  displaySugg(resKey);
  if (resKey.length == 0) {
    suggs.style.display = "none";
  }

}

// to display suggetions

const displaySugg = (res) => {


  const suggContent = res.map((item) => {
    return "<li onclick=selectInp(event)  type=none >" + item + "</li>"

  })
  // console.log(suggContent);
  suggs.innerHTML = "<ul>" + suggContent.join("") + "</ul>"
}

// to Select input suggetion

const selectInp = (e) => {
  // e.preventDefault()
  let clickItem = e.target.textContent
  // console.log(clickItem)
  searchInput.value = clickItem
  suggs.innerHTML = ""
}

// to get all dish


const getUrl = (e) => {
  e.preventDefault()

  let a = ``
  if (searchInput.value) {
    let finalUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput.value}`
    fetch(finalUrl).then(data => data.json()).then(item => item.meals.forEach(val => {

      a += `
      <div class="col-lg-3 col-md-6 col-sm-10 col-10 col1">
      <div class="card cd1" style="width: 18rem;" onclick="getRecipie(event)">
  <img src="${val.strMealThumb}" class="card-img-top" alt="...">
  <div class="card-body id="cd">
    <h5 class="card-title">${val.strMeal}</h5>
    <p class="card-text">${val.strTags}</p>
    <p class="card-text">${val.strArea}</p>
    <a href="" target="_blank
" class="btn  " id="ViewR" onclick="getRecipe(event,${val.idMeal})" data-bs-toggle="modal" data-bs-target="#exampleModal">View Recipe</a>
  </div>
</div>
</div>
`
      n1.innerHTML = a
      main1.style.display="none";
      footer.style.display="block";
    })

    ).catch(err => {
      let e = `<h1 class="text-center"> Sorry Not found!!</h1>`
      n1.innerHTML = e
    })

  }
  else {
    let nothing = `<h2 class="text-center"><b>Enter Your Favorite Dish!!!</b></h2>`
    n1.innerHTML = nothing
  }
}

// to get recipe

const getRecipe = (e, id) => {
  e.preventDefault()
  // console.log(id);
  let recipeUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i="
  recipeUrl += id
  // console.log(recipeUrl);
  let b = ``
  let c = ``
  fetch(recipeUrl).then(item => item.json()).then(val => {
    val.meals.forEach(item => {
      b += `
      ${item.strMeal}
    `
      c += `<p>${item.strInstructions}</p>
        <a href="${item.strYoutube}" target="_blank" class="btn  mbtn">Watch Video</a>
        `
      exampleModalLabel.textContent = b
      modalbody.innerHTML = c
    })
  }).catch(err => console.log(err)
  )
}



