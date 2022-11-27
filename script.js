let current = 0;
let volBool = false;

const audioCurrent = document.querySelector("#audioCurrent");
const menuItem = document.querySelector(".menu-item");
const songList = document.querySelector(".song-list");
const screenlock = document.querySelector(".screen-lock");
const topLock = document.querySelector(".screen-lock .block .top_lock");
const playerParent = document.querySelector(".playerParent");
const telephone = document.querySelector(".telephone");
const timePhone = document.querySelector(".time-phone");
const time = document.querySelector(".time");
const screenTime = document.querySelector(".screenTime");
const days = document.querySelector(".days");
const exitLine = document.querySelector(".exitLine");
const playerLock = document.querySelector(".player-lock");
const name = document.querySelector(".name");
const range = document.querySelector("#range");
const forwardBlock = document.querySelector("#for");
const backwardBlock = document.querySelector("#back");
const pauseBlock = document.querySelector(".pauseBlock");
const playerBlock = document.querySelector(".playerBlock");
const cells = document.querySelectorAll(".cells");
const keypad = document.querySelector(".keypad");
const keyicon = document.querySelector(".keyicon");
const telMenu = document.querySelectorAll(".telMenu");
const key = document.querySelector(".key");
const number = document.querySelector(".number");
const phoneContacts = document.querySelector(".phoneContacts");
const contactsMain = document.querySelector(".contactsMain");
const IconSpan = document.querySelector(".IconSpan");
const cellsPhone1 = document.querySelector(".cellsPhone1");
const photo = document.querySelector(".photo");
const Screen = document.querySelector(".screen");
const modMenu = document.querySelector(".modMenu");
const filtredit = document.querySelector(".filtredit");
const modalIConspan = document.querySelector(".modalIConspan");
const filtrtitle = document.querySelector(".filtrtitle");
const modIcon = document.querySelector(".modIcon");
const delate = document.querySelector(".delate");
const cellsIcon = document.querySelector(".cellsIcon");
const gatov = document.querySelector(".gatov");
const icon = document.querySelectorAll(".icon");
const nedavni = document.querySelector(".nedavni");
const h4 = document.querySelector("#h4");
const h5 = document.querySelector("#h5");
const filter = document.querySelector(".filtr");
const imgicon = document.querySelector(".imgicon");
const divedit = document.querySelector(".divedit");
const yeras = document.querySelector(".years");
const Icon = document.querySelector(".Icon");
const cellsicon1 = document.querySelector(".cellsicon1");
const volumeRangeParent = document.querySelector(".volumeRangeParent");

// const galeryicon = document.querySelector('.galeryicon')
// const imgedit = document.querySelector('.imgedit2')

// --------------------contacti zangvac--------------------------

let array = [
  {
    contactt: "Vrej Movsisyan",
    time: "19:22",
    iconTell: "fas fa-phone-alt",
    delateIcon: "fas fa-minus-circle icon",
  },
  {
    contactt: "Armen xadavik",
    time: "19:22",
    iconTell: "fas fa-phone-alt",
    delateIcon: "fas fa-minus-circle icon",
  },
  {
    contactt: "Ashot Aramyan",
    time: "19:22",
    iconTell: "fas fa-phone-alt",
    delateIcon: "fas fa-minus-circle icon",
  },
  {
    contactt: "Gevorg Jrvejyan",
    time: "19:22",
    iconTell: "fas fa-phone-alt",
    delateIcon: "fas fa-minus-circle icon",
  },
  {
    contactt: "Max Papyan",
    time: "19:22",
    iconTell: "fas fa-phone-alt",
    delateIcon: "fas fa-minus-circle icon",
  },
];

// --------------------audio pleer------------------------//

