const getTheTitles = function(books) {
    //books is an array of objects
    return books.map((book) => { return book.title; });
}

module.exports = getTheTitles;
