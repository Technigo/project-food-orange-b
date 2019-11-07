const apiKey = `0d2ae46a0d3314ac244b0da1e2d88315`
const cityId = 282
const cuisineId = 182

const url = `https://developers.zomato.com/api/v2.1/search?entity_id=282&cuisines=182
`
fetch(url, { headers: { "user-key": apiKey } })
    .then(res => res.json())
    .then(json => {
        console.log(json)


    })
