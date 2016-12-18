import App from '../index';
import UGFooter from 'components/UGFooter';
import UGNavBar from 'components/UGNavBar';

import { shallow } from 'enzyme';
import React from 'react';

describe('<AppWrapper />', () => {
  it('should render the Navigation Bar', () => {
    const renderedComponent = shallow(
      <App />
    );
    expect(renderedComponent.find(UGNavBar).length).toBe(1);
  });

  it('should render its children', () => {
    const children = (<h1>Test</h1>);
    const renderedComponent = shallow(
      <App>
        {children}
      </App>
    );
    expect(renderedComponent.contains(children)).toBe(true);
  });

  it('should render the footer', () => {
    const renderedComponent = shallow(
      <App />
    );
    expect(renderedComponent.find(UGFooter).length).toBe(1);
  });
});
