import React from 'react';
import { Header } from './Components/Header';
import { Balance } from './Components/Balance';
import { IncomeExpenses } from './Components/IncomeExpenses';
import { TransactionList } from './Components/TransactionList';
import { AddTransactions } from './Components/AddTransactions';
import { GlobalProvider } from './Context/GlobalState';
import Timer from './Components/Timer';
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className='container'>
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransactions/>
      </div>
    </GlobalProvider>
  );
}

export default App;
