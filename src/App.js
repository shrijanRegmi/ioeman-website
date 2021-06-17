import "./App.css";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Syllabus from "./pages/syllabus";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/syllabus/:id">
            <Syllabus />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
