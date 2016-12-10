/**
 * Created by Yang on 3/11/16.
 */
import React from 'react';
import { connect } from 'react-redux';
import messages from './messages';
import { FormattedMessage } from 'react-intl';
import { isEmptyString } from '../../utils/stringAdditions';
import { createStructuredSelector } from 'reselect';
import DateInput from './DateInput';
import { selectTourName, selectDestCity, selectDepartDate, selectArrivalDate,
  selectTourNameError, selectDestCityError, selectDepartDateError, selectArrivalDateError,
} from './selectors';

import { changeTourName, changeDestCity, validText, validDate } from './actions';
import validationRule from '../../utils/validationrule';
import { TOURNAME_FIELD, DESTCITY_FIELD, DEPARTDATE_FIELD, ARRIVALDATE_FIELD } from './constants';

import { Glyphicon } from 'react-bootstrap';

import BSRow from '../BootStrap/BSRow';
import BSColumnHalf from '../BootStrap/BSColumnHalf';
import BSColumnAll from '../BootStrap/BSColumnAll';
import BSFormGroup from '../BootStrap/BSFormGroup';
import BSTextDanger from '../BootStrap/BSTextDanger';
import BSInputGroup from '../BootStrap/BSInputGroup';
import BSCheckboxInline from '../BootStrap/BSCheckboxInline';
import UGBoxBodyWrapper from '../BootStrap/UGBoxBodyWrapper';
import UGFromGroupLabel from '../BootStrap/UGFromGroupLabel';
import AddTourBoxBody from './AddTourBoxBody';
import Input from './Input';
import AddOnSpan from './AddOnSpan';
import Textarea from './Textarea';
import CheckboxInput from './CheckboxInput';
import SpanButton from './SpanButton';
import RightSpan from './RightSpan';
import SubmitButton from './SubmitButton';
import FileInput from './FileInput';

export class AddTourForm extends React.Component {

  wrapErrorMessage(error) {
    if (error != null) {
      return <BSTextDanger id={error.id}><FormattedMessage {...error} /></BSTextDanger>;
    }
    return '';
  }

  render() {
    let tourNameError;
    if (!isEmptyString(this.props.tourNameError)) {
      tourNameError = { id: 'tourNameError', defaultMessage: this.props.tourNameError };
    }
    let destCityError;
    if (!isEmptyString(this.props.destCityError)) {
      destCityError = { id: 'destCityError', defaultMessage: this.props.destCityError };
    }

    let departDateError;
    if (!isEmptyString(this.props.departDateError)) {
      departDateError = { id: 'departDateError', defaultMessage: this.props.departDateError };
    }
    let arrivalDateError;
    if (!isEmptyString(this.props.arrivalDateError)) {
      arrivalDateError = { id: 'arrivalDateError', defaultMessage: this.props.arrivalDateError };
    }
    return (
      <form>
        <UGBoxBodyWrapper>
          <AddTourBoxBody>
            {/* First Row */}
            <BSRow>
              <BSColumnHalf>
                <BSFormGroup>
                  <UGFromGroupLabel>{messages.tourNameLabel.defaultMessage}</UGFromGroupLabel>
                  <Input
                    type="text "
                    name="TourName"
                    placeholder={messages.tourNamePlaceholder.defaultMessage}
                    value={this.props.tourName}
                    onChange={this.props.onChangeTourName}
                    onBlur={this.props.onBlurTourName}
                  />
                  {this.wrapErrorMessage(tourNameError)}
                </BSFormGroup>
              </BSColumnHalf>

              <BSColumnHalf>
                <BSFormGroup>
                  <UGFromGroupLabel>{messages.destCityLabel.defaultMessage}</UGFromGroupLabel>
                  <Input
                    type="text"
                    name="DestCity"
                    placeholder={messages.destCityPlaceholder.defaultMessage}
                    value={this.props.destCity}
                    onChange={this.props.onChangeDestCity}
                    onBlur={this.props.onBlurDestCity}
                  />
                  {this.wrapErrorMessage(destCityError)}
                </BSFormGroup>
              </BSColumnHalf>
            </BSRow>
            {/* Second Row */}
            <BSRow>
              <BSColumnHalf>
                <BSFormGroup>
                  <UGFromGroupLabel>{messages.departDateLabel.defaultMessage}</UGFromGroupLabel>
                  <BSInputGroup>
                    <AddOnSpan>
                      <Glyphicon glyph="calendar" />
                    </AddOnSpan>
                    <DateInput
                      dateFormat={messages.departDatePlaceholder.defaultMessage}
                      name="DepartDate"
                      placeholder={messages.departDatePlaceholder.defaultMessage}
                      value={this.props.departDate}
                      onChange={this.props.onChangeDepartDate}
                      onBlur={this.props.onBlurDepartDate}
                    />
                  </BSInputGroup>
                  {this.wrapErrorMessage(departDateError)}
                </BSFormGroup>
              </BSColumnHalf>

              <BSColumnHalf>
                <BSFormGroup>
                  <UGFromGroupLabel>{messages.arrivalDateLabel.defaultMessage}</UGFromGroupLabel>
                  <BSInputGroup>
                    <AddOnSpan>
                      <Glyphicon glyph="calendar" />
                    </AddOnSpan>
                    <DateInput
                      dateFormat={messages.departDatePlaceholder.defaultMessage}
                      name="ArrivalDate"
                      placeholder={messages.arrivalDatePlaceholder.defaultMessage}
                      value={this.props.arrivalDate}
                      onChange={this.props.onChangeArrivalDate}
                      onBlur={this.props.onBlurArrivalDate}
                    />
                  </BSInputGroup>
                  {this.wrapErrorMessage(arrivalDateError)}
                </BSFormGroup>
              </BSColumnHalf>
            </BSRow>
            {/* Third Row */}
            <BSRow>
              <BSColumnAll>
                <BSFormGroup>
                  <UGFromGroupLabel>{messages.tourDescLabel.defaultMessage}</UGFromGroupLabel>
                  <Textarea
                    type="text"
                    name="TourDesc"
                    rows={5}
                    value={this.props.tourDesc}
                    onChange={this.props.onChangeTourDesc}
                    onBlur={this.props.onBlurTourDesc}
                  />
                </BSFormGroup>
              </BSColumnAll>
            </BSRow>
            {/* Forth Row */}
            <BSRow>
              <BSColumnAll>
                <BSCheckboxInline>
                  <CheckboxInput />{messages.participantLabel.defaultMessage}
                </BSCheckboxInline>
              </BSColumnAll>
            </BSRow>
            {/* Fifth Row*/}
            <BSRow>
              <BSColumnHalf>
                <label htmlFor="BSInputGroup">{messages.tourPhotoLabel.defaultMessage}</label>
                <BSInputGroup>
                  <span className="input-group-btn">
                    <SpanButton>
                      {messages.browseButton.defaultMessage}
                      <FileInput />
                    </SpanButton>
                  </span>
                  <Input
                    type="text"
                    name="txtfilephoto"
                    readOnly="readOnly"
                  />
                </BSInputGroup>
              </BSColumnHalf>

              <BSColumnHalf>
                <RightSpan>
                  <BSInputGroup>
                    <SubmitButton
                      name="cancelTour"
                      value={messages.cancelButton.defaultMessage}
                    />
                    &nbsp;
                    <SubmitButton
                      name="saveTour"
                      value={messages.saveButton.defaultMessage}
                    />
                  </BSInputGroup>
                </RightSpan>
              </BSColumnHalf>
            </BSRow>
          </AddTourBoxBody>
        </UGBoxBodyWrapper>


      </form>
    );
  }
}

