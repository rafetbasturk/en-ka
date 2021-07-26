import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Machines from "./Machines";
import References from "./References";
import Contact from "./Contact";
import Error from "./Error";
import Footer from "./Footer";


function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route path="/about" >
          <About />
        </Route>
        <Route path="/machines" >
          <Machines />
        </Route>
        <Route path="/references" >
          <References />
        </Route>
        <Route path="/contact" >
          <Contact />
        </Route>
        <Route path="*" >
          <Error />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
