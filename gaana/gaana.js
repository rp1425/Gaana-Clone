// let songPlay =document.getElementsByClassName('songs')
// alert('live')
// console.log(songPlay);

// audioElement1 = new Audio('audio/1.mp3');
// audioElement2 = new Audio('audio/2.mp3');



// function playSong1(){
//     audioElement1.play();
//     audioElement2.pause();
//     let a  = document.getElementsByClassName('songInfo').innerText = "audio/1.mp3"



// }
// function playSong2(){
//     audioElement2.play();    
//     audioElement1.pause();
// }



// harry bhau 


let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songBox = Array.from(document.getElementsByClassName('songBox'));
let masterSongName = document.getElementById('masterSongName');


let songs = [

    { songName: "JAY SHREE RAM ", filePath: " songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "back Original", filePath: " songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "dil dooba x remix", filePath: " songs/12.mp3", coverPath: "covers/3.jpg" },
    { songName: "chellkutiye", filePath: " songs/3.mp3", coverPath: "covers/4.jpg" },
    { songName: "Khairiyat", filePath: " songs/4.mp3", coverPath: "covers/5.jpg" },
    { songName: "lokiverse BGM", filePath: " songs/5.mp3", coverPath: "covers/6.jpg" },
    { songName: "do you know", filePath: " songs/6.mp3", coverPath: "covers/7.jpg" },
    { songName: "Fairytale", filePath: " songs/7.mp3", coverPath: "covers/8.jpg" },
    { songName: "Go Down Yeh", filePath: " songs/8.mp3", coverPath: "covers/9.jpg" },
    { songName: "haan tu hai", filePath: " songs/9.mp3", coverPath: "covers/10.jpg" },
    { songName: "Hey Mama remix", filePath: " songs/10.mp3", coverPath: "covers/11.jpg" },
    { songName: "favvvv", filePath: " songs/11.mp3", coverPath: "covers/12.jpg" }

]

songBox.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
// handle play/pause

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }

})

// listen to events 

audioElement.addEventListener('timeupdate', () => {


    //Update seekbar
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);

    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

Array.from(document.getElementsByClassName('playSong')).forEach((element) => {
    element.addEventListener('click', (e) => {
        
        songIndex = parseInt(e.target.id);
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

     
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle'); 
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle'); 
})