document.getElementById('btn-withdrow').addEventListener('click' , function(){

    const withdrowField = document.getElementById('withdrow-field');
    const newWithdrowAmountString = withdrowField.value ;
    const newWithdrowAmount = parseFloat(newWithdrowAmountString);
    withdrowField.value = '' ;

    if (isNaN(newWithdrowAmount)) {
        alert('Please enter a Number');
        return ;
    }
    

    const WithdrowTotalElement = document.getElementById('withdrow-total');
    const previousWithdrowTotalString = WithdrowTotalElement.innerText ;
    const previousWithdrowTotal = parseFloat(previousWithdrowTotalString);
    WithdrowTotalElement.innerText = newWithdrowAmount ;

    

   
    


    const balanceTotalElement = document.getElementById('currentTotalBalance');
    const previousBalanceTotalString = balanceTotalElement.innerText ;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if(newWithdrowAmount > previousBalanceTotal){
        alert('Baaper bank a ato tk nai .');
        return ;
    }

    const curerntWithrowTotal = previousWithdrowTotal + newWithdrowAmount ;
    WithdrowTotalElement.innerText = curerntWithrowTotal ;


    const newBalanceTotal = previousBalanceTotal - newWithdrowAmount ;
    balanceTotalElement.innerText = newBalanceTotal ;
})