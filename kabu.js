(function(){
    'use strict';

    var priceForm = document.getElementById('price');
    var mizuhoButton = document.getElementById('mizuho');
    var nomuraButton = document.getElementById('nomura');
    var resultArea = document.getElementById('result');

    priceForm.onclick = function() {
        this.select();  //クリックしたときに選択
    }

    mizuhoButton.onclick = function(){
        var price = priceForm.value;
        var newPrice;

        if (price.length === 0) {
            return;
        }

        if (price.match(/^[1-9][0-9]*$/)){
            if (price <= 301904){
                resultArea.innerHTML = ('最低手数料の 1026 円です。');
            } else if (price <= 1000000){
                resultArea.innerHTML = Math.floor(price * 0.0034020) + ('円です。');
            } else if ((price > 1000000) && (price <= 3000000)){
                resultArea.innerHTML = Math.floor(price * 0.0025920 + 810) + ('円です。');
            } else if ((price > 3000000) && (price <= 5000000)){
                resultArea.innerHTML = Math.floor(price * 0.0024300 + 1296) + ('円です。');
            } else if ((price > 5000000) && (price <= 10000000)){
                resultArea.innerHTML = Math.floor(price * 0.0020412 + 3249) + ('円です。');
            } else if ((price > 10000000) && (price <= 30000000)){
                resultArea.innerHTML = Math.floor(price * 0.0016524 + 7128) + ('円です。');
            } else if ((price > 30000000) && (price <= 50000000)){
                resultArea.innerHTML = Math.floor(price * 0.0007452 + 34344) + ('円です。');
            } else if ((price > 50000000) && (price <= 100000000)){
                resultArea.innerHTML = Math.floor(price * 0.0000324 + 69984) + ('円です。');
            } else if ((price > 100000000) && (price <= 500000000)){
                resultArea.innerHTML = ('一律 82944 円です。');
            } else if ((price > 500000000) && (price <= 1000000000)){
                resultArea.innerHTML = ('一律 92664 円です。');
            }
        } else {
            resultArea.innerHTML = ('無効な文字列です。再入力してください。');
        }
    }

    nomuraButton.onclick = function(){
        var price = priceForm.value;

        if (price.length === 0){
            return;
        }

        if (price.match(/^[1-9][0-9]*$/)){
            if (price <= 100000){
                resultArea.innerHTML = (150 + '円です。');
            } else if ((price > 100000) && (price <= 300000)){
                resultArea.innerHTML = (324 + '円です。');
            } else if ((price > 300000) && (price <= 500000)){
                resultArea.innerHTML = (515 + '円です。');
            } else if ((price > 500000) && (price <= 1000000)){
                resultArea.innerHTML = (1029 + '円です。');
            } else if ((price > 1000000) && (price <= 2000000)){
                resultArea.innerHTML = (2057 + '円です。');
            } else if ((price > 2000000) && (price <= 3000000)){
                resultArea.innerHTML = (3086 + '円です。');
            } else if ((price > 3000000) && (price <= 5000000)){
                resultArea.innerHTML = (5142 + '円です。');
            } else if ((price > 5000000) && (price <= 10000000)){
                resultArea.innerHTML = (10285 + '円です。');
            } else if ((price > 10000000) && (price <= 20000000)){
                resultArea.innerHTML = (20571 + '円です。');
            } else if ((price > 20000000) && (price <= 30000000)){
                resultArea.innerHTML = (30857 + '円です。');
            } else if ((price > 30000000) && (price <= 50000000)){
                resultArea.innerHTML = (41143 + '円です。');
            } else{
                resultArea.innerHTML = ('一律 77143 円です。')
            }

        } else {
            resultArea.innerHTML = ('無効な文字列です。再入力してください。')
        }
    }

})();
