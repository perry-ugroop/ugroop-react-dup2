/**
 * Created by yunzhou on 6/12/2016.
 */
import React from 'react';
import FaBeer from 'react-icons/lib/fa/beer';
import FaAmbulance from 'react-icons/lib/fa/ambulance';
import { connect } from 'react-redux';
export class FontSVG extends React.Component {
  randomIcon() {
    return Math.random() > 0.5 ? <FaBeer /> : <FaAmbulance />;
  }

  render() {
    const icon = this.randomIcon();
    return (
      <div>
        <h1> Lets go for a random icon</h1>
        <h3>{icon}</h3>
      </div>
    );
  }
}
export default connect()(FontSVG);