let audioArray = [
  {
    song: "./audio/1.mp3",
    image: "url(./img/1.jpg)",
    title: "НЕ ЖАЛЬ",
    artist: " Miyagi ft Скриптонит",
  },
  {
    song: "./audio/2.mp3",
    image: "url(./img/2.jpg)",
    title: "Sarerov dzorerov",
    artist: "Arkadi Dumikyan",
  },
  {
    song: "./audio/3.mp3",
    image: "url(./img/3.jpg)",
    title: "Hay Axjik",
    artist: "Elon Safaryan",
  },
  {
    song: "./audio/4.mp3",
    image: "url(./img/4.jpg)",
    title: "Emili",
    artist: "Mesaytara",
  },
  {
    song: "./audio/5.mp3",
    image: "url(./img/5.jpg)",
    title: "Джованна",
    artist: "Enrasta",
  },
  {
    song: "./audio/6.mp3",
    image: "url(./img/6.jpg)",
    title: "SUS MNA",
    artist: "Karush & Gaya Harutyunyan",
  },
  {
    song: "./audio/7.mp3",
    image: "url(./img/7.jpg)",
    title: "Кассандра",
    artist: " Miyagi & Andy Panda",
  },
  {
    song: "./audio/8.mp3",
    image: "url(./img/8.jpg)",
    title: "Captain",
    artist: "Miyagi",
  },
  {
    song: "./audio/9.mp3",
    image: "url(./img/9.jpg)",
    title: "Fire Man",
    artist: "Miyagi",
  },
  {
    song: "./audio/10.mp3",
    image: "url(./img/10.jpg)",
    title: "Marlboro",
    artist: "Miyagi",
  },
  {
    song: "./audio/11.mp3",
    image: "url(./img/11.jpg)",
    title: "Патрон",
    artist: "Miyagi & Andy Panda",
  },
  {
    song: "./audio/12.mp3",
    image: "url(./img/12.jpg)",
    title: "Заплаканная ",
    artist: "Miyagi & Эндшпиль ft. Amigo",
  },
  {
    song: "./audio/13.mp3",
    image: "url(./img/13.jpg)",
    title: "Половина моя",
    artist: "MiyaGi & Эндшпиль",
  },
  {
    song: "./audio/14.mp3",
    image: "url(./img/14.jpg)",
    title: "Вороны",
    artist: "Xcho ",
  },
];

let audio = new Audio();
audio.src = audioArray[current].song;
imgBlock.style.backgroundImage = audioArray[current].image;
songName.innerText = audioArray[current].title;
artistName.innerText = audioArray[current].artist;
songNameBlock.innerText = audioArray[current].title;
artistNameBlock.innerText = audioArray[current].artist;
playerLock.style.backgroundImage = audioArray[current].image;

