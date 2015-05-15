var Immutable = require('immutable');
var MemberActions = require('../actions/MemberActions');
var Reflux = require('reflux');

var members = Immutable.List();

var MemberStore = Reflux.createStore({
  listenables: [
    MemberActions,
  ],

  members() {
    return members;
  },

  onAddMember(name) {
    members = members.push(Immutable.Map({ name }));
    this.triggerAsync();
  },
});

module.exports = MemberStore;
