import './App.css';
import Navbar from "./features/Navbar";
import ProductSlide from './features/ProductSlide';
import { Container } from 'react-bootstrap';
import { Switch, Route } from 'react-router';
import Home from './features/Home';

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Switch>
          <Route path="/">
              <Home />
          </Route>
        </Switch>
      </Container>
    </>
  );
}

export default App;
