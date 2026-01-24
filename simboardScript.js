// *&]^%$£)="!(:{}~@?><|\¬`+'#;/.,[-_*&]^%$£)="!(:{}~@?><|\¬`+'#;/.,[-_*&]^%$£)="!(:{}~@?><|\¬`+'#;/.,[-_*&]^%$£)="!(:{}~@?><|\¬`+'#;/.,[-_ 
// *&]^%$£)="!(:{}~@?><|\¬`+'#;/.,[-_*&]^%$£)="!(:{}~@?><|\¬`+'#;/.,[-_*&]^%$£)="!(:{}~@?><|\¬`+'#;/.,[-_*&]^%$£)="!(:{}~@?><|\¬`+'#;/.,[-_ 

// Stretch the Developer Console out fully so that you can see the entire logo. This is a test to ensure that you can view the code in it's properly formatted manner. 
/*


_____/\\\\\\\\\\\___      __/\\\\\\\\\\\_      __/\\\\____________/\\\\_      __/\\\\\\\\\\\\\___      _______/\\\\\______      _____/\\\\\\\\\____      ____/\\\\\\\\\_____      __/\\\\\\\\\\\\____        
 ___/\\\/////////\\\_      _\/////\\\///__      _\/\\\\\\________/\\\\\\_      _\/\\\/////////\\\_      _____/\\\///\\\____      ___/\\\\\\\\\\\\\__      __/\\\///////\\\___      _\/\\\////////\\\__       
  __\//\\\______\///__      _____\/\\\_____      _\/\\\//\\\____/\\\//\\\_      _\/\\\_______\/\\\_      ___/\\\/__\///\\\__      __/\\\/////////\\\_      _\/\\\_____\/\\\___      _\/\\\______\//\\\_      
   ___\////\\\_________      _____\/\\\_____      _\/\\\\///\\\/\\\/_\/\\\_      _\/\\\\\\\\\\\\\\__      __/\\\______\//\\\_      _\/\\\_______\/\\\_      _\/\\\\\\\\\\\/____      _\/\\\_______\/\\\_     
    ______\////\\\______      _____\/\\\_____      _\/\\\__\///\\\/___\/\\\_      _\/\\\/////////\\\_      _\/\\\_______\/\\\_      _\/\\\\\\\\\\\\\\\_      _\/\\\//////\\\____      _\/\\\_______\/\\\_    
     _________\////\\\___      _____\/\\\_____      _\/\\\____\///_____\/\\\_      _\/\\\_______\/\\\_      _\//\\\______/\\\__      _\/\\\/////////\\\_      _\/\\\____\//\\\___      _\/\\\_______\/\\\_   
      __/\\\______\//\\\__      _____\/\\\_____      _\/\\\_____________\/\\\_      _\/\\\_______\/\\\_      __\///\\\__/\\\____      _\/\\\_______\/\\\_      _\/\\\_____\//\\\__      _\/\\\_______/\\\__  
       _\///\\\\\\\\\\\/___      __/\\\\\\\\\\\_      _\/\\\_____________\/\\\_      _\/\\\\\\\\\\\\\/__      ____\///\\\\\/_____      _\/\\\_______\/\\\_      _\/\\\______\//\\\_      _\/\\\\\\\\\\\\/___ 
        ___\///////////_____      _\///////////__      _\///______________\///__      _\/////////////____      ______\/////_______      _\///________\///__      _\///________\///__      _\////////////_____


*/
// Stretch the Developer Console out fully so that you can see the entire logo. This is a test to ensure that you can view the code in it's properly formatted manner. 

// *&]^%$£)="!(:{}~@?><|\¬`+'#;/.,[-_*&]^%$£)="!(:{}~@?><|\¬`+'#;/.,[-_*&]^%$£)="!(:{}~@?><|\¬`+'#;/.,[-_*&]^%$£)="!(:{}~@?><|\¬`+'#;/.,[-_ 
// *&]^%$£)="!(:{}~@?><|\¬`+'#;/.,[-_*&]^%$£)="!(:{}~@?><|\¬`+'#;/.,[-_*&]^%$£)="!(:{}~@?><|\¬`+'#;/.,[-_*&]^%$£)="!(:{}~@?><|\¬`+'#;/.,[-_ 

