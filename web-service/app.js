const BASE_API = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest"
const container = document.getElementById('currencies')

async function getData() {
    try {
        const res = await fetch(`${BASE_API}/currencies.json`, {
            method: "GET",
        })
        
        const data = await res.json()

        console.log(data)

        render(data)

    } catch(err) {
        alert("Ocurrio un error")
        console.log(err)
    }
}

function render(data) {
    Object.keys(data).forEach(item => {
        const anchor = document.createElement('a')
        anchor.href = `${BASE_API}/currencies/${item}.json`
        anchor.innerText = item
        anchor.classList.add('card')
        container.appendChild(anchor)
    })
}
 
getData()
