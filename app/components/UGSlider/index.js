import React from 'react';
import { push } from 'react-router-redux';
import { Carousel } from 'react-bootstrap';
// import BackgroundImage from './assets/ugroop-pattern.jpg';

// import imgWorld from './assets/ugroop-around-the-world.png';
// import imgFamily from './assets/ugroop-family-school.spng';
// import imgGroup from './assets/ugroop-group-icon.png';
// import imgStudents from './assets/ugroop-group-student-sufing-ugroop-site.png';

import slideList from './list';
import styled from 'styled-components';
import BSContainer from '../../containers/BootStrap/BSContainer';

const UGSliderStyle = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  background-color: #11314d;
  color: #7C88A1;
  margin: 0;
  padding: 20px 0 12px 0;
  text-align: center;  
  background: #2e5da5;
  border-top: 3px solid #EF5B3C;
`;

const UGSliderTitleStyle = styled.div`
  text-align: left;
  position: relative;
  margin-top: 80px;
`;

const UGSliderCaptionStyle = styled.div`  
  color: #7C88A1;   
  padding: 2px 20px 0px; 
  top: 150px !important;
  color: #FFF; 
  width: 50%;
  text-align: left;
`;

const UGSliderButtonStyle = styled.div`
  position: absolute;
  color: #FFF;
  top: 270px;
  border-radius: 30px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 1);
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2)
  border: 3px solid #FFF;
  padding: 2px 20px 0px;
  font-size: 18px;
  line-height: 30px;
  text-align: left;
  background: #5f83b9;
`;

const UGSliderImageStyle = styled.div`
  text-align: right;
  position: relative;
  overflow: hidden;  
  top:10px;  
`;


const SlidesListing = slideList.map((slide) => <Carousel.Item>
  <BSContainer><UGSliderTitleStyle><h2> { slide.title } </h2></UGSliderTitleStyle>
    <UGSliderCaptionStyle> { slide.description }</UGSliderCaptionStyle>
    <UGSliderButtonStyle><a href="" className="da-link">{slide.label}</a></UGSliderButtonStyle>
    <UGSliderImageStyle><img src={slide.iconImage} alt="" /></UGSliderImageStyle></BSContainer>
</Carousel.Item>
);

export class Slider extends React.Component {
  openUGHomePage = () => {
    this.props.dispatch(push('/'));
  };
  render() {
    return (
      <UGSliderStyle>
        <Carousel>
          {SlidesListing}
        </Carousel>
      </UGSliderStyle>
    );
  }

}

Slider.propTypes = {
  dispatch: React.PropTypes.func,
};


export default Slider;
