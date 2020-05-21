import React from "react";
import PropTypes from "prop-types";

import styles from "./ContactListItem.module.css";

import DeleteBtn from "../DeleteBtn/DeleteBtn";

const ContactListItem = ({ name, number, onDelete }) => (
  <li className={styles.listItem}>
    {name}: {number}
    <DeleteBtn onDelete={onDelete} />
  </li>
);

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactListItem;
