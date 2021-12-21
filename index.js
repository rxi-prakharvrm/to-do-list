// Adding a close button to the list items
var listItems = document.querySelectorAll("li");
var i;
for(i = 0; i < listItems.length; i++) {
  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  listItems[i].appendChild(span);
}

// Setting text-decoration to line-through on list item onclick
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Adding a new item to the list
function newItem() {
  var ul = document.querySelector("#todo-item-list");
  var inputValue = document.getElementById("itemInput").value;
  var li = document.createElement("li");
  var txt = document.createTextNode(inputValue);
  li.appendChild(txt);
  ul.appendChild(li);

  // Adding a close button on newly created item
  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  // Alert if there is nothing in input box otherwise add the item to the list
  if (inputValue === '') {
     alert("Please Write Something!!");
  } else {
     document.getElementById("todo-item-list").appendChild(li);
  }

  // Clear the input field after clicking on the add button
  document.getElementById("itemInput").value = "";

  // Adding the closing functionality in newly created list item

  var close = document.querySelectorAll(".close");
  var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

// Deleting the items from the list
var close = document.querySelectorAll(".close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}