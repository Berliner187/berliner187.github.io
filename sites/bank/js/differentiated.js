setInterval(() => {

let userSum = document.getElementById("valueSumDF").innerHTML.replace(/\s/g, '');
let userPercent = document.getElementById("valueSum_PercentDF").innerHTML.replace(/\s/g, '');
let percent = userPercent / 12 / 100;
let mounthTerm = document.getElementById("userTerm_outputDF").innerHTML.replace(/\s/g, '');
let term = mounthTerm * 30;



let quantityDF = userSum;


let monthly = quantityA * userSum;
document.getElementById("total_monthly").innerHTML = monthly.toFixed(2).split("").reverse().join("").replace(/(\d{3})/g, "$1 ").split("").reverse().join("").replace(/^ /, "").replace(".", ",");

let total_overpayment = monthly * mounthTerm - userSum;
document.getElementById("total_overpayment").innerHTML = total_overpayment.toFixed(2).split("").reverse().join("").replace(/(\d{3})/g, "$1 ").split("").reverse().join("").replace(/^ /, "").replace(".", ",");

let total = total_overpayment + Number(userSum);
document.getElementById("total_pay").innerHTML = total.toFixed(2).split("").reverse().join("").replace(/(\d{3})/g, "$1 ").split("").reverse().join("").replace(/^ /, "").replace(".", ",");

});


// document.body.style.backgroundColor = "#AA0000";


// .value.split("").reverse().join("").replace(/(\d{3})/g, "$1 ").split("").reverse().join("").replace(/^ /, "");