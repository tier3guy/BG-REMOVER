import './App.css';
import DragableContainer from './Components/JSX/DragableContainer';
import Navbar from './Components/JSX/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <section className = "main-body">
        <DragableContainer/>
      </section>
    </div>
  );
}

export default App;
