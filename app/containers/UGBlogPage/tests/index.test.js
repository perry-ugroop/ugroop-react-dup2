
import React from 'react';
import { shallow } from 'enzyme';

// import UGBlogPage from '../index';
import UGBreadcrumbs from '../../../components/UGBreadcrums';
import UGSubpagesHeader from '../../../components/UGSubpagesHeader';
import UGSubpagesContainer from '../../../components/UGSubpagesContainer';

describe('<UGSubpageHeader> component', () => {
  const labelProp = { label: 'Blogs' };
  it('checks the subpage header label value, Blogs', () => {
    expect(shallow(
      <UGSubpagesHeader {...labelProp} />
      ).length).toEqual(1);
  });

  it('should render the breadcrumbs ', () => {
    const renderedComponent = shallow(<UGBreadcrumbs />);
    expect(renderedComponent.length).toBe(1);
  });

  it('should render the subpage header ', () => {
    const renderedComponent = shallow(<UGSubpagesHeader />);
    expect(renderedComponent.length).toBe(1);
  });

  it('should render the container', () => {
    const renderedComponent = shallow(<UGSubpagesContainer />);
    expect(renderedComponent.length).toBe(1);
  });
});

