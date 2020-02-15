var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    //console.log($form);
    console.log(event);
    event.preventDefault();
    var message = {
      roomname: 'lobby',
      text: event.target.elements.message.value,
      username: App.username,
    };
    console.log(message);

    Parse.create(message, () => {
      //console.log(data)
      App.fetch();
    });

    // Parse.create(message, App.fetch)
    // });
    // examine the response from the server request:
    // console.log(data);
    //Parse.readAll((data)
    //message = data.results;
    // console.log(Messages[0]);
    //MessagesView.render();
    //callback();

    //FormView.$form('message').val;
    //console.log(FormView.$form);
    //console.log(message);
    //$form.append(MessageView.render(message));
    //FormView.$form.find('message').val,
    //this.$form.append(message);
    //console.log('click!');

  },
  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};