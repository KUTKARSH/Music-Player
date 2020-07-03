var songsList = ["ipl.mp3","dekhte.mp3","urvashi.mp3"];
var songId = 0;

songsList.forEach(element => {
    var x = document.createElement("LI");
    x.innerHTML = element;
    document.getElementById("songsMenu").appendChild(x);
});

function displaySongsList(){
    songsList.forEach(element => {
        var x = document.createElement("LI");
        x.innerHTML = element;
        document.getElementById("songsMenu").appendChild(x);
    });
}

displaySongsList();

function playSong(){
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