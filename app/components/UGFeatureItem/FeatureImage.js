/* *********************************************************** */
/* Created by Vince on 2016-12-13                              */
/* *********************************************************** */
import React from 'react';
import Img from '../../components/Img';
import A from '../../components/A';

const FeatureImage = (props) => <A href={props.url}>
  <p className={'text-center'}>
    <Img src={props.image} width="250" height="134" alt={props.alt} className={'img-responsive'} />
  </p>
  {props.children}
</A>;


FeatureImage.propTypes = {
  children: React.PropTypes.any,
  image: React.PropTypes.any,
  url: React.PropTypes.any,
  alt: React.PropTypes.any,
};

export default FeatureImage;
