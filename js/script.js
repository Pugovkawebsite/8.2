'use strict';

const sale = 20;
let mainPrice = document.querySelectorAll('.main-price');
let selector = document.querySelector('.rule-price__selector');
let array = [];
let arrayNew = [];

function monthlyNumber () {
mainPrice.forEach(function(elem, i) {
array[i] = elem.dataset.price;
// mainPrice[i].innerHTML = b[i];
mainPrice[i].innerHTML = '$' + array[i];
arrayNew[i] = Math.floor(elem.dataset.price * 12 * ((100 - sale)/100));

});
}

monthlyNumber();

function showYearNumber () {
    mainPrice.forEach(function (e, n) {
        mainPrice[n].innerHTML = '$' + arrayNew[n];
    })
}

selector.addEventListener('click', () => {
    if(!selector.classList.contains('rule-price__selector__active')) {
        showYearNumber();
        selector.classList.add('rule-price__selector__active');
    } else {
        monthlyNumber();
        selector.classList.remove('rule-price__selector__active');
    }
    

})
console.log(array);
console.log(arrayNew);



