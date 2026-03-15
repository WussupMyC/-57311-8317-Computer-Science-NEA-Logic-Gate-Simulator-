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
//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-
// ** GLOBAL VARIABLE DEFINITIONS **

simboardVersion = "FR 1.0.0";

simulate = false; 


debugGuard = true; // prevents console log from appearing 


viewPosX = 0; 
viewPosY = 0; 
currentZoomValue = 1; 

zoomOutLimit = 3; 
zoomInLimit = 0.25; 
traverseSpeed = 35; 


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
  AxisYColour = "#4EB842",
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
tempStylesContainer.tempAxisYColour = "#4EB842";


tempStylesContainerOverwrite = {}; 

xLen = document.getElementById("GridCanvas").width;   // Defines how long a Workspace background object should stretch on the X Axis (e.g. Grid, Axis, Background)
yLen = document.getElementById("GridCanvas").height;   // Defines how long a Workspace background object should stretch on the Y Axis (e.g. Grid, Axis, Background)



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


searchIndex = 0; 


selectedGatesStack = [];  // Every time an object in the Workspace is selected, its HTML reference is pushed to this stack so that 
                          // interactivity can be validated and worked upon. 
totalSelectedGates = 0; // This holds the number total of the amount of selections on gates that have been registered. 


presentObjects = +0; // This holds the number of objects that are present in the Workspace (ones that have been spawned in, but 
                     // not deleted).

jsonSaveWorkspace = [];  // This holds all data for the logic gates present on the workspace plus connections. 

jsonSaveWorkspaceOverwrite = []; //               Holds the new data dragged into the WORKSPACe....

connectionSet = null; 

totalWires = 0; 

connectionsInitialised = 0 + searchIndex;  

importedFileType = null; 


speakerIdentifications = [
  "/Media/Audio/speakerSong0.mp3",
  "/Media/Audio/speakerSong1.mp3",
  "/Media/Audio/speakerSong2.mp3",
  "/Media/Audio/speakerSong3.mp3",
  "/Media/Audio/speakerSong4.mp3",
  "/Media/Audio/chirp.mp3",
  "/Media/Audio/mainsHum.mp3",
  "/Media/Audio/nature.mp3",
  "/Media/Audio/scream0.mp3",
  "/Media/Audio/scream1.mp3",
  "/Media/Audio/radio.mp3"
]

choiceOfSongByUser = 0; 

isSongPlayingStack = ["lambma"];

abilityToPulsate = true; 

pulseType = "river";

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-
// *** SCRIPT 000 *** -- Starts here 
// The purpose of the below code is to... 



function dumpFunc(){    // This is a temporary function for testing purposes 
                        //      DO NOT USE THIS FUNCTION FOR TRUE DEVELOPMENT 
            
}
const dumpVar = ".PlaceholderValue." + "dumpVar"; // This is a temporary debugging variable for testing purposes
                                                         //       DO NOT USE THIS FUNCTION FOR TRUE DEVELOPMENT  
                                                            
console.log(dumpVar);    // This instruction outputs the debug variable for testing purposes. 



// *** SCRIPT 000 *** -- Debugging function ends here. 
//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-
// *** SCRIPT 001 *** -- Starts here 
// The purpose of the below code is to... 



var link = document.getElementById("customise");  // We fetch the 

tempStyle = "#DEDE94"; 

link.onclick= function() {

  if (simulate != true) {

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


            if ((nextProperty[e].tagName) == "BUTTON" || "A") {

              if ((nextProperty[e].tagName) == "BUTTON") {

                nextProperty[e].style.backgroundColor = GridCanvasPrompt; 

              } else if ((nextProperty[e].tagName) == "A") {

                nextProperty[e].children[0].style.backgroundColor = GridCanvasPrompt

              }
  
              
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


            tempStylesContainer.tempGridLineColour = GridCanvasPrompt; 

            alert("Successfully changed colour to: " + GridCanvasPrompt + " !");

          } else if (prompts[i][2] == 2) {

            stylerCacheAxisX = GridCanvasPrompt;


            tempStylesContainer.tempAxisXColour = GridCanvasPrompt; 

            alert("Successfully changed colour to: " + GridCanvasPrompt + " !");

          } else if (prompts[i][2] == 3) {

            stylerCacheAxisY = GridCanvasPrompt; 


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

  } else {

    alert("You cannot edit the User Interface of this Simboard session whilst the Circuits in your Workspace are being simulated!\nPlease stop the simulation to edit the visual appearance of your Simboard application!")

    console.warn("You cannot edit the User Interface of this Simboard session whilst the Circuits in your Workspace are being simulated!\nPlease stop the simulation to edit the visual appearance of your Simboard application!")

  };

};



// *** SCRIPT 001 *** -- Ends here 
//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-
// *** SCRIPT 002 *** -- Starts here 
// The purpose of the below code is to... 



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



// *** SCRIPT 002 *** -- Ends here 
//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-
// *** SCRIPT 003 *** -- Starts here 
// The purpose of the below code is to... 



//GLOBAL MODIFIER DEFINITIONS : 
axisWidth = xLen;   // States that the X Axis line should stretch to a defined limit
                      // defined in the Global Variables section. (This prevents magic
                      // numbers!)

axisHeight = yLen;   // States that the Y Axis line should stretch to a defined limit 
                      // defined in the Global Variables sections. (This prevents magic
                      // numbers!)
        
function drawAxis(AXISMODE, AxisYRGB, AxisXRGB){  // This function produces the axis lines for the Workspace UI. 

  if (AXISMODE == 0) {

    var canvas0 = document.getElementById("GridCanvas"); // Fetches the canvas ID that was defined 
                                                              // in the HTML div "Workspace" -> "GridContainer" 
                                                              // -> "Grid Canvas"

    var canvas1 = document.getElementById("GridCanvas");

    var axisLineY = canvas0.getContext("2d"); // Defines the axis as a 2 dimensional line. 

    axisLineY.beginPath(); // 

    axisLineY.moveTo((canvas.width)/2, 0); // 

    console.log(axisWidth/2)

    axisLineY.lineTo((canvas.width)/2, canvas.height); // 

    axisLineY.strokeStyle = AxisYRGB; 

    axisLineY.lineWidth = 1.5; 

    axisLineY.stroke(); 


    
    var axisLineX = canvas1.getContext("2d"); 

    axisLineX.beginPath();

    axisLineX.moveTo(0, (canvas.height)/2); // 

    console.log(axisWidth/2)


    axisLineX.lineTo(canvas.width, (canvas.height)/2); // 

    axisLineX.strokeStyle = AxisXRGB; 

    axisLineX.lineWidth = 1.5; 

    axisLineX.stroke(); 


  } else if (AXISMODE == 1) {

    gridcell.clearRect(0,0,999,999);

  } else { 

    console.log("Mode inputted is unknown. -- ERROR")

  }


}; // The function that produces the correct Axis measurements ends here. 

drawAxis(0, AxisYColour, AxisXColour) // This instruction initialises the drawAxis to create an X and Y axis 
                                      // to stretch until it reaches the borders of the Workspace. 



// *** SCRIPT 003 *** -- Ends here 
//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-
// *** SCRIPT 004 *** -- Starts here 
// The purpose of the below code is to... 



speakerSound_0  = new Audio(`${speakerIdentifications[0]}`);
speakerSound_1  = new Audio(`${speakerIdentifications[1]}`);
speakerSound_2  = new Audio(`${speakerIdentifications[2]}`);
speakerSound_3  = new Audio(`${speakerIdentifications[3]}`);
speakerSound_4  = new Audio(`${speakerIdentifications[4]}`);
speakerSound_5  = new Audio(`${speakerIdentifications[5]}`);
speakerSound_6  = new Audio(`${speakerIdentifications[6]}`);
speakerSound_7  = new Audio(`${speakerIdentifications[7]}`);
speakerSound_8  = new Audio(`${speakerIdentifications[8]}`);
speakerSound_9  = new Audio(`${speakerIdentifications[9]}`);
speakerSound_10 = new Audio(`${speakerIdentifications[10]}`);
speakerSound_11 = new Audio(`${speakerIdentifications[11]}`);


speakerSound_0.loop   = true;
speakerSound_1.loop   = true;
speakerSound_2.loop   = true;
speakerSound_3.loop   = true;
speakerSound_4.loop   = true;
speakerSound_5.loop   = true;
speakerSound_6.loop   = true;
speakerSound_7.loop   = true;
speakerSound_8.loop   = true;
speakerSound_9.loop   = true;
speakerSound_10.loop  = true;
speakerSound_11.loop  = true;



enabledSound = false; 


function musicHandler(songToPlay) { // a global state audio system
  
  if (enabledSound == true) {

    switch (songToPlay) {

      case 0: 

        console.log("Flow is going into sound 0")

        speakerSound_0.play().catch(anyError => console.log("Audio play prevented due to ErrorType: ", anyError));

        break; 

      case 1:

        speakerSound_1.play().catch(anyError => console.log("Audio play prevented due to ErrorType: ", anyError));


        break; 

      case 2:

        console.log("Flow is going into sound 2")

        speakerSound_2.play().catch(anyError => console.log("Audio play prevented due to ErrorType: ", anyError));      

        break; 

      case 3:

        speakerSound_3.play().catch(anyError => console.log("Audio play prevented due to ErrorType: ", anyError));

        break; 

      case 4:

        speakerSound_4.play().catch(anyError => console.log("Audio play prevented due to ErrorType: ", anyError));

        break; 

      case 5:

        speakerSound_5.play().catch(anyError => console.log("Audio play prevented due to ErrorType: ", anyError));

        break; 

      case 6:

        speakerSound_6.play().catch(anyError => console.log("Audio play prevented due to ErrorType: ", anyError));

        break; 

      case 7:

        speakerSound_7.play().catch(anyError => console.log("Audio play prevented due to ErrorType: ", anyError));

        break; 

      case 8:

        speakerSound_8.play().catch(anyError => console.log("Audio play prevented due to ErrorType: ", anyError));

        break; 

      case 9:

        speakerSound_9.play().catch(anyError => console.log("Audio play prevented due to ErrorType: ", anyError));

        break; 

      case 10:

        speakerSound_10.play().catch(anyError => console.log("Audio play prevented due to ErrorType: ", anyError));

        break; 

      case 11:

        speakerSound_11.play().catch(anyError => console.log("Audio play prevented due to ErrorType: ", anyError));

        break; 

    };

  } else if (enabledSound == false) {  

    speakerSound_0.pause();
    speakerSound_1.pause();
    speakerSound_2.pause();
    speakerSound_3.pause();
    speakerSound_4.pause();
    speakerSound_5.pause();
    speakerSound_6.pause();
    speakerSound_7.pause();
    speakerSound_8.pause();
    speakerSound_9.pause();
    speakerSound_10.pause();
    speakerSound_11.pause();

  } else {

    console.warn("An error occured with the sound handler!");

  }


};



// *** SCRIPT 004 *** -- Ends here 
//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-
// *** SCRIPT 005 *** -- Starts here 
// The purpose of the below code is to... 



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



// *** SCRIPT 005 *** -- Ends here 
//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-
// *** SCRIPT 006 *** -- Starts here 
// The purpose of the below code is to... 



      // All of these instruction statements below initialise the different types of gates, by first gaining
      // the specfic ID related to said gate, so that we can access the button by which it can be added to the
      // Workspace with (See HTML Buttons inside the Object Menu Div for further explaination). Then, by casting 
      // a parameter into an anonymous function, we can tell said function to run once when the Event Listener 
      // detects a click from the users' mouse/input system. 
        // This anonymous is signified by the unassigned parenthesis () in the statements below. 

referenceOfWorkspaceGrid = document.getElementById("Workspace")


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



// *** SCRIPT 006 *** --  Ends here 
//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-
// *** SCRIPT 007 *** -- Starts here 
// The purpose of the below code is to... 



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
                                    
    var gateImage = clone.children[0].children[1]; // We get a reference to the master object clones' DIV's 
                                                  // image UI. This can be done because the only child inside 
                                                  // of the master object clone is an image tag (See HTML 
                                                  // mydivheader for further explaination). 


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

    inputARef = clone.children[0].children[0].children[0].getAttribute("id");
    inputBRef = clone.children[0].children[0].children[1].getAttribute("id");
    outputRef = clone.children[0].children[2].children[0].getAttribute("id");

    var inputAID = inputARef + itemsCreated; 
    var inputBID = inputBRef + itemsCreated; 
    var outputID = outputRef + itemsCreated; 

    clone.children[0].children[0].children[0].setAttribute("id",inputAID);
    clone.children[0].children[0].children[1].setAttribute("id",inputBID);
    clone.children[0].children[2].children[0].setAttribute("id",outputID);

  

    switch (gateType) {
      case "AND":
        document.getElementById(inputAID).style.display = "inline";
        document.getElementById(inputBID).style.display = "inline";
        document.getElementById(outputID).style.display = "inline";
        break;

      case "OR":
        document.getElementById(inputAID).style.display = "inline";
        document.getElementById(inputBID).style.display = "inline";
        document.getElementById(outputID).style.display = "inline";
        break;

      case "NOT":
        document.getElementById(inputAID).style.display = "inline";
        document.getElementById(outputID).style.display = "inline";
        break;

      case "XOR":
        document.getElementById(inputAID).style.display = "inline";
        document.getElementById(inputBID).style.display = "inline";
        document.getElementById(outputID).style.display = "inline";
        break;

      case "Lightbulb":
        document.getElementById(inputAID).style.display = "inline";
        break;

      case "Speaker":
        document.getElementById(inputAID).style.display = "inline";
        break;

      case "HoldButton":
        document.getElementById(outputID).style.display = "inline";
        break;

    };

  }; 
    
}; // The function for the Object Initialisation that produces a Logic Gate object into the Workspace, 
   // from the master object DIV ends here. 

   

