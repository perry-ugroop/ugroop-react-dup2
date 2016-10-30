import expect from 'expect';
import { render } from 'enzyme';
import React from 'react';

import List from '../index';
import ListItem from 'components/ListItem';

describe('<List />', () => {
  it('should render the component if no items are passed', () => {
    const renderedComponent = render(
      <List component={ListItem} />
    );
    expect(renderedComponent.find(ListItem)).toExist();
  });

  it('should render the items', () => {
    const items = [
      'Hello',
      'World',
    ];
    const renderedComponent = render(
      <List items={items} component={ListItem} />
    );
    expect(renderedComponent.find(items)).toExist();
  });

  it('should render listWrapper ClassName', () => {
    const wrappaerClassName = 'test';
    const renderedComponent = render(
      <List listWrapperClassName={wrappaerClassName} component={ListItem} />
    );
    expect(renderedComponent.find('div').hasClass(wrappaerClassName)).toEqual(true);
  });

  it('should render list ClassName', () => {
    const listClassName = 'ultest';
    const renderedComponent = render(
      <List listClassName={listClassName} component={ListItem} />
    );
    expect(renderedComponent.find('ul').hasClass(listClassName)).toEqual(true);
  });
});
