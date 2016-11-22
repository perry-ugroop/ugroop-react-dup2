/**
 * Created by Yang on 16/11/16.
 */
import UGFlatBorder from '../BootStrap/UGFlatBorder';
import React from 'react';
import styled from 'styled-components';

const SpanButtonTmp = (props) => <span className={`btn btn-primary btn-file btn-sm ${props.className}`}>
  {props.children}
</span>;

SpanButtonTmp.propTypes = {
  className: React.PropTypes.any,
  children: React.PropTypes.any,
};

const SpanButton = styled(SpanButtonTmp)`${UGFlatBorder}`;
export default SpanButton;
