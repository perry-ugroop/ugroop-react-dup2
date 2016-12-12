/**
 * Created by yunzhou on 11/12/2016.
 */
import { mount } from 'enzyme';

import React from 'react';
import { IntlProvider } from 'react-intl';
import { AttendantStatusSpan } from '../attedantStatusSpan';
import { ATTENDANT_DECLINE, ATTENDANT_JOINED, ATTENDANT_WAITING } from '../constants';
describe('<AttendantStatusSpan />', () => {
  it('should render label decline ', () => {
    const renderedComponent = mount(
      <IntlProvider locale="en">
        <AttendantStatusSpan status={ATTENDANT_DECLINE} />
      </IntlProvider>
    );
    expect(renderedComponent.find('span .label-default').length).toEqual(1);
  });
  it('should render label join ', () => {
    const renderedComponent = mount(
      <IntlProvider locale="en">
        <AttendantStatusSpan status={ATTENDANT_JOINED} />
      </IntlProvider>
    );
    expect(renderedComponent.find('span .label-success').length).toEqual(1);
  });
  it('should render label wait ', () => {
    const renderedComponent = mount(
      <IntlProvider locale="en">
        <AttendantStatusSpan status={ATTENDANT_WAITING} />
      </IntlProvider>
    );
    expect(renderedComponent.find('span .label-primary').length).toEqual(1);
  });
});
