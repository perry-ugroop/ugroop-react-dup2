import React from 'react';
import { push } from 'react-router-redux';

import img1 from './assets/logo-school-1.png';
import img2 from './assets/logo-school-2.png';
import img3 from './assets/logo-school-3.png';
import img4 from './assets/logo-school-4.png';
import img5 from './assets/logo-school-5.png';
import img6 from './assets/logo-school-6.png';
import img7 from './assets/logo-school-7.png';

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
            <li><img src={img1} width="131" height="132" alt="" /></li>
            <li><img src={img2} width="131" height="132" alt="" /></li>
            <li><img src={img3} width="131" height="132" alt="" /></li>
            <li><img src={img4} width="131" height="132" alt="" /></li>
            <li><img src={img5} width="131" height="132" alt="" /></li>
            <li><img src={img6} width="131" height="132" alt="" /></li>
            <li><img src={img7} width="131" height="132" alt="" /></li>
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
