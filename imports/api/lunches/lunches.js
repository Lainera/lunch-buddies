import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
// import userSchema from '../users/users'; //use user from userSchema as an element of Buddies array;

//create new collection for lunches
export const Lunches = new Mongo.Collection('lunches');

//set up schema
lunchSchema = new SimpleSchema({
  createdOn: {type: Date},
  id: String,
  due: String,
  buddies: {
    type: { type: Array },
    min: 1,
    label: "Buddies"
  },
  'buddies.$': { type: String },
  budget: {
    type: String,
    label: "Budget"
  },
  cuisines: {
    type: { type: Array },
    label: "Cuisines"
  },
  'cuisines.$': { type: String }
});