/* KEY :

  GLOBAL VARIABLE DEFINITIONS 

  SCRIPT 000  - DEBUG FUNCTIONS 

  SCRIPT 001  - GRID INITIALISATION FUNCTIONS 

  SCRIPT 002  - AXIS INITIALISATION FUNCTIONS 

  SCRIPT 003  - OBJECT DELETION PROPERTY FUNCTIONS 

  SCRIPT 004  - CREATING THE LOGIC GATE INSTANCE FUNCTIONS 

  SCRIPT 005  - LOGIC GATE INTERACTIVITY FUNCTIONS 

  SCRIPT 006  - 

  SCRIPT 007  - 

  SCRIPT 008  - 

  SCRIPT 009  - 

*/
// *&]^%$£)="!(:{}~@?><|\¬`+'#;/.,[-_*&]^%$£)="!(:{}~@?><|\¬`+'#;/.,[-_*&]^%$£)="!(:{}~@?><|\¬`+'#;/.,[-_*&]^%$£)="!(:{}~@?><|\¬`+'#;/.,[-_ 
// *&]^%$£)="!(:{}~@?><|\¬`+'#;/.,[-_*&]^%$£)="!(:{}~@?><|\¬`+'#;/.,[-_*&]^%$£)="!(:{}~@?><|\¬`+'#;/.,[-_*&]^%$£)="!(:{}~@?><|\¬`+'#;/.,[-_ 
//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-
// ** GLOBAL VARIABLE DEFINITIONS **
xLen = 48340;   // Defines how long a Workspace background object should stretch on the X Axis (e.g. Grid, Axis, Background)
yLen = 48340;   // Defines how long a Workspace background object should stretch on the Y Axis (e.g. Grid, Axis, Background)

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-

// ** SCRIPT 000 ** Debugging function for testing purposes only. 
function dumpFunc(){    // This is a temporary function for testing purposes 
                        //      DO NOT USE THIS FUNCTION FOR TRUE DEVELOPMENT 
            
}
const dumpVar = ".PlaceholderValue." + "dumpVar" // This is a temporary debugging variable for testing purposes
                                                         //       DO NOT USE THIS FUNCTION FOR TRUE DEVELOPMENT  
                                                            
console.log(dumpVar)    // This instruction outputs the debug variable for testing purposes. 

// ** SCRIPT 000 *** Debugging function ends here. 

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-

// ** SCRIPT 001 ** Initialises the grid inside of the canvas in implemented JavaScript

var gridwidth = xLen;  // Total width that the grid x-axis will stretch to 
var gridheight = yLen; // Total height that the grid y-axis will stretch to 
var padding = 0;    // How far the grid/workspace goes into the div 

var canvas = document.getElementById("GridCanvas"); // Fetches the canvas ID that was defined 
                                                            // in the HTML div "Workspace" -> "GridContainer" 
                                                            // -> "Grid Canvas"

var gridcell = canvas.getContext("2d"); //Defines a two-dimensional cell for the grid 

