/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./public/assets/js/index.js":
/*!***********************************!*\
  !*** ./public/assets/js/index.js ***!
  \***********************************/
/***/ (() => {

eval("const $expenseList = document.querySelector('#expense-list');\nconst $expenseName = document.querySelector('#expense-name');\nconst $expenseAmount = document.querySelector('#expense-amount');\nconst $expenseAdd = document.querySelector('#add-fund');\nconst $expenseSubtract = document.querySelector('#subtract-fund');\n\nvar transactionTotal = [];\n\nconst getExpenseList = event => {\n  fetch('/api/expenses')\n    .then(response => response.json())\n    .then(expenseListArr => {\n      expenseListArr.forEach(printExpense);\n    })\n    .catch(err => {\n      console.log(err);\n    })\n  \n}\n\nconst printExpense = ({ _id, expenseName, expenseAmount }) => {\n\n  transactionTotal.push(expenseAmount);\n\n  const expenseRow = `\n    <div class=\"row-expense-container\">\n      <div class=\"expense-left\">${expenseName}</div>\n      <div class=\"expense-right\">$${expenseAmount}</div>\n    </div>\n  `;\n\n  $expenseList.innerHTML += expenseRow;\n\n  printTotal()\n}\n\nfunction printTotal() {\n\n  transactionTotal.push(0);\n\n  var convertNumber = transactionTotal.map(function(x) {\n    return parseInt(x, 0);\n  })\n\n  let newTotalEl = document.querySelector(\"#transaction-total\");\n  newTotalEl.innerHTML = \"$\" + convertNumber.reduce(getTotal);\n\n  function getTotal(total, num) {\n    return total + num;\n  }\n}\n\n\nfunction removeTotal() {\n  let totalEl = document.querySelector(\"#transaction-total\");\n  totalEl.remove();\n}\n\nconst addExpense = event => {\n  event.preventDefault();\n\n  const expenseName = $expenseName.value;\n  const expenseAmount = $expenseAmount.value;\n\n  if (!expenseName || !expenseAmount) {\n    return alert(\"Input Missing\");\n  }\n\n  transactionTotal.push(expenseAmount);\n\n  var convertNumber = transactionTotal.map(function(x) {\n    return parseInt(x, 0);\n  })\n\n  console.log(transactionTotal);\n\n  removeTotal()\n\n  const addTotalEl = document.createElement(\"h1\");\n  addTotalEl.setAttribute(\"id\", \"transaction-total\");\n  document.querySelector(\"#price-container\").appendChild(addTotalEl);\n\n  let newTotalEl = document.querySelector(\"#transaction-total\");\n  newTotalEl.innerHTML = \"$\" + convertNumber.reduce(getTotal);\n\n  function getTotal(total, num) {\n    return total + num;\n  }\n\n  const formData = { expenseName, expenseAmount }\n\n  fetch('/api/expenses', {\n    method: 'POST',\n    headers: {\n      Accept: 'application/json',\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify(formData)\n  })\n  .then(response => response.json())\n  .then(postResponse => {\n    alert('Transaction created successfully');\n    console.log(postResponse)\n  })\n  .catch(err => {\n    console.log(err);\n    saveRecord(formData);\n  })\n\n  location.reload();\n\n}\n\nconst subtractExpense = event => {\n  event.preventDefault();\n\n  const expenseName = $expenseName.value;\n  const expenseAmount = -Math.abs($expenseAmount.value);\n\n  if (!expenseName || !expenseAmount) {\n    return alert(\"Input Missing\");\n  }\n\n  transactionTotal.push(expenseAmount);\n\n  var convertNumber = transactionTotal.map(function(x) {\n    return parseInt(x, 0);\n  })\n\n  removeTotal()\n\n  const addTotalEl = document.createElement(\"h1\");\n  addTotalEl.setAttribute(\"id\", \"transaction-total\");\n  document.querySelector(\"#price-container\").appendChild(addTotalEl);\n\n  let newTotalEl = document.querySelector(\"#transaction-total\");\n  newTotalEl.innerHTML = \"$\" + convertNumber.reduce(getTotal);\n\n  function getTotal(total, num) {\n    return total + num;\n  }\n\n  const formData = { expenseName, expenseAmount }\n\n  fetch('/api/expenses', {\n    method: 'POST',\n    headers: {\n      Accept: 'application/json',\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify(formData)\n  })\n  .then(response => response.json())\n  .then(postResponse => {\n    alert('Transaction created successfully');\n    console.log(postResponse)\n  })\n  .catch(err => {\n    console.log(err);\n    saveRecord(formData)\n  })\n\n  location.reload();\n}\n\ngetExpenseList();\nprintTotal();\n\n$expenseAdd.addEventListener('click', addExpense);\n$expenseSubtract.addEventListener('click', subtractExpense);\n\n//# sourceURL=webpack://18-nosql/./public/assets/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./public/assets/js/index.js"]();
/******/ 	
/******/ })()
;