var songsList = ["ipl.mp3","dekhte.mp3","urvashi.mp3"];
var songId = 0;
let map = new Map();

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

window.onload = function displayMenu(){
    for(var i = 0 ; i < songsList.length ; i++)
    map.set(songsList[i],i);
    var cont = document.getElementById('container');
    var divElem = document.getElementById('dropupMenu');
    for (i = 0; i <= songsList.length - 1; i++) {
        var a = document.createElement('a');
        var value = document.createTextNode(songsList[i]);
        a.setAttribute('href', '');
        a.addEventListener('click',function(){
            var songName = a.innerHTML;
            console.log(songName + " select")
            var idx = map.get(songName);
            console.log(idx + " is index");
            songId = idx;
            playSong();
        });
        a.appendChild(value);
        divElem.appendChild(a);
    }
    cont.appendChild(divElem);
}

 