function drawGrid(){   //This function repeatedly draws a cell until there is a full row of cells to fill 
                       // gridwidth and grid height. 

  //X AXIS GRID CELL LOOP : 
  for (var x = 0; x <= gridwidth; x += 10) {  // This iterative loop tells each cell how wide they should be on 
                                              // the X-Axis and repeatedly draws said cell until it there is a row
                                              // of gridcells that fill the gridwidth. 
                                                // !-> There is a critical web error if x += 0 or x += -0 which 
                                                // crashes the webpage - avoid this mathematical error. 

    gridcell.moveTo(0.5 + x + padding, padding);    // This instruction draws the border around each cell and
                                                    // constrols the resolution of each drawn border line. 
                                                      // We can change the resolution by modifying the float 
                                                      // value. 

    gridcell.lineTo(0.0 + x + padding, gridheight + padding);   // This instruction then manipulates the 
                                                                // drawn border line to give it a skew effect. 
                                                                  // Set it to 0 if no skew/tilt is necessary. 
                                                                  // We can change the resolution by 
                                                                  // modifying the float value. 

  }

  //Y AXIS GRID CELL LOOP : 
  for (var x = 0; x <= gridheight; x += 10) { // this iterative loop tells each cell how tall they should be on 
                                              // the Y-Axis and repeatedly draws said cell until there is a 
                                              // column of gridcells that fill the gridheight. 
                                                // !-> There is a critical web error if x+= 0 or x += -0 which
                                                // crashes the webpage - avoid this mathematical error. 

    gridcell.moveTo(padding, 0.5 + x + padding);    // This instruction draws the border around each cell and
                                                    // controls the resolution of each drawn border line.
                                                      // We can change the resolution by modifying the float 
                                                      // value. 

    gridcell.lineTo(gridwidth + padding, 0.5 + x + padding);    // This instruction then manipulates the 
                                                                // drawn border line to give it a skew effect. 
                                                                  // Set it to 0 if no skew/tilt is necessary. 
                                                                  // We can change the resolution by 
                                                                  // modifying the float value. 
  }

//GLOBAL MODIFIER DEFINITIONS : 
gridcell.lineWidth = 0.1;   // This instruction manually tells the drawGrid fucntion how thick each 
                            // line should be after every cell has been initialised. In this case, we 
                            // set the thickness of each border to be 0.1 pixels. 

gridcell.strokeStyle = "#000000";   // This instruction manually tells the drawGrid function what colour
                                      // the drawn borders should appear as. In this case, we set the default 
                                      // border colour to black (#000000).

gridcell.stroke();  // This instruction initialises the variables above to draw a cell with the desired
                    // lineWidth and strokeStyle 

} // The function that calculates the necessary grid output ends here. 

drawGrid(); // This instruction initialises the drawGrid to repeatedly draw individual cells until 
            // the entirety of the grids' height and width is filled, with the calculated function
            // output. 

// ** SCRIPT 001 ** The function for the grid implementation ends here. 

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-

// ** SCRIPT 002 ** Initialises the X and Y axis inside of the canvas in implemented JavaScript

//GLOBAL MODIFIER DEFINITIONS : 
xAxisLength = xLen;   // States that the X Axis line should stretch to a defined limit
                      // defined in the Global Variables section. (This prevents magic
                      // numbers!)

yAxisLength = yLen;   // States that the Y Axis line should stretch to a defined limit 
                      // defined in the Global Variables sections. (This prevents magic
                      // numbers!)
        
function drawAxis(){  // This function produces the axis lines for the Workspace UI. 

}; // The function that produces the correct Axis measurements ends here. 

drawAxis() // This instruction initialises the drawAxis to create an X and Y axis to stretch until 
           // it reaches the borders of the Workspace. 

// ** SCRIPT 002 ** The function for the axis implementation ends here. 

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-

// ** SCRIPT 003 ** Ensures that the logic gate objects in the Workspace can be deleted 

var itemsCreated = 0; // This is a function-oriented variable that stores the number of gates / 
                      // objects ever created in the Workspace. 

var currentItem = null; // This is another function-oriented variable that stores the gate 
                          // object that has just been selected / clicked by the mouse cursor. 
                            // By default, this is set to be NULL for clarity that it is empty, 
                            // yet will store a string value.
                              // With said string value being the itemsCreated ID corresponding
                              // to the object recently selected. 

document.body.onkeydown = function(event){ // When a key is pressed in the HTML web application body, 
                                           // it's information is stored inside of the event variable. 
                                            // Information includes:
                                              // Key Input
                                              // Key Type 
                                              // Pressed with CTRL / Shift or not
                                              // Is True? 
                                              // The location of the press 
                                            // Said elements' attributes can be publicly accessed. 
                                            // We pass this into a function immediately so that it can
                                            // act upon the user input immediately / as soon as the user
                                            // initialises said input. 
                                              // As the function is binded to the event. 

  console.log(event.key); // This is a debugging instruction to notify of the button press that
                          // has been detected by the system. 
  
  if (event.key == "Delete" && currentItem != null) { // This is a conditional statement that directs
                                                        // execution flow into it if it's conditions are 
                                                        // met. 
                                                          // In this case, if the key pressed is the
                                                          // Delete key, and the currentItem variable 
                                                          // is anything else but None, it will execute 
                                                          // the indented code. 

    var gateToDelete = document.getElementById(currentItem);  // If the above condition is met, a new 
                                                              // variable will collect the object stored
                                                              // in the currentItem variable (gate, input,
                                                              // output etc.)

    gateToDelete.remove();  // Afterwards, the item is removed from memory, wiping it from the screen
                            // and clearing it's associated data. 

    currentItem = null; // We then force the currentItem variable to clear itself into null / nothing, 
                        // to prevent Accessed None errors 
                          // We don't want the program trying to delete something that has already been
                          // wiped from memory! 

  }   // The conditional statement ends here, if the condition wasn't met, execution flow skips to this
      // point and executes the following code. 

}; // The function binded to the event of key press halts at this point and the axis is implemented.

