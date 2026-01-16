document.getElementById("AND").addEventListener("click", cloneObject);


//declare a variable to store number of clones
var itemsCreated =0;

function cloneObject(){
    const node = document.getElementById("mydiv"); // Gets hold of the master copy of the draggable item 
    const clone = node.cloneNode(true); // Creates a clone of said master object 
    document.getElementById("Workspace").appendChild(clone); // Attaches the object to an object called "Workspace"
    
    //when you click button increment number
    itemsCreated ++; // Keeps a track of how many items we have 
    console.log(itemsCreated); // Debugging insturction 
    //now change id of clone to contain the number
    var divname = "mydiv" + itemsCreated; // Creates a unique name for all of the clones 
    clone.setAttribute("id", divname) // They have to have a unique ID, where each object has a unique integer 
                                      // afterwards. WARNING: Do not do id, divname + divname 
    //now change id of header of clone 
    var headEl = clone.children[0]; // Gets a hold of the panel at the top of the object (header)
    headEl.setAttribute("id", divname); // Applies the unique id to the object header 
    //make the clone draggable
    dragElement(document.getElementById(divname)); // Now that the object has a unique name, we can tell it to
                                                   // be draggable. 
    //attempts to set the position of clone
    clone.style.top=100;    // Controls where the item lands on the 
    clone.style.left=100;   // 
    }
    
    // Make the DIV element draggable:
    dragElement(document.getElementById("mydiv"));

    function dragElement(elmnt) {
      var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
      if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
       document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
      } else {
    // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
  }

    function dragMouseDown(e) {
     e = e || window.event;
     e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}