import Ember from 'ember';

export default Ember.Service.extend({

  q: {},

  topics: {},

  initTopic(topic) {
    if ('undefined' === typeof this.q[topic]) {
      this.q[topic] = new Rx.Subject();
    }
  },

  push(topic, message) {
    this.initTopic(topic);
    this.q[topic].onNext(message);
  },

  subscribe(topic, fn) {
    this.initTopic(topic);
    this.q[topic].subscribe(fn);
  },

  getTopic(topic) {
    this.initTopic(topic);
    return this.q[topic];
  }

});
