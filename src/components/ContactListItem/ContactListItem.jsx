import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactListItem.module.css';

class ContactListItem extends React.Component {
  render() {
    const { contact, onDelete } = this.props;
    return (
      <li className={styles.contactListItem}>
        {contact.name}: {contact.number}
        <button onClick={onDelete}>Delete</button>
      </li>
    );
  }
}

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactListItem;
