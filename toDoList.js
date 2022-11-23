// If an li element is clicked, toggle the class "done" on the <li>

// If a delete link is clicked, delete the li element / remove from the DOM

// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)






const changeClass = function(e) {
  e.preventDefault();
  console.log(this.parentNode);
  this.parentNode.className = 'done';
}

const deleteEl = function(e) {
  e.preventDefault();
  this.parentNode.parentNode.removeChild(this.parentNode);
}

const addListItem = function(e) {
  e.preventDefault();
  const input = this.parentNode.getElementsByTagName('input')[0];
  const text = input.value; // use this text to create a new <li>

  const li_el = document.createElement('li');
  const li_span = document.createElement('span');
  const li_textNode = document.createTextNode(text);
  const li_delete = document.createElement('a');
  li_delete.classList.add('delete'); // I feel like this could be done more cleanly
  li_span.addEventListener('click', changeClass);
  li_delete.addEventListener('click', deleteEl);
  li_delete.appendChild(document.createTextNode('delete'));
  li_span.appendChild(li_textNode);
  li_el.appendChild(li_span);
  li_el.appendChild(li_delete);
  

  const ul = this.parentNode.parentNode.getElementsByTagName('ul')[0];
  ul.appendChild(li_el);

};



// Initialize existing elements to have event listeners
const spans = document.querySelectorAll('span');
const deleters = document.querySelectorAll(".delete");
deleters.forEach(del => del.addEventListener('click', deleteEl));
spans.forEach(span => span.addEventListener('click', changeClass));

// Add button 
const addbtn = document.getElementsByClassName('add-item');
addbtn[0].addEventListener('click', addListItem);


