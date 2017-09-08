import React from 'react';
import PropTypes from 'prop-types';

const Page = (props) => (
  <div style={{ height: '100%' }}>
    {props.children}
  </div>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Page;
