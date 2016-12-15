/**
 * Created by Yang on 8/11/16.
 */
/**
 * Created by Yang on 29/10/16.
 */
import { fromJS } from 'immutable';
import {
  selectRegisterpage,
  selectOrgName, selectOrgNameError,
  selectOrgAddress, selectOrgAddressError,
  selectFirstName, selectFirstNameError,
  selectLastName, selectLastNameError,
  selectEmail, selectEmailError,
  selectRole, selectWebsite,
  selectPassword, selectPasswordError,
  selectReTypePassword, selectReTypePasswordError,
  selectServerValidationError,
} from '../selectors';

describe('selectRegisterpage', () => {
  const registerSelector = selectRegisterpage();
  it('should select the register state', () => {
    const registerState = fromJS({
      userData: {},
    });
    const mockedState = fromJS({
      register: registerState,
    });
    expect(registerSelector(mockedState)).toEqual(registerState);
  });
});

describe('selectOrgName', () => {
  const selectOrg = selectOrgName();
  it('should select the orgName state', () => {
    const expectedResult = 'orgName';
    const mockedState = fromJS({
      register: {
        signUpUser: fromJS({
          orgName: expectedResult,
        }),
      },
    });
    expect(selectOrg(mockedState)).toEqual(expectedResult);
  });
});

describe('selectOrgName', () => {
  const selectOrg = selectOrgName();
  it('should select the orgName state', () => {
    const expectedResult = 'orgName';
    const mockedState = fromJS({
      register: {
        signUpUser: fromJS({
          orgName: expectedResult,
        }),
      },
    });
    expect(selectOrg(mockedState)).toEqual(expectedResult);
  });
});

describe('selectOrgAddress', () => {
  const selector = selectOrgAddress();
  it('should select the selectOrgAddress state', () => {
    const expectedResult = 'selectOrgAddress';
    const mockedState = fromJS({
      register: {
        signUpUser: fromJS({
          orgAddress: expectedResult,
        }),
      },
    });
    expect(selector(mockedState)).toEqual(expectedResult);
  });
});

describe('selectFirstName', () => {
  const selector = selectFirstName();
  it('should select the selectFirstName state', () => {
    const expectedResult = 'yang';
    const mockedState = fromJS({
      register: {
        signUpUser: fromJS({
          firstName: expectedResult,
        }),
      },
    });
    expect(selector(mockedState)).toEqual(expectedResult);
  });
});

describe('selectLastName', () => {
  const selector = selectLastName();
  it('should select the selectLast state', () => {
    const expectedResult = 'yu';
    const mockedState = fromJS({
      register: {
        signUpUser: fromJS({
          lastName: expectedResult,
        }),
      },
    });
    expect(selector(mockedState)).toEqual(expectedResult);
  });
});

describe('selectEmail', () => {
  const selector = selectEmail();
  it('should select the selectEmail state', () => {
    const expectedResult = 'yu@t.com';
    const mockedState = fromJS({
      register: {
        signUpUser: fromJS({
          email: expectedResult,
        }),
      },
    });
    expect(selector(mockedState)).toEqual(expectedResult);
  });
});

describe('selectRole', () => {
  const selector = selectRole();
  it('should select the selectRole state', () => {
    const expectedResult = 'teacher';
    const mockedState = fromJS({
      register: {
        signUpUser: fromJS({
          role: expectedResult,
        }),
      },
    });
    expect(selector(mockedState)).toEqual(expectedResult);
  });
});

describe('selectWebsite', () => {
  const selector = selectWebsite();
  it('should select the selectWebsite state', () => {
    const expectedResult = 'teacher';
    const mockedState = fromJS({
      register: {
        signUpUser: fromJS({
          website: expectedResult,
        }),
      },
    });
    expect(selector(mockedState)).toEqual(expectedResult);
  });
});

