/**
 * Created by yunzhou on 26/11/2016.
 */
const tours = [
  {
    tourId: '1011',
    tourName: 'Joy Ride',
    tourFromDate: '01/May/2016',
    tourToDate: '01/July/2016',
    tourDesc: 'This is a test Tour...',
    tourImg: {
      imgSrc: 'http://dev-175.ugroop.com.au/Content/TourImage/TourPic_1004_1011.png',
      alt: '',
    },
    Participants: [
      {
        name: 'Robert Smith',
        status: '1',
        src: 'http://dev-175.ugroop.com.au/Content/TourImage/AcountPic_1004.png',
      },
      {
        name: 'Mark V',
        status: '1',
      },
      {
        name: 'Young I',
        status: '0',
      },
    ],
    Organizer: [
      {
        name: 'Adam Y',
        status: '1',
      },
      {
        name: 'Lucas Z',
        status: '0',
      },
    ],
    Viewers: [
      {
        name: 'David C',
        status: '1',
      },
    ],
    NewsFeed: [
      {
        subject: 'feed1',
        content: 'good trip1',
      },
    ],
  },
  {
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
  },
  {
    tourId: '1013',
    tourName: 'Excite Trip',
    tourFromDate: '11/May/2016',
    tourToDate: '31/July/2016',
    tourDesc: 'This is a test Tour two...',
    tourImg: {
      imgSrc: 'http://dev-175.ugroop.com.au/Content/TourImage/TourPic_1004_3011.png',
      alt: '',
    },
  },
  {
    tourId: '1014',
    tourName: 'Mount climb',
    tourFromDate: '01/Aug/2016',
    tourToDate: '03/Sept/2016',
    tourDesc: 'This is a demo Tour ...',
    tourImg: {
      imgSrc: 'http://dev-175.ugroop.com.au/Content/TourImage/TourPic_1004_1011.png',
      alt: '',
    },
  },
];
export default tours;
