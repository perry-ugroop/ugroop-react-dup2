/**
 * Created by Yun on 17/11/16.
 */
import BSTextAreaFormControl from '../BootStrap/BSTextAreaFormControl';
import UGFlatBorder from '../BootStrap/UGFlatBorder';
import styled from 'styled-components';
import React from 'react';
const TextareaTmp = (props) => <BSTextAreaFormControl
  rows={props.rows}
/>;
TextareaTmp.propTypes = {
  rows: React.PropTypes.any,
};
const Textarea = styled(TextareaTmp)`
  &&{
    ${UGFlatBorder}
    height: 30px;
    padding: 5px 10px;
    font-size: 12px;
    line-height: 1.5;
    border-radius: 3px;
  }
`;

export default Textarea;
