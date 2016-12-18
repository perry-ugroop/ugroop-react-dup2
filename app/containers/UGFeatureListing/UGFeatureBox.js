
import React from 'react';
import UGFeatureBoxStyle from './UGFeatureBoxStyle';

const UGFeatureBox = (props) => <div ${...props}>
  <UGFeatureBoxStyle>
    {props.children}
  </UGFeatureBoxStyle>
</div>;

UGFeatureBox.propTypes = {
  // className: React.PropTypes.any,
  children: React.PropTypes.any,
};

export default UGFeatureBox;
