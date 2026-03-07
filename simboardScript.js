








// // TODO - - Logic systems tomorrow // // 










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

simulate = false; 

// Should be attributes of this layout saver 
cssConcatonates = [
  GridCanvasColour = document.getElementById('GridCanvas'), 
  ObjectMenuColour = document.getElementById('ObjectMenu'), 
  FileMenuColour = document.getElementById('FileMenu'), 
  CircuitConfigColour = document.getElementById('CircuitConfigurationArea'), 
  ObjectMenuButtonColour = document.getElementById('ObjectMenu').children,
  FileMenuButtonColour = document.getElementById('FileMenu').children,
  GridLineColour = "#000000",
  AxisXColour = "#CD5C5C",
  AxisYColour = "#000982",
];

HEXValidator = null; 

xLen = document.getElementById("GridCanvas").offsetHeight;   // Defines how long a Workspace background object should stretch on the X Axis (e.g. Grid, Axis, Background)
yLen = document.getElementById("GridCanvas").offsetWidth;   // Defines how long a Workspace background object should stretch on the Y Axis (e.g. Grid, Axis, Background)


hasFirstIOBeenSelected = false; // This is a global variable that determines whether the first Input or Output has been Selected 
hasSecondIOBeenSelected = false; // This is a global variable that determines whether the second Input or Output has been Selected


PREVIOUSIOSTACK = ["nullpointer"]; // Holds the custom ID's of each Input or Output box on a gate that has been selected (clicked) on. 
IOPOSITIONSTACK = []; //Holds the actual HTML references of each Input or Output box on all gates that have been selected. 


DRAWBOXSTACK = [];  // This holds the HTML references of the pair of gates that are to be connected together via a wire. 

var IOPARSE = []; // This is an object that holds integral information about the Input or Output box so that it can be parsed 
                  // to any function that calls it. 

IOPARSE.INPUTPOSITIONX = 0; // This attribute of the IO (Input/Output) object holds the X Axis position that the Input Box of the 
                            // connected pair of gates will be positoned on. 

IOPARSE.INPUTPOSITIONY = 0; // This attribute of the IO (Input/Output) object holds the Y Axis position that the Input Box of the 
                            // connected pair of gates will be positoned on. 

IOPARSE.OUTPUTPOSITIONX = 0; // This attribute of the IO (Input/Output) object holds the X Axis position that the Output Box of the 
                             // connected pair of gates will be positoned on. 

IOPARSE.OUTPUTPOSITIONY = 0; // This attribute of the IO (Input/Output) object holds the Y Axis position that the Output Box of the 
                             // connected pair of gates will be positoned on. 

IOPARSE.INPUT = null; // This attribute holds the Input Box's actual HTML reference so that this system can know what objects are 
                      // paired together. 

IOPARSE.OUTPUT = null;  // This attribute holds the Output Box's actual HTML reference so that this system can know what objects are 
                        // paired together.   


gatePositionXGlobalReference = 0; // This is a global variable that holds the X Axis position that the selected gate lies on in the 
                                  // workspace. 
gatePositionYGlobalReference = 0; // This is a global variable that holds the Y Axis position that the selected gate lies on in the 
                                  // workspace. 


selectedGatesStack = [];  // Every time an object in the Workspace is selected, its HTML reference is pushed to this stack so that 
                          // interactivity can be validated and worked upon. 
totalSelectedGates = 0; // This holds the number total of the amount of selections on gates that have been registered. 


presentObjects = +0; // This holds the number of objects that are present in the Workspace (ones that have been spawned in, but 
                     // not deleted).

jsonSaveWorkspace = [];  // This holds all data for the logic gates present on the workspace plus connections. 

totalWires = 0; 

connectionsInitialised = 0; 

// TODO -- WORKSPACE GRID ZOOMS IN OR OUT WITH L OR K, AND REDRAWS THE GRID, AXIS AND SCALES THE OBJECTS UP OR DOWN 

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-

// ** SCRIPT 000 ** Debugging function for testing purposes only. 
function dumpFunc(){    // This is a temporary function for testing purposes 
                        //      DO NOT USE THIS FUNCTION FOR TRUE DEVELOPMENT 
            
}
const dumpVar = ".PlaceholderValue." + "dumpVar"; // This is a temporary debugging variable for testing purposes
                                                         //       DO NOT USE THIS FUNCTION FOR TRUE DEVELOPMENT  
                                                            
console.log(dumpVar);    // This instruction outputs the debug variable for testing purposes. 

// ** SCRIPT 000 *** Debugging function ends here. 

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-
// TODO -- Make it so the user can enter hex values via an input popup when clicked on tbe customisation button, then change the back 
// ground. Skip the prompt to the next if the user enters "x", revert to the default colour of the user enters "d".

// Make this a for loop, where the prompts are stored in a stack, and it iterates through each customisation - this makes it more 
// effective and efficient for you and for the end user...!

var link = document.getElementById("customise");  // We fetch the 

//link.setAttribute('href', "#");

