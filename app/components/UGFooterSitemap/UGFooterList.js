
import React from 'react';
import styled from 'styled-components';

function List(props) {
  const ComponentToRender = props.component;
  const Ul = styled.ul`
  background:rgba(255,255,255,1) !important;
  margin-top:10px; 
`;

  let content = (<div></div>);

  // If we have items, render them
  if (props.items) {
    content = props.items.map((item, index) => (
      <ComponentToRender key={index} item={item.content} icon={item.icon} />
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

List.propTypes = {
  component: React.PropTypes.func.isRequired,
  items: React.PropTypes.array,
};

export default List;
