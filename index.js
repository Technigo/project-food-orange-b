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

                <div class = "resto-pic">
                <img src= "${resto.restaurant.thumb}">
                </div>

                <div class="resto-info">

                    <div class="test">  
                    <div class="name"><h4>${resto.restaurant.name}</h4></div>
                    <br>
                    <span class="price-range">${priceRangeInDollar}</span>
                    <span class="cuisines">${resto.restaurant.cuisines}</span>
                    <div>${resto.restaurant.location.address}</div>
                </div>
                <div class="resto-rating">

                    <div>${resto.restaurant.user_rating.aggregate_rating} ${resto.restaurant.user_rating.rating_text}</div>
 
                </div>
            </div>`
                }


            })

                }

            })

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