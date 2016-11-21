/*
 * LoginPage Messages
 *
 * This contains all the text for the LoginPage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  addTourHeader: {
    id: 'ugroop.containers.AddTour.addTour.header',
    defaultMessage: ' Add a Tour ',
  },
  tourNameLabel: {
    id: 'ugroop.containers.AddTourForm.tourName.label',
    defaultMessage: 'Tour Name',
  },
  tourNamePlaceholder: {
    id: 'ugroop.containers.AddTourForm.tourName.field',
    defaultMessage: 'Your Tour',
  },
  destCityLabel: {
    id: 'ugroop.containers.AddTourForm.destCity.label',
    defaultMessage: 'Destination City',
  },
  destCityPlaceholder: {
    id: 'ugroop.containers.AddTourForm.destCity.field',
    defaultMessage: 'Begin typing a city...',
  },
  departDateLabel: {
    id: 'ugroop.containers.AddTourForm.departDate.label',
    defaultMessage: 'Departure Date',
  },
  departDatePlaceholder: {
    id: 'ugroop.containers.AddTourForm.departDate.field',
    defaultMessage: 'DD/MM/YYYY',
  },
  arrivalDateLabel: {
    id: 'ugroop.containers.AddTourForm.arrivalDate.label',
    defaultMessage: 'Arrival Date',
  },
  arrivalDatePlaceholder: {
    id: 'ugroop.containers.AddTourForm.arrivalDate.field',
    defaultMessage: 'DD/MM/YYYY',
  },
  tourDescLabel: {
    id: 'ugroop.containers.AddTourForm.tourDesc.label',
    defaultMessage: 'Tour Description',
  },
  participantLabel: {
    id: 'ugroop.containers.AddTourForm.participant.label',
    defaultMessage: 'I am also Participant of this Tour',
  },
  tourPhotoLabel: {
    id: 'ugroop.containers.AddTourForm.tourphoto.label',
    defaultMessage: 'Tour Photo',
  },
  browseButton: {
    id: 'ugroop.containers.AddTourForm.browse.field',
    defaultMessage: 'Browse… ',
  },
  saveButton: {
    id: 'ugroop.containers.AddTourForm.save.field',
    defaultMessage: 'Save',
  },
  cancelButton: {
    id: 'ugroop.containers.AddTourForm.cancel.field',
    defaultMessage: 'Cancel',
  },
  cannotbeEmptyError: {
    id: 'ugroop.containers.AddTourForm.add.cannotBeEmpty',
    defaultMessage: 'Field cannot be empty',
  },
  cannotbeBeforeCurrentDateError: {
    id: 'ugroop.containers.AddTourForm.add.cannotBeBeforeCurrentDate',
    defaultMessage: 'Must be greater than or equal the current date',
  },
});
