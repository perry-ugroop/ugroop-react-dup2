/* ************************************************************************** */
/* Created by Vince/Ber. Feature box in the homepage */
/*  **************************************************************************** */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { Grid } from 'react-bootstrap';

import UGSubpagesHeaderWrapper from './UGSubpagesHeaderWrapper';

import iconBlog from './assets/icon-blog.png';
import iconFeatures from './assets/icon-features.png';
import iconPricing from './assets/icon-price.png';
import iconFAQ from './assets/icon-faq.png';
import iconContactus from './assets/icon-contactus.png';

function UGSubpagesHeader(props) {
  const UGSubpagesTitleBox = styled.h1`
    bottom:10px;
    color: #fff;
    font-size: 216%;
    font-weight: 600;
    line-height: 50px;
    text-transform: uppercase;    
    padding-left: 60px;
    position:absolute;   
    ${() => {
      if (props.title === 'Features') {
        return `background: url(${ iconFeatures}) left center no-repeat;`;
      }
      if (props.title === 'Pricing') {
        return `background: url(${ iconPricing}) left center no-repeat;`;
      }
      if (props.title === 'Blogs') {
        return `background: url(${ iconBlog}) left center no-repeat;`;
      }
      if (props.title === 'FAQ') {
        return `background: url(${ iconFAQ}) left center no-repeat;`;
      }
      if (props.title === 'Contact Us') {
        return `background: url(${ iconContactus}) left center no-repeat;`;
      }
      return '';
    }};   
  `;

  return (
    <UGSubpagesHeaderWrapper>
      <Grid>
        <UGSubpagesTitleBox>{props.title}</UGSubpagesTitleBox>
      </Grid>
    </UGSubpagesHeaderWrapper>
  );
}

UGSubpagesHeader.propTypes = {
  title: PropTypes.string,
};

export default UGSubpagesHeader;

