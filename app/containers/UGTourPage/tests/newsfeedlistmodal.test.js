/**
 * Created by yunzhou on 11/12/2016.
 */
import { mount } from 'enzyme';

import React from 'react';
import { IntlProvider } from 'react-intl';
import { NewsFeedListModal } from '../newsfeedlistmodal';
// These are used to pass a mock store down through nested components

describe('<NewsFeedListModal />', () => {
  const tour1ID = '1012';
  const tour1Newsfeed = [
    {
      user: {
        name: 'Yun ',
        src: 'http://dev-175.ugroop.com.au/Content/TourImage/AcountPic_1004.png',
      },
      subject: 'sub1',
      content: 'this is a news feed1',
      publishDate: '01/May/2016',
    },
    {
      user: {
        name: 'Vicent',
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
  it('should render a link', () => {
    const renderedComponent = mount(
      <IntlProvider locale="en">
        <NewsFeedListModal tourId={tour1ID} newsfeedlist={tour1Newsfeed} />
      </IntlProvider>
    );
    expect(renderedComponent.find('div').length).toEqual(1);
  });
});
