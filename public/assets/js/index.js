const $expenseList = document.querySelector('#expense-list');
const $expenseName = document.querySelector('#expense-name');
const $expenseAmount = document.querySelector('#expense-amount');
const $expenseAdd = document.querySelector('#add-fund');
const $expenseSubtract = document.querySelector('#subtract-fund');

var transactionTotal = [];

const getExpenseList = event => {
  fetch('/api/expenses')
    .then(response => response.json())
    .then(expenseListArr => {
      expenseListArr.forEach(printExpense);
    })
    .catch(err => {
      console.log(err);
    })
}

const printExpense = ({ _id, expenseName, expenseAmount }) => {

  transactionTotal.push(expenseAmount);

  const expenseRow = `
    <div class="row-expense-container">
      <div class="expense-left">${expenseName}</div>
      <div class="expense-right">$${expenseAmount}</div>
    </div>
  `;

  $expenseList.innerHTML += expenseRow;

  printTotal()
}

function printTotal() {

  transactionTotal.push(0);

  var convertNumber = transactionTotal.map(function(x) {
    return parseInt(x, 0);
  })

  let newTotalEl = document.querySelector("#transaction-total");
  newTotalEl.innerHTML = "$" + convertNumber.reduce(getTotal);

  function getTotal(total, num) {
    return total + num;
  }
}


function removeTotal() {
  let totalEl = document.querySelector("#transaction-total");
  totalEl.remove();
}

const addExpense = event => {
  event.preventDefault();

  const expenseName = $expenseName.value;
  const expenseAmount = $expenseAmount.value;

  if (!expenseName || !expenseAmount) {
    return alert("Input Missing");
  }

  transactionTotal.push(expenseAmount);

  var convertNumber = transactionTotal.map(function(x) {
    return parseInt(x, 0);
  })

  console.log(transactionTotal);

  removeTotal()

  const addTotalEl = document.createElement("h1");
  addTotalEl.setAttribute("id", "transaction-total");
  document.querySelector("#price-container").appendChild(addTotalEl);

  let newTotalEl = document.querySelector("#transaction-total");
  newTotalEl.innerHTML = "$" + convertNumber.reduce(getTotal);

  function getTotal(total, num) {
    return total + num;
  }

  const formData = { expenseName, expenseAmount }

  fetch('/api/expenses', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(response => response.json())
  .then(postResponse => {
    alert('Transaction created successfully');
    console.log(postResponse)
  })
  .catch(err => {
    console.log(err);
    saveRecord(formData);
  })

  location.reload();

}

const subtractExpense = event => {
  event.preventDefault();

  const expenseName = $expenseName.value;
  const expenseAmount = -Math.abs($expenseAmount.value);

  if (!expenseName || !expenseAmount) {
    return alert("Input Missing");
  }

  transactionTotal.push(expenseAmount);

  var convertNumber = transactionTotal.map(function(x) {
    return parseInt(x, 0);
  })

  removeTotal()

  const addTotalEl = document.createElement("h1");
  addTotalEl.setAttribute("id", "transaction-total");
  document.querySelector("#price-container").appendChild(addTotalEl);

  let newTotalEl = document.querySelector("#transaction-total");
  newTotalEl.innerHTML = "$" + convertNumber.reduce(getTotal);

  function getTotal(total, num) {
    return total + num;
  }

  const formData = { expenseName, expenseAmount }

  fetch('/api/expenses', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(response => response.json())
  .then(postResponse => {
    alert('Transaction created successfully');
    console.log(postResponse)
  })
  .catch(err => {
    console.log(err);
    saveRecord(formData)
  })

  location.reload();
}

getExpenseList();
printTotal();

$expenseAdd.addEventListener('click', addExpense);
$expenseSubtract.addEventListener('click', subtractExpense);