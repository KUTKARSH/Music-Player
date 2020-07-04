var songsList = [];
var romantic = ["dekhte.mp3","urvashi.mp3"];
var dance = ["gungroo.mp3","shiv.mp3","tu meri.mp3"];
var energy = ["ipl.mp3","jai.mp3"];

var songId = 0;
let map = new Map();

window.onload = function(){
    songsList = [];
    songId = 0;
}

// Logic to render list of songs
function renderSongsMenu(){
    // to empty all items of current songs list
    var divElem = document.getElementById("songsList");
    console.log(divElem);
    console.log(divElem.childElementCount);
    let count = divElem.childElementCount;
    for(let i = 0; i < divElem.childElementCount ; i++)
    {
        divElem.removeChild(divElem.childNodes[0]);
    }
    divElem.removeChild(divElem.childNodes[0]);
    ////////////////////////////////////////////////////////
    // to populate new list based on genre
    var cont = document.getElementById('container');
    for (let i = 0; i <= songsList.length - 1; i++) {
                var a = document.createElement('a');
                var value = document.createTextNode(songsList[i].slice(0,-4));
                a.setAttribute('href', '');
                a.setAttribute('class',"list-group-item");
                a.appendChild(value);
                divElem.append(a);
    }
    cont.appendChild(divElem);
}

// to change playlist based on genre and reset index variables
function selectGenre(id){
    if(id == 1)
    songsList = romantic;
    else if(id == 2)
    songsList = dance;
    else
    songsList = energy;
    songId = 0;
    console.log("genre id " + id + " selected");
    renderSongsMenu();
}

// to play song from current genre
function playSong(){
    if(songsList.length == 0)
    {
        alert("Please select a genre\nThen select a song");
        return;
    }
    console.log("song playing");
    document.getElementById("songNameBox").innerHTML = songsList[songId];
    document.getElementById("myAudio").src = "./songs/" + songsList[songId];
    document.getElementById("myAudio").play();
    document.getElementById("play").disabled = true;
    document.getElementById("pause").disabled = false;
}

// to 
function pauseSong(){
    document.getElementById("myAudio").pause();
    document.getElementById("play").disabled = false;
    document.getElementById("pause").disabled = true;
}

// to change song to next song in genre
function changeSong(){
    songId = (songId + 1) % songsList.length;
    console.log("Song changed to " + songsList[songId]);
    document.getElementById("songNameBox").innerHTML = songsList[songId];
    document.getElementById("myAudio").src = "";
    document.getElementById("myAudio").src = "./songs/" + songsList[songId];
    playSong();
}

 