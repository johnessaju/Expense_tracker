import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
const NewExpense = (props) => {
  const [addExpenseButton, setAddExpenseButton] = useState(false);
  const saveExpenseData = (expense) => {
    const newExpense = {
      ...expense,
      id: Math.random().toString()
    };
    props.onAddExpense(newExpense);
  };

  const addExpenseButtonHandler = () => {
    setAddExpenseButton((previousValue) => {
      return !previousValue;
    });
  };

  if (!addExpenseButton) {
    return (
      <div className="new-expense">
        <button onClick={addExpenseButtonHandler}>Add New Expense</button>
      </div>
    );
  }
  return (
    <div className="new-expense">
      <ExpenseForm
        onAddExpenseButtonClick={addExpenseButtonHandler}
        onSaveExpenseData={saveExpenseData}
      />
    </div>
  );
};
export default NewExpense;
