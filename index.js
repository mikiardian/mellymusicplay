// Swiper JS
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    // grabCursor: true
});

// Music buttons
const playBtn = document.getElementById('play')
const pauseBtn = document.getElementById('pause')
const prevBtn = document.querySelector('.fa-backward-step')
const nextBtn = document.querySelector('.fa-forward-step')
// music details
const audio = document.querySelector('#audio')
const audioTitle = document.querySelector('.musicTitle')
const bandname = document.querySelector('.bandname')
const audioImg = document.querySelector('.audioImg')

playBtn.addEventListener('click', () => {
    playBtn.classList.toggle('hide')
    pauseBtn.classList.toggle('hide')
	audio.play()
})

pauseBtn.addEventListener('click', () => {
    playBtn.classList.toggle('hide')
    pauseBtn.classList.toggle('hide')
	audio.pause()
})

nextBtn.addEventListener('click', () => {
	nextSong()
	audio.play()
})

prevBtn.addEventListener('click', () => {
	prevSong()
	audio.play()
})

let index = 0

let songs = [
	{
	title: 'On Bended Knee',
	band: 'Boys II Men',
	src: 'songs/onben.mp3',
	img: 'images/boyz.jpg'
	},
	{
	title: 'Thats Why You Go',
	band: 'MLTR',
	src: 'songs/mltr-thats.mp3',
	img: 'images/mltr.jpg'
	},
	{
	title: 'Paint My Love',
	band: 'MLTR',
	src: 'songs/mltr-paint.mp3',
	img: 'images/mltr2.jpg'
	},
	{
	title: 'My Love',
	band: 'Westlife',
	src: 'songs/mylove.mp3',
	img: 'images/westlife.jpg'
	},
	{
	title: 'When I Was Your Man',
	band: 'Bruno Mars',
	src: 'songs/bm-when.mp3',
	img: 'images/bruno.jpeg'
	},
	{
	title: 'You Are Not Alone',
	band: 'Michael Jackson',
	src: 'songs/mj-youre',
	img: 'images/mj.jpeg'
	}
]

loadsong(songs[index])

function loadsong(e) {
	audioImg.src = e.img
	audioTitle.textContent = e.title
	bandname.textContent = e.band
	audio.src = e.src
}

function nextSong() {
	if (index < songs.length - 1) {
		index++
		loadsong(songs[index])

		playBtn.classList.add('hide')
		pauseBtn.classList.remove('hide')
	} else {
		console.log('end')
	}
}

function prevSong() {
	if (index > 0) {
		index--
		loadsong(songs[index])

		playBtn.classList.add('hide')
		pauseBtn.classList.remove('hide')
	} else {
		console.log('end')
	}
}

// Play custom music
function songChoice(songNum) {
	loadsong(songs[songNum])
	index = songNum
	audio.play()
	console.log(songNum)

	playBtn.classList.add('hide')
	pauseBtn.classList.remove('hide')
}

// Search Bar
const searchBar = document.querySelector('.fa-magnifying-glass')
const searchContainer = document.querySelector('.searchContainer')

document.querySelector('.fa-xmark').onclick = () => {
	searchContainer.classList.toggle('showSearchContainer')
}

searchBar.addEventListener('click', () => {
	searchContainer.classList.toggle('showSearchContainer')
})

