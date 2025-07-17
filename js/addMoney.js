document.getElementById('btn-add-money').addEventListener('click', function(event){
event.preventDefault();

const addMoney = document.getElementById('input-add-money').value;
const addMoneyNumber = parseFloat(addMoney);
const pinNumber = document.getElementById('input-pin-number').value;

console.log(addMoney);
console.log(pinNumber);

if(pinNumber == 1234){
    const accountBalance = document.getElementById('account-balance').innerText;
    const balanceNumber = parseFloat(accountBalance);

    const newBalance = addMoneyNumber + balanceNumber;
    document.getElementById('account-balance').innerText = newBalance;
}
else{
    alert('failed to add money')
}
})