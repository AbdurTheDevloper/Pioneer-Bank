var loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function(){
    var selectDiv = document.getElementById('main_div');
    selectDiv.style.display = 'none';

    var second_part = document.getElementById("second_div");
    second_part.style.display = 'block'
})

// deposte button 

var depoBtn = document.getElementById('deposit_btn');
depoBtn.addEventListener('click', function(){
    var depositValue = document.getElementById('deposit_Value').value;
    var convertDepoValue = parseFloat(depositValue);
   
    // deposite  ballance area
    
    var depoSiteMainBallance = document.getElementById('depo_ballance').innerText;
    var convertMainBallance = parseFloat(depoSiteMainBallance);
    var totalDeposit = convertDepoValue +  convertMainBallance;
    document.getElementById('depo_ballance').innerText = totalDeposit;

    //  total deposite balance
     var totalAmount = document.getElementById('total_amount').innerText;
     var convertTotalAmount = parseFloat(totalAmount);
     var AllTotalAmount = totalDeposit + convertTotalAmount;
     document.getElementById('total_amount').innerText = AllTotalAmount;



    document.getElementById('deposit_Value').value = 0;
})

// withdaw button 

var withdrwBtn = document.getElementById('widthdrw_btn');
withdrwBtn.addEventListener('click', function(){
    var withdrawValue = document.getElementById('withdraw_value').value;
    var convertwithdrwValue = parseFloat(withdrawValue);
   
    // withdrw BAllance 

    var witrhdrwBallance = document.getElementById('withdrawBallance').innerText;
    var convertwitrhdrwBallance = parseFloat(witrhdrwBallance);
    var totalWithdrw = convertwithdrwValue +  convertwitrhdrwBallance;
    document.getElementById('withdrawBallance').innerText = totalWithdrw;

  // total withdraw amount minus 

 var totalMinus =  document.getElementById('total_amount').innerText;
 var convertTotalMinus = parseFloat(totalMinus)
 var totalMinusAll = -totalWithdrw + convertTotalMinus;
 document.getElementById('total_amount').innerText= totalMinusAll;


    document.getElementById('withdraw_value').value = 0;
})