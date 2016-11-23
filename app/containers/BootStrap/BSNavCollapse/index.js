/* *********************************************************** */
/* Created by Vince on 2016-11-22                              */
/* *********************************************************** */
import React from 'react';

const BSNavCollapse = (props) =>
  <button
    type="button"
    className={'navbar-toggle collapsed'}
    data-toggle={'collapse'}
    data-target={'#navbar'}
    aria-expanded={'false'}
    aria-controls={'navbar'}
  >
    <span className={'sr-only'}>{ props.label }</span>
    <span className={'icon-bar'}></span>
    <span className={'icon-bar'}></span>
    <span className={'icon-bar'}></span>
    {props.children}
  </button>;

BSNavCollapse.propTypes = {
  children: React.PropTypes.any,
  label: React.PropTypes.any,
};

export default BSNavCollapse;
