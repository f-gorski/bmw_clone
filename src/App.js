
import './styles/App.scss';
import Home from './Layout/Home/Home';
import Nav from './Layout/Navigation/Nav';

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Home />
    </div>
  );
}

export default App;
