const mongoose = require('mongoose');
const db = require('../backend/models');

mongoose.connect(
  process.env.MONGODB_URI || 'mongod://localhost/googoobooksearch'
);

const bSeed = [{

  title: 'In God We Trust',
  author: ['Jean Shepherd'],
  description: 'The beloved, bestselling classic that became the movie, A CHRISTMAS STORY -- humorous and nostalgic Americana, reissued in a strikingly designed paperback edition. Before Garrison Keillor and Spalding Gray there was Jean Shepherd: a master monologist and writer who spun the materials of his all-American childhood into immensely resonant--and utterly hilarious--works of comic art. In God We Trust: All Others Pay Cash represents one of the peaks of his achievement, a compound of irony, affection, ...',
  thumbnail: 'http://books.google.com/books/content?id=cHpM9jx9roIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  link: 'http://books.google.com/books?id=cHpM9jx9roIC&printsec=frontcover&dq=in+god+we+trust+all+others+pay+cash&hl=&cd=1&source=gbs_api'

}]

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bSeed))
  .then(data => {
    console.log(data.result.n + "saved✔");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });