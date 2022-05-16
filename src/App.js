
import { Navbar, Welcome, Footer, Services, Transactions } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Faucet</h1>

      <div>

        <Navbar/>
        <Welcome/>

      </div>
      <Services/>
      <Transactions/>
      <Footer/>

    </div>
  );
}

export default App;