link.onclick= function() {

  prompts = [
    "* 1 Change the colour of the Workspace Background\nto a 6 digit HEX value INCLUDING THE HASHTAG,\nor enter the letter 'x' to skip this prompt, or enter\n'd' to revert to the default colour value.",
    "* 2 Change the colour of the Object Menu Background\nto a 6 digit HEX value INCLUDING THE HASHTAG,\nor enter the letter 'x' to skip this prompt, or enter\n'd' to revert to the default colour value.",
    "* 3 Change the colour of the File Menu Background\nto a 6 digit HEX value INCLUDING THE HASHTAG,\nor enter the letter 'x' to skip this prompt, or enter\n'd' to revert to the default colour value.",
    "* 4 Change the colour of the Circuit Configuration Area Background\nto a 6 digit HEX value INCLUDING THE HASHTAG,\nor enter the letter 'x' to skip this prompt, or enter\n'd' to revert to the default colour value.",
    "^ 1 Change the colour of the Object Menu Button Background\nto a 6 digit HEX value INCLUDING THE HASHTAG,\nor enter the letter 'x' to skip this prompt, or enter\n'd' to revert to the default colour value.",
    "^ 2 Change the colour of the File Menu Button Background\nto a 6 digit HEX value INCLUDING THE HASHTAG,\nor enter the letter 'x' to skip this prompt, or enter\n'd' to revert to the default colour value.",
    "' 1 Change the colour of the Grid Lines\nto a 6 digit HEX value INCLUDING THE HASHTAG,\nor enter the letter 'x' to skip this prompt, or enter\n'd' to revert to the default colour value.",
    "' 2 Change the colour of the X-Axis Line\nto a 6 digit HEX value INCLUDING THE HASHTAG,\nor enter the letter 'x' to skip this prompt, or enter\n'd' to revert to the default colour value.",
    "' 3 Change the colour of the Y-Axis Line\nto a 6 digit HEX value INCLUDING THE HASHTAG,\nor enter the letter 'x' to skip this prompt, or enter\n'd' to revert to the default colour value."
  ];


  for (let i = 0; i < prompts.length; i++) {

    let GridCanvasPrompt = prompt(prompts[i]);

    GridCanvasPrompt = GridCanvasPrompt.toUpperCase()

    console.log(GridCanvasPrompt)

    HEXValidator = GridCanvasPrompt[0];
    //console.log(HEXValidator)

    nextProperty = cssConcatonates[i]

    console.log(nextProperty)

    if (HEXValidator == '#') {


      if (prompts[i][0] == "*") {

        nextProperty.style.backgroundColor = GridCanvasPrompt;

        alert("Successfully changed colour to: " + GridCanvasPrompt + " !");



      } else if (prompts[i][0] == "^") {

        for (let e = 0; e < nextProperty.length; e++) {

          ///console.log(nextProperty[e])

          if (nextProperty != "b") {

            nextProperty[e].style.backgroundColor = GridCanvasPrompt;

          // } else if (nextProperty != ) {    
            
          } else {

            console.log("Skipped styling of entity in division.")
          }

        }

        alert("Successfully changed colour to: " + GridCanvasPrompt + " !");

      } else if (prompts[i][0] == "'") {

        if (prompts[i][2] == 1) { 

          drawGrid(1, null);

          drawAxis(0, AxisYColour, AxisXColour) // to prevent clearing 

          drawGrid(0, GridCanvasPrompt)

          alert("Successfully changed colour to: " + GridCanvasPrompt + " !");

        } else if (prompts[i][2] == 2) {

          drawAxis(1, null, null)

          drawAxis(0, AxisYColour, GridCanvasPrompt)

          drawGrid(0, GridLineColour) // to prevent clearing 

          alert("Successfully changed colour to: " + GridCanvasPrompt + " !");

        } else if (prompts[i][2] == 3) {

          drawAxis(1, null, null)

          drawAxis(0, GridCanvasPrompt, AxisXColour)

          drawGrid(0, GridLineColour) // to prevent clearing 

          alert("Successfully changed colour to: " + GridCanvasPrompt + " !");

        } else {

          console.log(prompts[i][2])

          console.log("Grid/Axis Customisation error has occurred!")

        }



      } else {

        console.log("Customisation error has occurred!")
      }



    } else if (HEXValidator == 'D') {

      if (prompts[i][0] == "*") {

        nextProperty.style.removeProperty('background-color');

        alert("Successfully defaulted " + nextProperty + " back to its default colour!"); 

        
      } else if (prompts[i][0] == "^") {

        for (let e = 0; e < nextProperty.length; e++) {

          ///console.log(nextProperty[e])

          if (nextProperty != "b") {

            nextProperty[e].style.removeProperty('background-color');

          } else {

            console.log("Skipped styling of entity in division.")
          }

        }

        alert("Successfully defaulted " + nextProperty + " back to its default colour!");


      } else if (prompts[i][0] == "'") {

        if (prompts[i][2] == 1) { 

          drawGrid(1, null);

          drawAxis(0, AxisYColour, AxisXColour) // to prevent clearing 

          drawGrid(0, "#000000")

          alert("Successfully defaulted " + nextProperty + " back to its default colour!");

        } else if (prompts[i][2] == 2) {

          drawAxis(1, null, null)

          drawAxis(0, AxisYColour, GridCanvasPrompt)

          drawGrid(0, GridLineColour) // to prevent clearing 

          alert("Successfully defaulted " + nextProperty + " back to its default colour!");

        } else if (prompts[i][2] == 3) {

          drawAxis(1, null, null)

          drawAxis(0, GridCanvasPrompt, AxisXColour)

          drawGrid(0, GridLineColour) // to prevent clearing 

          alert("Successfully defaulted " + nextProperty + " back to its default colour!");

        } else {

          console.log(prompts[i][2])

          console.log("Grid/Axis Customisation error has occurred!")

        }

      } else {

        console.log("Customisation error has occurred OR styling has been skipped!")

      }

    }

  }

  console.log(cssConcatonates)

};

// TODO -- This can then be saved via a built-in default json file to store this hex data into. 

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-
// TODO -- JSON SAVE
// const myData = { name: "John", age: 30 }; // Your JSON object

// function downloadJSON(data, filename = 'data.json') {
//     const jsonString = JSON.stringify(data, null, 2); // 2 spaces for readability
//     const blob = new Blob([jsonString], { type: "application/json" });
//     const url = URL.createObjectURL(blob);
    
//     const link = document.createElement("a");
//     link.href = url;
//     link.download = filename;
//     link.click();
    
//     URL.revokeObjectURL(url); // Clean up memory
// }

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-


// ** SCRIPT 001 ** Initialises the grid inside of the canvas in implemented JavaScript

// !!TO DO!! , make this an svg type draw !!

var gridwidth = xLen;  // Total width that the grid x-axis will stretch to 
var gridheight = yLen; // Total height that the grid y-axis will stretch to 
var padding = 0;    // How far the grid/workspace goes into the div 

