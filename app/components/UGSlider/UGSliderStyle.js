import styled from 'styled-components';
import BackgroundImage from './assets/ugroop-pattern.jpg';

const UGSliderStyle = styled.div`
  &&{
  position: relative;
  overflow: hidden;
  width: 100%;
  background-color: #11314d;
  color: #7C88A1;
  margin: 20px auto;
  padding: 20px 0 12px 0;
  text-align: center;  
  background:url(${BackgroundImage}) #2e5da5 ;
  border-bottom: 3px solid #EF5B3C;
  min-height: 438px;
}&& a.carousel-control {
  background-image:none;
}&& .item{
  min-height:400px;
}
`;

export default UGSliderStyle;
