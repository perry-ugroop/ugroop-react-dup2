/**
 * Created by Yang on 17/11/16.
 */
import React from 'react';
import styled from 'styled-components';

function OAuthLi(props) {
  const Wrapper = styled.li`
    border-radius: 10px !important;
    display:inline;
    margin:0 3px !important;
    padding:14px 0 16px 0 !important;
    -moz-border-radius: 10px !important;
    -webkit-border-radius: 10px !important;
  ${() => {
    if (props.icon === 'facebook') {
      return 'background-color:#3A5A98;';
    }
    if (props.icon === 'yahoo') {
      return 'background-color:#702C90;';
    }
    if (props.icon === 'google') {
      return 'background-color:#E54A55;';
    }
    if (props.icon === 'twitter') {
      return 'background-color:#60CAEF;';
    }
    return '';
  }}; 
`;

  return (
    <Wrapper>
      {props.item}
    </Wrapper>
  );
}

OAuthLi.propTypes = {
  item: React.PropTypes.any,
  icon: React.PropTypes.string,
};

export default OAuthLi;
