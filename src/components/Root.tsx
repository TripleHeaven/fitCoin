import { Route, Switch } from "react-router-dom";
import { Main } from "routes/Main";
import { Team } from "routes/Team";
import { Tokenomics } from "routes/Tokenomics";

export const Root = () => (
  <Switch>
    <Route exact path={"/"} component={Main} />
    <Route exact path={"/tokenomics"} component={Tokenomics} />
    <Route exact path={"/team"} component={Team} />
  </Switch>
);
