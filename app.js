const listItem = document.getElementById('food')
const food = document.getElementById('food-name').value.trim()
const getFoodName = () =>{
   
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${food}`)
.then(res => res.json())
.then(data => {
    let html = "";
    if(data.meals){
        data.meals.forEach(meal => {
            html +=`
            <div class="col">
                    <div class="card">
                    <img src=" ${meal.strMealThumb}">
                    <div class="card-body">
                        <h5 class="card-title">${meal.strMeal}</h5>
                        <button onclick="movieDetailsView($)" class="btn btn-outline-success">View Details</button>
                    </div>
                    </div>
            </div>`
        })
    }
    listItem.innerHTML = html;
})
}

const searchBtn = document.getElementById("search-button");
searchBtn.addEventListener('click', () => {
    let inputFood = document.getElementById("food-name").value;
    getFoodName(inputFood)
})



// const food = document.getElementById('food-name')
// const getFoodList = foodName =>{
//     fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${food}`)
//     .then(res => res.json())
//     .then(data => console.log(data))
// }

// const searchBtn = document.getElementById('search-button')
// searchBtn.addEventListener('click', () => {
    
//     // const foodInput = document.getElementById('food-name');
//     getFoodList(food) 
// })