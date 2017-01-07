import Ember from 'ember';

export default Ember.Component.extend({
  messageQueue: Ember.inject.service(),
  replies: [],
  init() {
    this._super();
    this.get('messageQueue').subscribe('replies', (reply) => {
      this.get('replies').push(reply);
      this.notifyPropertyChange('replies');
    });
  }
});
