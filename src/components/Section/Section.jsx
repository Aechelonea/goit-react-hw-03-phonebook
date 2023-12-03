import React from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.css'; // Ensure you have the corresponding CSS file

class Section extends React.Component {
  render() {
    const { title, children } = this.props;
    return (
      <div className={styles.section}>
        {title && <h2>{title}</h2>}
        {children}
      </div>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Section;
