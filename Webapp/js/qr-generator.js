import { saveAs } from 'file-saver';

var maxID;
var roomID;
var roomName;
var qrCode;
var currentID;

function load() {
    currentID  = 0;
    qrCode = new QRCode(document.getElementById("qrcode"), {
            width : (window.innerWidth / 2) - 50,
            height : (window.innerWidth / 2) - 50,
            colorDark : "#ff0053",
            colorLight : "#0099f2",
        }
    );
}

function generateJSON() {
    var fileContent =
        {
            "id" : roomID,
            "name" : roomName,
            "date-created" : Date.now(),
        };

    var file = JSON.stringify(fileContent);

    var blob = new Blob([file], {type: "application/json"});

    FileSaver.saveAs(blob, roomID.toString() + ".json");
}

function getNextID () {
    currentID++;
}

function getRoomID() {
    getNextID();

    console.log("Current ID:", currentID);
    var hexID = currentID.toString(16);
    console.log("Hex ID:", hexID);

    hexID = getFormattedID(hexID);
    console.log("Hexified ID:", hexID);

    roomID = hexID;


    return hexID;

}

// Formats a hex to a 6 digit string EXAMPLE: ´7AB´ becomes ´0007AB´
function getFormattedID(input) {
    return (new Array(7).join('0') + input).slice(-new Array(7).join('0').length);
}

function makeCode () {
    roomName = document.getElementById("room-name");

    if (!roomName.value) {
        alert("Gi rommet ditt et navn.");
        roomID.focus();
        return;
    }

    qrCode.makeCode(getRoomID());
    generateJSON();
}