// ** SCRIPT 003 ** The Function for Axis Implementation ends here.

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-

// ** SCRIPT 004 ** Initialises the logic gate objects

/*document.getElementById("AND").addEventListener("click", cloneObject); */ // IGNORE THIS INSTRUCTION 

      // All of these instruction statements below initialise the different types of gates, by first gaining
      // the specfic ID related to said gate, so that we can access the button by which it can be added to the
      // Workspace with (See HTML Buttons inside the Object Menu Div for further explaination). Then, by casting 
      // a parameter into an anonymous function, we can tell said function to run once when the Event Listener 
      // detects a click from the users' mouse/input system. 
        // This anonymous is signified by the unassigned parenthesis () in the statements below. 

document.getElementById("AND").addEventListener("click", () =>cloneObject("AND")); // When AND Gate button is pressed, 
                                                                                   // an AND Gate is spawned in. 

document.getElementById("OR").addEventListener("click", () =>cloneObject("OR")); // When OR Gate button is pressed, 
                                                                                 // an OR Gate is spawned in. 

document.getElementById("NOT").addEventListener("click", () =>cloneObject("NOT")); // When NOT Gate button is pressed, 
                                                                                   // a NOT Gate is spawned in. 

document.getElementById("XOR").addEventListener("click", () =>cloneObject("XOR")); // When XOR Gate button is pressed, 
                                                                                   // an XOR Gate is spawned in. 

document.getElementById("HoldButton").addEventListener("click", () =>cloneObject("HoldButton")); // When the Button 
                                                                                                 // button is pressed, 
                                                                                                 // a Button spawns in. 

document.getElementById("Lightbulb").addEventListener("click", () =>cloneObject("Lightbulb")); // When the Lightbulb 
                                                                                               // button is pressed, a 
                                                                                               // Lightbulb is spawned
                                                                                               // in. 

document.getElementById("Speaker").addEventListener("click", () =>cloneObject("Speaker")); // When the Speaker button 
                                                                                           // is pressed, a Speaker is 
                                                                                           // spawned in. 

                                                                                           // !-> IDs are CASE 
                                                                                           // SENSITIVE! 

