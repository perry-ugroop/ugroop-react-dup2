/* ************************************************************************** */
/* Created by Vince. Feature box in the homepage */
/*  **************************************************************************** */

import React, { PropTypes } from 'react';


function UGFeatureItem(props) {
  const item = (
    <div className={'col-md-3 col-sm-6'}>
      <div className={'box-features'}>
        <div>
          <p className={'text-center'}><img src={props.image} width="250" height="134" alt="" className={'img-responsive'} /></p>
          <h3 className={'featured-header'}>{props.header}</h3>
          <p>{props.content}</p>
        </div>
        <a className={'btn btn-primary btn-allcapse btn-block'} href={props.link}>Learn more</a>
      </div>
    </div>
    );
  return (
    <div>
      {item}
    </div>
  );
}

UGFeatureItem.propTypes = {
  header: PropTypes.string,
  image: PropTypes.string,
  content: PropTypes.string,
  link: PropTypes.string,
};

export default UGFeatureItem;
