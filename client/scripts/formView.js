var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    var message = {
      roomname: 'lobby',
      text: 'alex',
      username: App.username,
    };

    //console.log(FormView.$form);
    //console.log(message);
    $form.append(MessageView.render(message));
    //FormView.$form.find('message').val,
    //this.$form.append(message);
    //console.log('click!');

  },
  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};