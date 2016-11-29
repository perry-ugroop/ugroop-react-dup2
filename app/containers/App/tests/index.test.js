import App from '../index';
// import Header from 'components/Header';
// import Footer from 'components/Footer';
import UGHeader from 'components/UGHeader';
import UGFooter from 'components/UGFooter';
import UGNavBar from 'components/UGNavBar';

import { shallow } from 'enzyme';
import React from 'react';

describe('<AppWrapper />', () => {
  it('should render the Navigation Bar', () => {
    const renderedComponent = shallow(
      <UGNavBar />
    );
    expect(renderedComponent.find(UGHeader).length).toBe(1);
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
      <UGFooter />
    );
    expect(renderedComponent.find(UGFooter).length).toBe(1);
  });
});
