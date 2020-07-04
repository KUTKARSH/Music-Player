var songsList = [];
var romantic = ["dekhte.mp3","urvashi.mp3"];
var dance = ["gungroo.mp3","shiv.mp3"];
var energy = ["ipl.mp3","jai.mp3"];

var songId = 0;
let map = new Map();

window.onload = function(){
    songsList = [];
    songId = 0;
}

function renderSongsMenu(){

}

function selectGenre(id){
    if(id == 1)
    songsList = romantic;
    else if(id == 2)
    songsList = dance;
    else
    songsList = energy;
    songId = 0;
    console.log("genre id " + id + " selected");
}

function playSong(i){
    console.log("song playing");
    document.getElementById("songNameBox").innerHTML = songsList[songId];
    document.getElementById("myAudio").play();
}

function pauseSong(){
    document.getElementById("myAudio").pause();
}

function changeSong(){
    songId = (songId + 1) % songsList.length;
    console.log("Song changed to " + songsList[songId]);
    document.getElementById("songNameBox").innerHTML = songsList[songId];
    document.getElementById("myAudio").src = "";
    document.getElementById("myAudio").src = songsList[songId];
    playSong();
}

// window.onload = function displayMenu(){
//     for(var i = 0 ; i < songsList.length ; i++)
//     map.set(songsList[i],i);
//     var cont = document.getElementById('container');
//     var divElem = document.getElementById('dropupMenu');
//     for (i = 0; i <= songsList.length - 1; i++) {
//         var a = document.createElement('a');
//         var value = document.createTextNode(songsList[i]);
//         a.setAttribute('href', '');
//         a.addEventListener('click',function(){
//             var songName = a.innerHTML;
//             console.log(songName + " select")
//             var idx = map.get(songName);
//             console.log(idx + " is index");
//             songId = idx;
//             playSong();
//         });
//         a.appendChild(value);
//         divElem.appendChild(a);
//     }
//     cont.appendChild(divElem);
// }

 