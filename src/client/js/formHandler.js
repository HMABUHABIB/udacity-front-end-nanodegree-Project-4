
let expression = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gi;
var regex = new RegExp(expression);

function testLink(linkValue) {

    if (linkValue.match(regex)) {
        return true
    } else
        return false
}

function handleSubmit(event) {
    event.preventDefault()

    //console.log(linkValue);
    document.getElementById('results').innerHTML = 'loading ...'
    let linkValue = document.getElementById('link').value
    if (testLink(linkValue)) {
        fetch('http://localhost:8081/meaningCloud?url=' + linkValue + '')
            .then(res => res.json())
            .then(function (res) {
                if (res.status.code == 0) {
                    //console.log(res)
                    document.getElementById('results').innerHTML = Client.generateTable(res)
                }
                else {
                    document.getElementById('results').innerHTML = res.status.msg
                }

            })
    } else {
        document.getElementById('results').innerHTML = 'invalid URL'
    }

    document.getElementById('link').value = null

}


export { handleSubmit, testLink }

