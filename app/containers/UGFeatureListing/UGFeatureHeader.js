
import React from 'react';
import UGFeatureHeaderWrapper from './UGFeatureHeaderWrapper';

const UGFeatureHeader = (props) => <div className={`top-30 text-center fademe animate-up ${props.className}`}>
  <UGFeatureHeaderWrapper>
    <h1>{props.title}</h1>
    <p>{props.description}</p>
  </UGFeatureHeaderWrapper>
</div>
;

UGFeatureHeader.propTypes = {
  className: React.PropTypes.any,
  title: React.PropTypes.string,
  description: React.PropTypes.string,
};

export default UGFeatureHeader;
