const searchBtn = document.getElementById('search-button')
const foodLIst = document.getElementById('food');

// fumction for meal list
const getMealList = () =>{
    let searchInputTxt = document.getElementById('food-name').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputTxt}`)
    .then(res => res.json())
    .then(data => {
        let html = "";
        if(data.meals){
            data.meals.forEach(meal => {
                html += `
                <div onclick="foodInfo('${meal.strMeal}')" class="card";">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h3> ${meal.strMeal}</h3>
                    </div>
                    </div>
               `
            })
        }else{
           html = "sorry, we didn't find any meal"
        }
        foodLIst.innerHTML = html
    })
    let ingreidentsInfo = document.getElementById('foodInfo');
    ingreidentsInfo.innerHTML = ' ';
}
// addEventListener for search btn
searchBtn.addEventListener('click', getMealList);


//food detail api function
const foodInfo = name => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => showFoodDetail(data.meals))
        
}

// show food detail
const showFoodDetail = info => {
    info.forEach(ingreident => {
        let foodInfo = document.getElementById('foodInfo');
        foodInfo.innerHTML =`
        <div class="infoDiv">
        <img class="foodInfoImg" src="${ingreident.strMealThumb}">
        <h3>${ingreident.strMeal}</h3>
        <h5>Ingreidents</h5>
        <p>${ingreident.strIngredient1}</p>
        <p>${ingreident.strIngredient2}</p>
        <p>${ingreident.strIngredient3}</p>
        <p>${ingreident.strIngredient4}</p>
        <p>${ingreident.strIngredient5}</p>
        <p>${ingreident.strIngredient6}</p>
        <p>${ingreident.strIngredient7}</p>
        <p>${ingreident.strIngredient8}</p>
        <p>${ingreident.strIngredient9}</p>
        <p>${ingreident.strIngredient10}</p>
        </div>
        `
    });


}
