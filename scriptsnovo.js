const convertButton= document.querySelector(".convert-button")
const currencySelect= document.querySelector(".currency-select")

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //valor em Real
    const currencyValueConverted = document.querySelector(".currency-value") // outras Moedas

    console.log(currencySelect.value)


    const dolarToday = 5.2
    const euroToday = 6.2

    

    if (currencySelect.value == "dolar") {
        //se o select estiver selecionando o valor de dolar,entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-Us",{
            style:"currency",
            currency:"USD"
        }).format(inputCurrencyValue / dolarToday)        
    }

    if (currencySelect.value == "euro") {
        //se o select estiver selecionando o valor de euro,entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE",{
            style:"currency",
            currency:"EUR"
        }).format(inputCurrencyValue / euroToday )   
    }
    

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
        style:"currency",
        currency:"BRL"
    }).format(inputCurrencyValue)

    // currencyValueConverted.innerHTML = new Intl.NumberFormat("en-Us",{
    //     style:"currency",
    //     currency:"USD"
    // }).format(convertedValue)


    //console.log(convertedValue)
    
    
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")


    if (currencySelect.value == "dolar") {
        currencyName.innerHTML= "Dólar americano"
        currencyImage.src = "./estados-unidos (1) 1.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML= "Euro"
        currencyImage.src ="./Design sem nome 3.png"

}
 convertValues()
}

currencySelect.addEventListener("change",changeCurrency)
convertButton.addEventListener("click", convertValues)

//FUNCIONOUUUUUUUUUU CARALHOOOOOOO!!!!!! 03/10/24