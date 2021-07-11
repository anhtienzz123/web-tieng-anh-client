import React from "react";
import PropTypes from "prop-types";
import Landing from "features/Home/components/Landing";
import Banner from "components/Banner/Banner";
import Header from "components/Header";


MainPage.propTypes = {};

function MainPage(props) {
  return (
    <div id="landing_page">
      <Landing />
    
    </div>
  );
}

export default MainPage;
