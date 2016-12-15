import App from '../index';
// import Header from 'components/Header';
// import Footer from 'components/Footer';
// import UGHeader from 'components/UGHeader';
// import UGFooter from 'components/UGFooter';
// import UGAppWrapper from '../../BootStrap/UGAppContentWrapper';
// import UGNavBar from 'components/UGNavBar';

import { shallow } from 'enzyme';
import React from 'react';

describe('Component: APP testing', () => {
  it('renders without exploding', () => {
    const renderedComponent = shallow(<App />);
    // console.log(renderedComponent.debug());
    expect(renderedComponent.length).toBe(1);
  });

  it('should render the Navigation Bar');

  it('should render its children', () => {
    const children = (<h1>Test</h1>);
    const renderedComponent = shallow(
      <App>
        {children}
      </App>
    );
    expect(renderedComponent.contains(children)).toBe(true);
  });
});


//  it('should render the Navigation Bar', () => {
//     const renderedComponent = shallow(
//       <UGNavBar />
//     );
//     expect(renderedComponent.find(UGNavBar).length).toBe(1);
//
//  it('should render the UGFooter component', () => {
//     const renderComponent = shallow(
//       <UGFooter />
//     );
//     expect(renderComponent.find(UGFooter).length(1));
//   }

