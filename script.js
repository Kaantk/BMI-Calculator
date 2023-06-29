const calculateBtn = document.querySelector('.btnCalculate');
const errorMessage = document.querySelector('.errorMessage');
const height = document.querySelector('.height');
const weight = document.querySelector('.weight');
const displayResult = document.querySelector('.display-result');

// Giriş bilgilerinin içerisini temizler.
function inputClear() {
    height.value = "";
    weight.value = "";
}

calculateBtn.addEventListener('click', () => {

    if (height.value == "" || weight.value == "") {
        errorMessage.innerHTML = "Lütfen alanları kontrol ediniz !";
        inputClear();
    }
    else {
        var userBMI = calculateBMI(height.value, weight.value);
        var infoWeight = weightRange(userBMI);
        resultDisplay(userBMI, infoWeight);
        inputClear();
    }
    
})

// Gelen sonuçları ekranda görüntüler.
function resultDisplay(userBMI, infoWeight) {
    var userMessage = 
    `<h5><span class="bmi-result">${userBMI}</span> Vücut Kitle değeriniz ile <span class="weight-info">${infoWeight}</span> aralıkları içindesiniz.</h5>`;
    
    displayResult.innerHTML = userMessage;
}

// Gelen değere göre hangi aralıkta oldugunu döndürür.
function weightRange(userBMI) {
    let infoWeight;

    if (userBMI < 18.5) {
        return infoWeight = "Zayıf ağırlık";
    } else if (userBMI < 24.9) {
        return infoWeight = "Normalık ağırlık";
    } else if (userBMI < 29.9) {
        return infoWeight = "Kilolu ağırlık";
    } else if (userBMI < 34.9) {
        return infoWeight = "1. derece obezite";
    } else if (userBMI < 39.9) {
        return infoWeight = "2. derece obezite";
    } else {
        return infoWeight = "3. derece obezite";
    }
}

// Girilen bilgiler sonucunda kişinin vücut kitle endeksini hesaplayarak geri döndürür.
function calculateBMI(height, weight) {
    var calculateSquare = (cmToMetre(height)) * (cmToMetre(height));
    var resultBMI = weight / calculateSquare;
    return resultBMI.toFixed(2);
}

// Gelen cm uzunluğu metreye çevirir.
function cmToMetre(height) {
    let metre = height / 100;
    return metre;
}