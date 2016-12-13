import styled from 'styled-components';
import UGFlatBorder from '../BootStrap/UGFlatBorder';
import ButtonStyle from '../BootStrap/BSButtonPrimaryBlock';

const UGFeatureButtonStyle = styled(ButtonStyle)`
  &&{
    color: #FFF;  
    text-align: center;
    ${UGFlatBorder}
  }&& a{
    color: #fff;
    text-transform: uppercase;
    text-decoration:none;
  }
`;

export default UGFeatureButtonStyle;
