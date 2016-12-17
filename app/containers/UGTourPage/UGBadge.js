import React from 'react';
import styled from 'styled-components';

const BadgeDefault = (props) => <span className={`badge ${props.className}`}>
  {props.children}
</span>;

BadgeDefault.propTypes = {
  className: React.PropTypes.any,
  children: React.PropTypes.any,
};
const UGBadge = styled(BadgeDefault)`
  {
    background-color:#666;color:#fff;float:right;font-size:10px;margin-top:1px;
  }
`;
export default UGBadge;
