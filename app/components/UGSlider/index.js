import React from 'react';
import { push } from 'react-router-redux';
import { Carousel } from 'react-bootstrap';

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


const SlidesListing = slideList.map((slide, key) => <Carousel.Item>
  <UGSliderWrapper>
    <UGSliderTitleStyle>
      <H2 key={key}> { slide.title } </H2>
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
