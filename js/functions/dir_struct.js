import saveAs from "./FileSaver";
/*
function createDir(){
    let dir = document.querySelector('input').value;
    exec('mkdir ',dir);
    console.log("Created ",dir);
}

function removeDir(){
    let dir = document.querySelector('input').value;
    exec('rm -rf',dir);
    console.log("Removed ",dir);
}

function renameDir(){
    let oldname = document.getElementById('oldnameinput').ariaValueText;
    let newname = document.getElementById('newnameinput').ariaValueText;
    exec('mv ',oldname,' ',newname);
    console.log("Renamed");
} */

function createSampleFile() {
  var userInput = "This is a test";
  var blob = Blob([userInput], {
    type: "text/plain;charset=utf-8",
  });
  saveAs(blob, "text.txt;");
}

createSampleFile();
