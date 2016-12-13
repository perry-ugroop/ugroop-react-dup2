// import UGBlogPage from '../index';
import UGSubpagesHeader from '../../../components/UGSubpagesHeader';

// import { render } from 'enzyme';
import React from 'react';
import { shallow } from 'enzyme';

describe('<UGSubpageHeader> component', () => {
  const labelProp = { label: 'Blogs' };
  it('checks the subpage header label value, Blogs', () => {
    expect(shallow(
      <UGSubpagesHeader {...labelProp} />
      ).length).toEqual(1);
  });

  it('displays the breadcrumbs');
});

