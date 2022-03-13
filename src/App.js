import './App.css';
import AddTransaction from './components/AddTransaction/AddTransaction';
import Header from './components/Header/Header';
import TransactionList from './components/Transactions/TransactionList';

function App() {
  return (
    <section>
      <div className='app-container'>
        <Header />
        <AddTransaction />
      </div>
      <div className='transactions-container'>
        <TransactionList />
      </div>
    </section>
  );
}

export default App;
