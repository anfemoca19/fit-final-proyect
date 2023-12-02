import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { FitnessProvider } from "./contexts/FitnessContext";
import Home from "./pages/Home";
import CreateRoutinePage from "./pages/CreateRoutinePage";

const App = () => {
  return (
    <FitnessProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/create-routine" component={CreateRoutinePage} />
          {/* ...otros enrutamientos */}
        </Switch>
      </Router>
    </FitnessProvider>
  );
};

export default App;
