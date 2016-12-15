import React, { PropTypes, Children } from 'react';

function MenuItem(props) {
  const className = props.className;

  // Render an anchor tag
  let item = (
    <a className={className} href={props.href} onClick={props.onClick}>
      {Children.toArray(props.children)}
    </a>
  );

  // If the MenuItem has a handleRoute prop, we want to render a Menu item / link
  if (props.handleRoute) {
    item = (
      <MenuItem className={className} onClick={props.handleRoute}>
        {Children.toArray(props.children)}
      </MenuItem>
    );
  }

  return (
    <li>
      {item}
    </li>
  );
}

MenuItem.propTypes = {
  className: PropTypes.string,
  handleRoute: PropTypes.func,
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default MenuItem;