playPauseMain.onclick = () => {
  if (audio.paused) {
    audio.src = audioArray[current].song;
    imgBlock.style.backgroundImage = audioArray[current].image;
    songName.innerText = audioArray[current].title;
    artistName.innerText = audioArray[current].artist;
    songNameBlock.innerText = audioArray[current].title;
    artistNameBlock.innerText = audioArray[current].artist;
    playerLock.style.backgroundImage = audioArray[current].image;
    audio.play();
    playPause.style.clipPath =
      "polygon(0 0, 40% 0, 40% 100%, 60% 100%, 60% 0, 100% 0, 100% 100%, 0 100%)";
    pauseBlock.style.clipPath =
      "polygon(0 0, 40% 0, 40% 100%, 60% 100%, 60% 0, 100% 0, 100% 100%, 0 100%)";
    playerBlock.style.display = "block  ";
  } else {
    audio.src = audioArray[current].song;
    audio.pause();
    playPause.style.clipPath =
      "polygon(0 0, 46% 57%, 0 0, 100% 50%, 100% 50%, 0 100%, 38% 39%, 0 100%)";
    pauseBlock.style.clipPath =
      "polygon(0 0, 40% 0, 40% 100%, 60% 100%, 60% 0, 100% 0, 100% 100%, 0 100%)";
  }
};
pauseBlock.onclick = () => {
  if (audio.paused) {
    audio.src = audioArray[current].song;
    imgBlock.style.backgroundImage = audioArray[current].image;
    songName.innerText = audioArray[current].title;
    artistName.innerText = audioArray[current].artist;
    songNameBlock.innerText = audioArray[current].title;
    artistNameBlock.innerText = audioArray[current].artist;
    playerLock.style.backgroundImage = audioArray[current].image;
    audio.play();
    playPause.style.clipPath =
      "polygon(0 0, 40% 0, 40% 100%, 60% 100%, 60% 0, 100% 0, 100% 100%, 0 100%)";
    pauseBlock.style.clipPath =
      "polygon(0 0, 40% 0, 40% 100%, 60% 100%, 60% 0, 100% 0, 100% 100%, 0 100%)";
  } else {
    audio.src = audioArray[current].song;
    audio.pause();
    playPause.style.clipPath =
      "polygon(0 0, 46% 57%, 0 0, 100% 50%, 100% 50%, 0 100%, 38% 39%, 0 100%)";
    pauseBlock.style.clipPath =
      "polygon(0 0, 46% 57%, 0 0, 100% 50%, 100% 50%, 0 100%, 38% 39%, 0 100%)";
  }
};
forward.onclick = () => {
  current++;
  if (current >= audioArray.length) {
    current = 0;
  }
  audio.src = audioArray[current].song;
  imgBlock.style.backgroundImage = audioArray[current].image;
  songName.innerText = audioArray[current].title;
  artistName.innerText = audioArray[current].artist;
  songNameBlock.innerText = audioArray[current].title;
  artistNameBlock.innerText = audioArray[current].artist;
  playerLock.style.backgroundImage = audioArray[current].image;
  audio.play();
  playPause.style.clipPath =
    "polygon(0 0, 40% 0, 40% 100%, 60% 100%, 60% 0, 100% 0, 100% 100%, 0 100%)";
  pauseBlock.style.clipPath =
    "polygon(0 0, 40% 0, 40% 100%, 60% 100%, 60% 0, 100% 0, 100% 100%, 0 100%)";
};
backword.onclick = () => {
  current--;
  if (current < 0) {
    current = audioArray.length - 1;
  }
  audio.src = audioArray[current].song;
  imgBlock.style.backgroundImage = audioArray[current].image;
  songName.innerText = audioArray[current].title;
  artistName.innerText = audioArray[current].artist;
  songNameBlock.innerText = audioArray[current].title;
  artistNameBlock.innerText = audioArray[current].artist;
  playerLock.style.backgroundImage = audioArray[current].image;
  audio.play();
  playPause.style.clipPath =
    "polygon(0 0, 40% 0, 40% 100%, 60% 100%, 60% 0, 100% 0, 100% 100%, 0 100%)";
  pauseBlock.style.clipPath =
    "polygon(0 0, 40% 0, 40% 100%, 60% 100%, 60% 0, 100% 0, 100% 100%, 0 100%)";
};
forwardBlock.onclick = () => {
  current++;
  if (current >= audioArray.length) {
    current = 0;
  }
  audio.src = audioArray[current].song;
  imgBlock.style.backgroundImage = audioArray[current].image;
  songName.innerText = audioArray[current].title;
  artistName.innerText = audioArray[current].artist;
  songNameBlock.innerText = audioArray[current].title;
  artistNameBlock.innerText = audioArray[current].artist;
  playerLock.style.backgroundImage = audioArray[current].image;
  audio.play();
  playPause.style.clipPath =
    "polygon(0 0, 40% 0, 40% 100%, 60% 100%, 60% 0, 100% 0, 100% 100%, 0 100%)";
  pauseBlock.style.clipPath =
    "polygon(0 0, 40% 0, 40% 100%, 60% 100%, 60% 0, 100% 0, 100% 100%, 0 100%)";
};
backwardBlock.onclick = () => {
  current--;
  if (current < 0) {
    current = audioArray.length - 1;
  }
  audio.src = audioArray[current].song;
  imgBlock.style.backgroundImage = audioArray[current].image;
  songName.innerText = audioArray[current].title;
  artistName.innerText = audioArray[current].artist;
  songNameBlock.innerText = audioArray[current].title;
  artistNameBlock.innerText = audioArray[current].artist;
  playerLock.style.backgroundImage = audioArray[current].image;
  audio.play();
  playPause.style.clipPath =
    "polygon(0 0, 40% 0, 40% 100%, 60% 100%, 60% 0, 100% 0, 100% 100%, 0 100%)";
  pauseBlock.style.clipPath =
    "polygon(0 0, 40% 0, 40% 100%, 60% 100%, 60% 0, 100% 0, 100% 100%, 0 100%)";
};

