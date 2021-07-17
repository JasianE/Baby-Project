import './App.css';
import Nav from './Components/Nav'
import Video from './Components/Video'
import Comments from './Components/Comments'

function App() {
  return (
    <div className="App">
      <header>
        <Nav></Nav>
      </header>
      <body className = 'body2'>
        <Video/>
      </body>

    </div>
  );
}

export default App;
