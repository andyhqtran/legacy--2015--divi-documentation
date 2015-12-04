if (Posts.find().count() === 0) {
  Posts.insert({
    theme: '',
    title: 'An Overview of the Divi Builder',
    category: 'The Divi Basics',
    content: '...',
    views: '0',
    create_date: ''
  });

  Posts.insert({
    theme: 'Divi',
    title: '<b>An Overview of the Divi Builder</b>',
    category: 'The Divi Basics',
    content: '...',
    views: '0',
    create_date: ''
  });
}