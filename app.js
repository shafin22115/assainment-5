const searchBtn = document.getElementById('search-button')
const foodLIst = document.getElementById('food');

// addEventListener for search btn
searchBtn.addEventListener('click', getMealList);
// fumction for meal list
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
                        <button> View Detail</button>
                    </div>
                    </div>
               `
            })
        }else{
            html = "sorry, we didn't find any meal"
        }
        foodLIst.innerHTML = html
    })

}