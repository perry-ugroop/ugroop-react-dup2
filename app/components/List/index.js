import React from 'react';

import styles from './styles.css';

function List(props) {
  const ComponentToRender = props.component;
  const listClassName = props.listClassName;
  const listWrapperClassName = props.listWrapperClassName;
  let content = (<div></div>);

  // If we have items, render them
  if (props.items) {
    content = props.items.map((item, index) => (
      <ComponentToRender key={`item-${index}`} item={item} />
    ));
  } else {
    // Otherwise render a single component
    content = (<ComponentToRender />);
  }

  return (
    <div className={listWrapperClassName || styles.listWrapper}>
      <ul className={listClassName || styles.list}>
        {content}
      </ul>
    </div>
  );
}

List.propTypes = {
  component: React.PropTypes.func.isRequired,
  listClassName: React.PropTypes.string,
  listWrapperClassName: React.PropTypes.string,
  items: React.PropTypes.array,
};

export default List;