// <!-- button>{messages.saveButton.defaultMessage}</button-->
AddTourForm.propTypes = {
  onChangeTourName: React.PropTypes.func,
  onBlurTourName: React.PropTypes.func,
  onChangeDestCity: React.PropTypes.func,
  onBlurDestCity: React.PropTypes.func,
  onChangeDepartDate: React.PropTypes.func,
  onBlurDepartDate: React.PropTypes.func,
  onChangeArrivalDate: React.PropTypes.func,
  onBlurArrivalDate: React.PropTypes.func,
  onChangeTourDesc: React.PropTypes.func,
  onBlurTourDesc: React.PropTypes.func,
  tourName: React.PropTypes.string,
  tourNameError: React.PropTypes.string,
  destCity: React.PropTypes.string,
  destCityError: React.PropTypes.string,
  departDate: React.PropTypes.string,
  departDateError: React.PropTypes.string,
  arrivalDate: React.PropTypes.string,
  arrivalDateError: React.PropTypes.string,
  tourDesc: React.PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  tourName: selectTourName(),
  tourNameError: selectTourNameError(),
  destCity: selectDestCity(),
  destCityError: selectDestCityError(),
  departDate: selectDepartDate(),
  departDateError: selectDepartDateError(),
  arrivalDate: selectArrivalDate(),
  arrivalDateError: selectArrivalDateError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeTourName: (evt) => dispatch(changeTourName(evt.target.value)),
    onChangeDestCity: (evt) => dispatch(changeDestCity(evt.target.value)),
    onChangeDepartDate: (evt) => dispatch(validDate({ date: evt, field: DEPARTDATE_FIELD })),
    onChangeArrivalDate: (evt) => dispatch(validDate({ date: evt, field: ARRIVALDATE_FIELD })),
    onBlurTourName: (evt) => dispatch(validText({ text: evt.target.value,
      regExps: [validationRule.characterConstraints],
      field: TOURNAME_FIELD })),
    onBlurDestCity: (evt) => dispatch(validText({ text: evt.target.value,
      regExps: [validationRule.characterConstraints],
      field: DESTCITY_FIELD })),
    onBlurDepartDate: (evt) => dispatch(validDate({ date: evt.target.value, field: DEPARTDATE_FIELD })),
    onBlurArrivalDate: (evt) => dispatch(validDate({ date: evt.target.value, field: ARRIVALDATE_FIELD })),

    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTourForm);
