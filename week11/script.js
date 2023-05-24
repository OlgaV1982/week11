const item1 = document.querySelector('#priceShirt');
console.log(item1);
const item2 = document.querySelector('#priceSweetshirt');
console.log(item2);
const item3 = document.querySelector('#priceSuit');
console.log(item3);
const item4 = document.querySelector('#priceJeans');
console.log(item4);

const price1 = +item1.textContent;
console.log(price1);
const price2 = +item2.textContent;
console.log(price2);
const price3 = +item3.textContent;
console.log(price3);
const price4 = +item4.textContent;
console.log(price4);

const sum = price1 + price2 + price3 + price4;
console.log(sum);

const total = document.querySelector('#total2');
console.log(total);
const newTotal = +total.textContent;
console.log(newTotal);


const getTotalPrice = () => {
    const priceWithDiscount = newTotal - newTotal*0.2
    total.innerHTML = priceWithDiscount
}

const button = document.getElementById('send3');
button.addEventListener('click', getTotalPrice)
