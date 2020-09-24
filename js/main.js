async function Meals(){
    let myInput = document.querySelector("input[name='search']");


    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${myInput.value}`
    let response = await fetch(url)

    let foods = await response.json()
    let display = document.querySelector(".main")

    if(foods.meals != null){
        foods.meals.forEach(meal => {
            console.log(meal)
            display.innerHTML = `
            <ol class="Ressepts">
            <li class="display">
                    <img src=${meal.strMealThumb}
                        alt=""
                        class="img-fluid avatar">
                </li>
                <li class="display">
                    <p>${meal.strMeal}</p>
                </li>
                <li class="display">
                    <p class="resepts">${meal.strInstructions}</p>
                </li>
                <li class="display">
                    <ol class="py-5 bg-dark">
                        <li><p>${meal.strIngredient1}</p></li>
                        <li><p>${meal.strIngredient2}</p></li>
                        <li><p>${meal.strIngredient3}</p></li>
                        <li><p>${meal.strIngredient4}</p></li>
                        <li><p>${meal.strIngredient5}</p></li>
                        <li><p>${meal.strIngredient6}</p></li>
                        <li><p>${meal.strIngredient7}</p></li>
                        <li><p>${meal.strIngredient8}</p></li>
                        <li><p>${meal.strIngredient9}</p></li>
                        <li><p>${meal.strIngredient10}</p></li>
                        <li> <p>${meal.strIngredient11}</p></li>
                    </ol>
                </li>
                <li class="display">
                    <a target= "_blank" href=${meal.strSource} 
                    class="links">Go to the link</a>
                </li>
                
                                
            </ol>`
    
        })
    }

    else{
        display.innerHTML = `
        <ol class="Ressepts">
            <li class="display">
            <p class="resepts">${myInput.value} Tapılmadı</p>
                </li>
        </ol>        `
    }


}

let form = document.querySelector("form");

form.addEventListener("submit", function(e){
    e.preventDefault()
    Meals()
    // console.log(Meals())
})

// submitButton.addEventListener("click", function(e){
//     e.preventDefault()
//     console.log(foods.meals)

//     foods.meals.forEach(meal=>{
//         console.log("Meal", meal)
       
//         // if(myInput.value)
        
//         // if(meal)
        
//         if(myInput.value !==null){
//             meal.filter(mealFilter => {
//                 if(myInput.value == mealFilter){
//                     console.log("true")
//                 }
//             })
//         }
//     })
// Meals()

// })

// Meals()