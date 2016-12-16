import React from 'react';
import { push } from 'react-router-redux';
import { Carousel } from 'react-bootstrap';
// import BackgroundImage from './assets/ugroop-pattern.jpg';

<<<<<<< Updated upstream
import H2 from '../H2';
import Img from '../Img';
import A from '../A';

import UGSliderStyle from './UGSliderStyle';
import UGSliderTitleStyle from './UGSliderTitleStyle';
import UGSliderCaptionStyle from './UGSliderCaptionStyle';
import UGSliderButtonStyle from './UGSliderButtonStyle';
import UGSliderImageStyle from './UGSliderImageStyle';
import UGSliderWrapper from './UGSliderWrapper';

import slideList from './list';


const SlidesListing = slideList.map((slide, index) => <Carousel.Item key={index}>
  <UGSliderWrapper>
    <UGSliderTitleStyle>
      <H2> { slide.title } </H2>
    </UGSliderTitleStyle>
    <UGSliderCaptionStyle>
      { slide.description }
    </UGSliderCaptionStyle>
    <UGSliderButtonStyle>
      <A href="" className="da-link">{slide.label}</A>
    </UGSliderButtonStyle>
    <UGSliderImageStyle>
      <Img src={slide.iconImage} alt="" className="ugsliderimg" />
    </UGSliderImageStyle>
  </UGSliderWrapper>
</Carousel.Item>
);


=======
// import imgWorld from './assets/ugroop-around-the-world.png';
// import imgFamily from './assets/ugroop-family-school.spng';
// import imgGroup from './assets/ugroop-group-icon.png';
// import imgStudents from './assets/ugroop-group-student-sufing-ugroop-site.png';

import slideList from './list';
import styled from 'styled-components';

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

const UGSliderCaptionStyle = styled.div`
  position: absolute;
  color: #7C88A1;   
  padding: 2px 20px 0px;    
  text-align: left;  
  color: #FFF; 
`;

const UGSliderButtonStyle = styled.div`
  position: absolute;
  color: #FFF;
  top: 270px;
  border-radius: 30px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 1);
  border: 3px solid #FFF;
  padding: 2px 20px 0px;
  font-size: 18px;
  line-height: 30px;
  text-align: center;
  background: #5f83b9;
`;

const SlidesListing = slideList.map((slide) => <Carousel.Item>
  <img src={slide.iconImage} alt="" />
  <h2> { slide.title } </h2>
  <Carousel.Caption><UGSliderCaptionStyle> { slide.description }</UGSliderCaptionStyle></Carousel.Caption>
  <UGSliderButtonStyle><a href="" className="da-link">{slide.label}</a></UGSliderButtonStyle>
</Carousel.Item>
);

>>>>>>> Stashed changes
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