audioCurrent.addEventListener("input", function () {
  let x = audioCurrent.value;
  let bgColor =
    "linear-gradient(to right, rgb(128,128,128)" +
    x +
    "%, rgb(255,255,255)" +
    x +
    "% )";
  audioCurrent.style.background = bgColor;
  audio.currentTime = (audio.duration * this.value) / 100;
});
range.addEventListener("input", function () {
  let x = audioCurrent.value;
  let bgColor =
    "linear-gradient(to right, rgb(128,128,128)" +
    x +
    "%, rgb(255,255,255)" +
    x +
    "% )";
  audioCurrent.style.background = bgColor;
  audio.currentTime = (audio.duration * this.value) / 100;
});
audio.ontimeupdate = () => {
  if (audio.currentTime == 0) {
    audioCurrent.value = 0;
  } else {
    audioCurrent.value = (audio.currentTime * 100) / audio.duration;
    range.value = (audio.currentTime * 100) / audio.duration;
    let x = audioCurrent.value;
    let bgColor =
      "linear-gradient(to right, rgb(128,128,128)" +
      x +
      "%, rgb(255,255,255)" +
      x +
      "% )";
    audioCurrent.style.background = bgColor;
    range.style.background = bgColor;
  }
  if (audio.ended) {
    current++;
    if (current >= audioArray.length) {
      current = 0;
    }
    audio.src = audioArray[current].song;
    imgBlock.style.backgroundImage = audioArray[current].image;
    songName.innerText = audioArray[current].title;
    artistName.innerText = audioArray[current].artist;
    songNameBlock.innerText = audioArray[current].title;
    artistNameBlock.innerText = audioArray[current].artist;
    playerLock.style.backgroundImage = audioArray[current].image;
    audio.play();
  }
  let curMins = Math.floor(audio.currentTime / 60);
  let curSec = Math.floor(audio.currentTime - curMins * 60);
  let durMins = Math.floor(audio.duration / 60);
  let durSec = Math.floor(audio.duration - durMins * 60);
  if (curSec < 10) {
    curSec = "0" + curSec;
  }
  if (durSec < 10) {
    durSec = "0" + durSec;
  }
  if (audio.currentTime > 0.001) {
    cur.innerText = curMins + ":" + curSec;
    dur.innerText = durMins + ":" + durSec;
    curB.innerText = curMins + ":" + curSec;
    durB.innerText = durMins + ":" + durSec;
  }
};

lists.onclick = () => {
  menuItem.classList.toggle("active");
  if (menuItem.classList.contains("active")) {
    lists.className = "fa fa-angle-up";
  } else {
    lists.className = "fa fa-angle-down";
  }
};

audioArray.forEach((item, index) => {
  let liSong = document.createElement("li");
  let iconSpan = document.createElement("span");
  let titleSpan = document.createElement("span");
  let artistSpan = document.createElement("span");
  let listName = document.createElement("div");
  songList.appendChild(liSong);
  liSong.appendChild(listName);
  liSong.className = "liSong";
  iconSpan.className = "iconSpan";
  artistSpan.className = "artistSpan";
  titleSpan.className = "titleSpan";
  liSong.prepend(iconSpan);
  listName.appendChild(titleSpan);
  listName.appendChild(artistSpan);
  iconSpan.style.backgroundImage = audioArray[index].image;
  titleSpan.innerText = audioArray[index].title;
  artistSpan.innerText = audioArray[index].artist;
  let listsPlay = document.querySelectorAll(".liSong");
  listsPlay.forEach((ite, idn) => {
    ite.onclick = () => {
      current = idn;
      audio.src = audioArray[current].song;
      imgBlock.style.backgroundImage = audioArray[current].image;
      songName.innerText = audioArray[current].title;
      artistName.innerText = audioArray[current].artist;
      songNameBlock.innerText = audioArray[current].title;
      artistNameBlock.innerText = audioArray[current].artist;
      playerLock.style.backgroundImage = audioArray[current].image;
      audio.play();
      playPause.style.clipPath =
        "polygon(0 0, 40% 0, 40% 100%, 60% 100%, 60% 0, 100% 0, 100% 100%, 0 100%)";
    };
  });
});

