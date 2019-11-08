const apiKey = `0d2ae46a0d3314ac244b0da1e2d88315`
const cityId = 282
const cuisineId = 182

const url = `https://developers.zomato.com/api/v2.1/search?entity_id=282&cuisines=182
`




fetch(url, {
        headers: {
            "user-key": apiKey
        }
    })
    .then(res => res.json())
    .then(json => {
        console.log(json)
        json.restaurants.forEach((resto) => {


            console.log(resto.restaurant)
            // price-range symbols
            let priceRange = resto.restaurant.price_range
            let priceClass = ""

            if (priceRange == 1) {
                priceClass = "$"
            } else if (priceRange == 2) {
                priceClass = "$$"
            } else if (priceRange == 3) {
                priceClass = "$$$"
            } else if (priceRange == 4) {
                priceClass = "$$$$"
            }
            document.getElementById("resto-card").innerHTML += `
            <div class="restaurant-card">
                <div class = "picture">
                    <img src= "${resto.restaurant.photos[0].photo.thumb_url}">
                </div>
                <div class= "infromation">
                <p>${resto.restaurant.cuisines}</p>
                 
                    <p>${priceClass}</p>
                    <p class="name">${resto.restaurant.name}</p>
                    <p> ${resto.restaurant.currency} ${resto.restaurant.average_cost_for_two} Average price for two people</p>
                    <p>${resto.restaurant.user_rating.aggregate_rating} ${resto.restaurant.user_rating.rating_text}</p>
                    <p>${resto.restaurant.location.address}</p>
                </div>
            </div>

        })


    })