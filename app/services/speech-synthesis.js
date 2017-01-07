import Ember from 'ember';

export default Ember.Service.extend({
  messageQueue: Ember.inject.service(),
  init() {
    this.get('messageQueue').subscribe('replies', (textReply) => {
      var msg = new window.SpeechSynthesisUtterance(textReply);
      window.speechSynthesis.speak(msg);
    });
  }
});
