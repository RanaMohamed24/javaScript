function Book(title, numOfChapters, author, numOfPages, publisher, numofCopies, type) {
  this.title = title;
  this.numOfChapters = numOfChapters;
  this.author = author;
  this.numOfPages = numOfPages;
  this.publisher = publisher;
  this.numofCopies = numofCopies;
  this.type = type; 
}
function Box(height, width, length, material) {
  this.height = height;
  this.width = width;
  this.length = length;
  this.material = material;
  this.content = [];
}
Box.prototype.addBook = function (book) {
  this.content.push(book);
};
Box.prototype.countBooks = function () {
  return this.content.length;
};
Box.prototype.deleteBookByName = function (title) {
  this.content = this.content.filter(book => book.title !== title);
};
Box.prototype.deleteBookByType = function (type) {
  this.content = this.content.filter(book => book.type !== type);
};
Box.prototype.volume = function () {
  return this.height * this.width * this.length;
};

Box.prototype.toString = function () {
  return `
Box Dimensions:
Height = ${this.height}, Width = ${this.width}, Length = ${this.length}
Material = ${this.material}
Volume = ${this.volume()}
Number of Books = ${this.countBooks()}
Books stored = ${this.content.map(b => b.title).join(", ")}
`;
};
Box.prototype.valueOf = function () {
  return this.countBooks();
};

const book1 = new Book("JS", 10, "ahmed", 200, "Tech", 5, "Programming");
const book2 = new Book("HTML", 8, "rana", 150, "Web", 3, "Web");
const book3 = new Book("CSS", 6, "salma", 120, "Web", 2, "Web");

const box1 = new Box(10, 5, 4, "Wood");
box1.addBook(book1);
box1.addBook(book2);

const box2 = new Box(8, 4, 3, "Plastic");
box2.addBook(book3);

console.log(box1.toString());
console.log(box2.toString());

console.log("Total books =", box1 + box2); 
