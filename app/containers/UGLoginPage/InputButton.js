/**
 * Created by Yang on 17/11/16.
 */
import BSButtonPrimaryBlock from '../BootStrap/BSButtonPrimaryBlock';
import UGFlatBorder from '../BootStrap/UGFlatBorder';
import styled from 'styled-components';
const InputButton = styled(BSButtonPrimaryBlock)`
  ${UGFlatBorder}
  &&{
    background-color: #075EAB;
    border: none;
    margin-top: 20px;
    padding: 12px;
    :hover, focus:
    {
      background-color: #124677 !important;
      border: none;
    }
  }
`;

export default InputButton;
