console.log("Welcome to Spotify");
let songIndex=0;
let audioElement=new Audio('images/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName:"Salam-e-Ishq",filePath:"image/1.mp3",coverPath:"/images/cover/1.jpg"},
    {songName:"Dil Sambhal jaa zara ",filePath:"image/2.mp3",coverPath:"/images/cover/2.jpg"},
    {songName:"Salam-e-Ishq",filePath:"image/3.mp3",coverPath:"/images/cover/3.jpg"},
    {songName:"Salam-e-Ishq",filePath:"image/4.mp3",coverPath:"/images/cover/4.jpg"},
    {songName:"Salam-e-Ishq",filePath:"image/5.mp3",coverPath:"/images/cover/5.jpg"},
    {songName:"Salam-e-Ishq",filePath:"image/6.mp3",coverPath:"/images/cover/6.jpg"}

]
songItems.forEach((element,i)=>{
     console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=images[i].songName;
})
//audioElement.play();
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-regular', 'fa-circle-play');
        masterPlay.classList.add('fa-regular', 'fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-regular', 'fa-circle-pause');
        masterPlay.classList.add('fa-regular', 'fa-circle-play');
        gif.style.opacity=0;
    }
})

//listen to events
myProgressBar.addEventListener('timeupdate',()=>{
  
    //Update Skeebar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);

    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value;addEventListener.duration/100;
})


