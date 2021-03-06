import React from 'react';
import SignUp from '../../components/SignUp/SignUp';
import LunchInvites from '../../components/LunchInvites/LunchInvites';
import BuddyListItem from '../../components/BuddyListItem/';
import RaisedButton from 'material-ui/RaisedButton';
import Loader from '../../components/Loader/Loader';
import EditableProfile from '../../components/EditableProfile/EditableProfile';
import Paper from 'material-ui/Paper';
import './styles.css';
import {
  updateEmailField,
  updatePasswordField,
  updateFullnameField,
  updatePhoneField
} from '../../../../client/redux/modules/forms';
import { wipeFilterState } from '../../../../client/redux/modules/filters';

const Profile = ({ updateEditStatus, editUserProfile, dispatch, editStatus, userData, handleEmail, handlePassword, handleFullname, handlePhone, currentUserId, lunchData, handleLunch, acceptButton, declineButton, availabilityStatus, today }) => {
const logged_in_user = Meteor.userId()
const check = (currentUserId === logged_in_user);
  return (
   <div className="profileContainer">
     <div>
       {editStatus && check ?
         <EditableProfile
             userData={userData[0]}
             editUserProfile={editUserProfile}
             handleFullname={handleFullname}
             handlePhone={handlePhone}
             dispatch={dispatch}
          />
       :
         <BuddyListItem userData={userData[0]} handleLunch={handleLunch}/>
       }
       {check ?
       (editStatus ?
         <RaisedButton
           label={"Cancel"}
           onTouchTap={() => {
            dispatch(wipeFilterState())
            dispatch(updateEditStatus())
             }
            }
           secondary
           className="profileButton"
         />
       : 
       <RaisedButton
           label={"Edit Profile"}
           onTouchTap={() => {
            dispatch(wipeFilterState())
            dispatch(updateEditStatus())
             }
            }
           secondary
           className="profileButton"
         />)
      :null
       }
     </div>
     <div>
     {check ?
       <div className="inviteContainer">
         <Paper className="invitePaper" zDepth={3}>
           <LunchInvites
             userData={userData[0]}
             lunchData={lunchData}
             acceptButton={acceptButton}
             declineButton={declineButton}
             availabilityStatus={availabilityStatus}
             today={today}
           />
         </Paper>
       </div>
     : null
     }
     </div>
   </div>
 );
}

export default Profile;
