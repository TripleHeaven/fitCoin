import { Route, Switch } from "react-router-dom";
import { Main } from "routes/Main";
import { Team } from "routes/Team";
import { Tokenomics } from "routes/Tokenomics";
import { Revolution } from "routes/Revolution";
import { Routes } from "utils";

export const Root = () => (
  <Switch>
    <Route exact path={Routes.MAIN} component={Main} />
    <Route exact path={Routes.TOKENOMICS} component={Tokenomics} />
    <Route exact path={Routes.TEAM} component={Team} />
    <Route exact path={Routes.REVOLUTION_NUTRITION} component={Revolution} />
  </Switch>
);
