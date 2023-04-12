//AJAX is a web development tecnique. Async means it is able to refresh itself without the need to refresh the page.
function showCountries() {
    let xhr = new XMLHttpRequest ()
    //Sending the request for the data
    xhr.open('GET', 'https://restcountries.com/v3.1/all', true)
    //call back function
    xhr.onload = function(){
        if(xhr.status == 200){
            console.log('success')
            let countries = JSON.parse(this.response)
            console.log (countries)
            countries.forEach(country =>{
                const countryCard = document.createElement('div')
                countryCard.innerHTML = country.name.common
                document.getElementById('feed').appendChild(countryCard)
            })
        }
        else{
            console.log(xhr.status)
        }
    }
    xhr.send()
}