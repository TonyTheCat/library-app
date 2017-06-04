import Ember from 'ember';

export default Ember.Controller.extend({
  emailIsValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  messageNotEmpty: Ember.computed.gte('message.length', 1),
  isDisabled: Ember.computed('emailIsValid', 'messageNotEmpty', function () {
    return !this.get('emailIsValid') || !this.get('messageNotEmpty');
  }),

  actions: {
    sendMessage() {
      alert(`Sending your message is in progress. Your email is ${this.get('emailAddress')}`);
      this.set('responseMessage', `Thank you! We've just got your message: ${this.get('message')}`);
      this.set('emailAddress', '');
      this.set('message', '');
    }
  }

});
