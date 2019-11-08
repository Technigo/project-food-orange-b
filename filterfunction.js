const getRating = (ratingText) => {
    if (ratingText === x) {

    }
}

const filerRatings = () => {
    let good = document.getElementById("filter-ratings").value
    console.log(good)

    let filterR = ["", good, veryGood, excellent]
    console.log(filterR)
    // getRestaurants(filterR)
}

document.getElementById("filter-ratings").onchange = filerRatings