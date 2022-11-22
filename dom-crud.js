// Create a new <a> element containing the text "Buy Now!" 
// with an id of "cta" after the last <p>
const paragraphs = document.getElementsByTagName('p');
const paragraph = paragraphs[0];

console.log(paragraph);

const a_el = document.createElement('a');
const aTextNode = document.createTextNode('Buy Now!');

a_el.appendChild(aTextNode);
paragraph.appendChild(a_el);

// Access (read) the data-color attribute of the <img>,
// log to the console

const img = document.getElementsByTagName('img');

console.log(img[0].getAttribute('data-color'));

// Update the third <li> item ("Turbocharged"), 
// set the class name to "highlight"
const lis = document.getElementsByTagName('li');
lis[2].setAttribute('class', 'highlight');

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")

const mainEl = document.getElementsByTagName('main')[0];
mainEl.removeAttribute('p');