const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/googlebooks"
);

const bookSeed = [
    {
        title: "The Fellowship of the Ring",
        author: "J.r.r. Tolkien",
        description: "The Fellowship of the Ring is the first part of J.R.R. Tolkien's epic adventure, The Lord of the Rings. Sauron, the Dark Lord, has gathered to him all the Rings of Power - the means by which he intends to rule Middle-earth. All he lacks in his plans for dominion is the One Ring - the ring that rules them all - which has fallen into the hands of the hobbit, Bilbo Baggins. In a sleepy village in the Shire, young Frodo Baggins finds himself faced with an immense task, as his elderly cousin Bilbo entrusts the Ring to his care. Frodo must leave his home and make a perilous journey across Middle-earth to the Cracks of Doom, there to destroy the Ring and foil the Dark Lord in his evil purpose. The text of this edition has been fully corrected and revised in collaboration with Christopher Tolkien and is accompanied by nineteen watercolour paintings from Alan Lee.",
        thumbnail: "http://books.google.com/books/content?id=4UT5zAEAC…J&printsec=frontcover&img=1&zoom=5&source=gbs_api",
        link: "http://books.google.com/books?id=4UT5zAEACAAJ&dq=lord+of+the+rings&hl=&cd=1&source=gbs_api"
    }
]

db.Book
    .remove({})
    .then(() => db.Book.collection.insertMany(bookSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });