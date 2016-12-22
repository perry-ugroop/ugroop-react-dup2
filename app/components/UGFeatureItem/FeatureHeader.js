import React, { PropTypes } from 'react';
import H3 from '../../components/H3';

function FeatureHeader(props) {
  return (
    <H3 className={'featured-header'}>
      {props.children}
    </H3>
  );
}

FeatureHeader.propTypes = {
  children: PropTypes.any,
};

export default FeatureHeader;
