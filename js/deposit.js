// get value from deposit field 
document.getElementById('btn-deposit').addEventListener('click' , function(){
    const depositField = document.getElementById('depositField');
    const depositString = depositField.value ;
    const totalDeposit = parseFloat(depositString);
// get previous value from deposit 

    const yourDepositElement = document.getElementById('yourDeposit');
    const yourDepositBalanceString = yourDepositElement.innerText ;
    const yourDepositBalance = parseFloat(yourDepositBalanceString);
    yourDepositElement.innerText = totalDeposit ;

    const yourTotalDeposit = totalDeposit + yourDepositBalance ;
    yourDepositElement.innerText = yourTotalDeposit ;

// set clear the value 
    depositField.value = '' ;

    const yourAllBalance = document.getElementById('currentTotalBalance');
    const totalBalanceString = yourAllBalance.innerText ;
    const totalBalance = parseFloat(totalBalanceString);

    // yourAllBalance.innerText = totalBalance ;

    const yourTotalBalance = totalDeposit  + totalBalance ;
    yourAllBalance.innerText = yourTotalBalance ;

})