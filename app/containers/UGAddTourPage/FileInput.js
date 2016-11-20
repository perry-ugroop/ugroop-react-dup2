/**
 * Created by Yang on 17/11/16.
 */
import React from 'react';
import styled from 'styled-components';

const InputTmp = (props) => <input
  className={` ${props.className} `}
  id={props.id}
  type={'file'}
  name={props.name}
  placeholder={props.placeholder}
  value={props.value}
>
</input>;

InputTmp.propTypes = {
  className: React.PropTypes.any,
  id: React.PropTypes.any,
  name: React.PropTypes.any,
  placeholder: React.PropTypes.any,
  value: React.PropTypes.any,
};


const FileInput = styled(InputTmp)`
  &&{
    position: absolute;
    top: 0;
    right: 0;
    min-width: 100%;
    min-height: 100%;
    font-size: 80%;
    text-align: right;
    filter: alpha(opacity=0);
    opacity: 0;
    outline: none;
    background: white;
    cursor: inherit;
    display: block;
  }
`;

export default FileInput;
