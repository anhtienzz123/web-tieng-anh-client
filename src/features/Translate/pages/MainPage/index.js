import React from "react";
import PropTypes from "prop-types";
import Word from "features/Translate/components/Word";

MainPage.propTypes = {};

function MainPage(props) {
  return (
    <div id="translate-main-page">
      <Word />
    </div>
  );
}

export default MainPage;
