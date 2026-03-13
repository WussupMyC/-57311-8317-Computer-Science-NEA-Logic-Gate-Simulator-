/*      Using JAVASCRIPT NODE.js Version ECMA v22.17.0       */ 


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

simboardVersion = "FR 1.0.0";

simulate = false; 

// Should be attributes of this layout saver 
cssConcatonates = [ // the references of objects that are actually set
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

tempStylesContainer = {};  // holder of ui style setter values incase it needs to be used again 
                           // changed tempStylesContainer from an Array to a POJO (plain old javascript object)!

tempStylesContainer.tempCanvasColour = "#DEDE94"; 
tempStylesContainer.tempObjectMenuColour = "#A4A4A4"; 
tempStylesContainer.tempFileMenuColour = "#808080"; 
tempStylesContainer.tempCircuitConfigColour = "#808080"; 
tempStylesContainer.tempObjectMenuButtonColour = "#DEDE94"; 
tempStylesContainer.tempFileMenuButtonColour = "#DEDE94"; 
tempStylesContainer.tempGridLineColour = "#000000"; 
tempStylesContainer.tempAxisXColour = "#CD5C5C"; 
tempStylesContainer.tempAxisYColour = "#000982";

//tempStylesContainer.tempy = 7; // debugging var!

tempStylesContainerOverwrite = {}; 

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

jsonSaveWorkspaceOverwrite = []; //               Holds the new data dragged into the WORKSPACe....

totalWires = 0; 

connectionsInitialised = 0; 

importedFileType = null; 

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

tempStyle = "#DEDE94"; 

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

        if (prompts[i][2] == "1") {

          nextProperty.style.backgroundColor = GridCanvasPrompt;

          tempStylesContainer.tempCanvasColour = GridCanvasPrompt;

          alert("Successfully changed colour to: " + GridCanvasPrompt + " !");

        } else {

          nextProperty.style.backgroundColor = GridCanvasPrompt;

          if (prompts[i][2] == "2") { // for setting temp styles!

            tempStylesContainer.tempObjectMenuColour = GridCanvasPrompt; 
            
          } else if (prompts[i][2] == "3") {

            tempStylesContainer.tempFileMenuColour = GridCanvasPrompt; 

          } else if (prompts[i][2] == "4") {

            tempStylesContainer.tempCircuitConfigColour = GridCanvasPrompt; 

          } else {

            console.warn("A mismatch in a styling array was detected. Please attempt to fix either cssConcatonates, prompts or tempStylesContainer arrays!");

          }

          alert("Successfully changed colour to: " + GridCanvasPrompt + " !");

        }



      } else if (prompts[i][0] == "^") {

        for (let e = 0; e < nextProperty.length; e++) {

          ///console.log(nextProperty[e])

          if ((nextProperty[e].tagName) == "BUTTON" || "A") {

            if ((nextProperty[e].tagName) == "BUTTON") {

              nextProperty[e].style.backgroundColor = GridCanvasPrompt; 

            } else if ((nextProperty[e].tagName) == "A") {

              nextProperty[e].children[0].style.backgroundColor = GridCanvasPrompt

            }
 
          // } else if (nextProperty != ) {    
            
          } else {

            console.log("Skipped styling of entity in division.");

          }

        }

        if (prompts[i][2] == "1") {

          tempStylesContainer.tempObjectMenuButtonColour = GridCanvasPrompt; 

        } else if (prompts[i][2] == "2") {

          tempStylesContainer.tempFileMenuButtonColour = GridCanvasPrompt; 

        } else { 

          console.warn("A mismatch in a styling array was detected. Please attempt to fix either cssConcatonates, prompts or tempStylesContainer arrays!");

        }

        alert("Successfully changed colour to: " + GridCanvasPrompt + " !");



      } else if (prompts[i][0] == "'") {

        stylerCacheGrid = tempStylesContainer.tempGridLineColour; 
        stylerCacheAxisX = tempStylesContainer.tempAxisXColour; 
        stylerCacheAxisY = tempStylesContainer.tempAxisYColour; 

        if (prompts[i][2] == 1) { 

          stylerCacheGrid = GridCanvasPrompt;

          // drawGrid(1, null);

          // drawAxis(0, AxisYColour, AxisXColour) // to prevent clearing 

          // drawGrid(0, GridCanvasPrompt)

          tempStylesContainer.tempGridLineColour = GridCanvasPrompt; 

          alert("Successfully changed colour to: " + GridCanvasPrompt + " !");

        } else if (prompts[i][2] == 2) {

          stylerCacheAxisX = GridCanvasPrompt;

          // drawAxis(1, null, null)

          // drawAxis(0, AxisYColour, GridCanvasPrompt)

          // drawGrid(0, GridLineColour) // to prevent clearing 

          tempStylesContainer.tempAxisXColour = GridCanvasPrompt; 

          alert("Successfully changed colour to: " + GridCanvasPrompt + " !");

        } else if (prompts[i][2] == 3) {

          stylerCacheAxisY = GridCanvasPrompt; 

          // drawAxis(1, null, null)

          // drawAxis(0, GridCanvasPrompt, AxisXColour)

          // drawGrid(0, GridLineColour) // to prevent clearing 

          tempStylesContainer.tempAxisYColour = GridCanvasPrompt; 

          alert("Successfully changed colour to: " + GridCanvasPrompt + " !");

        } else {

          console.log(prompts[i][2])

          console.warn("Grid/Axis Customisation error has occurred!")

        }

        drawGrid(1, null, null)

        drawAxis(1, null, null)

        drawGrid(0, stylerCacheGrid)

        drawAxis(0, stylerCacheAxisY, stylerCacheAxisX)



      } else {

        console.warn("Customisation error has occurred!")

      }








    } else if (HEXValidator == 'D') {

      if (prompts[i][0] == "*") {

        if (prompts[i][2] == "1") {

          nextProperty.style.removeProperty('background-color');

          tempStylesContainer.tempCanvasColour = "#DEDE94";

          alert("Successfully defaulted this property back to its default colour!"); 

        } else {

          nextProperty.style.removeProperty('background-color');


          if (prompts[i][2] == "2") { // for setting temp styles!

            tempStylesContainer.tempFileMenuColour = "#808080"; 
            
          } else if (prompts[i][2] == "3") {

            tempStylesContainer.tempObjectMenuColour = "#A4A4A4"; 

          } else if (prompts[i][2] == "4") {

            tempStylesContainer.tempCircuitConfigColour = "#808080"; 

          } else {

            console.warn("A mismatch in a styling array was detected. Please attempt to fix either cssConcatonates, prompts or tempStylesContainer arrays!");

          }

          alert("Successfully defaulted this property back to its default colour!"); 

        }

        


      } else if (prompts[i][0] == "^") {

        for (let e = 0; e < nextProperty.length; e++) { // removal process 

          ///console.log(nextProperty[e])

          if ((nextProperty[e].tagName) == "BUTTON" || "A") {

            if ((nextProperty[e].tagName) == "BUTTON") {

              nextProperty[e].style.removeProperty('background-color');

            } else if ((nextProperty[e].tagName) == "A") {

              nextProperty[e].children[0].style.removeProperty('background-color'); // access first child to get za button in da anchor ! 

            }



          } else {

            console.log("Skipped styling of entity in division.")
          }

        }

        
        if (prompts[i][2] == "1") { // reset values process 

          tempStylesContainer.tempObjectMenuButtonColour = "#DEDE94"; 

        } else if (prompts[i][2] == "2") {

          tempStylesContainer.tempFileMenuButtonColour = "#DEDE94"; 

        } else { 

          console.warn("A mismatch in a styling array was detected. Please attempt to fix either cssConcatonates, prompts or tempStylesContainer arrays!");

        }

        alert("Successfully defaulted this property back to its default colour!");




      } else if (prompts[i][0] == "'") {

        if (prompts[i][2] == 1) { 

          drawGrid(1, null);

          drawAxis(0, AxisYColour, AxisXColour) // to prevent clearing 

          drawGrid(0, "#000000")

          tempStylesContainer.tempGridLineColour = "#000000";

          alert("Successfully defaulted this property back to its default colour!");

        } else if (prompts[i][2] == 2) {

          drawAxis(1, null, null)

          drawAxis(0, AxisYColour, GridCanvasPrompt)

          drawGrid(0, GridLineColour) // to prevent clearing 

          tempStylesContainer.tempAxisXColour = "#CD5C5C";

          alert("Successfully defaulted this property back to its default colour!");

        } else if (prompts[i][2] == 3) {

          drawAxis(1, null, null)

          drawAxis(0, GridCanvasPrompt, AxisXColour)

          drawGrid(0, GridLineColour) // to prevent clearing 

          tempStylesContainer.tempAxisYColour = "#000982";

          alert("Successfully defaulted this property back to its default colour!");

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

referenceOfWorkspaceGrid = document.getElementById("Workspace")

//const workspaceRect = referenceOfWorkspaceGrid.getBoundingClientRect();

summonX = referenceOfWorkspaceGrid.left;

summonY = referenceOfWorkspaceGrid.top; 

console.log(summonX, " == SUMMON X || SUMMON Y == ", summonY)

document.getElementById("AND").addEventListener("click", () =>cloneObject("AND", summonX, summonY));  // When AND Gate button is pressed, 
                                                                                              // an AND Gate is spawned in. 

document.getElementById("OR").addEventListener("click", () =>cloneObject("OR", summonX, summonY));  // When OR Gate button is pressed, 
                                                                                            // an OR Gate is spawned in. 

document.getElementById("NOT").addEventListener("click", () =>cloneObject("NOT", summonX, summonY)); // When NOT Gate button is pressed, 
                                                                                   // a NOT Gate is spawned in. 

document.getElementById("XOR").addEventListener("click", () =>cloneObject("XOR", summonX, summonY)); // When XOR Gate button is pressed, 
                                                                                   // an XOR Gate is spawned in. 

document.getElementById("HoldButton").addEventListener("click", () =>cloneObject("HoldButton", summonX, summonY)); // When the Button 
                                                                                                 // button is pressed, 
                                                                                                 // a Button spawns in. 

document.getElementById("Lightbulb").addEventListener("click", () =>cloneObject("Lightbulb", summonX, summonY)); // When the Lightbulb 
                                                                                               // button is pressed, a 
                                                                                               // Lightbulb is spawned
                                                                                               // in. 

document.getElementById("Speaker").addEventListener("click", () =>cloneObject("Speaker", summonX, summonY)); // When the Speaker button 
                                                                                           // is pressed, a Speaker is 
                                                                                           // spawned in. 

                                                                                           // !-> IDs are CASE 
                                                                                           // SENSITIVE! 

//cloneObject("OR", 545, 678)

function cloneObject(gateType, posiX, posiY){ // This is the function that is utilised when the anonymous function 
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

    clone.setAttribute("gatetype", gateType); //lowercase for dom compatibility 



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

    if (gateType != "NOT") {

      clone.setAttribute("state", 0)

      gateImage.setAttribute("src", "/Media/DeactivatedState/" + gateType + "_Deactivated.png"); 
        // We then set said the UI Image element of the master object clone. 
          // This is done by setting the source attribute of the image tag to be that of the file pathway concatonating 
          // with the passed parameter / argument in addition to its default state, which is to be Deactivated by 
          // default. 
        // !-> ERRORS OCCUR WHEN CASE SENSITIVITY IS UNDERLOOKED & NON-EXISTENT FILE PATHWAYS ARE STATED!

    } else {

      clone.setAttribute("state", 1)

      gateImage.setAttribute("src", "/Media/ActivatedState/" + gateType + "_Activated.png"); 
      
    }

    headEl.setAttribute("id", divname); // We then manually state with this instruction that our new master object
                                        // clone should retain a custom, unique ID produced earlier. 

    dragElement(document.getElementById(divname)); // Now that the object has a unique ID, we reference it and tell
                                                   // the object with that unique ID to have draggable properties, 
                                                   // so that it can be moved around the Workspace without the 
                                                   // browser treating it like a plain image. 

    clone.style.top=posiY + "px";    // This instruction attempts to manually set the position of the master object clone
                            // to a padded offset position of X amount of pixels from the top. 
                              // By default, it is set to be slightly padded on spawn, so a value of 100 will do 
                              // the job well. 

    clone.style.left=posiX + "px";   // This instruction attempts to manually set the position of the master object clone 
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

    // for (let x = 0; x < objectRef.inputs; x++) {

    //   console.log(x);

    // };

  }; 
    
}; // The function for the Object Initialisation that produces a Logic Gate object into the Workspace, 
   // from the master object DIV ends here. 
  
              //console.log(objectRef.argument)

// ** SCRIPT 004 ** The function for Logic Gate Object summoning ends here. 

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-

//  ** SCRIPT 006 ** Sets the currentItem variable & apply any highlighting that is needed to display 
// the selection. 

interactivityCheck = document.querySelectorAll('div[tag^="interactableObject"]');

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



document.addEventListener('click', (e) => {
  // 1. Check if the clicked element (e.target) has the highlight class
  const clickedHighlight = e.target.classList.contains('gateObjectHighlight');

  // 2. If it DOES NOT have the class, remove the class from everything that does
  if (!clickedHighlight) {
      const highlightedItems = document.querySelectorAll('.gateObjectHighlight');
      
      highlightedItems.forEach(item => {
        item.classList.remove('gateObjectHighlight');
      });

      console.log(currentItem);

      currentItem = null; 

      console.log('REMOVED HIGHLIGHTED OBJECTS -- Selection cleared');
  }
});



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

  //maxX = winW - elmnt.offsetWidth - 1,  // This instruction calculates the maximum positions (width-wise) 
                                        // on the Workspace before the Logic Gate UI Object would leave the
                                        // screen. 
                                        // This is the absolute value. 

    //maxY = winH - elmnt.offsetHeight - 1; // This instruction calculates the maximum positions (height-wise)
                                          // on the Workspace before the Logic Gate UI Object would leave the
                                          // screen. 
                                          // This is the abolsute value. 

  var sizeOfWorkspaceY = document.getElementById("Workspace").offsetHeight; 
  var sizeOfWorkspaceX = document.getElementById("Workspace").offsetWidth; 

  maxX = sizeOfWorkspaceX, // TO DO 
  maxY = sizeOfWorkspaceY;


  console.log("MaxX Debug: ", maxX)
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

  // var minY = sizeOfBaseY - sizeOfWorkspaceY;
  // var minX = sizeOfBaseX - sizeOfWorkspaceX; 

  var minY = -1;
  var minX = -1; 

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

  OBJ_ID = document.getElementById(e.id).parentNode.parentNode.id; 

  console.log("OBJ_ID == ", OBJ_ID)

  console.log("IO || IOREFERENCE == ", IO, IOREFERENCE)

  IOPARENT = IOREFERENCE.parentNode;

  IOHEADER = IOPARENT.parentNode; 

  

  console.log("io parent == ", IOHEADER)

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
      IOPARSE.PARENTOUTPUTUID = OBJ_ID; 
      IOPARSE.RECEIVERTYPE = IOHEADER.getAttribute("gatetype");
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
      IOPARSE.PARENTINPUTUID = OBJ_ID; 
      IOPARSE.OUTPUT = IOREFERENCE; 
      IOPARSE.TRANSMITTERTYPE = IOHEADER.getAttribute("gatetype");
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

  INPUTID = PARSED_PRD.PARENTINPUTUID; 
  OUTPUTID = PARSED_PRD.PARENTOUTPUTUID; 

  INPUTTYPE = PARSED_PRD.RECEIVERTYPE; 
  OUTPUTTYPE = PARSED_PRD.TRANSMITTERTYPE; 

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

    itemsCreated, 

    INPUTTYPE,
    OUTPUTTYPE, 

    INPUTID, 
    OUTPUTID 
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



wireContainerReference.addEventListener('click', (event) => {


    const isRestNull = jsonSaveWorkspace.slice(1).every(item => item === null);

    const clickedElement = event.target;

    console.log(clickedElement);


    if (clickedElement.id && clickedElement.id.startsWith("Wire") && simulate != true) {


      console.log("A wire was clicked!", clickedElement.id);
      
      clickedElement.setAttribute("stroke", "red"); 

      objectPair = clickedElement.getAttribute("PairedData"); 


      console.log(objectPair);


      //if (jsonSaveWorkspace[0] == null && jsonSaveWorkspace[1] == null) {

        //jsonSaveWorkspace.splice(objectPair, 1);

      //  jsonSaveWorkspace[objectPair] = null; 

      //  jsonSaveWorkspace.length = 0; 

      //  console.log(jsonSaveWorkspace, " has been emptied!")

      //} else { 

        //jsonSaveWorkspace.splice(objectPair, 1);

      jsonSaveWorkspace[objectPair] = null; 

      //}

      clickedElement.remove();

      presentObjects - 2; 

      // cleanup

      if (isRestNull) {

        jsonSaveWorkspace.length = 0;

        console.log(jsonSaveWorkspace, " has been emptied!");

      } else {

        //jsonSaveWorkspace = jsonSaveWorkspace.filter(item => item !== null);

        console.log("After deletion .. ", jsonSaveWorkspace);

        // connectionsInitialised--;

        // console.log(connectionsInitialised);

      };

    };

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

  NUMOFGATES,

  INPUTTYPE,
  OUTPUTTYPE,

  INPUTUNIQUEID,
  OUTPUTUNIQUEID) {

  //console.log(CONNECTEDOBJECT_INPUTREF)


  if (MODE == 0) {
    const saveFile = {

      CONNECTEDOBJECT_A:      CONNECTEDOBJECT_INPUTREF, 
      CONNECTEDOBJECT_B:      CONNECTEDOBJECT_OUTPUTREF,


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


      NUMOFGATES:             NUMOFGATES,

      CONNECTEDOBJECT_A_TYPE: INPUTTYPE,
      CONNECTEDOBJECT_B_TYPE: OUTPUTTYPE, 

      OBJECTA_INPUTID:        INPUTUNIQUEID,
      OBJECTB_OUTPUTID:       OUTPUTUNIQUEID

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

  if (simulate != true) {

    TYPE = prompt("Please enter the TYPE of project data you want to save.\nEnter the letter 'L' to save the layout data, and enter\nthe letter 'P' to save your Logic Gate circuit project.\nPress ESC to halt the saving process.");

    TYPE = TYPE.toUpperCase();

    if (TYPE == 'P') {
      
      saveData(0, jsonSaveWorkspace)

      console.log("Saving Simboard Layout Data has been attempted.")

    } else if (TYPE == 'L') {

      saveData(1, tempStylesContainer)

      console.log("Saving Simboard Workspace Project Data has been attempted.")

    } else {

      confirm("Could not understand saving format. Please try again!")

    };
 
  } else { // validation 

    alert("You cannot save a Simboard File whilst the Circuits in your Workspace are being simulated!\nPlease stop the simulation to save a Simboard File to your local disc!")
    console.warn("You cannot save a Simboard File whilst the Circuits in your Workspace are being simulated!\nPlease stop the simulation to save a Simboard File to your local disc!")

  };

};




getPropertiesLoadButton = document.getElementById("load");  // We fetch the 

//link.setAttribute('href', "#");

getPropertiesLoadButton.onclick= function() {

  if (simulate != true) {

    confirmation = confirm("Remember to save your current project as loading in a new Layout or Project file can override the current Layout or Project data present right now.\nPress CANCEL to halt the loading process until everything is saved.\nPress OK to initialise the loading process.")

    //setTimeout(5000) 

    if (importedFileType == 0) {

      // add a better null check snippet 

      if (confirmation == true && jsonSaveWorkspaceOverwrite[0] != null) {

        //TYPE = prompt("Please enter the TYPE of project data you want to load into Simboard.\nEnter the letter 'L' to load your layout data file, and enter\nthe letter 'P' to load your Logic Gate circuit into the Workspace!");

        // if (clearWorkspace() {})

        stopLoadGif()

        clearWorkspace()// !!FUNC

        redrawImport(0)

      } else { 

        alert("No file was found in the temporary reserve!\n\nIf a file has been recognised, a little animation will play on the LOAD BUTTON icon, signifying a Simboard JSON file has been loaded into the temporary reserve.\n\nPlease try again!");
      
      };

    } else if (importedFileType == 1) {

      if (confirmation == true && !(Object.keys(tempStylesContainerOverwrite).length === 0)) {

      stopLoadGif();

      redrawImport(1);

      } else { 

      alert("No file was found in the temporary reserve!\n\nIf a file has been recognised, a little animation will play on the LOAD BUTTON icon, signifying a Simboard JSON file has been loaded into the temporary reserve.\n\nPlease try again!")
      
      };

    } else {

      alert("The loading process was cancelled, most likely because no file has been dragged & dropped into the Workspace or if the Loading Process was terminated / cancelled!\n\n - Please check the details of this outcome in the Console / Developer Console!")

      console.warn("There was an error reading your imported file, please try again!\n\nThis could be because your file does not have the 'JSON' file extension, has bypassed some backend validation process, or has been corrupted.\n\nTo fix this, go into your imported file, and change the 'fileFormat' value to a 0 for Workspace Project data, or to a 1 for UI Layout data.")

    };

  } else { 

    alert("You cannot load a Simboard File from the temporary reserve whilst the Circuits in your Workspace are being simulated!\nPlease stop the simulation to load a Simboard File from the temporary reserve!")
    console.warn("You cannot load a Simboard File from the temporary reserve whilst the Circuits in your Workspace are being simulated!\nPlease stop the simulation to load a Simboard File from the temporary reserve!")

  };

  //   TYPE = TYPE.toUpperCase();

  //   if (TYPE == 'P') {

  //     loadData(0, jsonSaveWorkspace)

  //     console.log("Loading Simboard Layout Data has been attempted.")

  //   } else if (TYPE == 'L') {

  //     loadData(1, cssConcatonates)

  //     console.log("Loading Simboard Workspace Project Data has been attempted.")

  //   } else {

  //     confirm("Could not understand loading format. Please try again!")

  //   }

  // } else {

  //   console.log("Cancelled loading operation.")

  // }

}



const loadGifContents = [
  "/Media/GIFFYFrames/F0.png",
  "/Media/GIFFYFrames/F1.png",
  "/Media/GIFFYFrames/F2.png",
  "/Media/GIFFYFrames/F3.png",
  "/Media/GIFFYFrames/F4.png",
  "/Media/GIFFYFrames/F5.png",
  "/Media/GIFFYFrames/F6.png",
  "/Media/GIFFYFrames/F7.png",
  "/Media/GIFFYFrames/F8.png",
  "/Media/GIFFYFrames/F9.png",
  "/Media/GIFFYFrames/F10.png",
  "/Media/GIFFYFrames/F11.png",
  "/Media/GIFFYFrames/F12.png",
  "/Media/GIFFYFrames/F13.png",
  "/Media/GIFFYFrames/F14.png"
]

currentAnimFrame = 0; 

frameRate = null; 
blinkRate = null; 

animDelay = 215; // millisecond interval between frames (14 frames / 3 seconds = 215 ms/frame)
blinkDelay = 1500; 

loadButtonIcon = document.getElementById("load").children[1]; // Adjust index based on your HTML structure

loadButtonBackgroundRef = document.getElementById("load");

function playLoadGif() {



  // Start the interval (143ms for a 2-second total loop)
  frameRate = setInterval(() => {
      // Update the image source
      loadButtonIcon.setAttribute("src", loadGifContents[currentAnimFrame]);

      // Move to next frame, or reset to 0 if at the end
      currentAnimFrame = (currentAnimFrame + 1) % loadGifContents.length;

      
      if (currentAnimFrame % 4 === 0) {
        loadButtonBackgroundRef.style.opacity = (loadButtonBackgroundRef.style.opacity == "0.9") ? "1" : "0.9";
      }

  }, animDelay);

}

function stopLoadGif() {

  clearInterval(frameRate)

  document.getElementById("load").children[1].setAttribute("src", "/Media/Layout/LoadProject.png");

  loadButtonBackgroundRef.style.opacity = "1";

}






function download(content, fileName, contentType) {

    var a = document.createElement("a");

    var file = new Blob([content], {type: contentType});

    a.href = URL.createObjectURL(file);

    a.download = fileName;

    a.click();

}



function saveData(MODE, DATA) {
  // c = 0; // debugging value
  // console.log(c) // debugging branch 
  //extension = ".json"


    filenamePrompt = prompt("Please enter the name for your file below,\nexcluding symbols and special characters:")

    author = prompt("Who is authoring this Simboard File?\n(You can enter your name or alias if you want to!)")

    //var file = new Blob([DATA], {type: "json"});

    console.log(DATA)

    typeOfFormat = MODE; 

    if(MODE == 0) {

      const jsonFormat = {

        header: {

          fileFormat:     MODE,
          noConns:        connectionsInitialised,
          noObjs:         presentObjects, 
          fileType:       "JSON (JavaScript Object Notation)",
          sbVersion:      simboardVersion,
          timeOfSave:     new Date().toISOString(),
          website:        "Simboard",
          validator:      "4po7cjd5SXtgj187_14DagT_CHRISTOPHER31CUPID",
          circuitAuthor:  author

        },

        circuitBuild:     DATA

      }; 
      
      jsonPackage = JSON.stringify(jsonFormat, null, 2); // null removes junk data in jsonWorkspace, 2 makes lines of space

      console.clear();

      console.log("DATA THAT WILL BE SAVED:\n", jsonPackage);

      download(jsonPackage, filenamePrompt + '.json', 'text/plain');

      return; 

    } else if (MODE == 1) {


      const jsonFormat = {

        header: {

          fileFormat:     MODE,
          noConns:        "no",
          noObjs:         "no", 
          fileType:       "JSON (JavaScript Object Notation)",
          sbVersion:      simboardVersion,
          timeOfSave:     new Date().toISOString(),
          website:        "Simboard",
          validator:      "4po7cjd5SXtgj187_14DagT_CHRISTOPHER31CUPID",
          circuitAuthor:  author

        },

        styleBuild:     DATA

      }; 

      jsonPackage = JSON.stringify(jsonFormat, null, 2);

      console.clear();

      console.log("DATA THAT WILL BE SAVED:\n", jsonPackage);

      download(jsonPackage, filenamePrompt + '.json', 'text/plain');

      return; 

    }

};

    // if (window.navigator.msSaveOrOpenBlob) // IE10+

    //     window.navigator.msSaveOrOpenBlob(jsonPackage, filenamePrompt);

    // else { // Others

    //     var a = document.createElement("a"),

    //       url = URL.createObjectURL(jsonPackage);

    //       console.log(url)

    //     a.href = url;

    //     a.download = filenamePrompt;

    //     document.body.appendChild(a);

    //     a.click();

    //     setTimeout(function() {

    //         document.body.removeChild(a);

    //         window.URL.revokeObjectURL(url);  

    //     }, 0); 
        
    // }; 

    // };

function loadData(DATA) { // loads everything bts , waits until load button is clicked and then replaces everything 

  loadButtonImgRef = document.getElementById("load").children[1];

  jsonSaveWorkspaceOverwrite = []; 

  console.clear();

  console.log(DATA);


  
  fileAuthor = DATA.header.circuitAuthor; 

  fileDOB = DATA.header.timeOfSave;

  fileVersion = DATA.header.sbVersion;

  fileObjConns = DATA.header.noConns;

  fileTotalObjs = DATA.header.noObjs;

  if (DATA.header.fileFormat == 0) {

    fileType = "Workspace Circuit"

    importedFileType = 0; 

  } else if (DATA.header.fileFormat == 1) {

    fileType = "Layout"

    importedFileType = 1

  } else {

    fileType = null; 

    importedFileType = null; 

  }


  if (DATA.header.validator == "4po7cjd5SXtgj187_14DagT_CHRISTOPHER31CUPID") { // "encrypted" key....

    //console.log("JSON File has been validated through the first cycle!"); }

    if (DATA.header.fileFormat == 0) { // load logic for workspace circuit 

      //console.log("JSON File has been validated through the second cycle!"); } } 

      console.log("Control flow is going into reading into reading new imported Workspace data!");


      console.clear()

      console.log(`A Simboard File has been loaded into a temporary reserve!\nPlease CLICK THE LOAD PROJECT BUTTON to replace the current circuit with the imported one!\n\n\nThe author of the imported file is: ${fileAuthor}.\n\nThe imported file contains ${fileType} data.\n\nThe imported file was created at: ${fileDOB}.\n\nThis file was made in Simboard Version: ${fileVersion}.\n\nThis file contains ${fileObjConns} Logic Gate object connections.\n\nThis file contains ${fileTotalObjs} Logic Gate objects.`)

      alert(`A Simboard File has been loaded into a temporary reserve!\nPlease CLICK THE LOAD PROJECT BUTTON to replace the current circuit with the imported one!\n\n\nThe author of the imported file is: ${fileAuthor}.\n\nThe imported file contains ${fileType} data.\n\nThe imported file was created at: ${fileDOB}.\n\nThis file was made in Simboard Version: ${fileVersion}.\n\nThis file contains ${fileObjConns} Logic Gate object connections.\n\nThis file contains ${fileTotalObjs} Logic Gate objects.`)



      importedData = DATA.circuitBuild; 

      console.log("Data parsed into load Data process function is: ", importedData)



      jsonSaveWorkspaceOverwrite = importedData; 

      console.log("Data in 'cache' is: ", jsonSaveWorkspaceOverwrite)


      //  //jsonSaveWorkspaceOverwrite = []; 

      // importedData.forEach(gateConnection => {

      //   //console.log(gateConnection)

      //   console.log(gateConnection.INPUTOBJECT_POSX)
      //   console.log(gateConnection.INPUTOBJECT_POSY)

      //   //console.log(gateConnection.CONNECTEDOBJECT_A_TYPE)

      //   cloneObject(
      //     gateConnection.CONNECTEDOBJECT_A_TYPE,
      //     parseInt(gateConnection.INPUTOBJECT_POSX),  
      //     parseInt(gateConnection.INPUTOBJECT_POSY),  
      //   )

      //   console.log("Looping through jsonSaveWorkspace list!")
        
      //   console.log(importedData.circuitBuild.gateConnection)

      //   console.log(
      //     gateConnection.CONNECTEDOBJECT_A,
      //     gateConnection.INPUTOBJECT_POSX,
      //     gateConnection.INPUTOBJECT_POSY
      //   )

      //   // console.log(
      //   //   cloneObject(
      //   //     "AND",        // gate type 
      //   //     500,
      //   //     500
      //   //     //gateConnection.CONNECTEDOBJECT_INPUTREF_POSX, // x pos 
      //   //     //gateConnection.CONNECTEDOBJECT_INPUTREF_POSY, // y pos 
      //   //   )
      //   // )

      // })

    } else if (DATA.header.fileFormat == 1) { // load logic for css concatonatesd ui styling 

      console.log("Control flow is going into reading into reading new imported UI Layout data!")


      console.clear()

      console.log(`A Simboard File has been loaded into a temporary reserve!\nPlease CLICK THE LOAD PROJECT BUTTON to replace the current circuit with the imported one!\n\n\nThe author of the imported file is: ${fileAuthor}.\n\nThe imported file contains ${fileType} data.\n\nThe imported file was created at: ${fileDOB}.\n\nThis file was made in Simboard Version: ${fileVersion}.\n\nThis file contains ${fileObjConns} Logic Gate object connections.\n\nThis file contains ${fileTotalObjs} Logic Gate objects.`)

      alert(`A Simboard File has been loaded into a temporary reserve!\nPlease CLICK THE LOAD PROJECT BUTTON to replace the current circuit with the imported one!\n\n\nThe author of the imported file is: ${fileAuthor}.\n\nThe imported file contains ${fileType} data.\n\nThe imported file was created at: ${fileDOB}.\n\nThis file was made in Simboard Version: ${fileVersion}.\n\nThis file contains ${fileObjConns} Logic Gate object connections.\n\nThis file contains ${fileTotalObjs} Logic Gate objects.`)



      importedData = DATA.styleBuild; 

      console.log("Data parsed into load Data process function is: ", importedData)



      tempStylesContainerOverwrite = importedData; 

      console.log("Data in 'cache' is: ", jsonSaveWorkspaceOverwrite)


    };

  };


    

  //console.log(importedData)

  
  // d = 1; 
  // console.log(d) //debugging branch 

  // //JSON.parse()

  // const file = event.target.files[0];
  // const reader = new FileReader();

  // reader.onload = function(e) {
  //   const content = e.target.result;
  //   // Turn the string back into a real JavaScript Object
  //   jsonSaveWorkspace = JSON.parse(content);
    
  //   // Re-render the gates based on the new data
  //   rebuildWorkspace(); 
  // };
  // reader.readAsText(file);
  
};






function clearWorkspace () {

  console.clear()

  const oldCircuitObjectsToDelete = document.querySelectorAll('div[tag^="interactableObject"]')

  const oldCircuitWireLinesToDelete = document.querySelectorAll('line[tag^="interactableObject"]')

  //console.log("WORKSPACE SPACE BEFORE:  ", jsonSaveWorkspace) -- this is good 

  oldCircuitObjectsToDelete.forEach(elm => {

    if (elm.id != "mydiv") {

      console.log("Erased ", elm.getAttribute("gatetype"), " from the Workspace!")

      elm.remove();

    } else {

      console.warn("Safety lock prevented deletion of master gate or master wire line!")

    }

  });



  oldCircuitWireLinesToDelete.forEach(el => {

    //console.log("running through!")

    if (el.id != "Wire") {

      console.log("Erased ", el.id, " from the Workspace!")

      el.remove();

    } else {

      console.warn("Safety lock prevented deletion of master wire line!");

    }

  });

  jsonSaveWorkspace = []; 

  PREVIOUSIOSTACK = []; 

  PREVIOUSIO = []; 

  hasFirstIOBeenSelected = false;
  hasSecondIOBeenSelected = false; 

  IOPOSITIONSTACK = [];
  DRAWBOXSTACK = [];

  IOPARSE = [];

  IOPARSE.INPUTPOSITIONX = 0; 
  IOPARSE.INPUTPOSITIONY = 0;
  IOPARSE.OUTPUTPOSITIONX = 0;
  IOPARSE.OUTPUTPOSITIONY = 0; 
  IOPARSE.INPUT = null;
  IOPARSE.OUTPUT = null; 

  gatePositionXGlobalReference = 0;
  gatePositionYGlobalReference = 0;

  selectedGatesStack = []; 
  totalSelectedGates = 0;


  
  //console.log("WORKSPACE SPACE AFTER:  ", jsonSaveWorkspace) -- this is good 

}














function rgbToHexadec(rgb) {
    const rgbValues = rgb.match(/\d+/g);

    
    if (!rgbValues || rgbValues.length < 3) return "#ffffff"; // Default fallback

    const r = parseInt(rgbValues[0]).toString(16).padStart(2, '0');

    const g = parseInt(rgbValues[1]).toString(16).padStart(2, '0');

    const b = parseInt(rgbValues[2]).toString(16).padStart(2, '0');
  


    return `#${r}${g}${b}`;

}



function getInvertedColour(hexValue) {
    // Removes the # if it exists !!!!
    hexValue = hexValue.replace('#', '');


    let r = parseInt(hexValue.substring(0, 2), 16);

    let g = parseInt(hexValue.substring(2, 4), 16);

    let b = parseInt(hexValue.substring(4, 6), 16);

    // THA INVERTER
    r = (255 - r).toString(16).padStart(2, '0');

    g = (255 - g).toString(16).padStart(2, '0');

    b = (255 - b).toString(16).padStart(2, '0');


    return `#${r}${g}${b}`;

}







const WorkspaceRef = document.getElementById("Base");
//const ImportAreaStyler = WorkspaceRef.children[0].children[0];

//console.log(tempStyle, " == tempStyle")


let computedRGB = window.getComputedStyle(GridCanvasColour).backgroundColor;


let currentHex = rgbToHexadec(computedRGB);


WorkspaceRef.addEventListener("dragover", (e) => {

  e.preventDefault();

  console.log(rgbToHexadec(tempStyle))

  GridCanvasColour.style.backgroundColor = getInvertedColour(tempStyle);
    // e.preventDefault();
    // console.log(tempStyle)
    // GridCanvasColour.style.backgroundColor = getInvertedColour(tempStyle); // Visual feedback
});

WorkspaceRef.addEventListener("dragleave", () => {
    GridCanvasColour.style.backgroundColor = tempStyle; // Visual feedback
});


WorkspaceRef.addEventListener("drop", (e) => {


    e.preventDefault();

    GridCanvasColour.style.backgroundColor = tempStyle; // Visual feedback

    const file = e.dataTransfer.files[0]; 

    if (file && file.type === "application/json") {

        if (simulate != true) {

          const reader = new FileReader();
          
          reader.onload = (event) => {

              try {

                  const data = JSON.parse(event.target.result);

                  //console.log(data) //-- find the data parsed through, if err detected, try swapping comments w. line below for load data!

                  playLoadGif()

                  loadData(data);


              } catch (err) {

                  alert("Error reading file. Is it valid JSON?");

              }

          };
          
          reader.readAsText(file);

        } else { 

          alert("You cannot import a Simboard File whilst the Circuits in your Workspace are being simulated!\nPlease stop the simulation to import your Simboard JSON File!")
          console.warn("You cannot import a Simboard File whilst the Circuits in your Workspace are being simulated!\nPlease stop the simulation to import your Simboard JSON File!")
    
        }

      } else {

        alert("Please drop a valid .json file!");

      }
    


});

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-

//  ** SCRIPT 006 ** Allows the Workspace to be navigated and moved around or zoomed in and out. 

// function redrawImport(DAT) { //TODO -- PORT THE CLONEOBJECTS DRAGGABLE GATE HEADER INTO THE JSONSAVEWORKSPACE CONNECTION LINE

//   if (jsonSaveWorkspaceOverwrite[0] != null) {

//     console.clear();

//     console.log("Redrawing imported circuit!");

//     jsonSaveWorkspace = jsonSaveWorkspaceOverwrite; 

//     console.log(jsonSaveWorkspace);


    

//     let idLimitInp = 0; 
//     let idLimitOut = 0; 

//     jsonSaveWorkspace.forEach(connec => {

//       if (connec != null) { 

//         idIterationInp = parseInt(connec.OBJECTA_INPUTID.replace("mydiv", ""));

//         if (idIterationInp > idLimitInp) idLimitInp = idIterationInp;

//       };

//     });

//     jsonSaveWorkspace.forEach(connek => {

//       if (connek != null) { 

//         idIterationOut = parseInt(connek.OBJECTB_OUTPUTID.replace("mydiv", ""));

//         if (idIterationOut > idLimitOut) idLimitOut = idIterationOut;

//       };

//     });


//     searchIndex = 1; 

//     const uniquor =  {};

//     jsonSaveWorkspace.forEach(gateConn => {

//       try { 


//         [ 
//         { gType: gateConn.CONNECTEDOBJECT_B_TYPE,  

//         gUniqueIdentifier: gateConn.OBJECTA_INPUTID, 

//         gX: gateConn.INPUTOBJECT_POSX, 

//         gY: gateConn.INPUTOBJECT_POSY 

//         }, 

//         {

//         gType: gateConn.CONNECTEDOBJECT_A_TYPE,  

//         gUniqueIdentifier: gateConn.OBJECTB_OUTPUTID, 

//         gX: gateConn.OUTPUTOBJECT_POSX, 

//         gY: gateConn.OUTPUTOBJECT_POSY 

//         }
//       ].forEach(potentialUniquor => {

//         if (potentialUniquor.gUniqueIdentifier && potentialUniquor.gType && !uniquor[potentialUniquor.gUniqueIdentifier]) {

//           try { 

//             cloneObject(potentialUniquor.gType, parseInt(potentialUniquor.gX), parseInt(potentialUniquor.gY));

//             uniquor[potentialUniquor.gUniqueIdentifier] = "mydiv" + itemsCreated;

//             //jsonSaveWorkspace[searchIndex] = "mydiv" + itemsCreated;

//             //searchIndex++; 
            

//           } catch(error) { 

//             alert("Fatal error was encountered during circuit redraw, causing the halting of the load function. Please try again!\n\n\nError type: ", error)
            
//           }

//         } else  {

//           console.log("Skipped duplicate connection entry for ", elem.gType, " , more specifically: ", elem.gUniqueIdentifier, " !");

//         }

//       })



//       jsonSaveWorkspace.forEach(gateConnec => {

//         fetchInput = uniquor[gateConnec.OBJECTA_INPUTID];  //document.getElementById(`${gateConnec.OBJECTA_INPUTID}`).children[0];
//         fetchOutput = uniquor[gateConnec.OBJECTB_OUTPUTID]; //document.getElementById(`${gateConnec.OBJECTB_OUTPUTID}`).children[0];

//         //jsonSaveWorkspace.forEach(gateConnec => {

//         //if (fetchInput && fetchOutput) {
//           // Target the interactive inner div (child[0]) as we discussed!
//         gateConnec.CONNECTEDOBJECT_A = "Wow"
//         gateConnec.CONNECTEDOBJECT_B = "Deloaw"
//         //}
//       })


      
//       } catch(error) {

//         alert("WARNING:\nA fatal error was encountered during circuit backend reconfiguration! This circuit project may be unstable to use, if possible, please try again!\n\n\nError type: ", error)

//       }

//       console.clear()

//       //console.log(connectionLineAttributes)


//       //connectionLineAttributes.forEach(elem => {



//       //})


//   })

//   console.clear()

//   console.log("JSONSAVEWORKSPACE BEFORE == ", jsonSaveWorkspace)

//   console.clear()

//   //jsonSaveWorkspace.forEach(gateConnec => {

//   //  fixCircuitFile(searchIndex, gateConnec.OBJECTA_INPUTID, gateConnec.OBJECTB_OUTPUTID);

//   //  console.log(gateConnec, " == searchIndex of: ", searchIndex)
    
//   //  searchIndex++; 

//   //})

//   } else { 

//     alert("No data was found in the temporary reserve!");

//   }



//     //gateConnec.CONNECTEDOBJECT_A = fetchInput; 
//     //gateConnec.CONNECTEDOBJECT_B = fetchOutput; 

    
//     // let sindex = 0; 

//     // fixCircuitFile(sindex++, jsonSaveWorkspace, gateConnec.OBJECTA_INPUTID, gateConnec.OBJECTB_OUTPUTID);

//     // //console.log(/*gateConnec,*/ " == searchIndex of: ", searchIndex)

//     // console.log("gateconnecs (I || O) == ", gateConnec.OBJECTA_INPUTID, gateConnec.OBJECTB_OUTPUTID)

//     // //sindex = sindex + 1; 

//     // //searchIndex++; 

//   //})

//   searchIndex = 0; // reset search index

//   console.log("search Index reset to: ", searchIndex)

// };

//   //   jsonSaveWorkspace.forEach(gateConn => {

//   //     //console.log(gateConnection)
//   //     try{
//   //     console.log(gateConn.INPUTOBJECT_POSX)
//   //     console.log(gateConn.INPUTOBJECT_POSY)
//   //     //console.log(gateConnection.CONNECTEDOBJECT_A_TYPE)

//   //     cloneObject(
//   //       gateConn.CONNECTEDOBJECT_A_TYPE,
//   //       parseInt(gateConn.INPUTOBJECT_POSX),  
//   //       parseInt(gateConn.INPUTOBJECT_POSY),  
//   //     )
//   //     } catch(error) {
//   //       alert("Fatal error was encountered during circuit redraw, causing the halting of the load function. Please try again!\n\n\nError type: ", error)
//   //     }
//   //   }); 
//   // } else { 
//   //   alert("No data was found in the temporary reserve!")

//   // }

// //}

// //  ** SCRIPT 006 ** The functions for Workspace navigation end here. 

function redrawImport(DATMOD) {

    if (DATMOD == 0) {

      const isCircuitOverwriteEmpty = jsonSaveWorkspaceOverwrite.slice(0).every(item => item === null)

      if (!isCircuitOverwriteEmpty) {

        const uniquor = {}; // Maps Old JSON ID -> New Workspace ID

          // spawns
        jsonSaveWorkspaceOverwrite.forEach(conn => {

            [
                { gId: conn.OBJECTA_INPUTID, gType: conn.CONNECTEDOBJECT_B_TYPE, gX: conn.INPUTOBJECT_POSX, gY: conn.INPUTOBJECT_POSY,
                  gInputBoxLocationX: conn.CONNECTEDOBJECT_INPUTREF_POSX, gInputBoxLocationY: conn.CONNECTEDOBJECT_INPUTREF_POSY
                },

                { gId: conn.OBJECTB_OUTPUTID, gType: conn.CONNECTEDOBJECT_A_TYPE, gX: conn.OUTPUTOBJECT_POSX, gY: conn.OUTPUTOBJECT_POSY,
                  gOutputBoxLocationX: conn.CONNECTEDOBJECT_OUTPUTREF_POSX, gOutputBoxLocationY: conn.CONNECTEDOBJECT_OUTPUTREF_POSY
                }

            ].forEach(obj => {

                if (obj.gId && obj.gType && !uniquor[obj.gId]) {

                    cloneObject(obj.gType, obj.gX, obj.gY);

                    uniquor[obj.gId] = "mydiv" + itemsCreated; 

                }

            });

        });


        jsonSaveWorkspaceOverwrite.forEach(conn => {

          connectionsInitialised++ 

          conn.OBJECTA_INPUTID = uniquor[conn.OBJECTA_INPUTID];
          conn.OBJECTB_OUTPUTID = uniquor[conn.OBJECTB_OUTPUTID];


          const gateA = document.getElementById(conn.OBJECTA_INPUTID);
          const gateB = document.getElementById(conn.OBJECTB_OUTPUTID);

          if (gateA && gateB) {

              conn.CONNECTEDOBJECT_A = gateB.children[0]; // idk how this fking works! but it does 
              conn.CONNECTEDOBJECT_B = gateA.children[0];

          }

          jsonSaveWorkspace = jsonSaveWorkspaceOverwrite; 


        });

        jsonSaveWorkspaceOverwrite = [];

        fixVisuals(jsonSaveWorkspace); 

        console.log("IMPORTED CIRCUIT HAS BEEN REDRAWN!");

        alert("Your circuit has been successfully redrawn!");

      } else { 

        alert("No relevant data was found in your imported file for the loading function to process!");

      }

  } else if (DATMOD == 1) {

    const isLayoutOverwriteEmpty = Object.keys(tempStylesContainerOverwrite).length === 0;

    if (!isLayoutOverwriteEmpty) {

      console.log("Found CSS TEMP STYLES OVERWRITE: ", tempStylesContainerOverwrite);

      replaceIndex = 0; 

      Object.entries(tempStylesContainerOverwrite).forEach(([key, value]) => {

        console.log("STYLING ATTRIB: ", key);
        console.log("STYLING VALUE: ", value);


        if (value !== null) {

          tempStylesContainer[key] = value;

        };

      });

      tempStylesContainerOverwrite = {}; // clear cache as everythings been loaded in ... 

      replaceIndex = 0; 

      styleCache0 = null; 
      styleCache1 = null; 
      styleCache2 = null; 

      Object.entries(tempStylesContainer).forEach(([key, value]) => {

        switch (replaceIndex) {
          case 0: 
            cssConcatonates[0].style.backgroundColor = value; 
          break;

          case 1: 
            cssConcatonates[1].style.backgroundColor = value; 
          break;

          case 2: 
            cssConcatonates[2].style.backgroundColor = value; 
          break;

          case 3: 
            cssConcatonates[3].style.backgroundColor = value; 
          break;

          case 4:

            for (let f = 0; f < cssConcatonates[4].length; f++) {

              currentProperty = cssConcatonates[4];

              console.log(currentProperty);

              if ((currentProperty[f].tagName) == "BUTTON" || "A") {

                if ((currentProperty[f].tagName) == "BUTTON") {

                  currentProperty[f].style.backgroundColor = value; 

                } else if ((currentProperty[f].tagName) == "A") {

                  currentProperty[f].children[0].style.backgroundColor = value; 

                };

              };

            };
            
          break;

          case 5: 

            for (let f = 0; f < cssConcatonates[5].length; f++) {

              currentProperty = cssConcatonates[5];

              console.log(currentProperty);

              if ((currentProperty[f].tagName) == "BUTTON" || "A") {

                if ((currentProperty[f].tagName) == "BUTTON") {

                  currentProperty[f].style.backgroundColor = value; 

                } else if ((currentProperty[f].tagName) == "A") {

                  currentProperty[f].children[0].style.backgroundColor = value; 

                };

              };

            };
            
          break;

          case 6: 
            styleCache0 = value; 
            drawGrid(0, null)
            drawGrid(1, styleCache0)
          break;

          case 7: 
            styleCache1 = value; 
            drawAxis(1, null, null)
            drawAxis(0, styleCache1, styleCache1)
            drawGrid(0, styleCache0)
          break;

          case 8: 
            styleCache2 = value;     
            drawAxis(1, null, null)
            drawAxis(0, styleCache2, styleCache1)
            drawGrid(0, styleCache0)
          break;
            
        };

        replaceIndex++; 

      }); 

      replaceIndex = 0; 


      // tempStylesContainerOverwrite.forEach(stylingAttrib => {

      //   tempStylesContainer[replaceIndex] = stylingAttrib; 

      //   console.log("Styling attribute: ", stylingAttrib, " has been implemented at RIndx: ", replaceIndex)

      //   replaceIndex++; 

      // })

    //   console.log("Replacement styling loop has been stopped for the first round!")

    //   replaceIndex = 0; 

    //   tempStylesContainer.forEach(toStyleUI => {

    //     if (replaceIndex == 0 || 1 || 2) {}

    //     cssConcatonates[replaceIndex] = toStyleUI;

    //     replaceIndex++; 

    //   })

    //   console.log("Replacement styling loop has been stopped for the second round!")

    //   replaceIndex = 0; 

    //   tempStylesContainerOverwrite = []; // clears data & wipes cache / temp reserve 

    // }

    } else {

      alert("The redraw function has failed!\n\nPlease refresh Simboard and try again, thank you!");
      console.warn("The redraw function has failed!\n\nPlease refresh Simboard and try again, thank you!");

    };

  };

  
};

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-

LineSolverButtonLink = document.getElementById("linesolver");

solverMode = 0; 


LineSolverButtonLink.onclick= function() {


  console.log(solverMode);

  if (simulate != true) {

    lineSolver(solverMode);

  } else {

    alert("You cannot change the Line Solver mode whilst the Circuits in your Workspace are being simulated!\nPlease stop the simulation to change the Connection Line Solver!")

  };

  solverMode++;
  
  if (solverMode == 5) {

    solverMode = 0; 

  };


};

function lineSolver(MODE /*lineRef, INPUTLOCX, INPUTLOCY, OUTPUTLOCX, OUTPUTLOCY*/ ) {

  if (MODE == 0) { // for each Wire ID in the workspace, do ...: (e.g. for implementation!)

    lineRef = document.querySelectorAll('line[tag="interactableObject"]') // because the line is different to a div so we can fetch it by the same tag

    lineRef.forEach(ConnectionLine => {

      let connLineX1 = ConnectionLine.x1.baseVal.value; 
      let connLineY1 = ConnectionLine.y1.baseVal.value;
      let connLineX2 = ConnectionLine.x2.baseVal.value;
      let connLineY2 = ConnectionLine.y2.baseVal.value;
    
      ConnectionLine.setAttribute("x1", connLineX1);
      ConnectionLine.setAttribute("y1", connLineY1);
      ConnectionLine.setAttribute("x2", connLineX2);
      ConnectionLine.setAttribute("y2", connLineY2);

    });

  } else if (MODE == 1) {

    lineRef = document.querySelectorAll('line[tag="interactableObject"]') // because the line is different to a div so we can fetch it by the same tag

    lineRef.forEach(ConnectionLine => {

      newPath = document.createElement("path")
      clonedPath = document.getElementById("Workspace").append(newPath)

      // let connLineX1 = 50; 
      // let connLineY1 = 46;
      // let connLineX2 = 45;
      // let connLineY2 = 84;
      
      // midpoint = (connLineX1 + connLineX2) / 2;

      // console.log(midpoint)

      // pathTrace = 
      //   `M ${connLineX1} ${connLineY1}
      //     L ${midpoint} ${connLineY1}
      //     L ${midpoint} ${connLineY2}
      //     L ${connLineX2} ${connLineY2}`; 

      // clonedPath.setAttribute("d", pathTrace);

      // // ConnectionLine.setAttribute("x1", connLineX1);
      // // ConnectionLine.setAttribute("y1", connLineY1);
      // // ConnectionLine.setAttribute("x2", connLineX2);
      // // ConnectionLine.setAttribute("y2", connLineY2);

    });



  } else if (MODE == 2) {

    // square-like line 

  } else if (MODE == 3) {

    // curvy line 

  } else if (MODE == 4) {

    // auto adjust all lines with Mode 0

  } else {

    console.warn("\nCould not find the specific Line Solver method entered!\n")

  };

};









// ** SCRIPT 007 ** Allows Logic Gate Objects to be wired together 

console.log(xLen, yLen, "size of workspace with X | Y");


function fixVisuals(PARSED_DAT) {

  searchIndex = 0; 

  PARSED_DAT.forEach(connLayer => {

    //gateAInputRef = document.getElementById(`${connLayer.OBJECTA_INPUTID}`).children[0];

    //gateBOutputRef = document.getElementById(`${connLayer.OBJECTB_OUTPUTID}`).children[0];
    
    wireNode = document.getElementById("Wire");

    clone = wireNode.cloneNode(true);

    document.getElementById("WiredConnection").appendChild(clone); 

    var wireName = "Wire" + searchIndex;

    clone.setAttribute("id", wireName);

    clone.setAttribute("PairedData", searchIndex);

    clone.setAttribute("x1", connLayer.POSITIONINPUTBOXX);

    clone.setAttribute("y1", connLayer.POSITIONINPUTBOXY);

    clone.setAttribute("x2", connLayer.POSITIONOUTPUTBOXX);

    clone.setAttribute("y2", connLayer.POSITIONOUTPUTBOXY);

    searchIndex++; 

  })

};

// function fixCircuitFile(INDEX, OPERATINGDATA, CONNECTORA, CONNECTORB) { // TODO: essentially I want to make it so each "CONNECTEDOBJECT_x?" is replaced with the clone 
//                                     // object IDs so that discern boolean works (REPLACE WITH DRAGGABLEGATEHEADER)
//                                     // i am thinking about a for loop ?
//                                     // maybe implement a for each connection layer, 
//   console.log("Currently fixing jsonSaveWorkspace conneciton layer: ", INDEX);
//   console.log("Currently fixing sending division {{CONNECTOR A || CONNECTOR B}} :  ", CONNECTORA, CONNECTORB);

//   //jsonSaveWorkspace.forEach(connectionLayer => {

//     // fetchInput = "TestForInput"       // THIS WORKS!!
//     // fetchOutput = "TestForOutput";    // THIS WORKS!! 

//   fetchInput = document.getElementById(`${CONNECTORA}`);
//   fetchOutput = document.getElementById(`${CONNECTORB}`);

//   //jsonSaveWorkspace.forEach(gateConnec => {
//   OPERATINGDATA[INDEX].CONNECTEDOBJECT_A = fetchInput; 
//   OPERATINGDATA[INDEX].CONNECTEDOBJECT_B = fetchOutput; 
//   //})



//     // connectionLayer.CONNECTEDOBJECT_A = fetchInput; 
//     // connectionLayer.CONNECTEDOBJECT_B = fetchOutput; 

//     // fetchInputType = fetchInput.getAttribute("class"); 
//     // fetchOutputType = fetchOutput.getAttribute("class")

//     // console.log("TYPES (I || O) == ", fetchInputType, fetchOutputType)

//     // if (fetchInput == "DraggableGateHeader") {

//     //   connectionLayer.CONNECTEDOBJECT_A = fetchInput; 

//     // } else if (fetchOutput == "DraggableGateHeader") { 

//     //   connectionLayer.CONNECTEDOBJECT_B = fetchOutput; 

//     // } else {

//     //   console.log("Skipping gate object container (where class == DraggableGate)")

//     // }

// //  })

  console.log("Fixed jsonWorkspace file (with updated references) == ", jsonSaveWorkspace)


  /// NO! What I must do is recall the initconnect function and loop it for each actual connection inside of the overwriteJson 
   // ... then a line must be drawn between the connected pair 
                                  


  //JSONSAVE.forEach(connection => {

  //  .querySelector('div^[]')
  //})

  // H = "H"; 

  // console.clear();

  // console.log(H);
  // console.log(H);
  // console.log(H);
  // console.log(H);
  // console.log(H);
  // console.log(H);
  // console.log(H);
  // console.log(H);
  // console.log(H);
  // console.log(H);
  // console.log(H);
  // console.log(H);
  // console.log(H);


//};


// ** SCRIPT 007 ** The functions for Logic Gate Objects to connect "wire" UI elements together, and produce 
// execution flow ends here. 

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-

// ** SCRIPT 008 ** Allows for the File Menu Buttons to be interacted with and perform different operations
// for the end user to utilise (Excluding the Saving & Loading buttons!)



// ** SCRIPT 008 ** The functions for File Menu functionality ends here. 

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-

var engineLink = document.getElementById("qualitysteps"); 

calculationDepth = 9; // default depth of calculation

engineLink.onclick= function() { // quality steps determine calculation depth. 

  //console.log("Quality steps function is initialised!")

  if (simulate != true) { 

    customQualityStepsPrompt = prompt("Please enter an INTERGER NUMBER of quality steps that you would like the engine to handle in your circuit.\nThe higher the INTEGER, the more data will be retained throughout the boolean calculations.");

    customQualitySteps = Math.ceil(customQualityStepsPrompt); // prevents putting 0 etc 

    console.log("Data inputted into prompt was: ", customQualitySteps);

    if (customQualitySteps > 0) {

      calculationDepth = customQualitySteps; 

      console.log("New Calculation Depth (Quality Steps for Boolean Calculation) == ", calculationDepth);

    } else {

      confirm("Entered data was not recognised, please input again!");

    };

  } else {

    alert("You cannot update the Engine Power whilst the Circuits in your Workspace are being simulated!\nPlease stop the simulation to update the Engine Power!")
    console.warn("You cannot update the Engine Power whilst the Circuits in your Workspace are being simulated!\nPlease stop the simulation to update the Engine Power!")

  }


};







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

    for (let i = 0; i < calculationDepth; i++) { // pre check of circuit for not gate defaulting to 1 throughout 

      discernBoolean();

    };


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

  const elements = document.querySelectorAll('div[gatetype^="HoldButton"]');

  elements.forEach(elm => {

      //console.log('Found element:', el);

      //el.style.fontWeight = 'bold';

      const existingButton = elm.querySelector('.UserInputAbility');

      if (!existingButton) {

        const btn = document.createElement('button');

        btn.innerText = 'TOGGLE BUTTON';

        btn.className = 'UserInputAbility'; 


        // if (btn.parentNode.parentNode.getAttribute("state") == 0) {
        //   btn.style.cursor = "url('/Media/Layout/toggleON.png'), auto" 
        // } else {
        //   btn.style.cursor = "url('/Media/Layout/toggleON.png'), auto" 
        // };

        
        btn.onclick = (e) => {

          e.stopPropagation(); // Prevents .. (DESCRIBE LATER)

          console.log('Button clicked for:', elm.getAttribute('gatetype'));

          buttonState = elm.getAttribute("state");

          buttonThumbnail = elm.children[0].children[2];

          //buttonStyle = elm.style;


          if (buttonState == 0) {

            elm.setAttribute("state", 1);

            buttonThumbnail.setAttribute("src", "/Media/ActivatedState/HoldButton_Activated.png");


          } else {

            elm.setAttribute("state", 0);

            buttonThumbnail.setAttribute("src", "/Media/DeactivatedState/HoldButton_Deactivated.png");


          }

          for (let i = 0; i < calculationDepth; i++) {

            discernBoolean();

          };
          

        };

        elm.appendChild(btn);

      }

  });



  } else if (MODE == 1) { // cleanup 

    console.log("Control Flow has stopped...");



    const allObjects = document.querySelectorAll('div[tag^="interactableObject"]')

    console.log(allObjects);

    allObjects.forEach(obj => {

      logicGateImageReference = obj.children[0].children[2];

      logicGateType = obj.getAttribute("gatetype");

      logicGateState = obj.getAttribute("state");


      console.log(logicGateType)

      console.log(logicGateState)


      if (logicGateType != "NOT") {

        obj.setAttribute("state", 0)

        logicGateImageReference.setAttribute("src", "/Media/DeactivatedState/" + logicGateType + "_Deactivated.png"); 

      } else {

        obj.setAttribute("state", 1)

        logicGateImageReference.setAttribute("src", "/Media/ActivatedState/" + logicGateType + "_Activated.png"); 
      
      }


    });

    const userInputsFound = document.querySelectorAll('.UserInputAbility');
    
    userInputsFound.forEach(btn => {

      btn.remove();

    });
    
    //console.log(`${userInputsFound.length} buttons removed.`);


  } else {


    console.log("Logic Error in logicFlow function!");


  };

};



// ** SCRIPT 010 ** Allows for Simboard Projects to be loaded from a JSON file. 

filterMenuDebugRef = document.getElementById("FilterMenuActivator");

filterMenuDebugRef.onclick= function() {

  console.clear();

  console.log("JsonSave: ", jsonSaveWorkspace);

  console.log("Previous IO Stack: ", PREVIOUSIOSTACK);

  console.log("CSS TempStyleContainer == ", tempStylesContainer);

  console.log("CSS Concatonates == ", cssConcatonates);

}






// ** SCRIPT 010 ** The functions for Simboard Loading end here. 

// ---

function discernBoolean() {
    // 1. Create a calculation storage container 
    const inputTracker = {}; 


    jsonSaveWorkspace.forEach(conn => {

        if (!conn) return;

        const sourceNode = conn.CONNECTEDOBJECT_A.parentNode;
        const targetNode = conn.CONNECTEDOBJECT_B.parentNode; // error is something to do with this... 
        const targetID = targetNode.id;

        console.log("PN SouNod == ", sourceNode); 

        console.log("PN TarNod == ", targetNode); 
        
        console.log("TARGET IDENTIFICATION == ", targetID);


        if (!inputTracker[targetID]) {

            inputTracker[targetID] = [];

        }


        const sourceState = parseInt(sourceNode.getAttribute("state"));
        inputTracker[targetID].push(sourceState);

    });

  
    for (const gateId in inputTracker) {

        const gateNode = document.getElementById(gateId);

        const type = gateNode.getAttribute("gatetype");

        const inputs = inputTracker[gateId]; 


        let finalState = 0;



        if (type === "Lightbulb" || type === "Speaker" || type === "OR") {
          console.log("EITHER LIGHTBULB, SPEAKER OR THE OR GATE VISITED!")

          finalState = inputs.includes(1) ? 1 : 0;

        } else if (type === "AND") {
          console.log("AND GATE VISITED!")
            // AND Logic: ALL inputs must be 1 (and must have at least 1 input)
            // const allInputsHigh = inputs.length >= 2 && inputs.every(val => val === 1);
            // finalState = allInputsHigh ? 1 : 0;

            const hasEnoughInputs = inputs.length >= 2;
            const allInputsActive = inputs.every(val => val === "1" || val === 1);

            finalState = (hasEnoughInputs && allInputsActive) ? 1 : 0;

            console.log("AND GATE IS RETURNING == ", finalState)

        } else if (type === "XOR") {


          const activeCount = inputs.filter(v => Number(v) === 1).length;


          finalState = (activeCount % 2 !== 0) ? 1 : 0;

          console.log(`XOR (${gateId}) found ${activeCount} active inputs. Returning: ${finalState}`);

        } else if (type === "NOT") {
          console.log("NOT GATE VISITED!")


          const signal = inputs.includes(1) || inputs.includes("1") ? 1 : 0;

          finalState = (signal === 0) ? 1 : 0; // FLIPS DA RESULT 

          console.log("MULTI INPUT NOT GATE IS RETURNING == ", finalState)

          // if (inputs.length === 1) {

          //     finalState = (inputs[0] === 1) ? 0 : 1;

          // } else {

          //     finalState = 0; // Or keep its current state

          // }

        } else {

          console.log("CRITICAL MAJOR ERROR !!! LOGIC GATE BOOLEAN NOT CALCULATED")

        }


        gateNode.setAttribute("state", finalState);



        const folder = finalState === 1 ? "ActivatedState" : "DeactivatedState";

        const suffix = finalState === 1 ? "_Activated.png" : "_Deactivated.png";


        if(gateNode.children[0].children[2]) {
            gateNode.children[0].children[2].setAttribute("src", `/Media/${folder}/${type}${suffix}`);
        }
        

    }
}

// ---

// function discernBoolean(DISCERN_MODE, transmittingAObject, transmittingBObject, currentObject) {

//   //InfinityPrevention = 0; 

//   transmitterA = transmittingAObject.parentNode;

//   transmitterB = transmittingBObject.parentNode;


//   transmitterAThumbnail = transmittingAObject.children[2];

//   transmitterBThumbnail = transmittingBObject.children[2];


//   transmitterAState = Boolean(transmitterA.getAttribute("state"));

//   transmitterBState = Boolean(transmitterB.getAttribute("state"));


//   receiver = currentObject.parentNode;

//   receiverThumbnail = currentObject.children[2]


//   nextReceiver = null; 

//   otherObject = null; 

//   if (DISCERN_MODE == 0) {

//     switch (receiver.getAttribute("gateType") == "AND") {

//       case "HoldButton": // Checks the button state, if 1, then 
//         ws

//       case "AND": 

//         if (transmitterAState && transmitterBState) {

//           receiver.setAttribute("state", 1)

//           receiverThumbnail.setAttribute("src", "/Media/ActivatedState/" + (receiver.getAttribute("state")) + "_Activated.png");

//           discernBoolean(0, receivingObject, otherObject, nextReceiver);

//         } else {

//           receiverThumbnail.setAttribute("src", "/Media/DeactivatedState/" + (receiver.getAttribute("state")) + "_Deactivated.png");

//         }

//     }



//     // receiverState = receiver.getAttribute("state")

//     // if ((receiver.getAttribute("gatetype") == "HoldButton")) {

//     //   if (transmitterAState == 1) {
        
//     //     discernBoolean(receiver, nextObject)

//     //   } else {

//     //     console.log("It's happening!")

//     //   }

//     // } else if ((receiver.getAttribute("gatetype") == "AND")) {

//     //   if (transmitterAState && transmitterBState) {
        
//     //     receiverState = 1;

//     //   } else {

//     //     receiverState = 0; 

//     //   }



//     // } else if ((receiver.getAttribute("gatetype") == "OR")) {

//     //   if (transmitterAState || transmitterBState) {
        
//     //     receiverState = 1;

//     //   } else {

//     //     receiverState = 0; 

//     //   }

//     // } else if ((receiver.getAttribute("gatetype") == "NOT")) {

//     //   let receiverState = transmitterAState === 1 ? 0 : 1;


//     // } else if ((receiver.getAttribute("gatetype") == "XOR")) {

//     //   if (transmitterAState ^ transmitterBState) {
        
//     //     receiverState = 1;

//     //   } else {

//     //     receiverState = 0; 

//     //   }


//     // } else if ((receiver.getAttribute("gatetype") == "Lightbulb")) {

//     //   if (transmitterAState == 1) {
        
//     //     receiverState = 1;

//     //   } else {

//     //     receiverState = 0; 

//     //   }


//     // } else if ((receiver.getAttribute("gatetype") == "Speaker")) {

//     //   if (transmitterAState == 1) {
        
//     //     receiverState = 1;

//     //   } else {

//     //     receiverState = 0; 

//     //   }

//     // }

//   } else if (DISCERN_MODE == 1) {

//     let x = 0; 

//   } else {

//     console.log("CRITICAL BOOLEAN CALCULATION ERROR -- Something is wrong with the circuit or function parameters! ")

//   }

// }


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