timePhone.innerHTML = `<marquee behavior="" direction="" scrollamount="2" style="color: #e5d8d8; font: 12px sans-serif;" class="time-phone">MTS Armenia</marquee>`;
power.onclick = () => {
  screenlock.classList.toggle("active");
  topLock.classList.toggle("active");
  if (screenlock.classList.contains("active")) {
    setTimeout(() => {
      timePhone.innerHTML = `
                <span class="time" style="font-family: sans-serif; transition: .3s">12:12</span>
                <i class="fas fa-location-arrow"></i>
                `;
      let dt = setInterval(() => {
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        // let seconds = date.getSeconds();
        // let ms = date.getMilliseconds();
        timePhone.innerText = hours + ":" + minutes;

        if (month < 10) {
          month = month.slice(1);
        }
      }, 1);
    }, 500);
  } else {
    setTimeout(() => {
      timePhone.innerHTML = `
            <marquee behavior="" direction="" scrollamount="2" style="color: #e5d8d8; font: 12px sans-serif; transition: .3s" class="time-phone">MTS Armenia</marquee>
        `;
    }, 500);
  }
};
//------------------------------exit function-------------------------------//
exitLine.onclick = () => {
  playerParent.classList.remove("active");
  telephone.classList.remove("active");
  exitLine.classList.remove("active");
  photo.classList.remove("active");
  modal.style.display = "none";
};
playIcon.onclick = () => {
  playerParent.classList.add("active");
};
spanaa.onclick = () => {
  telephone.classList.add("active");
  exitLine.classList.add("active");
};

//------------------------------dzen function--------------------------//

let volumeValueCurrent = 0;
let x = 0;
audio.volume = volumeRange.value / 100;

volumeRange.addEventListener("input", function () {
  audio.volume = volumeRange.value / 100;
  x = audio.volume * 100;
  let bgColor =
    "linear-gradient(to right, rgb(127,204,241)" +
    x +
    "%, rgb(255,255,255)" +
    x +
    "% )";
  volumeRange.style.background = bgColor;
  dzen.style.background = bgColor;
  volumeValueCurrent = x;
});

let setVol;

volUp.onclick = () => {
  volumeRange.classList.add("active");
  volBool = false;
  clearTimeout(setVol);
  volFunk();
  if (audio.volume < 0.95) {
    audio.volume += 0.05;
  }
  x = audio.volume * 100;
  let bgColor =
    "linear-gradient(to right, rgb(127,204,241)" +
    x +
    "%, rgb(255,255,255)" +
    x +
    "% )";
  volumeRange.style.background = bgColor;
  dzen.style.background = bgColor;
  volumeValueCurrent = audio.volume * 100;
  volumeRangeParent.style.zIndex = "100";
};

volDown.onclick = () => {
  volumeRange.classList.add("active");
  volBool = false;
  clearTimeout(setVol);
  volFunk();
  if (audio.volume >= 0.05) {
    audio.volume -= 0.05;
  }
  x = audio.volume * 100;
  let bgColor =
    "linear-gradient(to right, rgb(127,204,241)" +
    x +
    "%, rgb(255,255,255)" +
    x +
    "% )";
  dzen.style.background = bgColor;
  volumeRange.style.background = bgColor;
  volumeValueCurrent = x;
  volumeRangeParent.style.zIndex = "100";
};

function volFunk() {
  if (volBool) {
    setVol = setTimeout(() => {
      volumeRange.classList.remove("active");
      volBool = false;
      volumeRangeParent.style.zIndex = "0";
    }, 2000);
  } else {
    volumeRange.classList.add("active");
  }
}
volumeRange.onmouseleave = () => {
  volBool = true;
  volFunk();
};
volUp.onmouseleave = () => {
  volBool = true;
  volFunk();
};
volDown.onmouseleave = () => {
  volBool = true;
  volFunk();
};
volumeRange.onmouseover = () => {
  volBool = false;
  clearTimeout(setVol);
  volFunk();
};

