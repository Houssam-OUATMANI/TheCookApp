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

function displayData(reponse){
    console.log(reponse)
    reponse.map(({strMeal , strCategory ,strMealThumb ,strInstruction ,strYoutube}) => {
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
                <p>Instruction : ${strInstruction}</p>
                <br>
                <p>Region : ={strArea}</p>
            </div>
            <div>
                <iframe src="${strYoutube}" frameborder="0"></iframe>
            </div>
        </div>
    `
    })
}

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    fetchData().then(reponse => {
        displayData(reponse.meals)
    })
})