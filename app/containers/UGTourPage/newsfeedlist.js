/**
 * Created by yunzhou on 26/11/2016.
 */
import React from 'react';
import { connect } from 'react-redux';


// import messages from './messages';
import NewsFeedAccountImg from './NewsFeedAccountImg';
import NewsFeedHead from './NewsFeedHead';


export function NewsFeedList(props) {
  const tourId = props.tourId;
  const newsfeeds = props.items;
  const defaultImg = 'http://dev-175.ugroop.com.au/Content/images/default-tour-photo.jpg';

  return (
    <span id={`tourlist${tourId}`}>
      {

        newsfeeds && newsfeeds.map((newsfeed, index) => (
          <div key={index} className="media">
            <div className="media-left">
              <NewsFeedAccountImg className="media-object" src={newsfeed.user.src ? newsfeed.user.src : defaultImg} alt={newsfeed.user.name} />
            </div>
            <div className="media-body">
              <NewsFeedHead>
                {newsfeed.subject}
                <span className="date">{newsfeed.publishDate}</span>
                <p>{newsfeed.content}</p>
              </NewsFeedHead>
            </div>
          </div>
        ))
      }
    </span>
  );
}

NewsFeedList.propTypes = {
  tourId: React.PropTypes.string,
  items: React.PropTypes.any,
};
export default connect(null, null)(NewsFeedList);

