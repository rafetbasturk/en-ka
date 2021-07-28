import React, {lazy, Suspense} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const Header = lazy(() => import("./Header"))
const Home = lazy(() => import("./Home"))
const About = lazy(() => import("./About"))
const Machines = lazy(() => import("./Machines"))
const References = lazy(() => import("./References"))
const Contact = lazy(() => import("./Contact"))
const Error = lazy(() => import("./Error"))
const Footer = lazy(() => import("./Footer"))


function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading</p>}>
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
      </Suspense>
    </Router>

  );
}

export default App;