mute.onclick = () => {
  volumeRange.classList.add("active");
  volBool = false;
  clearTimeout(setVol);
  volFunk();
  if (audio.volume >= 0.05) {
    audio.volume = 0;
  } else {
    audio.volume = volumeValueCurrent / 100;
  }
  x = audio.volume * 100;
  let bgColor =
    "linear-gradient(to right, rgb(127,204,241)" +
    x +
    "%, rgb(255,255,255)" +
    x +
    "% )";
  dzen.style.background = bgColor;
  volumeRange.style.background = bgColor;
};

dzen.addEventListener("input", function () {
  audio.volume = dzen.value / 100;
  x = dzen.value;
  let bgColor =
    "linear-gradient(to right, rgb(127,204,241)" +
    x +
    "%, rgb(255,255,255)" +
    x +
    "% )";
  dzen.style.background = bgColor;
  volumeRange.style.background = bgColor;
  volumeValueCurrent = volumeRange.value;
});

document.querySelectorAll(".keypadButtons").forEach((items, index) => {
  items.onclick = () => {
    keyNumber.innerText += items.innerText;
  };
  keyicon.onclick = () => {
    let a = keyNumber.innerHTML.length;
    keyNumber.innerText = keyNumber.innerText.slice(0, length - 1);
  };
  // zang.onclick = () => {
  //     keyNumber.innerText += contactsMain.innerHTML
  // }
});

telMenu[0].onclick = () => {};
telMenu[1].onclick = () => {
  if (number.classList.add("active")) {
    number.classList.remove("active");
  } else if (key.classList.remove("active")) {
    number.classList.add("active");
  } else if (phoneContacts.classList.remove("active")) {
    number.classList.add("active");
  }
};
telMenu[2].onclick = () => {
  phoneContacts.classList.add("active");
  if (key.classList.remove("active")) {
    phoneContacts.classList.add("active");
  } else if (number.classList.remove("active")) {
    phoneContacts.classList.add("active");
  }
};
telMenu[3].onclick = () => {
  if (key.classList.add("active")) {
    key.classList.remove("active");
  }
};
telMenu[4].onclick = () => {};

// -----------------cantactner---------------------

let zangiXosq = new Audio();

let contacts = [
  { contact: "Hayk Hakobyan", xosq: "./zangiDzen/1.mp3" },
  { contact: "Arsen Martirosyan", xosq: "./zangiDzen/1.mp3" },
  { contact: "Ashot Aramyan", xosq: "./zangiDzen/1.mp3" },
  { contact: "Tigran Saroyan", xosq: "./zangiDzen/1.mp3" },
  { contact: "Hrachya Manvelyan", xosq: "./zangiDzen/1.mp3" },
  { contact: "Sona Ghazaryan", xosq: "./zangiDzen/1.mp3" },
  { contact: "Vrej Makaryan", xosq: "./zangiDzen/1.mp3" },
  { contact: "Armine Poghosyan", xosq: "./zangiDzen/1.mp3" },
  { contact: "Sona Ghazaryan", xosq: "./zangiDzen/1.mp3" },
  { contact: "Hasmik Hakobyan", xosq: "./zangiDzen/1.mp3" },
  { contact: "Manvel Mkrtchyan", xosq: "./zangiDzen/1.mp3" },
];

contacts.forEach((item, index) => {
  const contactBlock = document.createElement("div");
  contactsMain.prepend(contactBlock);
  contactBlock.className = "cintactItems";
  const contactText = document.createElement("p");
  contactBlock.append(contactText);
  contactText.className = "contactText";
  contactText.innerText = item.contact;

  document.querySelectorAll(".cintactItems").forEach((item1) => {
    item1.onclick = () => {
      cellsPhone1.style.opacity = "1";
      cellsPhone1.style.visibility = "visible";
      zangiAnun.innerText = item1.innerText;
      // item1.innerText = celsParent.innerText
      // const contName = document.createElement('h2')
      // contactName.append(contName)
      console.log(item1);
      // contactText.innerText = item1.innerText
    };
    // let setTime = setTimeout(() => {
    //     zangiXosq.src = Math.round(Math.random() * item )
    //     zangiXosq.play()
    //     console.log(zangiXosq);
    // }, 1000)
  });
});