// *** SCRIPT 007 *** -- Ends here 
//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-
// *** SCRIPT 008 *** -- Starts here 
// The purpose of the below code is to... 



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

  };

  console.log(selectedGatesStack)

};



// *** SCRIPT 008 *** -- Ends here 
//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-
// *** SCRIPT 009 *** -- Starts here 
// The purpose of the below code is to... 



document.addEventListener('click', (e) => {

  const clickedHighlight = e.target.classList.contains('gateObjectHighlight');


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



// *** SCRIPT 009 *** -- Ends here 
//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-
// *** SCRIPT 010 *** -- Starts here 
// The purpose of the below code is to... 



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



// *** SCRIPT 010 *** -- Ends here 
//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-
// *** SCRIPT 011 *** -- Starts here 
// The purpose of the below code is to... 



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

    selectCurrentItem(elmnt.id);


    console.log("currentItem = ", currentItem); // This instruction is used for debugging, to state the current 
                                                // item that is being selected (aka, the Logic Gate Object that 
                                                // has just been previously affected by the dragMouseDown
                                                // function). 

  };

};  // The function that permits the draggable property to said Logic Gate object ends here.



// *** SCRIPT 011 *** -- Ends here 
//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-
// *** SCRIPT 012 *** -- Starts here 
// The purpose of the below code is to... 



function elementDrag(e) { // This function visually produces the "dragging" visual aspect of UI Objects 
                          // in Simboard. It also calculates the new position of the UI element, and runs 
                          // every frame WHILST dragMouseDown is producing True for a Logic Gate UI Object. 

  e = e || window.event;  // Requests mouse data from the browser via e = e, or backtracks to 
                          // window.event for mouse data on older browsers. 

  e.preventDefault(); // Prevents default behaviour on the object when fired
                        // This includes disabling image dragging, etc. 

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


  var sizeOfBaseY = document.getElementById("Base").offsetHeight; 
  var sizeOfBaseX = document.getElementById("Base").offsetWidth; 


  var minY = -1;
  var minX = -1; 


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



// *** SCRIPT 012 *** -- Ends here 
//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-
// *** SCRIPT 013 *** -- Starts here 
// The purpose of the below code is to... 



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


};  // The main function that handles Object UI (*SCRIPT 009*) movement ends here. 



// *** SCRIPT 013 *** -- Ends here 
//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-
// *** SCRIPT 014 *** -- Starts here 
// The purpose of the below code is to... 



function ioCheck(e) { // The info passed as a parameter 


  IO = document.getElementById(e.id).id;

  IOREFERENCE = document.getElementById(e.id); /* Holds gate metadata */ 

  OBJ_ID = document.getElementById(e.id).parentNode.parentNode.id; 

  console.log("OBJ_ID == ", OBJ_ID)

  console.log("IO || IOREFERENCE == ", IO, IOREFERENCE)

  IOPARENT = IOREFERENCE.parentNode;

  IOHEADER = IOPARENT.parentNode.parentNode; 

  

  console.log("io parent == ", IOHEADER)

  console.log("io header == ", IOHEADER)

  PREVIOUSIO = PREVIOUSIOSTACK[PREVIOUSIOSTACK.length - 1] /* We do this in this statement so it's simpler to gain the previous IO's 
  unique ID later on in the branching 
  */


  console.log(IOREFERENCE.parent)


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



        hasFirstIOBeenSelected = false;

        hasSecondIOBeenSelected = false;



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



        hasFirstIOBeenSelected = false;

        hasSecondIOBeenSelected = false;

        console.log("ConnectionDraw Breakpoint decision hit.")


        initConnect(0, IOPARSE);  

        DRAWBOXSTACK = [];

        presentObjects++;

        for (let i in IOPARSE) {  // Clears all of the global reference so that the object can be reused 
          IOPARSE[i] = 0;
        }

      } else {

        console.log("ioCheck Function Return: Please wait.")

      }


    } else {

      console.log("CRITICAL ERROR READ // Gate IO Type Not Understood!");

    };
  } else {
    console.log("Same IO is selected")
  };



  console.log("prev io type == ", IOPOSITIONSTACK) 


  console.log("hasFirstIOBeenSelected == ", hasFirstIOBeenSelected);
  console.log("hasSecondIOBeenSelected == ", hasSecondIOBeenSelected);
  console.log("Draw Stack == ", DRAWBOXSTACK);

};



// *** SCRIPT 014 *** -- Ends here 
//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-
// *** SCRIPT 015 *** -- Starts here 
// The purpose of the below code is to... 



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

};



// *** SCRIPT 015 *** -- Ends here 
//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-
// *** SCRIPT 016 *** -- Starts here 
// The purpose of the below code is to... 



