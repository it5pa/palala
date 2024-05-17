const audioPlayers = document.querySelectorAll('.audio-player')

audioPlayers.forEach(audioPlayer => {

  const audio = audioPlayer.querySelector('audio')
  const timespan = audioPlayer.querySelector('.timespan')

  audioPlayer.querySelector('.title').addEventListener('click', () => {
    if (audioPlayer.classList.contains('playing')) {
      audioPlayer.classList.remove('playing')
      audio.pause()
    } else {
      audioPlayer.classList.add('playing')
      audio.play()
    }
  }, false)

  audioPlayer.querys

  audioPlayer.querySelector('audio').addEventListener('timeupdate', () => {
    updateDuration(audio, timespan)
  }, false)


audioPlayer.querySelector('audio').addEventListener('pause', () => {
  const audioDuration = parseInt(audio.duration)
  audioPlayer.classList.remove('playing')
  updateDuration(audio, timespan)
  timespan.innerHTML = formatDuration(audioDuration)
}, false)

  audioPlayer.querySelector('audio').addEventListener('loadedmetadata', () => {
    const audioDuration = parseInt(audio.duration)
    const formattedDuration = formatDuration(audioDuration)
    timespan.innerHTML = formattedDuration
  })

  document.addEventListener('keydown', event => {
    if (event.code === 'Space') {
     event.preventDefault();
    }
  })

  document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
     audio.pause()
    }
  })

  const stopAll = document.querySelector(".stop-button")

  stopAll.addEventListener('click', () => {
    audio.pause()
  })

})

function updateDuration(audio, timespan) {
  let durationTime = parseInt(audio.duration)
  let currentTime = parseInt(audio.currentTime)
  let timeLeft = durationTime - currentTime

  const formattedDuration = formatDuration(timeLeft)

  timespan.innerHTML = formattedDuration
}

function formatDuration(time) {
  // format > 99:99
  let seconds = time % 60
  let minutes = Math.floor(time / 60) % 60

  seconds = seconds < 10 ? `0${seconds}` : seconds // 09
  minutes = minutes < 10 ? `0${minutes}` : minutes // 01

  return `${minutes}:${seconds}`
}

const info = document.querySelector(".info")
const description = document.querySelector(".description")

// document.querySelector(".info").addEventListener('mouseover', () => {
//   description.style.display = "flex"
// });

description.addEventListener('click', () => {
  description.style.display= "none"
})

  document.querySelector(".info").addEventListener('click', () => {

    if (window.getComputedStyle(description).getPropertyValue("display") == "none"){
      description.style.display = "flex"
    } else {
        description.style.display = "none"
      }
  });