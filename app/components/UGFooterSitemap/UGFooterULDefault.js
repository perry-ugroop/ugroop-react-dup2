/**
 * Created by Ber on 03/12/16.
 */
import React from 'react';

const UGFooterULDefault = (props) => <ul className={`normal-link-list ${props.className}`}>
  {props.children}
</ul>;

UGFooterULDefault.propTypes = {
  className: React.PropTypes.any,
  children: React.PropTypes.any,
};

export default UGFooterULDefault;