IconSpan.onclick = () => {
  cellsPhone1.style.opacity = "0";
  cellsPhone1.style.visibility = "hidden";
};

const zangiAnun = document.getElementById("zangiAnun");

zang.onclick = () => {
  if (keyNumber.innerText !== "") {
    cellsPhone1.style.opacity = "1";
    cellsPhone1.style.visibility = "visible";
    zangiAnun.innerText = keyNumber.textContent;
    keyNumber.textContent = "";
  }
};
img.onclick = () => {
  photo.classList.add("active");
  exitLine.classList.add("active");
};
yeras.onclick = () => {
  photo.classList.remove("active");
};

//-------------------------------gallery,filter--------------------------//

let photoPar = document.getElementById("photoPar"),
  s = "";
for (let i = 1; i <= 57; i++) {
  s += `<img src="./gallery/${i}.jpg" style="width: 75px; height: 75px;" class="img"><br>`;
}
photoPar.innerHTML = s;
const modalImg = document.getElementById("modalImg");
a = "";

for (let i = 1; i <= 57; i++) {
  a += `<img src="./gallery/${i}.jpg" class="galery">`;
  // modalImg.onclick = () => {
  // }
}
modalImg.innerHTML = a;

let filters = [
  " blur(2px)",
  " brightness(0.4)",
  "contrast(200%)",
  "drop-shadow(16px 16px 20px blue)",
  "grayscale(50%)",
  "hue-rotate(90deg)",
  "invert(75%)",
  "opacity(80%)",
  "saturate(30%)",
  " sepia(60%)",
];

const modal = document.querySelector(".modal");
const edit = document.querySelector(".modal div i");
document.querySelectorAll("#photoPar > .img").forEach((item, index) => {
  item.onclick = () => {
    modal.style.display = "block";
    modal.style.backgroundImage = `url(${item.src})`;
    modMenu.classList.add("active");
    for (let i = 0; i < filters.length; i++) {
      let div = document.createElement("div");
      div.className = "filterdiv";
      filter.append(div);
      div.style = "width: 30px; height: 30px; cursor: pointer; border-radius: 50%; border: 2px solid white; background: rgb(255,255,255,0.5), z-index: -1";
      div.style.filter = filters[i];
      document.querySelectorAll(".filterdiv").forEach((ite, ind) => {
        ite.onclick = () => {
          modal.style.filter = filters[ind];
        };
      });
      filtrtitle.onclick = () => {
        filter.style.display = "none";
        filtredit.classList.remove("active");
      };
    }
    filter.style.display = "none";
    imgicon.onclick = () => {
      if (filter.style.display== "none") {
        filter.style.display= "flex";
      } else {
        filter.style.display = "none";
      }
    };
    let Y = -140;
    filter.onwheel = (e) => {
      Y += e.deltaY / 20;
      if (Y <= -140 && Y >= -205) {
        filter.style.transform = `translate(${Y}px)`;
        console.log(Y);
      }
    };
  };
  document.querySelectorAll(".galery").forEach((i, n) => {
    i.onclick = () => {
      modal.style.backgroundImage = `url(${i.src})`;
    };
  });
  modal.ondblclick = () => {
    modal.style.display = "none";
    modMenu.classList.remove("active");
    filtredit.classList.remove("active");
  };
  modal.onclick = () => {
    if (modMenu.className == "modMenu active") {
      modMenu.classList.remove("active");
    } else {
      if (filtredit.className == "filtredit active") {
        modMenu.classList.remove("active");
      } else {
        modMenu.classList.add("active");
      }
    }
  };
  modalIConspan.onclick = () => {
    if (modMenu.className == "modMenu active") {
      filtredit.classList.add("active");
    } else {
      modMenu.classList.remove("active");
    }
  };
  modIcon.onclick = () => {
    modal.style.display = "none";
    modMenu.classList.remove("active");
    filtredit.classList.remove("active");
  };
});

