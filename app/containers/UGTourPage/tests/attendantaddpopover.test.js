/**
 * Created by yunzhou on 11/12/2016.
 */
import { mount } from 'enzyme';

import React from 'react';
import { IntlProvider } from 'react-intl';
import { AttendantAddPopover } from '../attendantaddpopover';
import { PARTICIPANT_ATTENDANT, PARTICIPANT_ORGANIZER, PARTICIPANT_VIEWER } from '../constants';

describe('<AttendantAddPopover />', () => {
  it('should render participant attendant ', () => {
    const renderedComponent = mount(
      <IntlProvider locale="en">
        <AttendantAddPopover attendType={PARTICIPANT_ATTENDANT} />
      </IntlProvider>
    );
    expect(renderedComponent.find('a').text()).toEqual('Add Participants');
  });

  it('should render organizer attendant ', () => {
    const renderedComponent = mount(
      <IntlProvider locale="en">
        <AttendantAddPopover attendType={PARTICIPANT_ORGANIZER} />
      </IntlProvider>
    );
    expect(renderedComponent.find('a').text()).toEqual('Add Organizer');
  });

  it('should render viewer attendant ', () => {
    const renderedComponent = mount(
      <IntlProvider locale="en">
        <AttendantAddPopover attendType={PARTICIPANT_VIEWER} />
      </IntlProvider>
    );
    expect(renderedComponent.find('a').text()).toEqual('Add Viewers');
  });
});
