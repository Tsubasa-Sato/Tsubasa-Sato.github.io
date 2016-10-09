(function(){
    'use strict';
    // idの取得
    var priceForm = document.getElementById('price');
    var btn = document.getElementById('btn');
    var mizuhoArea = document.getElementById('mizuho');
    var nomuraArea = document.getElementById('nomura');
    var sbiArea = document.getElementById('sbi');
    var resultArea = document.getElementById('result');

    // 計算結果を格納
    var mizuhoPrice;
    var nomuraPrice;
    var sbiPrice;

    // クリック時に全選択
    priceForm.onclick = function() {
        this.select();
    }

    // 計算結果の表示
    btn.onclick = function() {
        mizuho();
        nomura();
        sbi();
        mizuhoArea.innerHTML = mizuhoPrice;
        nomuraArea.innerHTML = nomuraPrice;
        sbiArea.innerHTML = sbiPrice;
    }

    // みずほ証券の手数料計算
    function mizuho (){
        var price = priceForm.value;

        if (price.length === 0) {
            return;
        }

        if (price.match(/^[1-9][0-9]*$/)){
            if (price <= 301904){
                mizuhoPrice = 1026;
            } else if (price <= 1000000){
                mizuhoPrice = Math.floor(price * 0.0034020);
            } else if ((price > 1000000) && (price <= 3000000)){
                mizuhoPrice = Math.floor(price * 0.0025920 + 810);
            } else if ((price > 3000000) && (price <= 5000000)){
                mizuhoPrice = Math.floor(price * 0.0024300 + 1296);
            } else if ((price > 5000000) && (price <= 10000000)){
                mizuhoPrice = Math.floor(price * 0.0020412 + 3249);
            } else if ((price > 10000000) && (price <= 30000000)){
                mizuhoPrice = Math.floor(price * 0.0016524 + 7128);
            } else if ((price > 30000000) && (price <= 50000000)){
                mizuhoPrice = Math.floor(price * 0.0007452 + 34344);
            } else if ((price > 50000000) && (price <= 100000000)){
                mizuhoPrice = Math.floor(price * 0.0000324 + 69984);
            } else if ((price > 100000000) && (price <= 500000000)){
                mizuhoPrice = 82944;
            } else if ((price > 500000000) && (price <= 1000000000)){
                mizuhoPrice = 92664;
            }
        } else {
            resultArea.innerHTML = ('無効な数値です。再入力してくだい。');
        }
    }

    // 野村證券の手数料計算
    function nomura (){
        var price = priceForm.value;

        if (price.length === 0){
            return;
        }

        if (price.match(/^[1-9][0-9]*$/)){
            if (price <= 100000){
                nomuraPrice = 150;
            } else if ((price > 100000) && (price <= 300000)){
                nomuraPrice = 324;
            } else if ((price > 300000) && (price <= 500000)){
                nomuraPrice = 515;
            } else if ((price > 500000) && (price <= 1000000)){
                nomuraPrice = 1029;
            } else if ((price > 1000000) && (price <= 2000000)){
                nomuraPrice = 2057;
            } else if ((price > 2000000) && (price <= 3000000)){
                nomuraPrice = 3086;
            } else if ((price > 3000000) && (price <= 5000000)){
                nomuraPrice = 5142;
            } else if ((price > 5000000) && (price <= 10000000)){
                nomuraPrice = 10285;
            } else if ((price > 10000000) && (price <= 20000000)){
                nomuraPrice = 20571;
            } else if ((price > 20000000) && (price <= 30000000)){
                nomuraPrice = 30857;
            } else if ((price > 30000000) && (price <= 50000000)){
                nomuraPrice = 41143;
            } else{
                nomuraPrice = 77143;
            }

        } else {
            resultArea.innerHTML = ('無効な数値です。再入力してくだい。')
        }
    }

    function sbi() {
        var price = priceForm.value;

        if (price.length === 0){
            return;
        }

        if (price.match(/^[1-9][0-9]*$/)){
            if (price <= 100000){
                sbiPrice = 150;
            } else if ((price > 100000) && (price <= 200000)){
                sbiPrice = 199;
            } else if ((price > 200000) && (price <= 500000)){
                sbiPrice = 293;
            } else if ((price > 500000) && (price <= 1000000)){
                sbiPrice = 525;
            } else if ((price > 1000000) && (price <= 1500000)){
                sbiPrice = 628;
            } else if ((price > 1500000) && (price <= 30000000)){
                sbiPrice = 994;
            } else{
                sbiPrice = 1050;
            }

        } else {
            resultArea.innerHTML = ('無効な数値です。再入力してくだい。')
        }
    }

})();