function cloneObject(gateType){ // This is the function that is utilised when the anonymous function 
                                // calls it above. This function takes a string parameter, for example, 
                                // "AND", and utilises it with operations that summon it into the Workspace
                                // and customsie it so that the string passed in represents its respective 
                                // object. e.g. "AND" gets passed, and an AND Gate is returned in the 
                                // Workspace. 
                                  // !-> Essentially, this function creates a new Logic Gate object...

    const node = document.getElementById("mydiv"); // This stores a master reference to a generic object inside of 
                                                   // the HTML GridCanvas.
                                                    // This is stored in a constant, which means it cannot be
                                                    // altered, which helps prevent against unauthorised 
                                                    // and app-breaking modificaitons. 

    const clone = node.cloneNode(true); // Now that we have a master object that can be customised, this variable 
                                        // creates a copy of said master object, so that we can apply said 
                                        // customisations to it depending on the gateType argument passed into 
                                        // this function. 

    document.getElementById("Workspace").appendChild(clone); // Attaches the object to the "Workspace" division so
                                                             // that it can spawn in a desireable position. 
                                                              // !-> Attaching it to the GridContainer or 
                                                              // GridCanvas leads to a UI Error! 

    itemsCreated ++;  // When the objects' button is clicked, and this function is called, this variable is 
                      // incremented. The purpose of this variable is to keep a track of how many items we 
                      // have, so that we can assign a custom ID to it later. 

    console.log(itemsCreated); // This is a debugging instruction to state what the latest custom ID initialised 
                               // is. 

    var divname = "mydiv" + itemsCreated; // This variable concatonates the master object name, with the custom
                                          // ID initalised earlier so that a concise, easy to reference name can
                                          // be used to contact a specific object present on the Workspace. 

    clone.setAttribute("id", divname) // We assign the ID of the Logic Gate being constructed to be that of
                                      // the custom ID produced.
                                        // WARNING: Do not do id, divname + divname, because then we cannot 
                                        // properly reference it later on in the program. 

    var headEl = clone.children[0]; // We get a reference to the DIV of the master object clone so that we
                                    // can customise it later. 
                                    
    var gateImage = clone.children[0].children[0]; // We get a reference to the master object clones' DIV's 
                                                  // image UI. This can be done because the only child inside 
                                                  // of the master object clone is an image tag (See HTML 
                                                  // mydivheader for further explaination). 

    gateImage.setAttribute("src", "/Media/DeactivatedState/" + gateType + "_Deactivated.png"); 
      // We then set said the UI Image element of the master object clone. 
        // This is done by setting the source attribute of the image tag to be that of the file pathway concatonating 
        // with the passed parameter / argument in addition to its default state, which is to be Deactivated by 
        // default. 
      // !-> ERRORS OCCUR WHEN CASE SENSITIVITY IS UNDERLOOKED & NON-EXISTENT FILE PATHWAYS ARE STATED!

    headEl.setAttribute("id", divname); // We then manually state with this instruction that our new master object
                                        // clone should retain a custom, unique ID produced earlier. 

    dragElement(document.getElementById(divname)); // Now that the object has a unique ID, we reference it and tell
                                                   // the object with that unique ID to have draggable properties, 
                                                   // so that it can be moved around the Workspace without the 
                                                   // browser treating it like a plain image. 

    clone.style.top=500;    // This instruction attempts to manually set the position of the master object clone
                            // to a padded offset position of X amount of pixels from the top. 
                              // By default, it is set to be slightly padded on spawn, so a value of 100 will do 
                              // the job well. 

    clone.style.left=500;   // This instruction attempts to manually set the position of the master object clone 
                            // to a padded offset position of Y amount of pixels from the left. 
                              // By default, it is set to be slightly padded on spawn, so a value of 100 will do 
                              // the job well.  

}; // The function for the Object Initialisation that produces a Logic Gate object into the Workspace, 
   // from the master object DIV ends here. 
  
// ** SCRIPT 004 ** The function for Logic Gate Object summoning ends here. 

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-

// ** SCRIPT 005 ** Ensures that the logic gates are draggable on the Workspace 

dragElement(document.getElementById("mydiv"));  // This fires a function, dragElement, with a present passed
                                                // parameter of the HTML DIV mydiv, which is the master object
                                                // that other Logic Gate objects are children of. 
                                                  // Hence, draggable properties are to be inherited by said
                                                  // children UI elements. 

