import React, { Component } from 'react';
import InvitationalModal from '../../components/InvitationModal/';
import { connect } from 'react-redux';
import { flipCreateLunchModal } from '../../../../client/redux/modules/lunch';


class InvitationalModalContainer extends Component {
  handleInvitation = () => { //check mycurrentlunch, if null > handleLunchCreation, otherwise push current lunch id into pending lunches of invitee;
    const user = Meteor.user();
    console.log(user);
  }
  handleLunchCreation = () => {
    const user_id = Meteor.userId(); 
    const options = { //schema checking server side
      budget: ['under 10'], //budget form
      buddies: [user_id], //storing my id
      cuisines: ['Italian', 'Burgerland'] //cuisines form
    }
    //also need invitee;
    if (options && user_id) { 
      Meteor.call('lunches.createLunch', { user_id, options }, (error) => {
        if (error) {
          console.log("There was an error: " + error.reason);
        } else {
          this.props.history.push('/')
        }
      }
      )
    }
  }
  handleLunchFlip = () => {
    this.props.dispatch(flipCreateLunchModal());
  }
  render() {
    if(this.props.showLunch) {
    return (
      
      <InvitationalModal  handleLunchCreation={this.handleLunchCreation} 
                          handleLunchFlip={this.handleLunchFlip}  
                          
      />
      
    )
    } else {
      return null
    }
  }
}

function mapStateToProps(state) {
    return {
      showLunch: state.lunch.showLunchInvitation
    }
}
export default connect(mapStateToProps)(InvitationalModalContainer);
