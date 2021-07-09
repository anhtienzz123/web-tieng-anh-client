import React from "react";
import PropTypes from "prop-types";
import "./footer.scss";
import { Divider } from "antd";

Footer.propTypes = {};

function Footer(props) {
  return (
    <div className="footer">
      <Divider />
      Footer - IUH - Đại học công nghiệp TPHCM
    </div>
  );
}

export default Footer;
