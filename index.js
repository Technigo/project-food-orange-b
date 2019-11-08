const apiKey = `2dc1d3eeeb4b37cf64e1bdf65a6c3db9`
const cityId = 282
const cuisineId = 182

const url = `https://developers.zomato.com/api/v2.1/search?entity_id=282&entity_type=city&cuisines=182
`



const getRestaurants = (filter) => {

    fetch(url, {
            headers: {
                "user-key": apiKey
            }
        })

        .then(res => res.json())
        .then(json => {
            console.log(json)
            document.getElementById("resto-card").innerHTML = ""

            json.restaurants.forEach((resto) => {

                if (filter[resto.restaurant.price_range] === true) {
                    priceRangeInDollar = getPriceInDollar(resto.restaurant.price_range)

                    console.log(resto.restaurant)
                    // price-range symbols



                    document.getElementById("resto-card").innerHTML += `
                <div class="restaurant-card">
                <div>
                    <h3>${resto.restaurant.name}</h3> 
                    <div>${priceRangeInDollar}</div>
                    <p>${resto.restaurant.price_range}</p>
                <div class = "picture">
                    <img src= "${resto.restaurant.thumb}">
                </div>
                <div class= "infromation">
                <p>${resto.restaurant.cuisines}</p>

                    <p class="name">${resto.restaurant.name}</p>
                    <p> ${resto.restaurant.currency} ${resto.restaurant.average_cost_for_two} Average price for two people</p>

                    <p>${resto.restaurant.user_rating.aggregate_rating} ${resto.restaurant.user_rating.rating_text}</p>
                    <p>${resto.restaurant.location.address}</p>
                </div>
            </div>`
                }

            })

                }

            })


        })

}
getRestaurants(["", true, true, true, true])

const getPriceInDollar = (priceRange) => {
    if (priceRange == 1) {
        return "$ "
    } else if (priceRange == 2) {
        return "$$ "
    } else if (priceRange == 3) {
        return "$$$ "
    } else if (priceRange == 4) {
        return "$$$$ "
    }
}


const filterByPriceRange = (event) => {
    event.preventDefault()

    let d1 = document.getElementById("d1").checked
    let d2 = document.getElementById("d2").checked
    let d3 = document.getElementById("d3").checked
    let d4 = document.getElementById("d4").checked

    let filter = ["", d1, d2, d3, d4]
    console.log('filter', filter)
    getRestaurants(filter)
}


document.getElementById('filter-btn').onclick = filterByPriceRange