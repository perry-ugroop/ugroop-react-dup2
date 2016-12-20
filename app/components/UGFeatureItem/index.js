/* ************************************************************************** */
/* Created by Vince. Feature box in the homepage */
/* ************************************************************************** */

import React, { PropTypes } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

// import Img from '../../components/Img';
import A from '../../components/A';
import FeatureHeader from './FeatureHeader';
import FeatureImage from './FeatureImage';

function UGFeatureItem(props) {
  const item = (
    <Col md={3} sm={6}>
      <div className={'box-features'}>
        <div>
          <FeatureImage image={props.image} alt={props.header} url={props.link} />
          <FeatureHeader className={'featured-header'}>{props.header}</FeatureHeader>
          <p>{props.content}</p>
        </div>
        <A className={'btn btn-primary btn-allcapse btn-block'} href={props.link}>Learn more hello</A>
      </div>
    </Col>
    );
  return (
    <Grid><Row>
      {item}
    </Row></Grid>
  );
}

UGFeatureItem.propTypes = {
  header: PropTypes.string,
  image: PropTypes.string,
  content: PropTypes.string,
  link: PropTypes.string,
};

export default UGFeatureItem;
