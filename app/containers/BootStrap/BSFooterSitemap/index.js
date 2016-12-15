/**
 * Created by Ber on 25/11/16.
 */
import React from 'react';

const BSFooterSitemap = (props) => <div className={`${props.className}`}>
  {props.children}
</div>;

BSFooterSitemap.propTypes = {
  className: React.PropTypes.any,
  children: React.PropTypes.any,
};

export default BSFooterSitemap;
