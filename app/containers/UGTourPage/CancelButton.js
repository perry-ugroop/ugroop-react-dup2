/**
 * Created by yunzhou on 20/11/2016.
 */
import React from 'react';
import styled from 'styled-components';
import UGFlatBorder from '../BootStrap/UGFlatBorder';

const CancelButtonTmp = (props) => <button
  className={`btn btn-default ${props.className}`}
  id={props.id}
  name={props.name}
  onClick={props.close}
>
  {props.children}
</button>
;

CancelButtonTmp.propTypes = {
  className: React.PropTypes.any,
  id: React.PropTypes.any,
  close: React.PropTypes.func,
  name: React.PropTypes.string,
  children: React.PropTypes.any,
};

const CancelButton = styled(CancelButtonTmp)`${UGFlatBorder}`;

export default CancelButton;
