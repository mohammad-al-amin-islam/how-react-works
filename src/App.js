import logo from './logo.svg';
import './App.css';
import Device from './components/Device/Device';
import StepCount from './StepCount/StepCount';

function App() {
  return (
    <div className="App">
      <Device name="Uphone" price='13000'></Device>
      <StepCount></StepCount>
    </div>
  );
}

export default App;