function initConnect(MODE, PARSED_PRD){   // The draws the connection and calls another function to add 
                                          // it to a save stack. 

  INPUTREFERENCE = PARSED_PRD.INPUT.parentNode.parentNode; 
  OUTPUTREFERENCE = PARSED_PRD.OUTPUT.parentNode.parentNode; 

  INPUTID = PARSED_PRD.PARENTINPUTUID; 
  OUTPUTID = PARSED_PRD.PARENTOUTPUTUID; 

  INPUTTYPE = PARSED_PRD.RECEIVERTYPE; 
  OUTPUTTYPE = PARSED_PRD.TRANSMITTERTYPE; 

  GATEREFERENCE_I = PARSED_PRD.INPUT;
  GATEREFERENCE_O = PARSED_PRD.OUTPUT;

  INPUTREFLOCATIONX = PARSED_PRD.INPUTPOSITIONX;
  INPUTREFLOCATIONY = PARSED_PRD.INPUTPOSITIONY; 
  OUTPUTREFLOCATIONX = PARSED_PRD.OUTPUTPOSITIONX; 
  OUTPUTREFLOCATIONY = PARSED_PRD.OUTPUTPOSITIONY; 



  DRAWINPUTLOCATIONX = PARSED_PRD.INPUTPOSITIONX; 
  DRAWINPUTLOCATIONY = PARSED_PRD.INPUTPOSITIONY;
  DRAWOUTPUTLOCATIONX = PARSED_PRD.OUTPUTPOSITIONX; 
  DRAWOUTPUTLOCATIONY = PARSED_PRD.OUTPUTPOSITIONY; 

  console.log("Input Parent == ", INPUTREFERENCE);
  console.log("OUTPUT Parent == ", OUTPUTREFERENCE); 


  const wireNode = document.getElementById("Wire"); // change to path in html then redo all throughout this program !!

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


  wirePathLine = 
  `M ${DRAWINPUTLOCATIONX} ${DRAWINPUTLOCATIONY} 
  L ${DRAWOUTPUTLOCATIONX} ${DRAWOUTPUTLOCATIONY}`;


  ConnectionLine.setAttribute("d", wirePathLine);


  ConnectionLine.setAttribute("PairedData", connectionsInitialised); 

  clone.style.display = "block"; 
  
  connectionsInitialised++; 

  console.log("Parsed PRD Values == ",
    DRAWINPUTLOCATIONX, 
    DRAWINPUTLOCATIONY, 
    DRAWOUTPUTLOCATIONX, 
    DRAWOUTPUTLOCATIONY)


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


};



// *** SCRIPT 016 *** -- Ends here 
//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-
// *** SCRIPT 017 *** -- Starts here 
// The purpose of the below code is to... 



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



      jsonSaveWorkspace[objectPair] = null; 


      clickedElement.remove();

      presentObjects - 2; 


      if (isRestNull) {

        jsonSaveWorkspace.length = 0;

        console.log(jsonSaveWorkspace, " has been emptied!");

      } else {



        console.log("After deletion .. ", jsonSaveWorkspace);

      };

    };

});



// *** SCRIPT 017 *** -- Ends here 
//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-
// *** SCRIPT 018 *** -- Starts here 
// The purpose of the below code is to... 



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


    console.log(saveFile);

    jsonSaveWorkspace.push(saveFile);

    console.log(jsonSaveWorkspace)

  } else {
    
    console.log("Logging data!")

  };
  

};



// *** SCRIPT 018 *** -- Ends here 
//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-
// *** SCRIPT 019 *** -- Starts here 
// The purpose of the below code is to... 



getPropertiesSaveButton = document.getElementById("save");  // We fetch the 



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



// *** SCRIPT 019 *** -- Ends here 
//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-
// *** SCRIPT 020 *** -- Starts here 
// The purpose of the below code is to... 



getPropertiesLoadButton = document.getElementById("load");  // We fetch the 


