Template.header.events({
  'click .header-nav-toggle': function () {
    $('.nav-panel, .overlay').stop().addClass('visible');
  }
});