const songs = [
    {
        title: "XO",
        artist: "Enhypen",
        file: "music/ENHYPEN 'XO.mp3",
        cover: "cover/enhypen_XOXO.png",
        coverAlbum: "sqcover/XO.jpg"
    },

    {
        title: "Yes Or No",
        artist: "Jungkook",
        file: "music/Yes or No.mp3",
        cover: "cover/jk_yesorno.png",
        coverAlbum:"sqcover/yes.jpg"
    },

    {
        title: "New Jeans",
        artist: "NewJeans",
        file: "music/New Jeans.mp3",
        cover: "cover/newjeans_newjeans.png",
        coverAlbum:"sqcover/newjeans.jpg"
    },

    {
        title: "Home",
        artist: "BTS",
        file: "music/HOME.mp3",
        cover: "cover/bts_home.png",
        coverAlbum:"sqcover/home.jpg"
    },

    
    {
        title: "Alchohol Free",
        artist: "Twice",
        file: "music/Alcohol-Free.mp3",
        cover: "cover/twice_alchoholfree.png",
        coverAlbum:"sqcover/free.jpg"  
    },

    {
        title: "Ditto",
        artist: "NewJeans",
        file: "music/NewJeans 'Ditto'.mp3",
        cover: "cover/newjeans_ditto.png",
        coverAlbum:"sqcover/ditto.jpg"  
    },

   
    {
        title: "Seven",
        artist: "Jungkook feat. Latto",
        file: "music/Seven (feat. Latto) - Clean Ver..mp3",
        cover: "cover/jk_seven.png",
        coverAlbum:"sqcover/seven.jpg"
    },

   
];


let songIndex = 0;
const audio = document.getElementById("audio");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const cover = document.getElementById("cover");
const playBtn = document.getElementById("play-btn");
const progress = document.getElementById("progress");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");

function loadSong(song) {
  title.textContent = song.title;
  artist.textContent = song.artist;
  audio.src = song.file;
  cover.src = song.cover;
  document.getElementById("album-cover").src = song.coverAlbum;
  cover.style.animationPlayState = "paused";
}

function togglePlay() {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = "⏸";
    cover.style.animationPlayState = "running";
  } else {
    audio.pause();
    playBtn.textContent = "▶";
    cover.style.animationPlayState = "paused";
  }
}

function nextSong() {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songs[songIndex]);
  audio.play();
  playBtn.textContent = "⏸";
  cover.style.animationPlayState = "running";
}

function prevSong() {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songs[songIndex]);
  audio.play();
  playBtn.textContent = "⏸";
  if (cover) cover.style.animationPlayState = "running";
}

audio.addEventListener("timeupdate", () => {
const current = audio.currentTime;
  const total = audio.duration;

  // Update time text
  currentTimeEl.textContent = formatTime(current);
  durationEl.textContent = isNaN(total) ? "0:00" : formatTime(total);

  const percent = (audio.currentTime / audio.duration) * 100;
  progress.value = percent;
});

function formatTime(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60);
  return `${min}:${sec < 10 ? "0" + sec : sec}`;
}

progress.addEventListener("input", () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
});

// Load first song on start
loadSong(songs[songIndex]);