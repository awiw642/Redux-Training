import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { markAllAsUnpacked } from '../actions/items-actions';

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ markAllAsUnpacked }, dispatch);
};

export default connect(null, mapDispatchToProps)(({ markAllAsUnpacked }) => (
  <button className="button full-width" onClick={markAllAsUnpacked}>
    Mark All As Unpacked
  </button>
));
