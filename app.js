const form = document.querySelector('form')
const submit = document.querySelector('button')
const htmlContainer = document.querySelector('.recipe__container')

console.log(htmlContainer)


async function fetchData(){
    const url = "https://www.themealdb.com/api/json/v1/1/search.php?s="
    const {value} = document.querySelector('input')
    let data = await fetch(url+value)
    let response = await data.json()
    return response
}

function displayData(response){
   htmlContainer.innerHTML = ''
    response.map(({strMeal , strCategory ,strMealThumb ,strInstructions ,strYoutube ,strArea}) => {
        const ytbUrl = strYoutube.split('?v=')[1]
  
            htmlContainer.innerHTML += `
            <div class="card">
            <div class="title">
                <h3>Recipe : ${strMeal}</h3>
                <p> Category : ${strCategory}</p>
            </div>
            <div class="img__container">
                <img src="${strMealThumb}" alt="${strMeal}">
            </div>
            <div class="
            info">
                <p>Instruction : ${strInstructions}</p>
                <br>
                <p style="text-align: center; font-size : 2rem;">Region : ${strArea}</p>
            </div>
            <div>
                <iframe width="900" height="544" src="https://www.youtube.com/embed/${ytbUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    `
    })
}

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    e.stopPropagation()
    fetchData().then(reponse => {
       displayData(reponse.meals)

    })
})
