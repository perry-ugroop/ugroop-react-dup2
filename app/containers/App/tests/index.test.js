import App from '../index';
// import Header from 'components/Header';
// import Footer from 'components/Footer';
<<<<<<< Updated upstream
// import UGHeader from 'components/UGHeader';
// import UGFooter from 'components/UGFooter';
// import UGAppWrapper from '../../BootStrap/UGAppContentWrapper';
// import UGNavBar from 'components/UGNavBar';
=======
import UGHeader from 'components/UGHeader';
import UGFooter from 'components/UGFooter';
>>>>>>> Stashed changes

import { shallow } from 'enzyme';
import React from 'react';

<<<<<<< Updated upstream
describe('Component: APP testing', () => {
  it('renders without exploding', () => {
    const renderedComponent = shallow(<App />);
    // console.log(renderedComponent.debug());
    expect(renderedComponent.length).toBe(1);
=======
describe('<App />', () => {
  it('should render the header', () => {
    const renderedComponent = shallow(
      <App />
    );
    expect(renderedComponent.find(UGHeader).length).toBe(1);
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======

  it('should render the footer', () => {
    const renderedComponent = shallow(
      <App />
    );
    expect(renderedComponent.find(UGFooter).length).toBe(1);
  });
>>>>>>> Stashed changes
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

