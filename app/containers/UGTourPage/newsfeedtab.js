/**
 * Created by yunzhou on 26/11/2016.
 */
import React from 'react';
import { connect } from 'react-redux';

// import A from 'components/A';
// import messages from './messages';
import BSRow from '../BootStrap/BSRow';
import NewsFeedList from './newsfeedlist';
import NewsFeedListModal from './newsfeedlistmodal';
import AddNewsModal from './addnewsmodal';

export function NewsFeedTab(props) {
  const tourId = props.tourId;
  const newsfeedlist = props.items[tourId];

  return (
    <div>
      <div>
        <NewsFeedList tourId={tourId} items={newsfeedlist} />
      </div>
      <hr />
      <BSRow>
        <div className="col-sm-6">
          <NewsFeedListModal tourId={tourId} newsfeedlist={newsfeedlist} />
        </div>
        <div className="col-sm-6">
          <div className="pull-right">
            <AddNewsModal tourId={tourId} />
          </div>
        </div>
      </BSRow>
    </div>

  );
}

NewsFeedTab.propTypes = {
  tourId: React.PropTypes.string,
  items: React.PropTypes.any,
};
export default connect(null, null)(NewsFeedTab);

