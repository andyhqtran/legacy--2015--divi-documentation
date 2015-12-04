Template.home.helpers({
  posts: function () {
    return Posts.find();
  },

  excerpt: function () {
    return _.str.prune(this.content, 100);
  }
});