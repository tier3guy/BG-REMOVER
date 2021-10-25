import './App.css';
import DragableContainer from './Components/JSX/DragableContainer';
import Navbar from './Components/JSX/Navbar';
import Output from './Components/JSX/Output';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <section className = "main-body">
        <DragableContainer/>
        <Output/>
      </section>
    </div>
  );
}

export default App;
