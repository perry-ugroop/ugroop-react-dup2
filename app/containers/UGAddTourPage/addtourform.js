/**
 * Created by Yang on 3/11/16.
 */
import React from 'react';
import { connect } from 'react-redux';
import messages from './messages';
import { FormattedMessage } from 'react-intl';
import { isEmptyString } from '../../utils/stringAdditions';
import { createStructuredSelector } from 'reselect';
/*
 import { selectAddTourPage, selectTourName, selectDestCity, selectDepartDate, selectArrivalDate, selectParticipantFlag,
 selectTourPhoto, selectTourNameError, selectDestCityError, selectDepartDateError, selectArrivalDateError,
 selectParticipantFlagError, selectTourPhotoError } from './selectors';
 */
// import {  } from './actions';
// import validationRule from '../../utils/validationrule';
// import { CHANGE_TOURNAME } from './constants';

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
    let tourName;
    if (!isEmptyString(this.props.tourNameError)) {
      tourName = { id: 'tourNameError', defaultMessage: this.props.tourNameError };
    }
    console.log(tourName);
    let destCity;
    if (!isEmptyString(this.props.destCityError)) {
      destCity = { id: 'destCityError', defaultMessage: this.props.destCityError };
    }
    console.log(destCity);
    let departDate;
    if (!isEmptyString(this.props.departDateError)) {
      departDate = { id: 'departDateError', defaultMessage: this.props.departDateError };
    }
    console.log(departDate);
    let arrivalDate;
    if (!isEmptyString(this.props.arrivalDateError)) {
      arrivalDate = { id: 'arrivalDateError', defaultMessage: this.props.arrivalDateError };
    }
    console.log(arrivalDate);
    const tourDesc = null;
    const participantFlag = null;
    const tourPhoto = null;
    console.log(tourDesc);
    console.log(participantFlag);
    console.log(tourPhoto);
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
                    <Input
                      type="text"
                      name="DepartDate"
                      placeholder={messages.departDatePlaceholder.defaultMessage}
                      value={this.props.departDate}
                      onChange={this.props.onChangeDepartDate}
                      onBlur={this.props.onBlurDepartDate}
                    />
                  </BSInputGroup>
                </BSFormGroup>
              </BSColumnHalf>

              <BSColumnHalf>
                <BSFormGroup>
                  <UGFromGroupLabel>{messages.arrivalDateLabel.defaultMessage}</UGFromGroupLabel>
                  <BSInputGroup>
                    <AddOnSpan>
                      <Glyphicon glyph="calendar" />
                    </AddOnSpan>
                    <Input
                      type="text"
                      name="ArrivalDate"
                      placeholder={messages.arrivalDatePlaceholder.defaultMessage}
                      value={this.props.arrivalDate}
                      onChange={this.props.onChangeArrivalDate}
                      onBlur={this.props.onBlurArrivalDate}
                    />
                  </BSInputGroup>
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
              <BSColumnHalf className={'col-12'}>
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
                    value={this.props.departDate}
                    onChange={this.props.onChangeDepartDate}
                    onBlur={this.props.onBlurDepartDate}
                    readOnly="readOnly"
                  />
                </BSInputGroup>
              </BSColumnHalf>

              <BSColumnHalf className={'col-12'}>
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

const mapStateToProps = createStructuredSelector({});

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTourForm);
