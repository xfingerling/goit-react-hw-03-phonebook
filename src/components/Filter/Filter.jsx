import React from "react";
import PropTypes from "prop-types";

import styles from "./Filter.module.css";

const Filter = ({ value, onFilter }) => (
  <input
    className={styles.input}
    type="text"
    onChange={onFilter}
    value={value}
    placeholder="Find contact by name"
  />
);

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Filter;
