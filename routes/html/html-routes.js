const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/expense-list.html'));
});

router.get('/add-expense', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/expense-pizza.html'));
});

router.get('/expense', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/expense.html'));
});

module.exports = router;
