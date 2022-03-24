function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId)
    const inputText = inputField.value
    const inputAmount = parseInt(inputText)
    inputField.value = "";
    return inputAmount

}

function updateTotal(fieldId, amount) {

    const totalTag = document.getElementById(fieldId)
    const previousTotalText = totalTag.innerText
    const previousTotal = parseInt(previousTotalText)
    const newTotal = previousTotal + amount;
    totalTag.innerText = newTotal;

}
function balanceTotal(amount, isAdd) {
    const balanceTag = document.getElementById("balance-total")
    const balanceIntext = balanceTag.innerText
    const previousBalanceTotal = parseInt(balanceIntext);
    if (isAdd == true) {
        const newBalaceTotal = previousBalanceTotal + amount;
        balanceTag.innerText = newBalaceTotal;
    }
    else {
        const newBalaceTotal = previousBalanceTotal - amount;
        balanceTag.innerText = newBalaceTotal;
    }


}



document.getElementById("deposit-button").addEventListener("click", function () {

    const amount = getInputValue("deposit-input")
    if (amount > 0 ) {
        updateTotal("total-deposit-money", amount)
        balanceTotal(amount, true)
    }
})
document.getElementById("withdraw-button").addEventListener("click", function () {

    const amount = getInputValue("withdraw-input")
    if (amount > 0) {
        updateTotal("total-withdraw-money", amount)
        balanceTotal(amount, false)
    }
})





































// // deposit
// document.getElementById("deposit-button").addEventListener("click", function () {
//     const depositInput = document.getElementById("deposit-input")
//     const newDepositAmount = depositInput.value;
//     const depositTotal = document.getElementById("total-deposit-money")
//     const previousDepositAmount = depositTotal.innerText;
//     const newDepositTotal = parseInt(previousDepositAmount) + parseInt(newDepositAmount)
//     depositTotal.innerText = newDepositTotal

//     // total balanceTotal

//     const balanceTotal = document.getElementById("balance-total")
//     const balanceTotalText = balanceTotal.innerText;
//     const previousBalanceTotal = parseFloat(balanceTotalText)
//     const newBalaceTotal = previousBalanceTotal + parseFloat(newDepositAmount);
//     balanceTotal.innerText = newBalaceTotal;
//     depositInput.value = "";
// })

// document.getElementById("withdraw-button").addEventListener("click", function () {
//     const withdrawInput = document.getElementById("withdraw-input")
//     const newWithdrawAmount = withdrawInput.value;
//     const withdrawTotal = document.getElementById("total-withdraw-money")
//     const previousWithdrawAmount = withdrawTotal.innerText;
//     const newWithdrawTotal = parseInt(previousWithdrawAmount) + parseInt(newWithdrawAmount)
//     withdrawTotal.innerText = newWithdrawTotal;

//     // total balanceTotal

//     const balanceTotal = document.getElementById("balance-total")
//     const balanceTotalText = balanceTotal.innerText;
//     const previousBalanceTotal = parseFloat(balanceTotalText)
//     const newBalaceTotal = previousBalanceTotal - parseFloat(newWithdrawAmount);
//     balanceTotal.innerText = newBalaceTotal;
//     withdrawInput.value = "";
// })