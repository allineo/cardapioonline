import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { HomePage } from "./pages/home";

const Routes = () => {
  return (<div>
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Router>
  </div>
  );
};

export default Routes;
