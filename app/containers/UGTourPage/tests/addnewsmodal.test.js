/**
 * Created by yunzhou on 11/12/2016.
 */
import { mount } from 'enzyme';

import React from 'react';
import { IntlProvider } from 'react-intl';
import { AddNewsModal } from '../addnewsmodal';
// These are used to pass a mock store down through nested components

describe('<AddNewsModal />', () => {
  const tour1ID = '1011';
  it('should render a link', () => {
    const renderedComponent = mount(
      <IntlProvider locale="en">
        <AddNewsModal tourId={tour1ID} />
      </IntlProvider>
    );
    expect(renderedComponent.find('a').length).toEqual(1);
  });
});
