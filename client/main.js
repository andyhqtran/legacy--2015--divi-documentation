Template.main.events({
  'click .overlay': function () {
    $('.nav-panel, .overlay').stop().removeClass('visible');
  }
});