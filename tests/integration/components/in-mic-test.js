import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('in-mic', 'Integration | Component | in mic', {
  integration: true
});

test('it renders microphone icon', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

/*
  var supportedBrowser = {
    window: {
      webkitSpeechRecognition: true
    }
  };

  var unsupportedBrowser = {
    window: {
    }
  };

*/

  this.set('supported', true);
  this.render(hbs`{{in-mic supported=supported}}`);
  assert.equal(this.$('.fa-microphone').length, 1);
  assert.equal(this.$('.intro').length, 1);
  assert.equal(this.$('.intro-purpose').length, 1);
  assert.notOk(this.$('.mic').hasClass('switched-on'));

  this.set('supported', true);
  this.set('switchedOn', true);
  this.render(hbs`{{in-mic switchedOn=switchedOn supported=supported}}`);
  assert.ok(this.$('.mic').hasClass('switched-on'));

  this.set('supported', true);
  this.set('switchedOn', false);
  this.render(hbs`{{in-mic switchedOn=switchedOn supported=supported}}`);
  assert.notOk(this.$('.mic').hasClass('switched-on'));

  this.set('supported', false);
  this.render(hbs`{{in-mic supported=supported}}`);
  assert.equal(this.$('.unsupported').length, 1);
});