var gridcellsCreatedOnY = 0; // This is a debugging value that holds the number of iterations 
var gridcellsCreatedOnX = 0;

var canvas = document.getElementById("GridCanvas"); // Fetches the canvas ID that was defined 
                                                            // in the HTML div "Workspace" -> "GridContainer" 
                                                            // -> "Grid Canvas"

var gridcell = canvas.getContext("2d"); //Defines a two-dimensional cell for the grid 

function drawGrid(GRIDMODE, gridColour) {   //This function repeatedly draws a cell until there is a full row of cells to fill 
                                            // gridwidth and grid height. 

  if (GRIDMODE == 0) {
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

      gridcellsCreatedOnX = gridcellsCreatedOnX + 1; 
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

      gridcellsCreatedOnY = gridcellsCreatedOnY + 1; 
    }

    console.log(gridcellsCreatedOnY, gridcellsCreatedOnX, "griddcells created with Y | X");


    //GLOBAL MODIFIER DEFINITIONS : 
    gridcell.lineWidth = 0.1;   // This instruction manually tells the drawGrid fucntion how thick each 
                                // line should be after every cell has been initialised. In this case, we 
                                // set the thickness of each border to be 0.1 pixels. 

    gridcell.strokeStyle = gridColour;   // This instruction manually tells the drawGrid function what colour
                                          // the drawn borders should appear as. In this case, we set the default 
                                          // border colour to black (#000000).

    gridcell.stroke();  // This instruction initialises the variables above to draw a cell with the desired
                        // lineWidth and strokeStyle 

  } else if (GRIDMODE == 1) {

    gridcell.clearRect(0,0,999,999);

  } else {

    console.log("Mode inputted is unknown. -- ERROR")

  }

} // The function that calculates the necessary grid output ends here. 

drawGrid(0, GridLineColour); // This instruction initialises the drawGrid to repeatedly draw individual cells until 
            // the entirety of the grids' height and width is filled, with the calculated function
            // output. 

// ** SCRIPT 001 ** The function for the grid implementation ends here. 

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-

// ** SCRIPT 002 ** Initialises the X and Y axis inside of the canvas in implemented JavaScript

//GLOBAL MODIFIER DEFINITIONS : 
axisWidth = xLen;   // States that the X Axis line should stretch to a defined limit
                      // defined in the Global Variables section. (This prevents magic
                      // numbers!)

axisHeight = yLen;   // States that the Y Axis line should stretch to a defined limit 
                      // defined in the Global Variables sections. (This prevents magic
                      // numbers!)
        
function drawAxis(AXISMODE, AxisYRGB, AxisXRGB){  // This function produces the axis lines for the Workspace UI. 

  if (AXISMODE == 0) {

    var canvas = document.getElementById("GridCanvas"); // Fetches the canvas ID that was defined 
                                                              // in the HTML div "Workspace" -> "GridContainer" 
                                                              // -> "Grid Canvas"
    var axisLine = canvas.getContext("2d"); // Defines the axis as a 2 dimensional line. 

    axisLine.beginPath(); // 

    axisLine.moveTo(50, axisHeight); // 

    console.log(axisWidth/2)
    //console.log(-axisHeight)

    axisLine.lineTo(50, axisHeight*-1); // 

    axisLine.strokeStyle = AxisXRGB; 

    axisLine.lineWidth = 1.5; 

    axisLine.stroke(); 

  } else if (AXISMODE == 1) {

    gridcell.clearRect(0,0,999,999);

  } else { 

    console.log("Mode inputted is unknown. -- ERROR")

  }


}; // The function that produces the correct Axis measurements ends here. 

drawAxis(0, AxisYColour, AxisXColour) // This instruction initialises the drawAxis to create an X and Y axis 
                                      // to stretch until it reaches the borders of the Workspace. 

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
  
  if (currentItem != null &&(event.key == "Delete" || event.key == "Backspace")) { // This is a conditional 
                                                        // statement that directs execution flow into it if 
                                                        // it's conditions are met. 
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

    totalSelectedGates--;
    selectedGatesStack.pop(currentItem); 

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
  if (simulate != true) {

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

    clone.setAttribute("id", divname); // We assign the ID of the Logic Gate being constructed to be that of
                                      // the custom ID produced.
                                        // WARNING: Do not do id, divname + divname, because then we cannot 
                                        // properly reference it later on in the program. 

    clone.setAttribute("gateType", gateType); 

    var headEl = clone.children[0]; // We get a reference to the DIV of the master object clone so that we
                                    // can customise it later. 
                                    
    var gateImage = clone.children[0].children[2]; // We get a reference to the master object clones' DIV's 
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

    inputARef = clone.children[0].children[0].getAttribute("id");
    inputBRef = clone.children[0].children[1].getAttribute("id");
    outputRef = clone.children[0].children[3].getAttribute("id");

    var inputAID = inputARef + itemsCreated; 
    var inputBID = inputBRef + itemsCreated; 
    var outputID = outputRef + itemsCreated; 

    clone.children[0].children[0].setAttribute("id",inputAID);
    clone.children[0].children[1].setAttribute("id",inputBID);
    clone.children[0].children[3].setAttribute("id",outputID);



    // const objectRef = {}; 

    // objectRef.argument = 
    // objectRef.inputs = 0; 
    // objectRef.outputs = 0;

   // console.log(objectRef)

  

    switch (gateType) {
      case "AND":
        // objectRef.argument = "AND";
        // objectRef.inputs = 2;
        // objectRef.outputs = 1;
        document.getElementById(inputAID).style.display = "inline";
        //console.log(document.getElementById(inputAID));
        document.getElementById(inputBID).style.display = "inline";
        document.getElementById(outputID).style.display = "inline";
        break;

      case "OR":
        // objectRef.argument = "OR";
        // objectRef.inputs = 2;
        // objectRef.outputs = 1;
        document.getElementById(inputAID).style.display = "inline";
        document.getElementById(inputBID).style.display = "inline";
        document.getElementById(outputID).style.display = "inline";
        break;

      case "NOT":
        // objectRef.argument = "NOT";
        // objectRef.inputs = 1;
        // objectRef.outputs = 1;
        document.getElementById(inputAID).style.display = "inline";
        document.getElementById(outputID).style.display = "inline";
        break;

      case "XOR":
        // objectRef.argument = "XOR";
        // objectRef.inputs = 2;
        // objectRef.outputs = 1;
        document.getElementById(inputAID).style.display = "inline";
        document.getElementById(inputBID).style.display = "inline";
        document.getElementById(outputID).style.display = "inline";
        break;

      case "Lightbulb":
        // objectRef.argument = "Lightbulb";
        // objectRef.inputs = 1;
        // objectRef.outputs = 0;
        document.getElementById(inputAID).style.display = "inline";
        break;

      case "Speaker":
        // objectRef.argument = "Speaker";
        // objectRef.inputs = 1;
        // objectRef.outputs = 0;
        document.getElementById(inputAID).style.display = "inline";
        break;

      case "HoldButton":
        // objectRef.argument = "HoldButton";
        // objectRef.inputs = 0;
        // objectRef.outputs = 1;
        document.getElementById(outputID).style.display = "inline";
        break;
    }

    for (let x = 0; x < objectRef.inputs; x++) {

      console.log(x);

    };

  }; 
    
}; // The function for the Object Initialisation that produces a Logic Gate object into the Workspace, 
   // from the master object DIV ends here. 
  
              //console.log(objectRef.argument)

