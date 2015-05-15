describe('MemberStore', () => {
  var MemberActions;
  var MemberStore;

  beforeEach(() => {
    MemberActions = require('../../actions/MemberActions');
    MemberStore = require('../MemberStore');

    MemberActions.addMember('foo');
    jasmine.clock().tick();
  });

  it('can add a member', () => {
    var members = MemberStore.members();
    expect(members.toJS()).toEqual([{ name: 'foo' }]);
  });

  it('busts the require cache', () => {
    MemberActions.addMember('bar');
    jasmine.clock().tick();

    var members = MemberStore.members();
    expect(members.toJS()).toEqual([{ name: 'foo' }, { name: 'bar' }]);
  });
});
