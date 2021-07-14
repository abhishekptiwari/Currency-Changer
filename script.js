const currencyEleOne = document.getElementById('currency-one');
const amountEleOne = document.getElementById('amount-one');
const currencyEleTwo = document.getElementById('currency-two');
const amountEleTwo = document.getElementById('amount-two');
const rateEle = document.getElementById('rate');
const swapIt = document.getElementById('swap');
const currency_one = currencyEleOne.value; // It's always India
const currency_two = currencyEleTwo.value;

// Fetch exchange rates and update the DOM
function calculate() {
    fetch(`./data.json`)
        // fetch(`http://ip-api.com/json/208.80.152.201`)
        .then(res => res.json())
        .then(data => {
            const rate = data[currency_two] * parseInt(amountEleOne.value);
            rateEle.innerText = `${amountEleOne.value}  = ${rate.toFixed(3)} ${currency_two}`
            amountEleTwo.value = rate.toFixed(2);
        });
}



// Event-Listners 
currencyEleOne.addEventListener('change', calculate)
amountEleOne.addEventListener('input', calculate)
currencyEleTwo.addEventListener('change', calculate)
amountEleTwo.addEventListener('input', calculate)

calculate();