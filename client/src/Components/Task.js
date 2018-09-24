import React from 'react';
import PropTypes from 'prop-types';

const Task = ({ name }) => {
  return(<li>{name}</li>);
};

Task.propTypes = {
  name: PropTypes.string
};

export default Task;
