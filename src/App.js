import "./App.css";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Syllabus from "./pages/syllabus";
import Footer from "./components/footer";
import "./styles/variables.scss";
import "./styles/global.scss";

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
        <Footer />
      </div>
    </Router>
  );
}

export default App;
