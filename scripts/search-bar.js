const searchField = document.getElementById('search-field')
const searchButton = document.getElementById('search-button')
const searchForm = document.getElementById('search-form')

searchButton.addEventListener('click', search)
searchForm.addEventListener('submit', event => {
    event.preventDefault()
    search()
})

// EventHandler

function search () {
    if (searchField.value) {
        let searchTerm = encodeURIComponent(searchField.value)
        const redirectUrl = `https://shop.rodriguez-nursery.com/collections/all/search?q=${searchTerm}&options%5Bprefix%5D=last`
        window.location.href = redirectUrl
    } else {
        const redirectUrl = `https://shop.rodriguez-nursery.com/collections/all`
        window.location.href = redirectUrl
    }
}