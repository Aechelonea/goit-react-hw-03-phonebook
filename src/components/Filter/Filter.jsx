import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

class Filter extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label className={styles.filter}>
        Find contacts by name:
        <input type="text" value={value} onChange={onChange} />
      </label>
    );
  }
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
