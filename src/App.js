
import './styles/App.scss';

import Nav from './Layout/Navigation/Nav';
import Home from './Layout/Home/Home';
import Footer from './Layout/Footer/Footer';

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