// ** SCRIPT 004 ** The function for Logic Gate Object summoning ends here. 

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-

//  ** SCRIPT 006 ** Sets the currentItem variable & apply any highlighting that is needed to display 
// the selection. 

function selectCurrentItem(item) {

  if (currentItem == null) {

    currentItem = item; 

    selectedGatesStack.push(currentItem);
    totalSelectedGates++;

    document.getElementById(currentItem).classList.add("gateObjectHighlight");


  };

  if (item != currentItem && currentItem != null) { // Removes highlight from previous section 

    document.getElementById(currentItem).classList.remove("gateObjectHighlight");

    currentItem = item; 

    selectedGatesStack.push(currentItem);
    totalSelectedGates++;

    document.getElementById(currentItem).classList.add("gateObjectHighlight");

    //console.log(currentInputItem);
  };

  console.log(selectedGatesStack)

};


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
  
  var pos1 = 0,   //  Sets memory allocation for storing the distance that the UI element moves. 

    pos2 = 0,     //  Sets memory allocation for storing the distance that the UI element moves. 

    pos3 = 0,     //  Sets memory allocation for storing the UI position of the object on the initial mouse 
                  // button down for later reference, on the X Axis.  

    pos4 = 0;     //  Sets memory allocation for storing the UI position of the object on the initial mouse 
                  // button down for later reference, on the X Axis. 

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

  if (simulate != true) {

    pos3 = e.clientX; // Stores the UI position of the object on the initial mouse button down for later 
                      // reference, on the X Axis. 
    pos4 = e.clientY; // Stores the UI position of the object on the initial mouse button down for later 
                      // reference, on the Y Axis. 

    document.onmouseup = closeDragElement;  // When the mouse button is released or goes up, the drag element
                                            // function is halted for said object. 

    document.onmousemove = elementDrag; // When the mouse moves WHILST the mouse button is pressed down, the
                                        // function that moves the UI element (allows for dragging interactivity
                                        // visually) is called. 

  //  currentItem = elmnt.id; // When the mouse cursor is above a Logic Gate Object and the mouse button 
                            // down is completed upon said object, this instruction sets the current 
                            // item to be the one that is being clicked or dragged (mouse down). 
                              // This is to be used in functions mostly covered above (SCRIPT 003 / Object 
                              // Deletion).


    selectCurrentItem(elmnt.id);


    console.log("currentItem = ", currentItem); // This instruction is used for debugging, to state the current 
                                                // item that is being selected (aka, the Logic Gate Object that 
                                                // has just been previously affected by the dragMouseDown
                                                // function). 

    //console.log("Argument = ", cloneObject.objetRef.argument)
  };

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
                                        // This is the absolute value. 

    maxY = winH - elmnt.offsetHeight - 1; // This instruction calculates the maximum positions (height-wise)
                                          // on the Workspace before the Logic Gate UI Object would leave the
                                          // screen. 
                                          // This is the abolsute value. 

  console.log("MaxY Debug: ", maxY) // debug with identifier... 

  pos1 = pos3 - e.clientX,  // Figures the distance that the Logic Gate UI Object has moved since it's most recently
                            // stored origin, stated in the function dragElement (pos1, pos2, pos3, pos4 etc...) 
                            // horizontally (on the X Axis). 
                            // This is a relative value. 

  pos2 = pos4 - e.clientY;  // Figures the distance that the Logic Gate UI Object has moved since it's most recently
                            // stored origin, stated in the function dragElement (pos1, pos2, pos3, pos4 etc...) 
                            // vertically (on the Y Axis). 
                            // This is a relative value. 

  pos3 = e.clientX;         // Updates the new positions of the Logic Gate UI Object (in pos1, pos2, pos3, pos4
                            // etc...) horizontally (on the X Axis). 

  pos4 = e.clientY;         // Updates the new positions of the Logic Gate UI Object (in pos1, pos2, pos3, pos4
                            // etc...) vertically (on the Y Axis). 

  console.log((/*elmnt.offsetLeft -*/ pos4), maxY, (/*elmnt.offsetLeft -*/ pos3), maxX);  // A debugging instruction that
                                                                                  // outputs the position of the 
                                                                                  // recently moved Logic Gate UI
                                                                                  // object. 

  //var MAXY = document.getElementById("GridCanvas").getAttribute("height"); // LOOK INTO - AUTO LOCK LIMIT 

  var sizeOfBaseY = document.getElementById("Base").offsetHeight; 
  var sizeOfBaseX = document.getElementById("Base").offsetWidth; 

  var sizeOfWorkspaceY = document.getElementById("Workspace").offsetHeight; 
  var sizeOfWorkspaceX = document.getElementById("Workspace").offsetWidth; 

  var minY = sizeOfBaseY - sizeOfWorkspaceY;
  var minX = sizeOfBaseX - sizeOfWorkspaceX; 

  ///var minY = 200; 
  ///var minX = 200; 

  //console.log("MAXY: ", MAXY);
  // var dbgval= elmnt.offsetTop - pos2;
  // var dbgval2 = elmnt.offsetLeft - pos1;
  
  ///document.getElementById("TextDebug").innerHTML=(minY);
  ///document.getElementById("TextDebug2").innerHTML=(minX);

  if ((elmnt.offsetTop - pos2) <= maxY && (elmnt.offsetTop - pos2) >= minY) {  // This is a conditional instruction that
                                                                            // branches execution flow if the Logic
                                                                            // Gate Object is being dragged outside
                                                                            // of the Workspace. 
                                                                              // This conditional branch only applies
                                                                              // to checking UI movinghorizontally / on 
                                                                              // the Y Axis (Top...).

    if (pos2 < sizeOfBaseY) {
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";  // If the condition above IS met, and the object IS being
                                                          // dragged outside of the Workspace, said instruction will 
                                                          // force the Logic Gate UI Object to reposition itself 
                                                          // back into the Workspace. 

      gatePositionYGlobalReference = elmnt.style.top; // We update the global variable that stores the integer value 
                                                      // of where the logic gate object is stored on the Y Axis on 
                                                      // the Workspace. 

    } else { 

      elmnt.style.top = pos4; 

      gatePositionYGlobalReference = pos4;

    };

  }; // The conditional branch for UI positional checking on the Y Axis ends here. If the Logic Gate UI Object 
    // does not meet the above properties (aka. is inside of the Workspace), execution flow will skip to this 
    // point. 

  if ((elmnt.offsetLeft - pos1) <= maxX && (elmnt.offsetLeft - pos1) >= minX) { // This is a conditional instruction that 
                                                                            // branches execution flow if the Logic 
                                                                            // Gate Object is being dragged outside 
                                                                            // of the Workspace. 
                                                                              // This condtional branch only applies 
                                                                              // to checking UI moving vertically / on 
                                                                              // the X Axis (Left...).

    if (pos1 < sizeOfBaseX) {

      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";  // If the condition above IS met, and the object IS being 
                                                            // dragged outside of the Workspace, said instruction will 
                                                            // force the Logic Gate UI object to reposition itself 
                                                            // back into the Workspace. 

      gatePositionXGlobalReference = elmnt.style.left;  // We update the global variable that stores the integer value 
                                                        // of where the logic gate object is stored on the Y Axis on 
                                                        // the Workspace. 

    } else { 

      elmnt.style.left = pos3; 

      gatePositionXGlobalReference = pos3; // UNDO: X -> Y

    };

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


// Checks if the IO connection attempt is valid 


function ioCheck(e) { // The info passed as a parameter 

  ///window.alert(e.id); // debugging 

  IO = document.getElementById(e.id).id;

  IOREFERENCE = document.getElementById(e.id); /* Holds gate metadata */ 

  console.log(IO, IOREFERENCE)

  IOPARENT = IOREFERENCE.parent

  PREVIOUSIO = PREVIOUSIOSTACK[PREVIOUSIOSTACK.length - 1] /* We do this in this statement so it's simpler to gain the previous IO's 
  unique ID later on in the branching 
  */


  console.log(IOREFERENCE.parent)

  //console.log("PREVIOUSIOTYPE == ", PREVIOUSIOTYPE)
  //console.log("IO == ", IO)
  //console.log("IOTYPE == ", IOTYPE)

  //DRAWBOXA = null; 
  //DRAWBOXB = null; 

  //console.log(IOTYPE);


  //window.alert(IOTYPE)

  //console.log(" Gate IO Selected! (Shown) ", IOTYPE)

  GatePositionX = gatePositionXGlobalReference; 

  GatePositionY = gatePositionYGlobalReference; 




  IOPositionY = e.offsetTop; 
  
  IOPositionX = e.offsetLeft;

  console.log("IOPOSITION == ", IOPositionX, IOPositionY);

  letterCheckRef = IO[0];

  if (IO != PREVIOUSIO) {

    PREVIOUSIOSTACK.push(IO);
    IOPOSITIONSTACK.push(IOREFERENCE);

    if (letterCheckRef == "O" && letterCheckRef != PREVIOUSIO[0]) {

      OverallXPos = parseInt(GatePositionX) + IOPositionX;

      OverallYPos = parseInt(GatePositionY) + IOPositionY; 

      console.log(OverallXPos, OverallYPos)

      IOPARSE.PARENTOUTPUT = IOPARENT;
      IOPARSE.INPUT = IOREFERENCE; 
      IOPARSE.OUTPUTPOSITIONX = OverallXPos;
      IOPARSE.OUTPUTPOSITIONY = OverallYPos;


      if (hasFirstIOBeenSelected == false && hasSecondIOBeenSelected == false){

        hasFirstIOBeenSelected = true; 

        DRAWBOXSTACK.push(IO);

      } else if (hasFirstIOBeenSelected == true && hasSecondIOBeenSelected == false) {

        hasSecondIOBeenSelected = true; 

        DRAWBOXSTACK.push(IO);

        // go into else 

        hasFirstIOBeenSelected = false;

        hasSecondIOBeenSelected = false;

        //OUTPUTPOINTER = IO; 

        console.log("ConnectionDraw Breakpoint decision hit.");

        initConnect(0, IOPARSE);  

        DRAWBOXSTACK = [];

        presentObjects++;

        for (let i in IOPARSE) {  // Clears all of the global reference so that the object can be reused 
          IOPARSE[i] = 0;
        }

      } else {

        console.log("ioCheck Function Return: Please wait.")

      }




      //console.log("READ // Gate IO is Output")
    } else if (letterCheckRef == "I" && letterCheckRef != PREVIOUSIO[0]) {

      OverallXPos = parseInt(GatePositionX) + IOPositionX;

      OverallYPos = parseInt(GatePositionY) + IOPositionY; 

      IOPARSE.PARENTOUTPUT = IOPARENT;
      IOPARSE.OUTPUT = IOREFERENCE; 
      IOPARSE.INPUTPOSITIONX = OverallXPos;
      IOPARSE.INPUTPOSITIONY = OverallYPos;


      if (hasFirstIOBeenSelected == false && hasSecondIOBeenSelected == false){

        hasFirstIOBeenSelected = true; 

        DRAWBOXSTACK.push(IO);

      } else if (hasFirstIOBeenSelected == true && hasSecondIOBeenSelected == false) {

        hasSecondIOBeenSelected = true; 

        DRAWBOXSTACK.push(IO);

        // go into else 

        hasFirstIOBeenSelected = false;

        hasSecondIOBeenSelected = false;

        console.log("ConnectionDraw Breakpoint decision hit.")

        //INPUTPOINTER = IO; 

        initConnect(0, IOPARSE);  

        DRAWBOXSTACK = [];

        presentObjects++;

        for (let i in IOPARSE) {  // Clears all of the global reference so that the object can be reused 
          IOPARSE[i] = 0;
        }

      } else {

        console.log("ioCheck Function Return: Please wait.")

      }

      //console.log("READ // Gate IO is Input")
    } else {

      console.log("CRITICAL ERROR READ // Gate IO Type Not Understood!");

    };
  } else {
    console.log("Same IO is selected")
  };

  //console.log("Gate is at Screen Position X Axis: ", GatePositionX);
  //console.log("Gate is at Screen Position Y Axis: ", GatePositionY);

  //console.log("Selected IO Box is at Gate X Axis relative position: ", IOPositionX)
  //console.log("Selected IO Box is at Gate Y Axis relative position: ", IOPositionY)

  //console.log("IO is at overall position on the Y Axis: ", OverallXPos)

  //console.log("IO is at overall position on the X Axis: ", OverallYPos)


  console.log("prev io type == ", IOPOSITIONSTACK) 


  console.log("hasFirstIOBeenSelected == ", hasFirstIOBeenSelected);
  console.log("hasSecondIOBeenSelected == ", hasSecondIOBeenSelected);
  console.log("Draw Stack == ", DRAWBOXSTACK);



  ///console.log(IOREFERENCE)

  ///console.log(IOPARSE)

  //console.log(DRAWBOXSTACK.length);

  //console.log(INPUTPOINTER);
  //console.log(OUTPUTPOINTER);


  //console.log(generalX);
  //console.log(generalY);

  //var IOTYPE = clone.children[0].children[1]; 

  //if (previouslySelectedGate == null) {

  //  previouslySelectedIO = IOTYPE;

  //} else {

  //  console.log("Same IO selected!");

  //};
  //console.log(selectedGatesStack);
  //console.log(totalSelectedGates);
};


//------------------------


// !!TO DO!! , Finish this function to calculate the dot product that is 
// normalised for the accurate drawing branch that the connection draw 
// will implemenet down the line. 

function FastDotThenNormalise(VectorA, VectorB){ // TO DO, 
// dot product
  let result = 0;
  for (let i = 0; i < VectorA.length; i++) {
    result += VectorA[i] * VectorB[i];
  };
// normalise vector
  min = result; 
  max = result; 

  NormalisedDot = result - min / max - min;

  return NormalisedDot;

}

//------------------------

//Draws the connection and parses data to the json save 

function initConnect(MODE, PARSED_PRD){   // The draws the connection and calls another function to add 
                                          // it to a save stack. 
  // PRD = POSIIION REFERENCE DATA 
  //console.log("IT'S CONNECTED!!!!!!!")


// IF MODE == 0 THEN SAVE IO CONNECTIONS 
// IF MODE == 1 THEN SAVE OBJECT POSITIONS 

// Gain PRD values parsed from the IO Check  

  INPUTREFERENCE = PARSED_PRD.INPUT.parentNode; 
  OUTPUTREFERENCE = PARSED_PRD.OUTPUT.parentNode; 

  GATEREFERENCE_I = PARSED_PRD.INPUT;
  GATEREFERENCE_O = PARSED_PRD.OUTPUT;

  INPUTREFLOCATIONX = PARSED_PRD.INPUTPOSITIONX;
  INPUTREFLOCATIONY = PARSED_PRD.INPUTPOSITIONY; //+ 20;  // *
  OUTPUTREFLOCATIONX = PARSED_PRD.OUTPUTPOSITIONX; 
  OUTPUTREFLOCATIONY = PARSED_PRD.OUTPUTPOSITIONY; //+ 20; // *

  // console.log(
  //   INPUTREFLOCATIONX,
  //   INPUTREFLOCATIONY, 
  //   OUTPUTREFLOCATIONX, 
  //   OUTPUTREFLOCATIONY 
  // )

  DRAWINPUTLOCATIONX = PARSED_PRD.INPUTPOSITIONX; 
  DRAWINPUTLOCATIONY = PARSED_PRD.INPUTPOSITIONY;
  DRAWOUTPUTLOCATIONX = PARSED_PRD.OUTPUTPOSITIONX; 
  DRAWOUTPUTLOCATIONY = PARSED_PRD.OUTPUTPOSITIONY; 

  console.log("Input Parent == ", INPUTREFERENCE);
  console.log("OUTPUT Parent == ", OUTPUTREFERENCE); 

  // console.log("Parsed PRD Values == ",
  //   DRAWINPUTLOCATIONX, 
  //   DRAWINPUTLOCATIONY, 
  //   DRAWOUTPUTLOCATIONX, 
  //   DRAWOUTPUTLOCATIONY, 
  //   INPUTREFERENCE, 
  //   OUTPUTREFERENCE);

  // console.log("IT'S DRAWING");

  // console.log(FastDotThenNormalise([DRAWINPUTLOCATIONX, DRAWINPUTLOCATIONY], [DRAWOUTPUTLOCATIONX, DRAWOUTPUTLOCATIONY])); // output: 32

  /// TODO -- Console log the draw data variables to see what they are... 

// Draws the line connection between the two IOs

  const wireNode = document.getElementById("Wire");

  const clone = wireNode.cloneNode(true);

  document.getElementById("WiredConnection").appendChild(clone); 

  var wireName = "Wire" + connectionsInitialised;



  console.log(wireName)

  clone.setAttribute("id", wireName);

  const ConnectionLine = document.getElementById(wireName);

  ConnectionLine.setAttribute("x1", DRAWOUTPUTLOCATIONX);
  ConnectionLine.setAttribute("y1", DRAWOUTPUTLOCATIONY);
  ConnectionLine.setAttribute("x2", DRAWINPUTLOCATIONX);
  ConnectionLine.setAttribute("y2", DRAWINPUTLOCATIONY);

  ConnectionLine.setAttribute("PairedData", connectionsInitialised); 

  clone.style.display = "block"; 
  
  connectionsInitialised++; 

  console.log("Parsed PRD Values == ",
    DRAWINPUTLOCATIONX, 
    DRAWINPUTLOCATIONY, 
    DRAWOUTPUTLOCATIONX, 
    DRAWOUTPUTLOCATIONY)



// Pushes the IO connect to a connection stack 


  jsonReadWrite(
    MODE, 

    INPUTREFERENCE,
    OUTPUTREFERENCE,

    INPUTREFLOCATIONX,
    INPUTREFLOCATIONY,
    OUTPUTREFLOCATIONX,
    OUTPUTREFLOCATIONY,

    GATEREFERENCE_I,
    GATEREFERENCE_O,

    DRAWINPUTLOCATIONX,
    DRAWINPUTLOCATIONY,
    DRAWOUTPUTLOCATIONX,
    DRAWOUTPUTLOCATIONY,

    itemsCreated    
  );


  // const ConnectionLine = document.getElementById("Wire");
  // ConnectionLine.setAttribute("x1", 100);
  // ConnectionLine.setAttribute("y1", 50);
  // ConnectionLine.setAttribute("x2", 10);
  // ConnectionLine.setAttribute("y2", 250);



  // var base = document.getElementById("GridCanvas");
  // var JavaPen = base.getContext("2d");

  // JavaPen.beginPath();  
  // JavaPen.moveTo(DRAWINPUTLOCATIONX, DRAWINPUTLOCATIONY);
  // JavaPen.lineTo(DRAWOUTPUTLOCATIONX, DRAWOUTPUTLOCATIONY);
  // JavaPen.lineWidth = 0.35;
  // JavaPen.strokeStyle = "#000000";  
  // JavaPen.stroke(); 
  //function initialiseLine


// TODO -- GATE OBJECTS MUST BECOME UNINTERACTABLE AFTER CONNECTION 

  //CONNECTIONSTACK = [] 

//}

//setTimeout(function(){

//})
}

//------------------------

// function deleteConnection(e) {

//   selectedElement = document.getElementById(e.id);

//   console.log("Deleted connection element == ", selectedElement)

//   if (selectedElement.startsWith("Wire")) {

//     selectedElement.style.display = "none";

//   } else {

//     console.log("No wire connection detected!")

//   }

//   console.log("Function not initialised")

// }


const wireContainerReference = document.getElementById('WiredConnection');

// 2. Add a single listener to that container


wireContainerReference.addEventListener('click', (event) => {

    // 'event.target' is the actual element that was clicked

    const clickedElement = event.target;

    console.log(clickedElement);

    // 3. Check if the element has an ID and if it starts with "Wire"

    if (clickedElement.id && clickedElement.id.startsWith("Wire") && simulate != true) {

        console.log("A wire was clicked!", clickedElement.id);
        
        // You can now manipulate the specific wire
        clickedElement.setAttribute("stroke", "red"); 

        objectPair = clickedElement.getAttribute("PairedData"); 

        

        if (jsonSaveWorkspace[1] == null) {

          jsonSaveWorkspace.splice(objectPair, 1);

          jsonSaveWorkspace.length = 0; 

        } else { 

          jsonSaveWorkspace.splice(objectPair, 1);

        }

        clickedElement.remove()

        console.log(jsonSaveWorkspace)

        // connectionsInitialised--;

        // console.log(connectionsInitialised);

    }

});

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-
// ** SCRIPT 000000 ** READ WRITE TO JSON FILE 

// Writes data about connected gates to a JSON file 

function jsonReadWrite(
  MODE, 
  
  CONNECTEDOBJECT_INPUTREF,
  CONNECTEDOBJECT_OUTPUTREF,

  CONNECTEDOBJECT_INPUTREF_POSX,
  CONNECTEDOBJECT_INPUTREF_POSY,
  CONNECTEDOBJECT_OUTPUTREF_POSX,
  CONNECTEDOBJECT_OUTPUTREF_POSY,

  INPUTBOX, 
  OUTPUTBOX,

  POSITIONINPUTX,
  POSITIONINPUTY,
  POSITIONOUTPUTX,
  POSITIONOUTPUTY,

  NUMOFGATES) {


  if (MODE == 0) {
    const saveFile = {
      CONNECTEDOBJECT_A:  CONNECTEDOBJECT_INPUTREF, 
      CONNECTEDOBJECT_B: CONNECTEDOBJECT_OUTPUTREF,


      INPUTOBJECT_POSX:       CONNECTEDOBJECT_INPUTREF_POSX,
      INPUTOBJECT_POSY:       CONNECTEDOBJECT_INPUTREF_POSY,
      OUTPUTOBJECT_POSX:      CONNECTEDOBJECT_OUTPUTREF_POSX,
      OUTPUTOBJECT_POSY:      CONNECTEDOBJECT_OUTPUTREF_POSY,


      INPUTBOX:               INPUTBOX,
      OUTPUTBOX:              OUTPUTBOX, 


      POSITIONINPUTBOXX:      POSITIONINPUTX,
      POSITIONINPUTBOXY:      POSITIONINPUTY, 
      POSITIONOUTPUTBOXX:     POSITIONOUTPUTX,
      POSITIONOUTPUTBOXY:     POSITIONOUTPUTY,


      NUMOFGATES:             NUMOFGATES
    };

    //console.clear();
    console.log(saveFile);

    jsonSaveWorkspace.push(saveFile);

    //console.clear();
    console.log(jsonSaveWorkspace)

  } else {
    console.log("Logging data!")

  }
  

}


// TODO -- MAKE THE "OUTPUT / INPUT" OBJECTS (NOT THE IOs) BECOME OBJECTA AND OBJECT BM LEAVE THE "I / O" FOR THE BOXES
// DO IT SO THAT IT SUBTRACTS OR ADDS HEIGHT (27 PX) ETC... DEPENDING ON THE IO PARSED DATA 


getPropertiesSaveButton = document.getElementById("save");  // We fetch the 

//link.setAttribute('href', "#");

getPropertiesSaveButton.onclick= function() {

  TYPE = prompt("Please enter the TYPE of project data you want to save.\nEnter the letter 'L' to save the layout data, and enter\nthe letter 'P' to save your Logic Gate circuit project.");

  TYPE = TYPE.toUpperCase();

  if (TYPE == 'L') {

    saveData(0, jsonSaveWorkspace)

    console.log("Saving Simboard Layout Data has been attempted.")

  } else if (TYPE == 'P') {

    saveData(1, cssConcatonates)

    console.log("Saving Simboard Workspace Project Data has been attempted.")

  } else {

    confirm("Could not understand saving format. Please try again!")

  }

}




getPropertiesLoadButton = document.getElementById("load");  // We fetch the 

//link.setAttribute('href', "#");

getPropertiesLoadButton.onclick= function() {

  confirmation = confirm("Remember to save your current project as loading in a new Layout or Project file can override the current Layout or Project data present right now.\nPress CANCEL to halt the loading process until everything is saved.\nPress OK to initialise the loading process.")

  //setTimeout(5000) 

  if (confirmation == true) {

    TYPE = prompt("Please enter the TYPE of project data you want to load into Simboard.\nEnter the letter 'L' to load your layout data file, and enter\nthe letter 'P' to load your Logic Gate circuit into the Workspace!");

    TYPE = TYPE.toUpperCase();

    if (TYPE == 'L') {

      loadData(0, jsonSaveWorkspace)

      console.log("Loading Simboard Layout Data has been attempted.")

    } else if (TYPE == 'P') {

      loadData(1, cssConcatonates)

      console.log("Loading Simboard Workspace Project Data has been attempted.")

    } else {

      confirm("Could not understand loading format. Please try again!")

    }

  } else {

    console.log("Cancelled loading operation.")

  }

}




function saveData(MODE, DATA) {
  // c = 0; // debugging value
  // console.log(c) // debugging branch 
  //extension = ".json"

    var file = new Blob([DATA], {type: "json"});

    if (window.navigator.msSaveOrOpenBlob) // IE10+

        window.navigator.msSaveOrOpenBlob(file, "filename");

    else { // Others

        var a = document.createElement("a"),

                url = URL.createObjectURL(file);

        a.href = url;

        a.download = "filename";

        document.body.appendChild(a);

        a.click();

        setTimeout(function() {

            document.body.removeChild(a);

            window.URL.revokeObjectURL(url);  

        }, 0); 
        
    }; 

};

function loadData(MODE, DATA) {

  d = 1; 
  console.log(d) //debugging branch 

}
//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-

//  ** SCRIPT 006 ** Allows the Workspace to be navigated and moved around or zoomed in and out. 



//  ** SCRIPT 006 ** The functions for Workspace navigation end here. 

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-

// ** SCRIPT 007 ** Allows Logic Gate Objects to be wired together 

console.log(xLen, yLen, "size of workspace with X | Y")


// ** SCRIPT 007 ** The functions for Logic Gate Objects to connect "wire" UI elements together, and produce 
// execution flow ends here. 

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-

// ** SCRIPT 008 ** Allows for the File Menu Buttons to be interacted with and perform different operations
// for the end user to utilise (Excluding the Saving & Loading buttons!)



// ** SCRIPT 008 ** The functions for File Menu functionality ends here. 

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-

// ** SCRIPT 009 ** Allows for Simboard Projects to be saved as a JSON file. 
// iii = 0
// function testloop(){
//   while (true == true) {
//     console.log("Testing for loop is going well...")
    
//   }
// }

var getPropertiesSimulateButton = document.getElementById("simulate");  // We fetch the ...XYZ!


getPropertiesSimulateButton.onclick= function simulateWorkspace() {

  if (simulate == false) {

    simulate = true; 

    var buttonImage = getPropertiesSimulateButton.children[1];

    buttonImage.setAttribute("src", "/Media/Layout/PauseSim.png"); 

    logicFlow(0, jsonSaveWorkspace)

  } else if (simulate == true) {

    simulate = false; 

    var buttonImage = getPropertiesSimulateButton.children[1];

    buttonImage.setAttribute("src", "/Media/Layout/PlaySim.png"); 

    logicFlow(1, jsonSaveWorkspace)

  } else { 

    console.log("   !Simulation error occured!   ")

  }

}

// ** SCRIPT 009 ** The functions for Simboard Saving end here. 


//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-

/// TODO -- IF MODE IS 0, THEN BUTTON INPUTS BECOME CLICKABLE AND FLOW CONTROL LOGIC STARTS CALCULCATING 
/// TODO -- IF MODE IS 1, THEN FLOW STOPS AND ALL THUMBNAILS GO TO "DEACTIVATED" ALWAYS

function logicFlow(MODE, WORKSPACE_DATA) {

  if (MODE == 0) {

  console.log("Control Flow is flowing...", WORKSPACE_DATA);

  } else if (MODE == 1) {

  console.log("Control Flow has stopped...");

  } else {

  console.log("Logic Error in logicFlow function!");

  }

}



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