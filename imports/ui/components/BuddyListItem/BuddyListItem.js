import React from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Gravatar from 'react-gravatar';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Loader from '../Loader/index';
import './styles.css';


const BuddyListItem = ({ userData, handleLunch }) => {
  user_id = Meteor.userId();
  if (userData) {
    return (
      <div className="buddyListItemWrapper">
        <li className="buddyListItem">
          <Paper zDepth={3}>
            <div className="buddyListInfo">
              <div className="buddyImage">
                <Link to={`/profile/${userData._id}`}>
                  <Gravatar email={userData.emails[0].address} className="gravatarImage" size={150} />
                </Link>
              </div>
              <div className="buddyListDetails">
                <div className="buddyName">
                  <h1>Name</h1>
                  <p>{userData.profile.fullName}</p>
                </div>
                <div className="buddyNumber">
                  <h1>Phone Number</h1>
                  <p>{userData.profile.phoneNumber}</p>
                </div>
                <div className="buddyBudget">
                  <h1>Budget</h1>
                  <p>{userData.profile.budget}</p>
                </div>
                <div className="buddyInterests">
                  <h1>Interests</h1>
                  <ul>
                    {userData.profile.interests.map((interest, index) => (
                      <li key={index}>{interest}</li>
                    ))}
                  </ul>
                </div>
                <div className="buddyCuisines">
                  <h1>Cuisines</h1>
                  <ul>
                    {userData.profile.cuisines.map((cuisine, index) => (
                      <li key={index}>{cuisine}</li>
                    ))}
                  </ul>
                </div>
              </div>
              {user_id !== userData._id ?
                <RaisedButton
                  label="Invite"
                  primary
                  className="invitationButton"
                  icon={<i className="fa fa-check" aria-hidden="true"></i>}
                  onTouchTap={() => { handleLunch(userData._id, userData.profile.fullName) }}
                />
                : null}
            </div>
          </Paper>
        </li>
      </div>
    )
  } else {
    return (
      <Loader />
    );
  }
};

BuddyListItem.propTypes = {
  userData: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    emails: PropTypes.arrayOf(
      PropTypes.shape({
        address: PropTypes.string.isRequired
      })
    ),
    profile: PropTypes.shape({
      available: PropTypes.bool.isRequired,
      budget: PropTypes.arrayOf(PropTypes.string).isRequired,
      cuisines: PropTypes.arrayOf(PropTypes.string).isRequired,
      interests: PropTypes.arrayOf(PropTypes.string).isRequired,
      currentLunch: PropTypes.string,
      fullName: PropTypes.string.isRequired,
      pendingLunches: PropTypes.arrayOf(PropTypes.string).isRequired,
      phoneNumber: PropTypes.string.isRequired
    }).isRequired
  }),
  handleLunch: PropTypes.func.isRequired
}

export default withRouter(BuddyListItem);