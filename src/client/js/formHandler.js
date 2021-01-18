function handleSubmit(event) {
    event.preventDefault()
    document.getElementById('results').innerHTML = 'loading ...'
    // check what text was put into the form field
    let zip = document.getElementById('name').value
    //console.log(zip)
    //Client.checkForName(zip)
    //console.log("::: Form openweathermap :::")
    fetch('https://news-article-with-natural-lang.glitch.me/openweathermap?zip=' + zip + '')
        .then(res => res.json())
        .then(function (res) {
            console.log(res)
            document.getElementById('results').innerHTML = res.name
        })
}




export { handleSubmit }
