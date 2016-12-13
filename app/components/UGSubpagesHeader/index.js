/* ************************************************************************** */
/* Created by Vince. Feature box in the homepage */
/*  **************************************************************************** */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { Grid } from 'react-bootstrap';

import bgSubpages from './assets/bg-subpages-header.png';
import bgAroundTheWorldSubpages from './assets/bg-subpages-header-around-the-world.png';
import iconBlog from './assets/icon-blog.png';
import iconFeatures from './assets/icon-features.png';
import iconPricing from './assets/icon-price.png';
import iconFAQ from './assets/icon-faq.png';
import iconContactus from './assets/icon-contactus.png';

const UGSubpagesHeaderWrapper = styled.div`
 &{
    background: url(${bgSubpages}) left top #0073CE;
    border-bottom: 3px solid #EF5B3C;
    margin-top: 20px;
    min-height: 155px;
    position: relative;
  }
  & .container{
    background: url(${bgAroundTheWorldSubpages}) right center no-repeat;
    min-height: 155px;    
  }
`;

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
    background: url()
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


// function UGSubpagesHeader(props) {
//   const item = (
//     <div className={'col-md-3 col-sm-6'}>
//       <div className={'box-features'}>
//         <div>
//           <p className={'text-center'}><img src={props.image} width="250" height="134" alt="" className={'img-responsive'} /></p>
//           <h3 className={'featured-header'}>{props.header}</h3>
//           <p>{props.content}</p>
//         </div>
//         <a className={'btn btn-primary btn-allcapse btn-block'} href={props.link}>Learn more</a>
//       </div>
//     </div>
//     );
//   return (
//     <div>
//       {item}
//     </div>
//   );
// }
