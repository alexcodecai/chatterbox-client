var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function() {
    var html = '';
    for (var i = 0; i < Messages.length; i++) {
      if (Messages[i].text === undefined) {
        Messages[i].text = '';
      }
      if (Messages[i].username === undefined) {
        Messages[i].username = '';
      }
      html += MessageView.render(Messages[i]);
      console.log(Messages[i]);
    }

    this.$chats.append(html);
  }

};