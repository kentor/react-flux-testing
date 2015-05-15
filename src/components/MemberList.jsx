var MemberActions = require('../actions/MemberActions');
var MemberStore = require('../stores/MemberStore');
var React = require('react/addons');
var Reflux = require('reflux');

var MemberList = React.createClass({
  mixins: [
    React.addons.LinkedStateMixin,
    Reflux.ListenerMixin,
  ],

  getInitialState() {
    return {
      members: MemberStore.members(),
      newMemberName: '',
    };
  },

  componentDidMount() {
    this.listenTo(MemberStore, () => {
      this.setState(this.getInitialState());
    });
  },

  addMember() {
    MemberActions.addMember(this.state.newMemberName);
    this.setState({ newMemberName: '' });
  },

  render() {
    return (
      <main>
        <ul>
          {this.state.members.map(member => (
            <li key={member.get('name')}>{member.get('name')}</li>
          ))}
        </ul>

        <input valueLink={this.linkState('newMemberName')} ref="input" />
        <button onClick={this.addMember} ref="submit" />
      </main>
    );
  },
});

module.exports = MemberList;
