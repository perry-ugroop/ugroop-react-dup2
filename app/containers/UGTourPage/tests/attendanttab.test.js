/**
 * Created by yunzhou on 11/12/2016.
 */
import { mount } from 'enzyme';

import React from 'react';
import { IntlProvider } from 'react-intl';
import { AttendantTab } from '../attendanttab';
import { PARTICIPANT_ATTENDANT, ATTENDANT_DECLINE, ATTENDANT_JOINED } from '../constants';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
describe('<AttendantTab />', () => {
  const tourId = '1002';
  const participants = [
    {
      name: 'Robert Smith',
      status: ATTENDANT_DECLINE,
      src: 'http://dev-175.ugroop.com.au/Content/TourImage/AcountPic_1004.png',
    },
    {
      name: 'Mark V',
      status: ATTENDANT_DECLINE,
    },
    {
      name: 'Young I',
      status: ATTENDANT_JOINED,
    },
  ];
  it('should render AttendantList ', () => {
    const mockStore = configureStore([]);
    const store = mockStore({});
    const renderedComponent = mount(
      <Provider store={store}>
        <IntlProvider locale="en">
          <AttendantTab tourId={tourId} attendType={PARTICIPANT_ATTENDANT} items={participants} />
        </IntlProvider>
      </Provider>
    );
    expect(renderedComponent.find('AttendantTab').find('ul').length).toEqual(1);
  });
  it('should render AttendantListModal ', () => {
    const mockStore = configureStore([]);
    const store = mockStore({});
    const renderedComponent = mount(
      <Provider store={store}>
        <IntlProvider locale="en">
          <AttendantTab tourId={tourId} attendType={PARTICIPANT_ATTENDANT} items={participants} />
        </IntlProvider>
      </Provider>
    );
    expect(renderedComponent.find('AttendantListModal').length).toEqual(1);
  });
  it('should render AttendantAddPopover ', () => {
    const mockStore = configureStore([]);
    const store = mockStore({});
    const renderedComponent = mount(
      <Provider store={store}>
        <IntlProvider locale="en">
          <AttendantTab tourId={tourId} attendType={PARTICIPANT_ATTENDANT} items={participants} />
        </IntlProvider>
      </Provider>
    );
    expect(renderedComponent.find('AttendantAddPopover').length).toEqual(1);
  });
  it('should render AttendantImportopover ', () => {
    const mockStore = configureStore([]);
    const store = mockStore({});
    const renderedComponent = mount(
      <Provider store={store}>
        <IntlProvider locale="en">
          <AttendantTab tourId={tourId} attendType={PARTICIPANT_ATTENDANT} items={participants} />
        </IntlProvider>
      </Provider>
    );
    expect(renderedComponent.find('AttendantImportopover').length).toEqual(1);
  });
});
