import { useState } from 'react';
import './App.css';
import About from './components/About';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Blogfolio</h1>
      </div>
      <About />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App
