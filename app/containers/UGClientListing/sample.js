import React from 'react';
import { push } from 'react-router-redux';

export class UGClientListingSample extends React.Component {
  openUGClientListingSample = () => {
    this.props.dispatch(push('/'));
  };
  render() {
    // const items = ['Guacamole', 'Beef', 'Bean'];
    // const data = [{ name: 'Jhon', age: 28, city: 'HO' }, { name: 'Onhj', age: 82, city: 'HN' }, { name: 'Nohj', age: 41, city: 'IT' }];
    // const numbers = [1, 2, 3, 4, 5, 6];

    return (
      <div className={'clients'}>s
        <div className="container">
          <h1>Our Clients</h1>
          <ul className="client-logo">
            <li><img src="./assets/logo-school-1.png" width="131" height="132" alt="" /></li>
            <li><img src="./assets/logo-school-2.png" width="131" height="132" alt="" /></li>
            <li><img src="./assets/logo-school-3.png" width="131" height="132" alt="" /></li>
            <li><img src="./assets/logo-school-4.png" width="131" height="132" alt="" /></li>
            <li><img src="./assets/logo-school-5.png" width="131" height="132" alt="" /></li>
            <li><img src="./assets/logo-school-6.png" width="131" height="132" alt="" /></li>
            <li><img src="./assets/logo-school-7.png" width="131" height="132" alt="" /></li>
          </ul>
        </div>
      </div>
    );
  }
}

UGClientListingSample.propTypes = {
  dispatch: React.PropTypes.func,
};

export default UGClientListingSample;
