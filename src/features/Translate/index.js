import React from "react";
import PropTypes from "prop-types";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import NotFoundPage from "components/NotFoundPage";

Translate.propTypes = {};

function Translate(props) {
  const { url } = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route exact path={url} component={MainPage} />

        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default Translate;
