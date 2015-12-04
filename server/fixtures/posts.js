if (Posts.find().count() === 0) {
  Posts.insert({
    theme: '',
    title: 'An Overview of the Divi Builder',
    category: 'The Divi Basics',
    video_url: '',
    content: '...',
    views: '0',
    create_date: ''
  });

  Posts.insert({
    theme: 'Divi',
    title: '<b>An Overview of the Divi Builder</b>',
    category: 'The Divi Basics',
    video_url: '',
    content: '# The Basics Divi is a unique theme in our collection. Differing from every other Elegant Theme, Divi is built on a page builder platform that we designed and developed from the ground up. Using Divi’s drag and drop builder you can create beautiful layouts with ease and control over every part of your site.',
    views: '0',
    create_date: ''
  });
}