import { Switch, Route } from "react-router";
import Home from "./home/home";
import Casamento from "./casamento/Casamento";
import Formatura from "./formatura/Formatura";
import Confraternizacao from "./confraternização/confraternizacao";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route exact path="/casamento">
        <Casamento></Casamento>
      </Route>
      <Route exact path="/formatura">
        <Formatura></Formatura>
      </Route>
      <Route exact path="/confraternizacao">
        <Confraternizacao></Confraternizacao>
      </Route>
    </Switch>
  );
};

export default Routes;
