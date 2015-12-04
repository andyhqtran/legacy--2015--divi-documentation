Template.diviPosts.helpers({
  diviPosts: function () {
    return Posts.find({
      theme: 'Divi'
    });
  }
});

Template.extraPosts.helpers({

  extraPosts: function () {
    return Posts.find({
      theme: 'Extra'
    });
  }
});