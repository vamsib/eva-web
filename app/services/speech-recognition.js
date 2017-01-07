import Ember from 'ember';

export default Ember.Service.extend({

  messageQueue: Ember.inject.service(),

  spr: Ember.computed(function() {
    return window.webkitSpeechRecognition ? 
      new window.webkitSpeechRecognition() : 
      false;
  }),

  listening: false,

  init() {
    this._super(...arguments);
    var spr = this.get('spr');

    spr.onresult = (event) => {
      var finalResult = "";
      for (var i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          finalResult += event.results[i][0].transcript;
        }
      }
      if (finalResult) {
        this.get('messageQueue').push('spr_results', finalResult);
      }
    };

    spr.onstart = () => {
      this.set('listening', true);
    };

    spr.onend = () => {
      this.set('listening', false);
    };
  },

  isAvailable() {
    return !!this.get('spr');
  },

  start() {
    let spr = this.get('spr');
    if ('function' === typeof spr.start && !this.get('listening')) {
      spr.start();
    }
  },

  stop() {
    let spr = this.get('spr');
    if ('function' === typeof spr.stop) {
      spr.stop();
    }
  }

});
