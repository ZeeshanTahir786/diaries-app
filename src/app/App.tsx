import React, { FC } from "react";
import { Suspense } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RootState } from "../rootReducer";

const Auth = React.lazy(() => import("../services/features/home/Home"));
const Home = React.lazy(() => import("../services/features/home/Home"));

const App: FC = () => {
  const isLoggedin = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Suspense fallback={<p>Loading...</p>}>
            {isLoggedin ? <Home /> : <Auth />}
          </Suspense>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
