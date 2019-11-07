const apiKey = `0d2ae46a0d3314ac244b0da1e2d88315`
const cityId = 282
const cuisineId = 182

const url = `https://developers.zomato.com/api/v2.1/search?entity_id=282&cuisines=182
`




fetch(url, { headers: { "user-key": apiKey } })
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
                <div>
                    <div>${resto.restaurant.name}</div> 
                    <div>${priceClass}</div>
                    <img src= "${resto.restaurant.photos[0].photo.thumb_url}">
                </div>
                <div>
                    <ul>${resto.restaurant.cuisines}</ul>
                    <ul> ${resto.restaurant.currency} ${resto.restaurant.average_cost_for_two} Average price for two people</ul>
                    <ul>${resto.restaurant.user_rating.aggregate_rating} ${resto.restaurant.user_rating.rating_text}</ul>
                    <ul>${resto.restaurant.location.address}</ul>
                </div>
            </div>`

        })


    })


