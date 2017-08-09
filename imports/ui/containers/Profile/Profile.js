import React from 'react';
import { connect } from 'react-redux';
import SignUp from '../../components/SignUp/SignUp';
import LunchInvites from '../../components/LunchInvites/LunchInvites';
import BuddyListItem from '../../components/BuddyListItem/';
import { editProfile } from '../../../../client/redux/modules/profile';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

const Profile = ({ edit, dispatch }) => (
  <div className="profile-container">
    <div>
      {!edit ?
        <BuddyListItem />
      :
        <SignUp />
      }
      <RaisedButton
        label="Edit Profile"
        onTouchTap={() => dispatch(editProfile(true))}
        secondary={true}
        disabled={edit ? true : false} // disable button if editing profile
        style={style}
      />
    </div>
    <LunchInvites />
  </div>
);

function mapStateToProps(state) {
  return {
    edit: state.profile.editProfile
  };
}

export default connect(mapStateToProps)(Profile);