let book = document.querySelectorAll('.book');
let books= document.querySelector('.books');
books.prepend(book[1], book[3]);
books.append(book[3], book[5], book[2]);
let bgBody = document.querySelector('body');
bgBody.style.backgroundImage ='url(image/you-dont-know-js.jpg)';
let name = document.querySelectorAll('a');
// name[2].replaceWith('Книга 3. this и Прототипы Объектов'); //белый текст
name[2].textContent='Книга 3. this и Прототипы Объектов';
let google = document.querySelector('.adv');
google.remove();
let parts = document.querySelectorAll('ul');
let bookParts = parts[1].children;
parts[1].append(bookParts[6], bookParts[8], bookParts[4], bookParts[5], bookParts[7], bookParts[9], bookParts[2], bookParts[10]);
bookParts = parts[4].children;
parts[4].prepend(bookParts[0], bookParts[1], bookParts[9]);
parts[4].append(bookParts[3], bookParts[7], bookParts[8], bookParts[6], bookParts[9], bookParts[10]);
let part8 = document.createElement('li');
part8.textContent= 'Глава 8: За пределами ES6';
bookParts = parts[5].children;
bookParts[8].after(part8);