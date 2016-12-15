/**
 * Created by yunzhou on 20/11/2016.
 */
import React from 'react';
import styled from 'styled-components';
import UGFlatBorder from '../BootStrap/UGFlatBorder';

const SubmitButtonTmp = (props) => <input
  className={`btn btn-primary ${props.className}`}
  id={props.id}
  type={'submit'}
  name={props.name}
  value={props.value}
/>;

SubmitButtonTmp.propTypes = {
  className: React.PropTypes.any,
  id: React.PropTypes.any,
  name: React.PropTypes.string,
  value: React.PropTypes.string,
};

const SubmitButton = styled(SubmitButtonTmp)`${UGFlatBorder}`;

export default SubmitButton;
