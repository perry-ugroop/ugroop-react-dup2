/**
 * Created by yunzhou on 11/12/2016.
 */
import { mount } from 'enzyme';

import React from 'react';
import { IntlProvider } from 'react-intl';
import { TourItem } from '../touritem';

import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
describe('<TourItem />', () => {
  const tourItem = {
    tourId: '1012',
    tourName: 'Seoul Tour',
    tourFromDate: '01/Jun/2016',
    tourToDate: '01/July/2016',
    tourDesc: 'Seoul City - the capital of South Korea. It is a sprawling metropolis ' +
    'where hyper-modern skyscrapers - high-tech subways and pop culture meet Buddhist temples - palaces and street markets.',
    tourImg: {
      imgSrc: 'http://dev-175.ugroop.com.au/Content/TourImage/TourPic_3003_3010.png',
      alt: '',
    },
  };

  it('should render tourImg', () => {
    const mockStore = configureStore([]);
    const store = mockStore({});
    const renderedComponent = mount(
      <Provider store={store}>
        <IntlProvider locale="en">
          <TourItem item={tourItem} />
        </IntlProvider>
      </Provider>
    );
    expect(renderedComponent.find('img').nodes[0].src).toEqual(tourItem.tourImg.imgSrc);
  });
  it('should render 4 Tab', () => {
    const mockStore = configureStore([]);
    const store = mockStore({});
    const renderedComponent = mount(
      <Provider store={store}>
        <IntlProvider locale="en">
          <TourItem item={tourItem} />
        </IntlProvider>
      </Provider>
    );
    expect(renderedComponent.find('Tab').length).toEqual(4);
  });
});
