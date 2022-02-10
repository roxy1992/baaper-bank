// handle deposit button event
document.getElementById('diposit-button').addEventListener('click', function () {
    const dipositInput = document.getElementById('diposit-input');
    const newDipositAmountText = dipositInput.value;
    const newDipositAmount = parseFloat(newDipositAmountText)

    // console.log(dipositAmount);
    // update dipoid blnc
    const dipositTotal = document.getElementById('diposit-total');
    const previousDipositText = dipositTotal.innerText;
    const previousDipositAmount = parseFloat(previousDipositText);

    const newDipositToal = previousDipositAmount + newDipositAmount;
    dipositTotal.innerText = newDipositToal;
    // update account balench
    const BalanceTotal = document.getElementById('balance-total');
    const BalanceTotalText = BalanceTotal.innerText;
    const previousBalanceTotal = parseFloat(BalanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDipositAmount;
    BalanceTotal.innerText = newBalanceTotal;

    // clear diposit 
    dipositInput.value = ''
})