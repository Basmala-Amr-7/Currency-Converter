
let input = document.getElementById("input");
let select_from = document.getElementById("select_from");
let select_to = document.getElementById("select_to");
let output = document.getElementById("output");

function Conert() {
    let money = Number(input.value);

    if (select_from.value == select_to.value) {
        output.value = money;
    }
    else if (select_from.value == "EGP" && select_to.value == "USD") {
        output.value = money / 52.4;
    }
    else if (select_from.value == "USD" && select_to.value == "EGP") {
        output.value = money * 52.4;
    }
    else if (select_from.value == "EGP" && select_to.value == "EUR") {
        output.value = money / 60;
    }
    else if (select_from.value == "EUR" && select_to.value == "EGP") {
        output.value = money * 60;
    }
    else if (select_from.value == "EGP" && select_to.value == "GBP") {
        output.value = money / 70;
    }
    else if (select_from.value == "GBP" && select_to.value == "EGP") {
        output.value = money * 70;
    }
    else if (select_from.value == "EGP" && select_to.value == "SAR") {
        output.value = money / 14;
    }
    else if (select_from.value == "SAR" && select_to.value == "EGP") {
        output.value = money * 14;
    }
    else if (select_from.value == "EGP" && select_to.value == "AED") {
        output.value = money / 14.3;
    }
    else if (select_from.value == "AED" && select_to.value == "EGP") {
        output.value = money * 14.3;
    }
    else if (select_from.value == "EGP" && select_to.value == "KWD") {
        output.value = money / 170;
    }
    else if (select_from.value == "KWD" && select_to.value == "EGP") {
        output.value = money * 170;
    }
    else if (select_from.value == "EGP" && select_to.value == "QAR") {
        output.value = money / 14.4;
    }
    else if (select_from.value == "QAR" && select_to.value == "EGP") {
        output.value = money * 14.4;
    }
    else if (select_from.value == "EGP" && select_to.value == "JOD") {
        output.value = money / 74;
    }
    else if (select_from.value == "JOD" && select_to.value == "EGP") {
        output.value = money * 74;
    }
    else if (select_from.value == "EGP" && select_to.value == "CAD") {
        output.value = money / 38;
    }
    else if (select_from.value == "CAD" && select_to.value == "EGP") {
        output.value = money * 38;
    }
    else if (select_from.value == "EGP" && select_to.value == "AUD") {
        output.value = money / 34;
    }
    else if (select_from.value == "AUD" && select_to.value == "EGP") {
        output.value = money * 34;
    }
    else if (select_from.value == "EGP" && select_to.value == "CHF") {
        output.value = money / 66;
    }
    else if (select_from.value == "CHF" && select_to.value == "EGP") {
        output.value = money * 66;
    }
    else if (select_from.value == "EGP" && select_to.value == "JPY") {
        output.value = money * 2.8;
    }
    else if (select_from.value == "JPY" && select_to.value == "EGP") {
        output.value = money / 2.8;
    }
    else if (select_from.value == "EGP" && select_to.value == "CNY") {
        output.value = money / 7.3;
    }
    else if (select_from.value == "CNY" && select_to.value == "EGP") {
        output.value = money * 7.3;
    }
    else if (select_from.value == "EGP" && select_to.value == "INR") {
        output.value = money / 0.6;
    }
    else if (select_from.value == "INR" && select_to.value == "EGP") {
        output.value = money * 0.6;
    }
    else if (select_from.value == "EGP" && select_to.value == "TRY") {
        output.value = money / 1.2;
    }
    else if (select_from.value == "TRY" && select_to.value == "EGP") {
        output.value = money * 1.2;
    }
    else if (select_from.value == "EGP" && select_to.value == "RUB") {
        output.value = money / 0.65;
    }
    else if (select_from.value == "RUB" && select_to.value == "EGP") {
        output.value = money * 0.65;
    }
    else if (select_from.value == "EGP" && select_to.value == "ZAR") {
        output.value = money / 3;
    }
    else if (select_from.value == "ZAR" && select_to.value == "EGP") {
        output.value = money * 3;
    }
}

select_from.onchange = Conert;
select_to.onchange = Conert;
input.oninput = Conert;
