/**
 * Created by Yang on 17/11/16.
 */
import React from 'react';
import styled from 'styled-components';

function OAuthUl(props) {
  const ComponentToRender = props.component;
  const Ul = styled.ul`
  display: inline-block; /* the key bit */
  list-style: none;
  margin: 0 auto 10px;
  padding: 0;
  text-align: center;
  width: 100%;
`;

  let content = (<div></div>);

  // If we have items, render them
  if (props.items) {
    content = props.items.map((item, index) => (
      <ComponentToRender key={`item-${index}`} item={item.content} icon={item.icon} />
    ));
  } else {
    // Otherwise render a single component
    content = (<ComponentToRender />);
  }

  return (
    <Ul>
      {content}
    </Ul>
  );
}

OAuthUl.propTypes = {
  component: React.PropTypes.func.isRequired,
  items: React.PropTypes.array,
};

export default OAuthUl;
