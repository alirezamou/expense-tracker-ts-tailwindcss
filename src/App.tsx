import React from 'react';
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpense from './components/IncomeExpense';
import './App.css';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';

import GlobalProvider from './context/GlobalState';

function App() {
  return (<GlobalProvider>
        <Header title={"Expense Tracker"} />
        <div className='my-[30px] mx-auto w-[350px] flex flex-col gap-2'>
          <Balance />
          <IncomeExpense />
          <TransactionList />
          <AddTransaction />
        </div>
  </GlobalProvider>
  );
}

export default App;
