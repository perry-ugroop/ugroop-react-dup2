/**
 * Created by Ber on 03/12/16.
 */
import React from 'react';

const UGFooterULWithIcon = (props) => <ul className={`followus ${props.className}`}>
  {props.children}
</ul>;

UGFooterULWithIcon.propTypes = {
  className: React.PropTypes.any,
  children: React.PropTypes.any,
};

export default UGFooterULWithIcon;
