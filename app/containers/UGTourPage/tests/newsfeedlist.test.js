/**
 * Created by yunzhou on 11/12/2016.
 */
import { shallow, mount } from 'enzyme';
import React from 'react';
import { IntlProvider } from 'react-intl';
import { NewsFeedList } from '../newsfeedlist';


describe('<NewsFeedList />', () => {
  const tour1ID = '1011';
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
  it('should render newsfeed tour id', () => {
    const renderedComponent = shallow(
      <NewsFeedList tourId={tour1ID} />
    );
    expect(renderedComponent.find('#tourlist1011').length).toEqual(1);
  });
  it('should render 3 newsfeed img', () => {
    const renderedComponent = mount(
      <IntlProvider locale="en">
        <NewsFeedList tourId={tour1ID} items={tour1Newsfeed} />
      </IntlProvider>
    );
    expect(renderedComponent.find('img').length).toEqual(3);
  });

  it('should render 3 newsfeed content', () => {
    const renderedComponent = mount(
      <IntlProvider locale="en">
        <NewsFeedList tourId={tour1ID} items={tour1Newsfeed} />
      </IntlProvider>
    );
    expect(renderedComponent.find('p').length).toEqual(3);
  });

  it('should render newsfeed content correctly', () => {
    const renderedComponent = mount(
      <IntlProvider locale="en">
        <NewsFeedList tourId={tour1ID} items={tour1Newsfeed} />
      </IntlProvider>
    );
    expect(renderedComponent.find('p').nodes[0].innerHTML).toEqual('this is a news feed1');
  });
  it('should render newsfeed date correctly', () => {
    const renderedComponent = mount(
      <IntlProvider locale="en">
        <NewsFeedList tourId={tour1ID} items={tour1Newsfeed} />
      </IntlProvider>
    );
    expect(renderedComponent.find('.date').nodes[2].innerHTML).toEqual('03/May/2016');
  });
});
