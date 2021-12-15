import React, { lazy, Suspense, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Loading from "./Loading"
const Header = lazy(() => import("./Header"))
const Home = lazy(() => import("./Home"))
const Machines = lazy(() => import("./Machines"))
const References = lazy(() => import("./References"))
const Contact = lazy(() => import("./Contact"))
const Error = lazy(() => import("./Error"))
const Footer = lazy(() => import("./Footer"))


function App() {
  const [page, setPage] = useState("Ana Sayfa")

  useEffect(() => {
    document.title = `${page}`
  }, [page])

  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Header page={page} setPage={setPage} />

        <Switch>
          <Route exact path="/" >
            <Home />
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

        <Footer setPage={setPage} />
      </Suspense>
    </Router>

  );
}

export default App;
