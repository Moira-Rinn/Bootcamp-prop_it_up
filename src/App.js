// import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PersonCard firstName={'Sacha'} lastName={'Rinn'} age={40} hairColor={'Purple, pink, and gray'} />
        <PersonCard firstName={'Moira'} lastName={'Rinn'} age={40} hairColor={'Purple, pink, and gray'} />
        <PersonCard firstName={'Crys'} lastName={'Rinn'} age={40} hairColor={'Purple, pink, and gray'} />
        <PersonCard firstName={'Jane'} lastName={'Rinn'} age={40} hairColor={'Purple, pink, and gray'} />
      </header>
    </div>
  );
}

export default App;
