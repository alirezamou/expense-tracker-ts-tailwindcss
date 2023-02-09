import React from 'react';
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpense from './components/IncomeExpense';
import './App.css';
import TransactionList from './components/TransactionList';

function App() {
  return (<>
        <Header title={"Expense Tracker"} />
        <div className='my-[30px] mx-auto w-[350px]'>
          <Balance />
          <IncomeExpense />
          <TransactionList />
        </div>
  </>
  );
}

export default App;
