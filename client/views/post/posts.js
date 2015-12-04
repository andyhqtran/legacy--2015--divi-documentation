Template.diviPosts.helpers({
  diviPosts: function () {
    return Posts.find({
      theme: 'Divi'
    });
  },

  shortDescription: function () {
    return _.str.prune(this.content, 10);
  }
});

Template.extraPosts.helpers({
  extraPosts: function () {
    return Posts.find({
      theme: 'Extra'
    });
  }
});