function dragElement(elmnt) { // The function that assigns the property of being draggable to HTML elements
                              // that meet a certain criteria. 
                                // It takes the passed paramenter, mydiv, and sends it through a conditional 
                                // check below. 

  var pos1 = 0,   //  Sets memory allocation for the position of the UI element 
    pos2 = 0,     //  Sets memory allocation for the position of the UI element 
    pos3 = 0,     //  Sets memory allocation for the position of the UI element 
    pos4 = 0;     //  Sets memory allocation for the position of the UI element 

  if (document.getElementById(elmnt.id + "header")) { // This is a conditional statement that checks if the
                                                      // object has a "header" element that can be used to 
                                                      // drag the UI with. 

    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown; // If the condition above is met, 
                                                                              // the master object clone's header
                                                                              // has the drag interactabiity 
                                                                              // element attached to it. 

  } else {  // If the condition above isn't met, then the draggable element is attached to the next best 
            // UI element present on the object... 

    elmnt.onmousedown = dragMouseDown;  // ... the next best UI element to attach the draggable property to
                                        // may include an image tag etc. 

};  // The function that assigns the draggable property function to Logic Gate objects finishes here. 
      // This ONLY works if the object has the draggable property ENABLED in the first place (discussed above in
      // SCRIPT 004 "dragElement(document.getElementById(divname));"). 

function dragMouseDown(e) { // This function reads the mouse position and relevant data. 
                              // The element "e" is a default JavaScript parameter that contains the details
                              // about the state / action of the mouse when said function is fired.

  e = e || window.event;  // Requests mouse data from the browser via e = e, or backtracks to 
                          // window.event for mouse data on older browsers. 

  e.preventDefault(); // Prevents default behaviour on the object when fired
                        // This includes disabling image dragging, etc. 

  pos3 = e.clientX; // Stores the UI position of the object on the initial mouse button down for later 
                    // reference, on the X Axis. 
  pos4 = e.clientY; // Stores the UI position of the object on the initial mouse button down for later 
                    // reference, on the Y Axis. 

  document.onmouseup = closeDragElement;  // When the mouse button is released or goes up, the drag element
                                          // function is halted for said object. 

  document.onmousemove = elementDrag; // When the mouse moves WHILST the mouse button is pressed down, the
                                      // function that moves the UI element (allows for dragging interactivity
                                      // visually) is called. 

  currentItem = elmnt.id; // When the mouse cursor is above a Logic Gate Object and the mouse button 
                          // down is completed upon said object, this instruction sets the current 
                          // item to be the one that is being clicked or dragged (mouse down). 
                            // This is to be used in functions mostly covered above (SCRIPT 003 / Object 
                            // Deletion).

  console.log("currentItem = ", currentItem); // This instruction is used for debugging, to state the current 
                                              // item that is being selected (aka, the Logic Gate Object that 
                                              // has just been previously affected by the dragMouseDown
                                              // function). 

};  // The function that permits the draggable property to said Logic Gate object ends here. 

function elementDrag(e) { // This function visually produces the "dragging" visual aspect of UI Objects 
                          // in Simboard. It also calculates the new position of the UI element, and runs 
                          // every frame WHILST dragMouseDown is producing True for a Logic Gate UI Object. 

  e = e || window.event;  // Requests mouse data from the browser via e = e, or backtracks to 
                          // window.event for mouse data on older browsers. 

  e.preventDefault(); // Prevents default behaviour on the object when fired
                        // This includes disabling image dragging, etc. 

  var winW = document.documentElement.clientWidth || document.body.clientWidth, // Gains the width of the Website
                                                                                // width, or backtracks to the 
                                                                                // HTML's body width for older
                                                                                // browsers, & stores it in a 
                                                                                // variable for "WindowW" (Window 
                                                                                // Width), so that it can be 
                                                                                // referenced later. 

    winH = document.documentElement.clientHeight || document.body.clientHeight; // Gains the height of the Website
                                                                                // height, or backtracks to the 
                                                                                // HTML's body height for older 
                                                                                // browsers, & stores it in a 
                                                                                // variable "WindowH" (Window 
                                                                                // Height), so that it can be 
                                                                                // referenced later. 

  maxX = winW - elmnt.offsetWidth - 1,  // This instruction calculates the maximum positions (width-wise) 
                                        // on the Workspace before the Logic Gate UI Object would leave the
                                        // screen. 

    maxY = winH - elmnt.offsetHeight - 1; // This instruction calculates the maximum positions (height-wise)
                                          // on the Workspace before the Logic Gate UI Object would leave the
                                          // screen. 

  pos1 = pos3 - e.clientX,  // Figures the distance that the Logic Gate UI Object has moved since it's most recently
                            // stored origin, stated in the function dragElement (pos1, pos2, pos3, pos4 etc...) 
                            // horizontally (on the X Axis). 

  pos2 = pos4 - e.clientY;  // Figures the distance that the Logic Gate UI Object has moved since it's most recently
                            // stored origin, stated in the function dragElement (pos1, pos2, pos3, pos4 etc...) 
                            // vertically (on the Y Axis). 

  pos3 = e.clientX;         // Updates the new positions of the Logic Gate UI Object (in pos1, pos2, pos3, pos4
                            // etc...) horizontally (on the X Axis). 

  pos4 = e.clientY;         // Updates the new positions of the Logic Gate UI Object (in pos1, pos2, pos3, pos4
                            // etc...) vertically (on the Y Axis). 

  console.log((elmnt.offsetLeft - pos1), maxY, (elmnt.offsetLeft - pos1), maxX);  // A debugging instruction that
                                                                                  // outputs the position of the 
                                                                                  // recently moved Logic Gate UI
                                                                                  // object. 

  if ((elmnt.offsetTop - pos2) <= maxY && (elmnt.offsetTop - pos2) >= 0) {  // This is a conditional instruction that
                                                                            // branches execution flow if the Logic
                                                                            // Gate Object is being dragged outside
                                                                            // of the Workspace. 
                                                                              // This conditional branch only applies
                                                                              // to checking UI movinghorizontally / on 
                                                                              // the Y Axis (Top...).

    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";  // If the condition above IS met, and the object IS being
                                                        // dragged outside of the Workspace, said instruction will 
                                                        // force the Logic Gate UI Object to reposition itself 
                                                        // back into the Workspace. 

  }; // The conditional branch for UI positional checking on the Y Axis ends here. If the Logic Gate UI Object 
    // does not meet the above properties (aka. is inside of the Workspace), execution flow will skip to this 
    // point. 

  if ((elmnt.offsetLeft - pos1) <= maxX && (elmnt.offsetLeft - pos1) >= 0) { // This is a conditional instruction that 
                                                                             // branches execution flow if the Logic 
                                                                             // Gate Object is being dragged outside 
                                                                             // of the Workspace. 
                                                                              // This condtional branch only applies 
                                                                              // to checking UI moving vertically / on 
                                                                              // the X Axis (Left...).

    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";  // If the condition above IS met, and the object IS being 
                                                          // dragged outside of the Workspace, said instruction will 
                                                          // force the Logic Gate UI object to reposition itself 
                                                          // back into the Workspace. 

  }; // The conditional branch for UI positional checking on the X Axis ends here. If the Logic Gate UI Object 
    // does not meet the above properties (aka. is inside of the Workspace), execution flow will skip to this 
    // point. 

};  // The function that enables the visual dragging aspect of a Logic Gate Object ends here. 

function closeDragElement() { // This function will halt all mouse instructions applying to the Logic Gate or 
                              // Simboard application. When the mouse button is not being pressed down / is released,
                              // all mouse-related events will be reset.  
                                // Essentially, this function stops the Logic Gate Object from moving when 
                                // the mouse button is not being pressed. 

  document.onmouseup = null;  // Wipes the onMouseUp event that is tied by default to the website. 
                                // This prevents future errors when handling UI movement. 

  document.onmousemove = null;  // Wipes the onMouseMove event that is tied by default to the website. 
                                  // This prevents future errors when handling UI movement. 

};  // The function that clears all critical elements related to a UI drag to prevent errors ends here. 

//mydiv.draggable({ containment: "Workspace" }); // This instruction prevents the UI Object from leaving the actual
                                               // Workspace DIV. 
                                                // This fixes the error of the elementDrag function prioritising 
                                                // UI leaving the actual browser. 
                                                  // !-> Instead, this instruction narrows down the clamping area
                                                  // that the Logic Gate UI Object can move around in. 

};  // The main function that handles Object UI movement ends here. 

