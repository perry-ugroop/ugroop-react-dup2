import React from 'react';
import { connect } from 'react-redux';
import BSInputGroup from '../BootStrap/BSInputGroup';
import styled from 'styled-components';
import BSFormInput from '../BootStrap/BSInputFormControl';
import BSButtonPrimaryBlock from '../BootStrap/BSButtonPrimaryBlock';
import UGFlatBorder from '../BootStrap/UGFlatBorder';

const FormPanel = styled(BSInputGroup);
const Input = styled(BSFormInput)`
  &&{
    height: 46px;
    padding: 10px 16px;
    line-height: 1.33;
  }
`;

const InputButton = styled(BSButtonPrimaryBlock)`
  ${UGFlatBorder}
  &&{
    background-color: #075EAB;
    border: none;
    margin-top: 20px;
    padding: 12px;
    :hover, focus:
    {
      background-color: #124677 !important;
      border: none; 
    }
  }
`;

export class CommentForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <FormPanel>
          <Input
            id="fullname"
            type="text"
            value={this.props.fullname}
            name="fullname"
            onChange={this.props.onChangeName}
          />
        </FormPanel>
        <FormPanel>
          <Input
            id="email"
            type="text"
            value={this.props.email}
            name="email"
            onChange={this.props.onChangeEmail}
          />
        </FormPanel>
        <FormPanel>
          <Input
            id="comment"
            type="text"
            name="comment"
            value={this.props.comment}
            onChange={this.props.onChangeComment}
          />
        </FormPanel>
        <InputButton>Submit</InputButton>
      </form>
    );
  }
}

CommentForm.propTypes = {
  fullname: React.PropTypes.string,
  email: React.PropTypes.string,
  comment: React.PropTypes.string,
  onChangeName: React.PropTypes.func,
  onChangeEmail: React.PropTypes.func,
  onChangeComment: React.PropTypes.func,

};


// Wrap the component to inject dispatch and state into it
export default connect()(CommentForm);

