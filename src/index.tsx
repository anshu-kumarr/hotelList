import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import HotelInfo from "./components/HotelInfo";

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <Switch>
        <Route exact path={"/"} render={() => <App />} />
        <Route
          path={"/info/:id"}
          render={({ match, history }) => {
            // console.log(history)
            return (
              <HotelInfo
                name={match.params.id}
                path={history.location.pathname}
              />
            );
          }}
        />
      </Switch>
    </Provider>
  </Router>,
  document.getElementById("root")
);
