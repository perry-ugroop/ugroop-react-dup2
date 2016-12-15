/**
 * Created by yunzhou on 26/11/2016.
 */
import React from 'react';
import UGBoxBody from '../BootStrap/UGBoxBody';
import TourItem from './touritem';

function TourList(props) {
  const tours = props.items;
  return (
    <UGBoxBody>
      {
        tours.map((item, index) => (<TourItem key={`item-${index}`} item={item} />))
      }
    </UGBoxBody>
  );
}
TourList.propTypes = {
  items: React.PropTypes.array,
};
export default TourList;
