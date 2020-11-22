const searchField = document.getElementById('search-field')
const searchButton = document.getElementById('search-button')

searchButton.addEventListener('click', search)
searchField.addEventListener('keypress', event => {
    if (event.code === 'Enter') {
        search()
    }
})

// EventHandler

function search () {
    let searchTerm = encodeURIComponent(searchField.value)
    const redirectUrl = `https://shop.rodriguez-nursery.com/search?q=${searchTerm}&options%5Bprefix%5D=last`

    window.location.href = redirectUrl
}