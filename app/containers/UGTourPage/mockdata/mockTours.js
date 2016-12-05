/**
 * Created by yunzhou on 26/11/2016.
 */
import { ATTENDANT_DECLINE, ATTENDANT_JOINED, ATTENDANT_WAITING } from '../constants';
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
    ],
    Organizer: [
      {
        name: 'Adam Y',
        status: ATTENDANT_WAITING,
      },
      {
        name: 'Lucas Z',
        status: ATTENDANT_WAITING,
      },
    ],
    Viewers: [
      {
        name: 'David C',
        status: ATTENDANT_WAITING,
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
