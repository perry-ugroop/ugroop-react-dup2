/**
 * Created by Yun on 8/11/16.
 */

import { fromJS } from 'immutable';
import {
  selectAddTourPage,
  selectTourName,
  selectDestCity,
  selectDepartDate,
  selectArrivalDate,
  selectTourDesc,
  selectParticipantFlag,
  selectTourPhoto,
  selectTourNameError,
  selectDestCityError,
  selectDepartDateError,
  selectArrivalDateError,
  selectTourPhotoError,
} from '../selectors';

describe('selectRegisterpage', () => {
  const selectAddATourSelector = selectAddTourPage();
  it('should select the addATour state', () => {
    const addATourState = fromJS({
      userData: {},
    });
    const mockedState = fromJS({
      addATour: addATourState,
    });
    expect(selectAddATourSelector(mockedState)).toEqual(addATourState);
  });
});

describe('selectTourName', () => {
  const selectTour = selectTourName();
  it('should select the tourName state', () => {
    const expectedResult = 'tourName';
    const mockedState = fromJS({
      addATour: {
        addTourState: fromJS({
          tourName: expectedResult,
        }),
      },
    });
    expect(selectTour(mockedState)).toEqual(expectedResult);
  });
});

describe('selectDestCity', () => {
  const selectDest = selectDestCity();
  it('should select the destCity state', () => {
    const expectedResult = 'destCity';
    const mockedState = fromJS({
      addATour: {
        addTourState: fromJS({
          destCity: expectedResult,
        }),
      },
    });
    expect(selectDest(mockedState)).toEqual(expectedResult);
  });
});
describe('selectDepartDate', () => {
  const selectDepart = selectDepartDate();
  it('should select the depart date state', () => {
    const expectedResult = 'DepartDate';
    const mockedState = fromJS({
      addATour: {
        addTourState: fromJS({
          departDate: expectedResult,
        }),
      },
    });
    expect(selectDepart(mockedState)).toEqual(expectedResult);
  });
});

describe('selectArrivalDate', () => {
  const selectArrival = selectArrivalDate();
  it('should select the arrival date state', () => {
    const expectedResult = 'ArrivalDate';
    const mockedState = fromJS({
      addATour: {
        addTourState: fromJS({
          arrivalDate: expectedResult,
        }),
      },
    });
    expect(selectArrival(mockedState)).toEqual(expectedResult);
  });
});

describe('selectTourDesc', () => {
  const selectTourDetail = selectTourDesc();
  it('should select the tour description state', () => {
    const expectedResult = 'tourDesc';
    const mockedState = fromJS({
      addATour: {
        addTourState: fromJS({
          tourDesc: expectedResult,
        }),
      },
    });
    expect(selectTourDetail(mockedState)).toEqual(expectedResult);
  });
});


describe('selectParticipantFlag', () => {
  const selectParticipant = selectParticipantFlag();
  it('should select the participant state', () => {
    const expectedResult = 'participant';
    const mockedState = fromJS({
      addATour: {
        addTourState: fromJS({
          participantFlag: expectedResult,
        }),
      },
    });
    expect(selectParticipant(mockedState)).toEqual(expectedResult);
  });
});

describe('selectTourPhoto', () => {
  const selectTourPic = selectTourPhoto();
  it('should select the tour photo state', () => {
    const expectedResult = 'tour photo';
    const mockedState = fromJS({
      addATour: {
        addTourState: fromJS({
          tourPhoto: expectedResult,
        }),
      },
    });
    expect(selectTourPic(mockedState)).toEqual(expectedResult);
  });
});
/*
addTourStateError: fromJS({
  : '',
  : '',
  : '',
  : '',
  : '',
  tourDescError: '',
  tourPhotoError: '',
}),*/

describe('selectTourNameError', () => {
  const selectTourNameErr = selectTourNameError();
  it('should select the tour name error state', () => {
    const expectedResult = 'tour name error';
    const mockedState = fromJS({
      addATour: {
        addTourStateError: fromJS({
          tourNameError: expectedResult,
        }),
      },
    });
    expect(selectTourNameErr(mockedState)).toEqual(expectedResult);
  });
});

describe('selectDestCityError', () => {
  const selectDestCityErr = selectDestCityError();
  it('should select the destination city error state', () => {
    const expectedResult = 'destination city error';
    const mockedState = fromJS({
      addATour: {
        addTourStateError: fromJS({
          destCityError: expectedResult,
        }),
      },
    });
    expect(selectDestCityErr(mockedState)).toEqual(expectedResult);
  });
});

describe('selectDepartDateError', () => {
  const selectDepartDateErr = selectDepartDateError();
  it('should select the depart date error state', () => {
    const expectedResult = 'depart date error';
    const mockedState = fromJS({
      addATour: {
        addTourStateError: fromJS({
          departDateError: expectedResult,
        }),
      },
    });
    expect(selectDepartDateErr(mockedState)).toEqual(expectedResult);
  });
});

describe('selectArrivalDateError', () => {
  const selectArrivalDateErr = selectArrivalDateError();
  it('should select the arrival date error state', () => {
    const expectedResult = 'arrival date error';
    const mockedState = fromJS({
      addATour: {
        addTourStateError: fromJS({
          arrivalDateError: expectedResult,
        }),
      },
    });
    expect(selectArrivalDateErr(mockedState)).toEqual(expectedResult);
  });
});

describe('selectTourPhotoError', () => {
  const selectTourPhotoErr = selectTourPhotoError();
  it('should select the tour photo date error state', () => {
    const expectedResult = 'tour photoerror';
    const mockedState = fromJS({
      addATour: {
        addTourStateError: fromJS({
          tourPhotoError: expectedResult,
        }),
      },
    });
    expect(selectTourPhotoErr(mockedState)).toEqual(expectedResult);
  });
});
