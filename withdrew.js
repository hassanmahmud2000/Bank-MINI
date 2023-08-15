document.getElementById  ('withdraw-button').addEventListener ('click',function (){ 
    const withdrawField = document.getElementById ('input-withdraw');
    const newWithdrawString = withdrawField.value;
    // step 2
    const newWithdrawAmount = parseFloat (newWithdrawString );
    // step 3
    const CurrentWithdrawTotalElement = document.getElementById ('withdrew-Total');
    const CurrentWithdrawTotalElementString = CurrentWithdrawTotalElement.innerText;
    const CurrentWithdrawTotal = parseFloat (CurrentWithdrawTotalElementString);
    // step 4
    const newWithdrawAmountTotal = newWithdrawAmount + CurrentWithdrawTotal;
    CurrentWithdrawTotalElement.innerText = newWithdrawAmountTotal;

    // step 5
    const BalanceElementField = document.getElementById ('Balance-Total');
    const BalanceElementFieldString = BalanceElementField.innerText;
    const BalanceTotal = parseFloat (BalanceElementFieldString);
    // step 6
    const newBalanceTotal = BalanceTotal - newWithdrawAmount;
    BalanceElementField.innerText = newBalanceTotal;
    withdrawField.value='';

})