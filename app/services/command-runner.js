import Ember from 'ember';

export default Ember.Service.extend({
  messageQueue: Ember.inject.service(),

  init() {
    this._super(...arguments);
    this.get('messageQueue').subscribe('commands', (command) => {
      //map commands to services, run the services and queue results
      if (command.name && 'add' === command.name) {
        this.get('messageQueue').push('replies', command.originalText + ' is ' + command.parameters.reduce((sum, n) => { return sum + n; }));
      }
    });
  }
});
