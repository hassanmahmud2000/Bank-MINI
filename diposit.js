// step 1
document.getElementById ('deposit-button').addEventListener ('click',function () {
    // step 2
    const depositField = document.getElementById ('input-deposit');
    const newDepositAmountSting = depositField.value;
    // String To Number..........
    const newDepositAmount = parseFloat (newDepositAmountSting);
    // Step 3
    const depositTotalElement = document.getElementById ('Deposit-Total');
    const previousDepositTotalString = depositTotalElement.innerText;
    // String To Number......
    const previousDepositTotal = parseFloat (previousDepositTotalString);
    // step 4 Add Numbers 
    const currentDeposit = previousDepositTotal + newDepositAmount ;
    depositTotalElement.innerText = currentDeposit;
    // clear
    depositField.value = '';
    // Balance !!!!!!!
    const previousBalanceElement = document.getElementById ('Balance-Total');
    const previousBalanceString = BalanceElement.innerText;
    // String To Number !!!!!!!!
    const previousBalanceTotal = parseFloat (previousBalanceString);
    // Ager Balance ar sathay New Deposit ta Add korbo  !!!!!!!!!!!!!!!!!!!!!!!!

    const currentBalanceTotal = newDepositAmount + previousBalanceTotal;
    previousBalanceElement.innerText = currentBalanceTotal;
    
})