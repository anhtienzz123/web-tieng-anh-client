import React, { useEffect } from "react";
import PropTypes from "prop-types";

Word.propTypes = {};

Word.defaultProps = {
  datas: [],
};

function Word(props) {
  const { datas } = props;

  return (
    <div>
      data:{" "}
      {datas.map((d, index) => {
        return (
          <>
            <p>d</p>
            <h1>dsds</h1>
          </>
        );
      })}
    </div>
  );
}

export default Word;
