import './App.css';
import AddTransaction from './components/AddTransaction/AddTransaction';
import Header from './components/Header/Header';
import TransactionList from './components/Transactions/TransactionList';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <section>
        <div className='app-container'>        
          <Header />
          <AddTransaction />
        </div>
        <div className='transactions-container'>
          <TransactionList />
        </div>
      </section>
    </GlobalProvider>
  );
}

export default App;
