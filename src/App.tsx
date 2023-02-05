import React from 'react';
import Header from "./components/Header";
import Balance from "./components/Balance";
import './App.css';

function App() {
  return (<>
        <Header title={"Expense Tracker"} />
        <div className='my-[30px] mx-auto w-[350px]'>
          <Balance />
        </div>
  </>
  );
}

export default App;
