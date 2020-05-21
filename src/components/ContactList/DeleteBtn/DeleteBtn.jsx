import React from "react";
import PropTypes from "prop-types";

import styles from "./DeleteBtn.module.css";

const DeleteBtn = ({ onDelete }) => (
  <button className={styles.btn} onClick={onDelete}>
    Delete
  </button>
);

DeleteBtn.propTypes = {
  onDelete: PropTypes.func.isRequired,
};

export default DeleteBtn;