let X = 0;
modalImg.onwheel = (e) => {
  X += e.deltaY / 20;
  if (X <= 0 && X >= -840) {
    modalImg.style.transform = `translate(${X}px)`;
  }
};

// --------------------------------------contactneri function--------------------------------------

array.map((item, index) => {
  const celsParent = document.createElement("div");
  celsParent.className = "celsParent";
  nedavni.append(celsParent);

  const contactIcon = document.createElement("div");
  contactIcon.className = "contactIcon";
  celsParent.append(contactIcon);

  const delateIcons = document.createElement("div");
  delateIcons.className = "delateIcons";
  celsParent.append(delateIcons);

  const contactName = document.createElement("div");
  contactName.className = "contactName";
  celsParent.append(contactName);

  const timeCell = document.createElement("div");
  timeCell.className = "timeCell";
  celsParent.append(timeCell);

  const telIco = document.createElement("i");
  telIco.className = item.iconTell;
  contactIcon.append(telIco);

  const delIco = document.createElement("i");
  delIco.className = item.delateIcon;
  delateIcons.append(delIco);

  const contName = document.createElement("h2");
  contName.innerText = item.contactt;
  contactName.append(contName);

  const tellll = document.createElement("p");
  tellll.innerText = item.time;
  timeCell.append(tellll);
});

const contactName = document.querySelectorAll(".contactName");
document.querySelectorAll(".contactIcon").forEach((ite, index) => {
  ite.firstElementChild.onclick = () => {
    cellsPhone1.style.opacity = "1";
    cellsPhone1.style.visibility = "visible";
    zangiAnun.innerText = contactName[index].textContent;
  };
  console.log(ite);
});

h4.onclick = () => {
  nedavni.style.opacity = "1";
};
h5.onclick = () => {
  nedavni.style.opacity = "0";
};

//----------------------------delete contact-------------------------//

const delateIcon = document.querySelectorAll(".icon");
const celsParent = document.querySelectorAll(".celsParent");
delate.onclick = function () {
  delateIcon.forEach((item, index) => {
    item.classList.add("active");
    if (item.classList.contains("active")) {
      delateIcon.forEach((ite, ind) => {
        ite.onclick = async () => {
          let arr = array.splice(ite, 1);
          nedavni.removeChild(celsParent[ind]);
        };
      });
    }
  });
};

gatov.onclick = () => {
  delateIcon.forEach((item, index) => {
    item.classList.remove("active");
  });
};

// ------------------------ date objact ------------------------

let date = new Date(); //yndhanur taretvery
let year = date.getFullYear(); //tari
let month = date.getMonth() + 1; // amis
let day = date.getDate(); // amsva or
let weekday = date.getDay(); // shabatva or

let weekDayName = [
  "kiraki",
  "erkushabti",
  "ereqshabti",
  "choreqshatti",
  "hinshabti",
  "urbat",
  "shabat",
];
let monthName = [
  "hunvar",
  "petrva",
  "mart",
  "april",
  "mayis",
  "hunis",
  "hulis",
  "ogostos",
  "september",
  "hoktember",
  "moyember",
  "dektember",
];

if (month < 10) {
  month = "0" + month;
}
if (day < 10) {
  day = "0" + day;
}
days.innerText = weekDayName[weekday] + ", " + day + "." + month;

let dt = setInterval(() => {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  //   let seconds = date.getSeconds();
  //   let ms = date.getMilliseconds();
  screenTime.innerText = hours + ":" + minutes;

  if (month < 10) {
    month = month.slice(1);
  }
}, 1);

// cellsicon1.onclick = () => {
//     Icon.style.background = 'rgba(255, 255, 255, .2)'
// }

// document.addEventListener("keydown", function(e){

//  if (e.keyCode == 13){

//  alert("Вы нажали кнопку enter, её номер: " + e.keyCode );

//  console.log(e.keyCode );

//  }

// });
