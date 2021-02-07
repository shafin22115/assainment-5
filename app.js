const searchBtn = document.getElementById('search-button')
const foodLIst = document.getElementById('food');

searchBtn.addEventListener('click', getMealList);

function getMealList(){
    let searchInputTxt = document.getElementById('food-name').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputTxt}`)
    .then(res => res.json())
    .then(data => {
        let html = "";
        if(data.meals){
            data.meals.forEach(meal => {
                html += `
                <div class="card";">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h3> ${meal.strMeal}</h3>
                    </div>
                    </div>
                `
            })
        }
        foodLIst.innerHTML = html
    })

}













// const listItem = document.getElementById('food')
// const food = document.getElementById('food-name').value.trim()
// const getFoodName = () =>{
   
//     fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${food}`)
// .then(res => res.json())
// .then(data => {
//     let html = "";
//     if(data.meals){
//         data.meals.forEach(meal => {
//             html +=`
//             <div>
//                     <div class="card">
//                     <img src=" ${meal.strMealThumb}">
//                     <div class="card-body">
//                         <h5 class="card-title">${meal.strMeal}</h5>
                        
//                     </div>
//                     </div>
//             </div>`
//         })
//     }
//     listItem.innerHTML = html;
// })
// }

// const searchBtn = document.getElementById("search-button");
// searchBtn.addEventListener('click', () => {
//     let inputFood = document.getElementById("food-name").value;
//     getFoodName(inputFood)
// })