//  ** SCRIPT 005 ** The function(s) for interactable, draggable UI Objects ends here. 

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-

//  ** SCRIPT 006 ** Allows the Workspace to be navigated and moved around or zoomed in and out. 



//  ** SCRIPT 006 ** The functions for Workspace navigation end here. 

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-

// ** SCRIPT 007 ** Allows Logic Gate Objects to be wired together 



// ** SCRIPT 007 ** The functions for Logic Gate Objects to connect "wire" UI elements together, and produce 
// execution flow ends here. 

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-

// ** SCRIPT 008 ** Allows for the File Menu Buttons to be interacted with and perform different operations
// for the end user to utilise (Excluding the Saving & Loading buttons!)



// ** SCRIPT 008 ** The functions for File Menu functionality ends here. 

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-

// ** SCRIPT 009 ** Allows for Simboard Projects to be saved as a JSON file. 



// ** SCRIPT 009 ** The functions for Simboard Saving end here. 


//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-

// ** SCRIPT 010 ** Allows for Simboard Projects to be loaded from a JSON file. 



// ** SCRIPT 010 ** The functions for Simboard Loading end here. 

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-
// *&]^%$£)="!(:{}~@?><|\¬`+'#;/.,[-_*&]^%$£)="!(:{}~@?><|\¬`+'#;/.,[-_*&]^%$£)="!(:{}~@?><|\¬`+'#;/.,[-_*&]^%$£)="!(:{}~@?><|\¬`+'#;/.,[-_ 
// *&]^%$£)="!(:{}~@?><|\¬`+'#;/.,[-_*&]^%$£)="!(:{}~@?><|\¬`+'#;/.,[-_*&]^%$£)="!(:{}~@?><|\¬`+'#;/.,[-_*&]^%$£)="!(:{}~@?><|\¬`+'#;/.,[-_ 

