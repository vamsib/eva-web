import Ember from 'ember';

export default Ember.Component.extend({

  supported: Ember.computed(function() {
    let spr = this.get('speechRecognition');
    return  spr && spr.isAvailable();
  }),

  switchedOn: false,

  didInsertElement() {
    this.$('a').focus();
  },

  keyDown(event) {
    if (32 === event.keyCode) {
      let spr = this.get('speechRecognition');
      this.set('switchedOn', true);
      spr.start();
    }
  },

  keyUp(event) {
    if (32 === event.keyCode) {
      let spr = this.get('speechRecognition');
      this.set('switchedOn', false);
      spr.stop();
    }
  }

});
