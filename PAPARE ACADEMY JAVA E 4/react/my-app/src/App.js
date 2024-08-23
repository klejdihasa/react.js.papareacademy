
import img1 from './images/1.png';

import './App.css';

function App() {
  return (
    <div className="App">


      <header className="App-header">
     
        <img src={img1} className="App-logo" alt="logo" />
        <p>
           <code>Hello World</code> <br></br>Papare Academy.
        </p>
        <a
          className="App-link"
          href="https://hasafy.com"
          target="_blank"
          rel="noopener noreferrer"
        >
       hasafy.com
        </a>
        <p>By Klejdi Hasa</p>
      </header>
    </div>
  );
}

export default App;