// Thank you for using: 
/*


_____/\\\\\\\\\\\___      __/\\\\\\\\\\\_      __/\\\\____________/\\\\_      __/\\\\\\\\\\\\\___      _______/\\\\\______      _____/\\\\\\\\\____      ____/\\\\\\\\\_____      __/\\\\\\\\\\\\____        
 ___/\\\/////////\\\_      _\/////\\\///__      _\/\\\\\\________/\\\\\\_      _\/\\\/////////\\\_      _____/\\\///\\\____      ___/\\\\\\\\\\\\\__      __/\\\///////\\\___      _\/\\\////////\\\__       
  __\//\\\______\///__      _____\/\\\_____      _\/\\\//\\\____/\\\//\\\_      _\/\\\_______\/\\\_      ___/\\\/__\///\\\__      __/\\\/////////\\\_      _\/\\\_____\/\\\___      _\/\\\______\//\\\_      
   ___\////\\\_________      _____\/\\\_____      _\/\\\\///\\\/\\\/_\/\\\_      _\/\\\\\\\\\\\\\\__      __/\\\______\//\\\_      _\/\\\_______\/\\\_      _\/\\\\\\\\\\\/____      _\/\\\_______\/\\\_     
    ______\////\\\______      _____\/\\\_____      _\/\\\__\///\\\/___\/\\\_      _\/\\\/////////\\\_      _\/\\\_______\/\\\_      _\/\\\\\\\\\\\\\\\_      _\/\\\//////\\\____      _\/\\\_______\/\\\_    
     _________\////\\\___      _____\/\\\_____      _\/\\\____\///_____\/\\\_      _\/\\\_______\/\\\_      _\//\\\______/\\\__      _\/\\\/////////\\\_      _\/\\\____\//\\\___      _\/\\\_______\/\\\_   
      __/\\\______\//\\\__      _____\/\\\_____      _\/\\\_____________\/\\\_      _\/\\\_______\/\\\_      __\///\\\__/\\\____      _\/\\\_______\/\\\_      _\/\\\_____\//\\\__      _\/\\\_______/\\\__  
       _\///\\\\\\\\\\\/___      __/\\\\\\\\\\\_      _\/\\\_____________\/\\\_      _\/\\\\\\\\\\\\\/__      ____\///\\\\\/_____      _\/\\\_______\/\\\_      _\/\\\______\//\\\_      _\/\\\\\\\\\\\\/___ 
        ___\///////////_____      _\///////////__      _\///______________\///__      _\/////////////____      ______\/////_______      _\///________\///__      _\///________\///__      _\////////////_____


*/
// Made by Christopher Cupid

// *&]^%$£)="!(:{}~@?><|\¬`+'#;/.,[-_*&]^%$£)="!(:{}~@?><|\¬`+'#;/.,[-_*&]^%$£)="!(:{}~@?><|\¬`+'#;/.,[-_*&]^%$£)="!(:{}~@?><|\¬`+'#;/.,[-_ 
// *&]^%$£)="!(:{}~@?><|\¬`+'#;/.,[-_*&]^%$£)="!(:{}~@?><|\¬`+'#;/.,[-_*&]^%$£)="!(:{}~@?><|\¬`+'#;/.,[-_*&]^%$£)="!(:{}~@?><|\¬`+'#;/.,[-_ 