describe('selectPassword', () => {
  const selector = selectPassword();
  it('should select the selectPassword state', () => {
    const expectedResult = 'password';
    const mockedState = fromJS({
      register: {
        signUpUser: fromJS({
          password: expectedResult,
        }),
      },
    });
    expect(selector(mockedState)).toEqual(expectedResult);
  });
});

describe('selectReTypePassword', () => {
  const selector = selectReTypePassword();
  it('should select the ReTypePassword state', () => {
    const expectedResult = 'password';
    const mockedState = fromJS({
      register: {
        signUpUser: fromJS({
          retypePassword: expectedResult,
        }),
      },
    });
    expect(selector(mockedState)).toEqual(expectedResult);
  });
});

describe('selectOrgNameError', () => {
  const selector = selectOrgNameError();
  it('should select the selectOrgNameError state', () => {
    const expectedResult = 'error';
    const mockedState = fromJS({
      register: {
        signUpError: fromJS({
          orgNameError: expectedResult,
        }),
      },
    });
    expect(selector(mockedState)).toEqual(expectedResult);
  });
});

describe('selectOrgAddressError', () => {
  const selector = selectOrgAddressError();
  it('should select the selectOrgAddressError state', () => {
    const expectedResult = 'error';
    const mockedState = fromJS({
      register: {
        signUpError: fromJS({
          orgAddressError: expectedResult,
        }),
      },
    });
    expect(selector(mockedState)).toEqual(expectedResult);
  });
});

describe('selectFirstNameError', () => {
  const selector = selectFirstNameError();
  it('should select the selectFirstNameError state', () => {
    const expectedResult = 'error';
    const mockedState = fromJS({
      register: {
        signUpError: fromJS({
          firstNameError: expectedResult,
        }),
      },
    });
    expect(selector(mockedState)).toEqual(expectedResult);
  });
});

describe('selectLastNameError', () => {
  const selector = selectLastNameError();
  it('should select the selectLastNameError state', () => {
    const expectedResult = 'error';
    const mockedState = fromJS({
      register: {
        signUpError: fromJS({
          lastNameError: expectedResult,
        }),
      },
    });
    expect(selector(mockedState)).toEqual(expectedResult);
  });
});

describe('selectEmailError', () => {
  const selector = selectEmailError();
  it('should select the selectEmailError state', () => {
    const expectedResult = 'error';
    const mockedState = fromJS({
      register: {
        signUpError: fromJS({
          emailError: expectedResult,
        }),
      },
    });
    expect(selector(mockedState)).toEqual(expectedResult);
  });
});

describe('selectPasswordError', () => {
  const selector = selectPasswordError();
  it('should select the selectPasswordError state', () => {
    const expectedResult = 'error';
    const mockedState = fromJS({
      register: {
        signUpError: fromJS({
          passwordError: expectedResult,
        }),
      },
    });
    expect(selector(mockedState)).toEqual(expectedResult);
  });
});

describe('selectReTypePasswordError', () => {
  const selector = selectReTypePasswordError();
  it('should select the selectReTypePasswordError state', () => {
    const expectedResult = 'error';
    const mockedState = fromJS({
      register: {
        signUpError: fromJS({
          retypePasswordError: expectedResult,
        }),
      },
    });
    expect(selector(mockedState)).toEqual(expectedResult);
  });
});

describe('selectServerValidationeError', () => {
  const selector = selectServerValidationError();
  it('should select the selectServerValidation state', () => {
    const expectedResult = 'error';
    const mockedState = fromJS({
      register: {
        signUpError: fromJS({
          serverValidationError: expectedResult,
        }),
      },
    });
    expect(selector(mockedState)).toEqual(expectedResult);
  });
});

describe('selectIsRegisterSuccess', () => {
  const selector = selectServerValidationError();
  it('should select the selectIsRegisterSuccess state', () => {
    const expectedResult = 'error';
    const mockedState = fromJS({
      register: {
        signUpError: fromJS({
          serverValidationError: expectedResult,
        }),
      },
    });
    expect(selector(mockedState)).toEqual(expectedResult);
  });
});

