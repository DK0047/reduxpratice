import logo from './logo.svg';
import './App.css';
import  Homecontainer from './container/Homecontainer'
import Headercontainer from './container/Headercontainer';

function App() {
  return (
    <div className="App">
      <Headercontainer/>
      <Homecontainer />
    </div>
  );
}

export default App;
