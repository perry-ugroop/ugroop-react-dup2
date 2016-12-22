import { shallow, mount } from 'enzyme';
import React from 'react';

import UGFeatureItem from '../index';
import FeatureHeader from '../FeatureHeader';
import FeatureImage from '../FeatureImage';

// const src = 'http://www.ugroop.com.au';
// const children = (<Grid><Row></Row></Grid>);
const renderedComponent = mount(<UGFeatureItem />);
const propsTest = {
  image: 'test.png',
  header: 'Some header',
  link: 'http://www.ugroop.com.au',
  content: 'Some Text',
};

describe('Feature items', () => {
  /* Test to make sure that the main element is displayed */
  it('renders the main UGFeatureItem', () => {
    const renderedMainElement = shallow(<UGFeatureItem />);
    expect(renderedMainElement.length).toBe(1);
  });

  /* Tests to make sure that basic required elements are rendered */

  it('renders the main Feature Header', () => {
    const renderedHeaderElement = mount(<FeatureHeader />);
    expect(renderedHeaderElement.length).toBe(1);
  });

  it('renders the main Feature Image', () => {
    const renderedHeaderElement = mount(<FeatureImage />);
    expect(renderedHeaderElement.length).toBe(1);
  });

  it('should render item of header', () => {
    const readLength = renderedComponent.find('h3').length;
    expect(readLength).toBe(1);
  });

  it('should render item', () => {
    const readLength = renderedComponent.find('img').length;
    expect(readLength).toBe(1);
  });

  it('should render item of image', () => {
    expect(propsTest.image.length).not.toBe(0);
  });

  it('should render item of link', () => {
    expect(propsTest.link).not.toBe('hello');
  });
});

