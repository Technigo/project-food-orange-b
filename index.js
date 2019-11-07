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

            document.getElementById("resto-card").innerHTML += `<div>${resto.restaurant.name}</div>
                                                                <img src= "${resto.restaurant.photos[0].photo.thumb_url}">
                                                                <div>${resto.restaurant.cuisines}</div>
                                                                <div> ${resto.restaurant.currency} ${resto.restaurant.average_cost_for_two} Average price for two people</div>
                                                                <div>${resto.restaurant.user_rating.aggregate_rating} ${resto.restaurant.user_rating.rating_text}</div>
                                                                <div>${resto.restaurant.location.address}</div>`

        })


    })
