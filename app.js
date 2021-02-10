const form = document.querySelector('form')
const submit = document.querySelector('button')



async function fetchData(){
    const url = "https://www.themealdb.com/api/json/v1/1/search.php?s="
    const {value} = document.querySelector('input')
    let data = await fetch(url+value)
    let response = await data.json()
    return response
}

function displayData(reponse){
    reponse.map(meal => {
        console.log(meal)
    })
}

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    fetchData().then(reponse => {
        displayData(reponse.meals)
    })
})