getPropertiesLoadButton.onclick= function() {

  if (simulate != true) {

    confirmation = confirm("Remember to save your current project as loading in a new Layout or Project file can override the current Layout or Project data present right now.\nPress CANCEL to halt the loading process until everything is saved.\nPress OK to initialise the loading process.");

    if (importedFileType == 0) {

      if (confirmation == true && jsonSaveWorkspaceOverwrite.every(item => item !== null)) {

        stopLoadGif()

        clearWorkspace()

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

};



// *** SCRIPT 020 *** -- Ends here 
//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-
// *** SCRIPT 021 *** -- Starts here 
// The purpose of the below code is to... 



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

  frameRate = setInterval(() => {

      loadButtonIcon.setAttribute("src", loadGifContents[currentAnimFrame]);

      currentAnimFrame = (currentAnimFrame + 1) % loadGifContents.length;

      if (currentAnimFrame % 4 === 0) {
        loadButtonBackgroundRef.style.opacity = (loadButtonBackgroundRef.style.opacity == "0.9") ? "1" : "0.9";
      };

  }, animDelay);

};



// *** SCRIPT 021 *** -- Ends here 
//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-
// *** SCRIPT 022 *** -- Starts here 
// The purpose of the below code is to... 



function stopLoadGif() {

  clearInterval(frameRate)

  document.getElementById("load").children[1].setAttribute("src", "/Media/Layout/LoadProject.png");

  loadButtonBackgroundRef.style.opacity = "1";

};



// *** SCRIPT 022 *** -- Ends here 
//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-
// *** SCRIPT 023 *** -- Starts here 
// The purpose of the below code is to... 



function download(content, fileName, contentType) {

    var a = document.createElement("a");

    var file = new Blob([content], {type: contentType});

    a.href = URL.createObjectURL(file);

    a.download = fileName;

    a.click();

};



// *** SCRIPT 023 *** -- Ends here 
//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-
// *** SCRIPT 024 *** -- Starts here 
// The purpose of the below code is to... 



function saveData(MODE, DATA) {


    filenamePrompt = prompt("Please enter the name for your file below,\nexcluding symbols and special characters:")

    author = prompt("Who is authoring this Simboard File?\n(You can enter your name or alias if you want to!)")


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

    };

};



// *** SCRIPT 024 *** -- Ends here 
//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-
// *** SCRIPT 025 *** -- Starts here 
// The purpose of the below code is to... 



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


    if (DATA.header.fileFormat == 0) { // load logic for workspace circuit 


      console.log("Control flow is going into reading into reading new imported Workspace data!");


      console.clear()

      console.log(`A Simboard File has been loaded into a temporary reserve!\nPlease CLICK THE LOAD PROJECT BUTTON to replace the current circuit with the imported one!\n\n\nThe author of the imported file is: ${fileAuthor}.\n\nThe imported file contains ${fileType} data.\n\nThe imported file was created at: ${fileDOB}.\n\nThis file was made in Simboard Version: ${fileVersion}.\n\nThis file contains ${fileObjConns} Logic Gate object connections.\n\nThis file contains ${fileTotalObjs} Logic Gate objects.`)

      alert(`A Simboard File has been loaded into a temporary reserve!\nPlease CLICK THE LOAD PROJECT BUTTON to replace the current circuit with the imported one!\n\n\nThe author of the imported file is: ${fileAuthor}.\n\nThe imported file contains ${fileType} data.\n\nThe imported file was created at: ${fileDOB}.\n\nThis file was made in Simboard Version: ${fileVersion}.\n\nThis file contains ${fileObjConns} Logic Gate object connections.\n\nThis file contains ${fileTotalObjs} Logic Gate objects.`)



      importedData = DATA.circuitBuild; 

      console.log("Data parsed into load Data process function is: ", importedData)



      jsonSaveWorkspaceOverwrite = importedData; 

      console.log("Data in 'cache' is: ", jsonSaveWorkspaceOverwrite)




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
  
};



// *** SCRIPT 025 *** -- Ends here 
//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-
// *** SCRIPT 026 *** -- Starts here 
// The purpose of the below code is to... 



function clearWorkspace () {

  console.clear()

  const oldCircuitObjectsToDelete = document.querySelectorAll('div[tag^="interactableObject"]')

  const oldCircuitWireLinesToDelete = document.querySelectorAll('path[tag^="interactableObject"]')


  oldCircuitObjectsToDelete.forEach(elm => {

    if (elm.id != "mydiv") {

      console.log("Erased ", elm.getAttribute("gatetype"), " from the Workspace!")

      elm.remove();

    } else {

      console.warn("Safety lock prevented deletion of master gate or master wire line!")

    }

  });



  oldCircuitWireLinesToDelete.forEach(el => {


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


};



// *** SCRIPT 026 *** -- Ends here 
//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-
// *** SCRIPT 027 *** -- Starts here 
// The purpose of the below code is to... 



function rgbToHexadec(rgb) {
    const rgbValues = rgb.match(/\d+/g);

    
    if (!rgbValues || rgbValues.length < 3) return "#ffffff"; // Default fallback

    const r = parseInt(rgbValues[0]).toString(16).padStart(2, '0');

    const g = parseInt(rgbValues[1]).toString(16).padStart(2, '0');

    const b = parseInt(rgbValues[2]).toString(16).padStart(2, '0');
  


    return `#${r}${g}${b}`;

};



// *** SCRIPT 027 *** -- Ends here 
//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-
// *** SCRIPT 028 *** -- Starts here 
// The purpose of the below code is to... 



function getInvertedColour(hexValue) {
    hexValue = hexValue.replace('#', '');


    let r = parseInt(hexValue.substring(0, 2), 16);

    let g = parseInt(hexValue.substring(2, 4), 16);

    let b = parseInt(hexValue.substring(4, 6), 16);


    r = (255 - r).toString(16).padStart(2, '0');

    g = (255 - g).toString(16).padStart(2, '0');

    b = (255 - b).toString(16).padStart(2, '0');


    return `#${r}${g}${b}`;

};



// *** SCRIPT 028 *** -- Ends here 
//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-
// *** SCRIPT 029 *** -- Starts here 
// The purpose of the below code is to... 



const WorkspaceRef = document.getElementById("Base");



let computedRGB = window.getComputedStyle(GridCanvasColour).backgroundColor;


let currentHex = rgbToHexadec(computedRGB);


WorkspaceRef.addEventListener("dragover", (e) => {

  e.preventDefault();

  GridCanvasColour.style.backgroundColor = getInvertedColour(tempStylesContainer.tempCanvasColour);

});



// *** SCRIPT 029 *** -- Ends here 
//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-
// *** SCRIPT 030 *** -- Starts here 
// The purpose of the below code is to... 



WorkspaceRef.addEventListener("dragleave", () => {
    GridCanvasColour.style.backgroundColor = tempStylesContainer.tempCanvasColour; // Visual feedback
});



// *** SCRIPT 030 *** -- Ends here 
//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-
// *** SCRIPT 031 *** -- Starts here 
// The purpose of the below code is to... 



WorkspaceRef.addEventListener("drop", (e) => {


    e.preventDefault();

    GridCanvasColour.style.backgroundColor = tempStylesContainer.tempCanvasColour; // Visual feedback

    const file = e.dataTransfer.files[0]; 

    if (file && file.type === "application/json") {

        if (simulate != true) {

          const reader = new FileReader();
          
          reader.onload = (event) => {

              try {

                  const data = JSON.parse(event.target.result);

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



// *** SCRIPT 031 *** -- Ends here 
//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-
// *** SCRIPT 032 *** -- Starts here 
// The purpose of the below code is to... 



function redrawImport(DATMOD) {

    if (DATMOD == 0) {

      const isCircuitOverwriteEmpty = jsonSaveWorkspaceOverwrite.filter(conn => conn !== null)

      if (isCircuitOverwriteEmpty.length > 0) {

        const uniquor = {}; // Maps Old JSON ID -> New Workspace ID

        jsonSaveWorkspaceOverwrite = jsonSaveWorkspaceOverwrite.filter(conn => conn !== null) // removes all previous null pointers from the old session

        jsonSaveWorkspaceOverwrite.forEach(conn => {

            [
                { gId: conn.OBJECTA_INPUTID, gType: conn.CONNECTEDOBJECT_B_TYPE, gX: conn.INPUTOBJECT_POSX, gY: conn.INPUTOBJECT_POSY,
                  gInputBoxLocationX: conn.CONNECTEDOBJECT_INPUTREF_POSX, gInputBoxLocationY: conn.CONNECTEDOBJECT_INPUTREF_POSY
                },

                { gId: conn.OBJECTB_OUTPUTID, gType: conn.CONNECTEDOBJECT_A_TYPE, gX: conn.OUTPUTOBJECT_POSX, gY: conn.OUTPUTOBJECT_POSY,
                  gOutputBoxLocationX: conn.CONNECTEDOBJECT_OUTPUTREF_POSX, gOutputBoxLocationY: conn.CONNECTEDOBJECT_OUTPUTREF_POSY
                }

            ].forEach(obj => {

              if (obj != null) {

                if (obj.gId && obj.gType && !uniquor[obj.gId]) { 

                    cloneObject(obj.gType, obj.gX, obj.gY);

                    uniquor[obj.gId] = "mydiv" + itemsCreated; 

                }

              } else {

                console.log("Skipped an empty pointer!");

              };

            });


        });



        jsonSaveWorkspaceOverwrite.forEach(conn => { // fixes jsonSaveWorkspace cache 

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

        alert("Your circuit has been successfully redrawn!\n\nPlease activate Line Solver MODE 4 to fix the positions of the wire connections in this circuit.");


      } else { 

        alert("No relevant data was found in your imported file for the loading function to process!");

      }




  } else if (DATMOD == 1) {

    const isLayoutOverwriteEmpty = Object.keys(tempStylesContainerOverwrite).length === 0; // a validation "guard"...

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


    } else {

      alert("The redraw function has failed!\n\nPlease refresh Simboard and try again, thank you!");
      console.warn("The redraw function has failed!\n\nPlease refresh Simboard and try again, thank you!");

    };

  };

  
};



// *** SCRIPT 032 *** -- Ends here 
//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-
// *** SCRIPT 033 *** -- Starts here 
// The purpose of the below code is to... 



LineSolverButtonLink = document.getElementById("lineSolver");


LineSolverButtonLink.onclick= function() {

  if (simulate != true) {

    solverMode = prompt("Please enter a number to determine the Line Solver Mode! The various integers you can input include:\n\n0 - All current wires become Linear\n1 - All current wires become Orthogonal\n2 - All current wires become Curved\n3 - Change the transparency of all current wires\n4 - Fix all wire positions\n5 - Change the colours of all current wires\n6 - Change the thickness of all current wires"); 

    if (solverMode > -1 && solverMode < 7) {

      console.log(solverMode);

      lineSolver(Math.round(solverMode));

    } else {

      alert("You must enter a number to determine the Line Solver mode!");

      console.warn("You must enter a number to determine the Line Solver mode!");

    };


  } else {

    alert("You cannot change the Line Solver mode whilst the Circuits in your Workspace are being simulated!\nPlease stop the simulation to change the Connection Line Solver!");

  };

};



// *** SCRIPT 033 *** -- Ends here 
//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-
// *** SCRIPT 034 *** -- Starts here 
// The purpose of the below code is to... 



function lineSolver(MODE) {

  solverButtonImageRef = document.getElementById("lineSolver").children[1];

  if (MODE == 0) { // linear line 

    lineRef = document.querySelectorAll('path[tag="interactableObject"]'); // because the line is different to a div so we can fetch it by the same tag

    solverButtonImageRef.setAttribute("src", "/Media/Layout/lineSolverM0.png")

    lineRef.forEach(ConnectionLine => {

      ConnectionLine.style.opacity = "1.0";

      let connLineX1 = Number(ConnectionLine.getAttribute("x1")); 
      let connLineY1 = Number(ConnectionLine.getAttribute("y1")); 
      let connLineX2 = Number(ConnectionLine.getAttribute("x2")); 
      let connLineY2 = Number(ConnectionLine.getAttribute("y2")); 

      newWireLinePathToDraw = 
      `M ${connLineX1} ${connLineY1}
      L ${connLineX2} ${connLineY2}`;

      ConnectionLine.setAttribute("d", newWireLinePathToDraw);

    });

  } else if (MODE == 1) { // square orthagonal line 

    solverButtonImageRef.setAttribute("src", "/Media/Layout/lineSolverM1.png")

    lineRef = document.querySelectorAll('path[tag="interactableObject"]'); // because the line is different to a div so we can fetch it by the same tag

    lineRef.forEach(ConnectionLine => {

      ConnectionLine.style.opacity = "1.0"

      let connLineX1 = Number(ConnectionLine.getAttribute("x1")); 
      let connLineY1 = Number(ConnectionLine.getAttribute("y1")); 
      let connLineX2 = Number(ConnectionLine.getAttribute("x2")); 
      let connLineY2 = Number(ConnectionLine.getAttribute("y2")); 

      midpoint = (connLineX1 + connLineX2) / 2; 

      newWireLinePathToDraw = 
      `M ${connLineX1} ${connLineY1}
      L ${midpoint} ${connLineY1} 
      L ${midpoint} ${connLineY2}
      L ${connLineX2} ${connLineY2}`;

      ConnectionLine.setAttribute("d", newWireLinePathToDraw);


    });



  } else if (MODE == 2) { // curvy line 

    solverButtonImageRef.setAttribute("src", "/Media/Layout/lineSolverM2.png")

    lineRef = document.querySelectorAll('path[tag="interactableObject"]'); // because the line is different to a div so we can fetch it by the same tag

    lineRef.forEach(ConnectionLine => {

      ConnectionLine.style.opacity = "1.0"

      let connLineX1 = Number(ConnectionLine.getAttribute("x1")); 
      let connLineY1 = Number(ConnectionLine.getAttribute("y1")); 
      let connLineX2 = Number(ConnectionLine.getAttribute("x2")); 
      let connLineY2 = Number(ConnectionLine.getAttribute("y2")); 

      offset = (connLineX2 - connLineX1) / 2; 
      curveUp = connLineX1 + offset; 
      curveDown = connLineX2 - offset; 

      newWireLinePathToDraw = 
      `M ${connLineX1} ${connLineY1}
      C ${curveUp} ${connLineY1},
      ${curveDown} ${connLineY2},
      ${connLineX2} ${connLineY2}`; // cubic bezier curve!!!!

      ConnectionLine.setAttribute("d", newWireLinePathToDraw); 

    }); 

  } else if (MODE == 3) { // temporarily erased line

    solverButtonImageRef.setAttribute("src", "/Media/Layout/lineSolverM3.png")

    newOpacity = prompt("Please enter a number between 0.0 and 1.0 to set the transparency of all lines to, where:\n\n0.0 is fully transparent.\n\n1.0 is not transparent.")

    lineRef = document.querySelectorAll('path[tag="interactableObject"]'); 

    lineRef.forEach(ConnectionLine => {

      ConnectionLine.style.opacity = parseFloat(newOpacity);

    });



  } else if (MODE == 4) {    // the "fix mode" ,, f for fix ,, auto adjust all lines with Mode 4

    if (parseInt(currentZoomValue) == 1) {

      solverButtonImageRef.setAttribute("src", "/Media/Layout/lineSolverM4.png");

      indexOfLine = 0; 


      jsonSaveWorkspace.forEach(connecLayer =>{

        lineToFind = document.querySelector(`path[PairedData="${indexOfLine}"`);

        if (lineToFind != null){

          sourceStartGate = document.getElementById(connecLayer.OBJECTA_INPUTID).children[0];
          targetEndGate = document.getElementById(connecLayer.OBJECTB_OUTPUTID).children[0];

          console.log("sSGate || teGate == ", sourceStartGate, targetEndGate);

          sourceStartGateFindBox = sourceStartGate.children[0].children[0];
          targetEndGateFindBox = targetEndGate.children[2].children[0]; 

          console.log("sSGateFB || teGateFB == ", sourceStartGateFindBox, targetEndGateFindBox);

          sourceBoxPosition = sourceStartGateFindBox.getBoundingClientRect();
          targetBoxPosition = targetEndGateFindBox.getBoundingClientRect();
          viewportReference = document.getElementById("Workspace").getBoundingClientRect();

          newDrawPointX1 = (sourceBoxPosition.left + sourceBoxPosition.width / 2) - viewportReference.left;
          newDrawPointY1 = (sourceBoxPosition.top + sourceBoxPosition.height / 2) - viewportReference.top;

          newDrawPointX2 = (targetBoxPosition.left + targetBoxPosition.width / 2) - viewportReference.left;
          newDrawPointY2 = (targetBoxPosition.top + targetBoxPosition.height / 2) - viewportReference.top;


          lineToFind.setAttribute("x1", newDrawPointX1);
          lineToFind.setAttribute("y1", newDrawPointY1);
          lineToFind.setAttribute("x2", newDrawPointX2);
          lineToFind.setAttribute("y2", newDrawPointY2);

          figuredPath = 
          `M ${newDrawPointX1} ${newDrawPointY1}
          L ${newDrawPointX2} ${newDrawPointY2}`;

          lineToFind.setAttribute("d", figuredPath);
            

        };

        indexOfLine++; 

        console.log("indexOfLine == ", indexOfLine)


      });

      indexOfLine = 0; 


      lineRef = document.querySelectorAll('path[tag="interactableObject"]'); 

      lineRef.forEach(ConnectionLine => { 

        ConnectionLine.setAttribute("stroke", "#000000"); 
        ConnectionLine.setAttribute("stroke-width", "7.5"); 
        ConnectionLine.style.opacity = 1.0;

      });



    } else {

      alert("Line Solver Type 4 cannot accurately solve the transforms of each line when you are zoomed in / out.\n\nPlease zoom back in to the default scale to activate this Line Solver!\n\nVisit the 'Workspace Data' panel in the Object Menu to see your current zoom scale.")
      console.warn("Line Solver Type 4 cannot accurately solve the transforms of each line when you are zoomed in / out.\n\nPlease zoom back in to the default scale to activate this Line Solver!\n\nVisit the 'Workspace Data' panel in the Object Menu to see your current zoom scale.")
    }


  } else if (MODE == 5) { // option of making all wires black, custom colour, or random colour 

    solverButtonImageRef.setAttribute("src", "/Media/Layout/lineSolverM5.png")

    lineRef = document.querySelectorAll('path[tag="interactableObject"]'); 

    setColourMode = prompt("Please enter an integer number based on how you want to colour every wire, where: \n\n0 - Colour all wires Black\n1 - Colour all wires to a HEX colour of your choice\n2 - Randomly colour every wire")

    if (setColourMode == 0) {

      lineRef.forEach(ConnectionLine => { 

        ConnectionLine.setAttribute("stroke", "#000000"); 

      });

    } else if (setColourMode == 1) { 

      newSetColour = prompt("Please enter a HEX colour to set all wires to: ")

      if (newSetColour[0] == "#") { // hex check validation 

        lineRef.forEach(ConnectionLine => { 

          ConnectionLine.setAttribute("stroke", newSetColour); 

        });

      }

    } else if (setColourMode == 2) {

      lineRef.forEach(ConnectionLine => { 

        newRandomColour = generateRandHex(); 

        ConnectionLine.setAttribute("stroke", newRandomColour); 

      });

    };


  } else if (MODE == 6){


    solverButtonImageRef.setAttribute("src", "/Media/Layout/lineSolverM6.png");

    lineRef = document.querySelectorAll('path[tag="interactableObject"]'); // because the line is different to a div so we can fetch it by the same tag

    newThicknessToUpdate = prompt("Please enter a float value to determine the thickness for all wires to copy!\n\nA value of 7.5 is the default.");

    lineRef.forEach(ConnectionLine => {

      ConnectionLine.setAttribute("stroke-width", newThicknessToUpdate);

    });

  } else {

    console.warn("\nCould not find the specific Line Solver method entered!\n")

  };

};



// *** SCRIPT 034 *** -- Ends here 
//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-
// *** SCRIPT 035 *** -- Starts here 
// The purpose of the below code is to... 



function generateRandHex() {

  const letters = '0123456789ABCDEF';

  let color = '#';

  for (let i = 0; i < 6; i++) {

      color += letters[Math.floor(Math.random() * 16)];

  }

  return color;

};



// *** SCRIPT 035 *** -- Ends here 
//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-
// *** SCRIPT 036 *** -- Starts here 
// The purpose of the below code is to... 



function fixVisuals(PARSED_DAT) {


  PARSED_DAT.forEach(connLayer => {
    
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


    

    wirePathLineFromImport = 
    `M ${connLayer.POSITIONINPUTBOXX} ${connLayer.POSITIONINPUTBOXY}
    L ${connLayer.POSITIONOUTPUTBOXX} ${connLayer.POSITIONOUTPUTBOXY}`;

    clone.setAttribute("d", wirePathLineFromImport)



    searchIndex++; 

  });

  searchIndex = 0; 

};

console.log(xLen, yLen, "size of workspace with X | Y");

console.log("Fixed jsonWorkspace file (with updated references) == ", jsonSaveWorkspace)



// *** SCRIPT 036 *** -- Ends here 
//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-
// *** SCRIPT 037 *** -- Starts here 
// The purpose of the below code is to... 



var engineLink = document.getElementById("qualitysteps"); 

calculationDepth = 9; // default depth of calculation

engineLink.onclick= function() { // quality steps determine calculation depth. 

  if (simulate != true) { 

    customQualityStepsPrompt = prompt("Please enter an INTERGER NUMBER of quality steps that you would like the engine to handle in your circuit.\n\nThe default Quality Steps Value is 9\n\n--WARNING --\nThe higher the INTEGER, the more data will be retained throughout the boolean calculations, hence leading to a possible reduction in performance!");

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



// *** SCRIPT 037 *** -- Ends here 
//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-
// *** SCRIPT 038 *** -- Starts here 
// The purpose of the below code is to... 



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

    fetchIndex = 0; 

    newCircuitView = jsonSaveWorkspace.filter(foundVal => foundVal !== null)

    jsonSaveWorkspace.forEach(cnnLyr => {

      if (cnnLyr != null) {

        sourceObj = cnnLyr.CONNECTEDOBJECT_A.parentNode; 
        targetObj = cnnLyr.CONNECTEDOBJECT_B.parentNode; 

        sourceState = sourceObj.getAttribute("state");
        targetState = targetObj.getAttribute("state");

        lineToPulse = document.querySelector(`path[PairedData="${fetchIndex}"`);

        if (sourceState == 1 && targetState == 1) {

          wireLinePulsate(lineToPulse, true)
    
        } else if (sourceState == 1 && targetState == 0) {
        
          wireLinePulsate(lineToPulse, true)

        } else {

          wireLinePulsate(lineToPulse, false)

        }

        fetchIndex++; 

      } else {

        fetchIndex++; 
        
      }

    }); 

  } else if (simulate == true) {

    simulate = false; 

    var buttonImage = getPropertiesSimulateButton.children[1];

    buttonImage.setAttribute("src", "/Media/Layout/PlaySim.png"); 

    logicFlow(1, jsonSaveWorkspace)

    isSongPlayingStack = []; 


    speakerSound_0.pause();
    speakerSound_1.pause();
    speakerSound_2.pause();
    speakerSound_3.pause();
    speakerSound_4.pause();
    speakerSound_5.pause();
    speakerSound_6.pause();
    speakerSound_7.pause();
    speakerSound_8.pause();
    speakerSound_9.pause();
    speakerSound_10.pause();
    speakerSound_11.pause();
    

    speakerSound_0.currentTime = 0;
    speakerSound_1.currentTime = 0;
    speakerSound_2.currentTime = 0;
    speakerSound_3.currentTime = 0;
    speakerSound_4.currentTime = 0;
    speakerSound_5.currentTime = 0;
    speakerSound_6.currentTime = 0;
    speakerSound_7.currentTime = 0;
    speakerSound_8.currentTime = 0;
    speakerSound_9.currentTime = 0;
    speakerSound_10.currentTime = 0;
    speakerSound_11.currentTime = 0;


    fetchIndex = 0; 

    newCircuitView = jsonSaveWorkspace.filter(foundVal => foundVal !== null)

    jsonSaveWorkspace.forEach(cnnLyr => {

      if (cnnLyr != null) {

        sourceObj = cnnLyr.CONNECTEDOBJECT_A.parentNode; 
        targetObj = cnnLyr.CONNECTEDOBJECT_B.parentNode; 


        lineToPulse = document.querySelector(`path[PairedData="${fetchIndex}"`);

        wireLinePulsate(lineToPulse, false)
    
        fetchIndex++; 

      } else {

        fetchIndex++;

      };

    }); 

  } else { 

    console.log("   !Simulation error occured!   ")

  };


};



// *** SCRIPT 038 *** -- Ends here 
//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-
// *** SCRIPT 038 *** -- Starts here 
// The purpose of the below code is to... 



function logicFlow(MODE, WORKSPACE_DATA) {

  if (MODE == 0) {

  console.log("Control Flow is flowing...", WORKSPACE_DATA);

  const elements = document.querySelectorAll('div[gatetype^="HoldButton"]');

  elements.forEach(elm => {

      const existingButton = elm.querySelector('.UserInputAbility');

      if (!existingButton) {

        const btn = document.createElement('button');

        btn.innerText = 'TOGGLE BUTTON';

        btn.className = 'UserInputAbility'; 

        
        btn.onclick = (e) => {

          e.stopPropagation(); // Prevents .. (DESCRIBE LATER)

          console.log('Button clicked for:', elm.getAttribute('gatetype'));

          buttonState = elm.getAttribute("state");

          buttonThumbnail = elm.children[0].children[1];


          if (buttonState == 0) {

            elm.setAttribute("state", 1);

            buttonThumbnail.setAttribute("src", "/Media/ActivatedState/HoldButton_Activated.png");

            document.documentElement.style.setProperty('--currentHoverPointer', 'var(--toggleHoverPointerOn)');


          } else {

            elm.setAttribute("state", 0);

            buttonThumbnail.setAttribute("src", "/Media/DeactivatedState/HoldButton_Deactivated.png");

            document.documentElement.style.setProperty('--currentHoverPointer', 'var(--toggleHoverPointerOff)');


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

      logicGateImageReference = obj.children[0].children[1];

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
    

  } else {


    console.log("Logic Error in logicFlow function!");


  };

};



// *** SCRIPT 039 *** -- Ends here 
//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-
// *** SCRIPT 040 *** -- Starts here 
// The purpose of the below code is to... 



filterMenuDebugRef = document.getElementById("FilterMenuActivator");

filterMenuDebugRef.onclick= function() {

  nextActionIsToShow = false; // Stops the deletion of multiple objects // TODO

  decision = prompt("If you want to only see one category of object and hide all of the others, type 'INC' into the prompt below.\n\nIf you want to see every other category of objects except for one, type 'EXC' into the prompt below.\n\nIf you want to show all categories again, type 'SHOW' into the prompt below.\n\nIf you don't want to filter categories of objects from the Object Menu, either click the Cancel button or type in 'X' into the prompt below.");

  decision = decision.toUpperCase();


  const objectMenuRef = document.getElementById("ObjectMenu");

  const objectMenuChildrenRef = objectMenuRef.children;

  const contentsRef = Array.from(objectMenuChildrenRef) // turns it from a collection/nodelist to an array


  if (nextActionIsToShow == true) {

    if (decision == "INC") {

      nextActionIsToShow = true; 

      nextDecision = prompt("Please enter one of the many categories below that you just want to see in the Object Menu!\n\n  -  Inputs\n  -  GCSE Gates\n  -  A-Level Gates\n  -  Outputs");

      switch (nextDecision.toUpperCase()) {

        case "INPUTS":

          contentsRef.forEach(elemt => { 

            console.log("elem == ", elemt) 

            if (elemt.id != "HoldButton") {

              if (elemt.id != "FilterMenuActivator") {

                  elemt.style.display = "none";

              };

            } else {

              console.log("Skipped a part due to the safety guard lock!")
          
            };
          
          });

          break; 


        case "OUTPUTS":

          contentsRef.forEach(elemt => { 

            console.log("elem == ", elemt) 

            if (elemt.id != "Lightbulb") {

              if (elemt.id != "Speaker") {

                if (elemt.id != "FilterMenuActivator") {

                    elemt.style.display = "none";

                };

              };

            } else {

              console.log("Skipped a part due to the safety guard lock!")
          
            };
          
          });

          break;

      };

    } else if (decision == "EXC") {

    } else if (decision == "SHOW") {

      contentsRef.forEach(elemt => {

        elemt.style.display = "block";

      });

    } else {

      console.log("There was an error!");

    };

  };

};



// *** SCRIPT 040 *** -- Ends here 
//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-
// *** SCRIPT 041 *** -- Starts here 
// The purpose of the below code is to... 



function discernBoolean() {

  updatedJsonView = jsonSaveWorkspace.filter(con => con !== null);

  updatedJsonView.forEach(connLayr => {

    connA = connLayr.CONNECTEDOBJECT_A;
    connB = connLayr.CONNECTEDOBJECT_B; 

    connAParentType = connA.parentNode.getAttribute("gatetype"); 
    connBParentType = connB.parentNode.getAttribute("gatetype"); 

    connAParentIsOn = connA.parentNode.getAttribute("state")
    connBParentIsOn = connB.parentNode.getAttribute("state")

    if (connAParentIsOn == 1 || connBParentIsOn == 1) {

      if (connAParentType == "Speaker" || connBParentType == "Speaker") {

        enabledSound = true; 

      } else {

        enabledSound = false; 

      };

    } else if (connAParentIsOn == 0 && connBParentIsOn == 0){ 

        enabledSound = false; 

    } else {

      console.warn("An error occured with the sound handler!");

    };

  });


  musicHandler(choiceOfSongByUser); // because of these checks, the system lags a little bit 




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



      if (type === "Lightbulb" || type === "OR") {

        console.log("EITHER LIGHTBULB, SPEAKER OR THE OR GATE VISITED!");

        finalState = inputs.includes(1) ? 1 : 0;


      } else if (type == "Speaker") {

        console.log("SPEAKER HAS BEEN VISITED");

        finalState = inputs.includes(1) ? 1 : 0;



      } else if (type === "AND") {

        console.log("AND GATE VISITED!");

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


      } else {

        console.log("CRITICAL MAJOR ERROR !!! LOGIC GATE BOOLEAN NOT CALCULATED")

      }


      gateNode.setAttribute("state", finalState);



      const folder = finalState === 1 ? "ActivatedState" : "DeactivatedState";

      const suffix = finalState === 1 ? "_Activated.png" : "_Deactivated.png";


      const specSpeakerSuffix = finalState === 1 ? "_Activated.gif" : "_Deactivated.png"


      if (type != "Speaker") {
        if(gateNode.children[0].children[1]) {

            gateNode.children[0].children[1].setAttribute("src", `/Media/${folder}/${type}${suffix}`);
            
        };

      } else {

        if(gateNode.children[0].children[1]) {

          gateNode.children[0].children[1].setAttribute("src", `/Media/${folder}/${type}${specSpeakerSuffix}`);

        };

      };

  };

  fetchIndex = 0; 

  //newCircuitView = jsonSaveWorkspace.filter(foundVal => foundVal !== null)

  jsonSaveWorkspace.forEach(cnnLyr => {

    if (cnnLyr != null) {

      sourceObj = cnnLyr.CONNECTEDOBJECT_A.parentNode; 
      targetObj = cnnLyr.CONNECTEDOBJECT_B.parentNode; 

      sourceState = sourceObj.getAttribute("state");
      targetState = targetObj.getAttribute("state");

      lineToPulse = document.querySelector(`path[PairedData="${fetchIndex}"`);

      // console.log(lineToPulse)

      if (sourceState == 1 && targetState == 1) {

        wireLinePulsate(lineToPulse, true)
  
      } else if (sourceState == 1 && targetState == 0) {
      
        wireLinePulsate(lineToPulse, true)

      } else {

        wireLinePulsate(lineToPulse, false)

      }

      fetchIndex++; 

    } else {

      fetchIndex++; 

    }

  }); 

  


};



// *** SCRIPT 041 *** -- Ends here 
//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-
// *** SCRIPT 042 *** -- Starts here 
// The purpose of the below code is to... 



window.addEventListener('wheel', function(e) {
    if (e.ctrlKey) {

        e.preventDefault();


        if (e.deltaY < 0) {
            console.log("System lock prevented the browser zooming in via the mouse to preserve the UI Layout.");

        } else {
            console.log("System lock prevented the browser zooming out via the mouse the preserve the UI Layout.");

        };
    };

}, { passive: false });



// *** SCRIPT 043 *** -- Ends here 
//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-
// *** SCRIPT 044 *** -- Starts here 
// The purpose of the below code is to... 



window.addEventListener('keydown', function(e) {

    if (e.ctrlKey && (e.key === '=' || e.key === '-' || e.key === '+')) {

        e.preventDefault();

        console.log("System lock prevented the browser zooming in or out via the keyboard Workspace layout.");

    };

});



// *** SCRIPT 044 *** -- Ends here 
//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-
// *** SCRIPT 045 *** -- Starts here 
// The purpose of the below code is to... 



window.addEventListener('keydown', e => {

  traversableWorkspaceRef = document.getElementById("Workspace");
  
  switch (e.key) {

    case "k":
    case "K": 

      if (currentZoomValue < zoomOutLimit) {

        currentZoomValue += 0.25;

        speakerSound_0.volume = Math.min(currentZoomValue / 2, 1);
        speakerSound_1.volume = Math.min(currentZoomValue / 2, 1);
        speakerSound_2.volume = Math.min(currentZoomValue / 2, 1);
        speakerSound_3.volume = Math.min(currentZoomValue / 2, 1);
        speakerSound_4.volume = Math.min(currentZoomValue / 2, 1);
        speakerSound_5.volume = Math.min(currentZoomValue / 2, 1);
        speakerSound_6.volume = Math.min(currentZoomValue / 2, 1);
        speakerSound_7.volume = Math.min(currentZoomValue / 2, 1);
        speakerSound_8.volume = Math.min(currentZoomValue / 2, 1);
        speakerSound_9.volume = Math.min(currentZoomValue / 2, 1);
        speakerSound_10.volume = Math.min(currentZoomValue / 2, 1);
        speakerSound_11.volume = Math.min(currentZoomValue / 2, 1);

        console.log(speakerSound_0.volume)

      } else {

        console.log("You have zoomed in as far as possible!")

      }
      
      break; 

    case "l": 
    case "L":

      if (currentZoomValue > zoomInLimit) {

        currentZoomValue -= 0.25;

        speakerSound_0.volume = Math.min(currentZoomValue / 2, 1);
        speakerSound_1.volume = Math.min(currentZoomValue / 2, 1);
        speakerSound_2.volume = Math.min(currentZoomValue / 2, 1);
        speakerSound_3.volume = Math.min(currentZoomValue / 2, 1);
        speakerSound_4.volume = Math.min(currentZoomValue / 2, 1);
        speakerSound_5.volume = Math.min(currentZoomValue / 2, 1);
        speakerSound_6.volume = Math.min(currentZoomValue / 2, 1);
        speakerSound_7.volume = Math.min(currentZoomValue / 2, 1);
        speakerSound_8.volume = Math.min(currentZoomValue / 2, 1);
        speakerSound_9.volume = Math.min(currentZoomValue / 2, 1);
        speakerSound_10.volume = Math.min(currentZoomValue / 2, 1);
        speakerSound_11.volume = Math.min(currentZoomValue / 2, 1);

        console.log(speakerSound_0.volume)

      } else {

        console.log("You have zoomed out as far as possible!")
        
      }

      break;


    case "ArrowUp":

      viewPosY += traverseSpeed;

      break; 

    case "ArrowLeft":

      viewPosX += traverseSpeed;

      break; 

    case "ArrowRight":

      viewPosX -= traverseSpeed;

      break; 

    case "ArrowDown":

      viewPosY -= traverseSpeed;

      break; 

  };

  traversableWorkspaceRef.style.transform = `translate(${viewPosX}px, ${viewPosY}px) scale(${currentZoomValue})`;

});



// *** SCRIPT 045 *** -- Ends here 
//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-
// *** SCRIPT 046 *** -- Starts here 
// The purpose of the below code is to... 



talkToSysButtonReference = document.getElementById("talkToSystem");

insertedCmd = null; 

talkToSysButtonReference.onclick= function(){

  talkToSystem(); 

};

function talkToSystem(cmd) {

  insertedCmd = prompt("QUICK INPUT: Please enter a command to talk to Simboard and control it\n\nEnter the command 'MENU' to see the list of commands to use:\nEnter the command 'BACKEND' to see the list of variables or functions that can be used with commands.");


  switch (insertedCmd.toUpperCase()){

    case "MENU": 
      
      newCmd = prompt("The comprehensive list of commands:\n\n\n-- Special Commands --\nFR - Force Refresh Simboard\n\n-- Regular Commands --\nMENU - View all commands\nBACKEND - View all variables and functions\nHYA - Hide Y-Axis\nHXA - Hide X-Axis\nHG - Hide Grid\nSYA - Show Y-Axis\nSXA - Show X-Axis\nSG - Show Grid\n");

      talkToSystem(newCmd);

      break;





    case "BACKEND": 

      newCmd = prompt("The comprehensive list of variables and functions:\n\n\n-- Functions --\ndrawGrid(MODE, RGB_YAxis, RGB_XAxis) - Changes the colour of the axies on screen\n\n-- Variables --\nsimulate - A guard that stores a boolean value that determines the functionality of Simboard depending on if boolean math is being performed."); 

      talkToSystem(newCmd);

      break;





    case "HFR": // hard force reset 

      guard = confirm("This will wipe your current session from RAM which will clear all layout and circuit data.\n\nClick CANCEL to halt this command.\nClick OK to proceed.");

      if (guard == true) {

        window.location.href = window.location.pathname + "?" + Date.now();

      };

      break;





    case "SFR": // soft force reset 

      guard = confirm("This may break the functionality of Simboard, are you sure you want to proceed with this command?\n\nClick CANCEL to halt this command.\nClick OK to proceed.") ;

      if (guard == true) {

        resetGlobalsToDefault(null, null) // resets everything 

      };

      break;





    case "RSV": // reset specific value 

      newCmd = prompt("Please enter the variable, container or function (keeping Case-Sensitivity in mind) you'd like to reset its to default value: ");

      guard = confirm("This may break the functionality of Simboard, are you sure you want to proceed with this command?\n\nClick CANCEL to halt this command.\nClick OK to proceed.") ;

      if (guard == true) {

        resetGlobalsToDefault(`${newCmd}`, null); // resets a specific value 

      };

      break;





    case "SSV": // set specific value 

      newCmd = prompt("Please enter the variable, container or function (keeping Case-Sensitivity in mind) you'd like to set: ");

      newCmdDat = prompt("Please enter the data, container or function (keeping Case-Sensitivity in mind) you'd like to set: ");

      guard = confirm("This may break the functionality of Simboard, are you sure you want to proceed with this command?\n\nClick CANCEL to halt this command.\nClick OK to proceed.") ;

      if (guard == true) {

        resetGlobalsToDefault(`${newCmd}`, `${newCmdDat}`); // sets a specific value

      };

      break; 





    case "ENTD": // enter debug mode 

      debugGuard = false; 

      alert("You can now swiftly access the developer console tools!")

      break; 





    case "EXTD": // exit debug mode 

      debugGuard = true; 

      alert("You have disabled the ability to swiftly access the developer console tools!")

      break; 





    case "ROP": // round object position 

      jsonSaveWorkspace.forEach(connLyr => {

        sourceObjectA = connLyr.CONNECTEDOBJECT_A.parentNode.getBoundingClientRect();
        endObjectB = connLyr.CONNECTEDOBJECT_B.parentNode.getBoundingClientRect(); 

        sourceObjectX = sourceObjectA.left;
        sourceObjectY = sourceObjectA.top; 

        endObjectX = endObjectB.left;
        endObjectY = endObjectB.top; 

        roundedSourceX = Math.ceil(sourceObjectX / 10) * 10;
        roundedSourceY = Math.ceil(sourceObjectY / 10) * 10;
        roundedEndX = Math.ceil(endObjectX / 10) * 10;
        roundedEndY = Math.ceil(endObjectY / 10) * 10;

        console.log("Rounded to", roundedSourceX, roundedSourceY, roundedEndX, roundedEndY)

        sourceObjectA.left = roundedSourceX;
        sourceObjectA.top = roundedSourceY;
        endObjectB.left = roundedEndX;
        endObjectB.top = roundedEndY;

      });

      break; 




    case "SSC": // screenshot circuit 

      const circuitContainerRef = document.getElementById("Workspace");

      newCmd = prompt("If you'd like to take a screenshot of the current view of your Simboard Circuit, please enter a name for your snapshot!\n\nIf you don't want to take a screenshot anymore, simply click CANCEL.")

      if (newCmd != null) {

        html2canvas(circuitContainerRef).then(canvas => {
          
          const image = canvas.toDataURL("image/png");

          const link = document.createElement("a");

          link.href = image;

          link.download = `${newCmd}.png`; 
          
          link.click();
          
          console.log("Circuit screenshot downloaded successfully!");
        });

      } else {

        alert("Screenshot process was cancelled!")
      }

      break; 




    case "SSS": // screenshot entire simboard app 

      const baseRef = document.getElementById("Base");

      newCmd = prompt("If you'd like to take a screenshot of the the entire Simboard application, please enter a name for your snapshot!\n\nIf you don't want to take a screenshot anymore, simply click CANCEL.")

      if (newCmd != null) {
        
        html2canvas(baseRef).then(canvas => {
          
          const image = canvas.toDataURL("image/png");

          const link = document.createElement("a");

          link.href = image;

          link.download = `${newCmd}.png`; 
          
          link.click();
          
          console.log("Circuit screenshot downloaded successfully!");
        });

      } else {

        alert("Screenshot process was cancelled!")
      }

      break;




    case "RBC": // reset box click sets ioCheck to defaults ... 

      hasFirstIOBeenSelected = false; 
      hasSecondIOBeenSelected = false; 

      break; 



    case "CSS": 

      if (simulate != true) {

        newCmd = prompt("Please enter a number value to determine the song that you want the speaker objects to play:\n\n\n-- Music --\n0 - Bronze, by Luxury Elite\n1 - Ocean Panorama, by Late Arcane\n2 - Green Light, by Midnight Premier\n3 - My Kind Of Lady, by 318tae\n4 - The Way You Are, by Agnetha Fältskog & Ola Håkansson\n\n-- Sounds --\n5 - Chirp\n6 - Mains Hum\n7 - Nature\n8 - Long Scream\n9 - Short Scream\n10 - Radio Garble")

        if (newCmd > -1 && newCmd < 12) {

          choiceOfSongByUser = parseInt(newCmd);

        } else {

          alert("Speaker Mode not found! Please try again.");

        };
      } else { 

        alert("You must pause your circuit simulation before changing the song that your speaker objects can play!");

      }

      break;





    case "RWT": // reset workspace transform 

      referenceOfWorkspace = document.getElementById("Workspace");

      viewPosX = 0; 

      viewPosY = 0; 

      currentZoomValue = 1; 

      referenceOfWorkspace.style.transform = `translate(${0}px, ${0}px) scale(${1})`;

      break; 




    case "VWT":

      alert(`Your current position in the Workspace is:\n\n${viewPosX}, ${viewPosY}, ${currentZoomValue}\n\nWith ${viewPosX} value being your X position,\n${viewPosY} being your Y position\n& ${currentZoomValue} being your zoom.`)

      break;





    case "SWT":

      referenceOfWorkspace = document.getElementById("Workspace");

      newCmdX = prompt("Please tell Simboard the X - Co-Ordinate you want to teleport to on the Workspace:")

      newCmdY = prompt("Please tell Simboard the Y - Co-Ordinate you want to teleport to on the Workspace:")

      newCmdZoom = prompt("Please tell Simboard the scale you want to see the Workspace at:")


      if (newCmdZoom > zoomInLimit && newCmdZoom < zoomOutLimit) {

        viewPosX = newCmdX; 

        viewPosY = newCmdY; 

        currentZoomValue = newCmdZoom; 
        
        referenceOfWorkspace.style.transform = `translate(${newCmdX}px, ${newCmdY}px) scale(${newCmdZoom})`;

      } else {

        alert("You must enter a valid zoom value\n\n(Between 0.25 and 3)!");

      }


      break; 

    case "DDV":

      console.clear();

      console.log("JsonSave: ", jsonSaveWorkspace);

      console.log("Previous IO Stack: ", PREVIOUSIOSTACK);

      console.log("CSS TempStyleContainer == ", tempStylesContainer);

      console.log("CSS Concatonates == ", cssConcatonates);

      console.log("UNIQUOR == ", connectionSet)

      break; 

    case "TAN": // prevents NOT gates from outputting 1 when no inputs are going in 

      jsonSaveWorkspace.forEach(cLyr => {

        console.log("Control flow is going through TAN CMD!", cLyr);

      });

      break; 

    case "CW":

      guard = confirm("Are you sure you want to clear your Workspace? If you have not saved this circuit, it will be permenantly wiped forever.\n\nIf you want to proceed and clear the Workspace, click OK or press 'ENTER'.\nIf you want to cancel the procedure of clearing the Workspace, click Cancel or press 'ESC'.");

      if (guard == true) {

        clearWorkspace();

      } else {

        alert("Clear Workspace process was prevented.");

      };

      break; 

    case "TPULSE":

      if (simulate != true) {

        newCmd = prompt("If you'd like to change how the wires 'pulse' (look) when binary signal is flowing through them, enter an INTEGER VALUE to determine the pulse mode in the prompt below:\n\n-- Pulse Types --\n0 - Static\n1 - River\n2 - Hubble\n3 - Blink\n4 - Dotted\n5 - Signal\n6 - Fountain\n7 - Flow\n8 - Invisible\n\n");

        switch (parseInt(newCmd)){

          case 0:

            pulseType = "static";

            break; 

          case 1:

            pulseType = "river";

            break; 

          case 2: 

            pulseType = "hubble";

            break; 

          case 3:

            pulseType = "blink";

            break; 

          case 4:
            
            pulseType = "dotted";

            break; 

          case 5:
            
            pulseType = "signal";

            break; 

          case 6:
            
            pulseType = "fountain";

            break; 

          case 7: 
          
            pulseType = "flow";

            break; 

          case 8: 
          
            pulseType = "invisible";

            break; 

        };

      };

      break;

    case "CPULSE":

      presentPulseClr = getComputedStyle(document.documentElement).getPropertyValue('--pulseColour');

      newCmd = prompt(`Please enter a SIX DIGIT HEX VALUE to determine the colour you'd like to change all wire lines to when binary signal is flowing through them.\n\nThe current Pulse Colour is: ${presentPulseClr}`);

      document.documentElement.style.setProperty('--pulseColour', `${newCmd}`);

      break;


    case "SPULSE":

      presentPulseSpd = getComputedStyle(document.documentElement).getPropertyValue('--pulseSpeed');

      newCmd = prompt(`Please enter a FLOAT / DECIMAL VALUE to determine the speed at which all wire lines pulsate at when binary signal is flowing through them.\n\nThe current Pulse Speed is: ${presentPulseSpd}`)

      document.documentElement.style.setProperty('--pulseSpeed', `${newCmd}`+'s');

      break; 


    case "WPULSE":

      presentPulseWid = getComputedStyle(document.documentElement).getPropertyValue('--pulseWidth');

      newCmd = prompt(`Please enter a FLOAT / DECIMAL VALUE to determine the width that all wire lines will appear as when binary signal is flowing through them.\n\nThe current Wire Line width is: ${presentPulseWid}`)

      document.documentElement.style.setProperty('--pulseWidth', `${newCmd}`);

      break;


    case "TT":

      presentToggleTransparency = getComputedStyle(document.documentElement).getPropertyValue('--toggleTransparency');

      newCmd = prompt(`Please enter an opacity NUMBER VALUE between 1.0 (Fully Transparent) and 0.0 (Fully Solid) to determine the transparency of the Button Object hover assist toggle. \n\nCurrent toggle assist opacity value is: ${presentToggleTransparency}`)
      
      document.documentElement.style.setProperty('--toggleTransparency', `${newCmd}`);

      break;

    case "":

      break;
      
    };

};



// *** SCRIPT 046 *** -- Ends here 
//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-
// *** SCRIPT 047 *** -- Starts here 
// The purpose of the below code is to... 



function resetGlobalsToDefault(specificAddress, forceValue) {

  if (specificAddress == null && forceValue == null) {
    simulate = false; 
    debugGuard = true; 
    viewPosX = 0; 
    viewPosY = 0; 
    currentZoomValue = 1; 
    zoomOutLimit = 3; 
    zoomInLimit = 0.25; 
    traverseSpeed = 35; 
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
    tempStylesContainer.tempAxisYColour = "#4EB842";
    tempStylesContainerOverwrite = {}; 
    xLen = document.getElementById("GridCanvas").width;   // Defines how long a Workspace background object should stretch on the X Axis (e.g. Grid, Axis, Background)
    yLen = document.getElementById("GridCanvas").height;   // Defines how long a Workspace background object should stretch on the Y Axis (e.g. Grid, Axis, Background)
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
    searchIndex = 0; 
    selectedGatesStack = [];  // Every time an object in the Workspace is selected, its HTML reference is pushed to this stack so that 
                              // interactivity can be validated and worked upon. 
    totalSelectedGates = 0; // This holds the number total of the amount of selections on gates that have been registered. 
    presentObjects = +0; // This holds the number of objects that are present in the Workspace (ones that have been spawned in, but 
                        // not deleted).
    jsonSaveWorkspace = [];  // This holds all data for the logic gates present on the workspace plus connections. 
    jsonSaveWorkspaceOverwrite = []; //               Holds the new data dragged into the WORKSPACe....
    connectionSet = null; 
    totalWires = 0; 
    connectionsInitialised = 0 + searchIndex;  
    importedFileType = null; 
    // songToPlay = speakerIdentifications[0];
    // speakerSound = new Audio(`${songToPlay}`);
    // speakerSound.loop = true;
    isSongPlayingStack = [];

  } else if (forceValue == null) {

    specificAddress = null; 

  } else {

    specificAddress = forceValue; 

  };

};



// *** SCRIPT 047 *** -- Ends here 
//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-
// *** SCRIPT 048 *** -- Starts here
// The purpose of this code is to... 



function wireLinePulsate(pathRef, pathState) {

  if (abilityToPulsate == true) {

    console.log(pathRef, pathState)

    if (pathRef) {  // a guard to prevent errors 

      if (pathState == true) {

        pathRef.classList.add(`${pulseType}`);

      } else {

        pathRef.classList.remove(`${pulseType}`);

      };

    }; 

  };

};

  //fetchAllLines = "";

//~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-~¬-
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