import "./App.css";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Syllabus from "./pages/Syllabus";
import Footer from "./components/footer";
import "./styles/variables.scss";
import "./styles/global.scss";
import Books from "./pages/Books";
import OldQuestions from "./pages/Old Questions";
import Formulas from "./pages/Formulas";

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
          <Route path="/books/:id">
            <Books />
          </Route>
          <Route path="/oldquestions/:id">
            <OldQuestions />
          </Route>
          <Route path="/formulas/:id">
            <Formulas />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
