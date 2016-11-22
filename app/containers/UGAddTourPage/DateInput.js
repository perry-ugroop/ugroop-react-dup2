/**
 * Created by Yang on 17/11/16.
 */
import UGFlatBorder from '../BootStrap/UGFlatBorder';
import styled from 'styled-components';
import DatePicker from 'react-bootstrap-date-picker';


const DateInput = styled(DatePicker)`
  &&{
    ${UGFlatBorder}
    height: 30px;
    padding: 5px 10px;
    font-size: 12px;
    line-height: 1.5;
    border-radius: 3px;
  }
`;

export default DateInput;
