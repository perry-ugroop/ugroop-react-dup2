/**
 * Created by Yang on 17/11/16.
 */
import BSTextAreaFormControl from '../BootStrap/BSTextAreaFormControl';
import UGFlatBorder from '../BootStrap/UGFlatBorder';
import styled from 'styled-components';
const Textarea = styled(BSTextAreaFormControl)`
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
