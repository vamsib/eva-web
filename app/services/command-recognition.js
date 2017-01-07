import Ember from 'ember';

export default Ember.Service.extend({
  messageQueue: Ember.inject.service(),

  init() {
    this._super(...arguments);
    this.get('messageQueue').subscribe('spr_results', (text) => {
      //extract commands and push to commands queue
      var command = {},
          parameters = [];

      if (text.indexOf('+') >= 0) {
        command = {
          'name': 'add',
          'parameters': text.split('+').map((s) => { return Number.parseInt(s, 10) }),
          'originalText': text
        };
        this.get('messageQueue').push('commands', command);
      }
    });
  }
});
