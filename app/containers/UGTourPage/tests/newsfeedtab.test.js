/**
 * Created by yunzhou on 11/12/2016.
 */
import { mount } from 'enzyme';

import React from 'react';
import { IntlProvider } from 'react-intl';
import { NewsFeedTab } from '../newsfeedtab';

import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
describe('<NewsFeedTab />', () => {
  const tourId = '1002';
  const tour1Newsfeed = [
    {
      user: {
        name: 'Robert Smith',
        src: 'http://dev-175.ugroop.com.au/Content/TourImage/AcountPic_1004.png',
      },
      subject: 'sub1',
      content: 'this is a news feed1',
      publishDate: '01/May/2016',
    },
    {
      user: {
        name: 'Robert Smith',
        src: 'http://dev-175.ugroop.com.au/Content/TourImage/AcountPic_1004.png',
      },
      subject: 'sub2',
      content: 'this is a news 2',
      publishDate: '02/May/2016',
    },
    {
      user: {
        name: 'Robert Smith',
        src: 'http://dev-175.ugroop.com.au/Content/TourImage/AcountPic_1004.png',
      },
      subject: 'sub3',
      content: 'this is a news 3',
      publishDate: '03/May/2016',
    },
  ];
  it('should render NewsFeedList ', () => {
    const mockStore = configureStore([]);
    const store = mockStore({});
    const renderedComponent = mount(
      <Provider store={store}>
        <IntlProvider locale="en">
          <NewsFeedTab tourId={tourId} items={tour1Newsfeed} />
        </IntlProvider>
      </Provider>
    );
    expect(renderedComponent.find('NewsFeedList').length).toEqual(1);
  });
  it('should render NewsFeedList ', () => {
    const mockStore = configureStore([]);
    const store = mockStore({});
    const renderedComponent = mount(
      <Provider store={store}>
        <IntlProvider locale="en">
          <NewsFeedTab tourId={tourId} items={tour1Newsfeed} />
        </IntlProvider>
      </Provider>
    );
    expect(renderedComponent.find('NewsFeedListModal').length).toEqual(1);
  });
  it('should render NewsFeedList ', () => {
    const mockStore = configureStore([]);
    const store = mockStore({});
    const renderedComponent = mount(
      <Provider store={store}>
        <IntlProvider locale="en">
          <NewsFeedTab tourId={tourId} items={tour1Newsfeed} />
        </IntlProvider>
      </Provider>
    );
    expect(renderedComponent.find('AddNewsModal').length).toEqual(1);
  });
});
