const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const slider = $('.slider')
const sliderMain = $('.slider-main')
const sliderItems = $$('.slider-item')
const prev = $('.prev')
const next = $('.next')
const sliderLength = sliderItems.length
const sliderItemWidth = sliderItems[0].offsetWidth
sliderMain.style.width = `${sliderLength * sliderItemWidth}px`
let positionX = 0
let index = 0

next.addEventListener('click', function(){
    handleChangeSlider(1)
})

prev.addEventListener('click', function(){
    handleChangeSlider(-1)
})

function handleChangeSlider(direction){
    if (direction == 1){
        index++
        if(index >= sliderLength){
            index = sliderLength
            return
        } 
        index = index
        positionX = positionX - sliderItemWidth
        sliderMain.style = `transform: translateX(${positionX}px)`
        console.log(positionX)
        console.log(index)
      

    }else if (direction == -1){
        index--
        if(index <= 0){
            index = 0
            return
        }
        index = index
        positionX = positionX + sliderItemWidth
        sliderMain.style = `transform: translateX(${positionX}px)`
        console.log(positionX)
        console.log(index)
       
    }
}

const listMenu = $$('.left-menu-item')
    listMenu.forEach(item =>{
        item.addEventListener('click', function(){
        $('.left-menu-item.active').classList.remove('active')
        this.classList.add('active')
        })
       
    })




    const titleSong = $('.music-name')
    const singerName = $('.singer')
    const imageSong = $('.sub-image-info img')
    const playBtn = $('.fa-solid.fa-play')
    const nextBtn = $('.fa-solid.fa-forward-step')
    const prevBtn = $('.fa-solid.fa-backward-step')
    const audio = $('#audio')
    const durationSong = $('.duration')
    const remainingSong = $('.remaining')
    const progressBar = $('#songBar')
    const randomBtn = $('.fa-shuffle')
    const repeatBtn = $('.fa-arrow-rotate-left')

    let isPlaying = true
    let currentSong = 0
    let isRandom = false
    let isRepeat = false

    const songs = [
            {
                nameSong: 'nakae',
                singer: 'Bonesa',
                image: './images/image_1.jpeg',
                path: './music/1.mp3'
            },
            {
                nameSong: 'wakana',
                singer: 'Sanaze',
                image: './images/image_2.jpeg',
                path: './music/2.mp3'
            },
            {
                nameSong: 'Pakeoma',
                singer: 'Eden',
                image: './images/image_3.jpeg',
                path: './music/3.mp3'
            },
            {
                nameSong: 'Monoma',
                singer: 'Bonesa',
                image: './images/image_4.jpeg',
                path: './music/4.mp3'
            },
            {
                nameSong: 'Chandelir',
                singer: 'Brook',
                image: './images/image_5.jpeg', 
                path: './music/5.mp3'
            },
            {
                nameSong: 'Summer',
                singer: 'Katie',
                image: './images/image_6.jpeg',
                path: './music/6.mp3'
            },
            {
                nameSong: 'My love',
                singer: 'Charlie',
                image: './images/image_7.jpeg',
                path: './music/7.mp3'
            },
    
    ]

    playBtn.addEventListener('click', function(){
        playPause()
    })

    nextBtn.addEventListener('click', function(){
        if(randomBtn.isRandom){
            randomSong()
            
        }else{
            changeSong(1)
        }
       
    })

    prevBtn.addEventListener('click', function(){
        if(randomBtn.isRandom){
            randomSong()
        }else{
            changeSong(-1)
        }
    })

    function playPause(){
        if(isPlaying){
            audio.play()
            playBtn.setAttribute('class',' .fa-solid .fa-play')
            playBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`
            isPlaying = false
        }else {
            audio.pause()
            playBtn.setAttribute('class',' .fa-solid .fa-pause')
            playBtn.innerHTML = `<i class="fa-solid fa-play"></i>`
            isPlaying = true}
        
    }
    
    audio.addEventListener('timeupdate', function(){
        let currentDuration = audio.duration
        let currentRemaining = audio.currentTime

        let minRemaining = Math.floor(currentRemaining/60)
        let secRemaining = Math.floor(currentRemaining%60)


        let minDuration = Math.floor(currentDuration/60)
        let secDuration = Math.floor(currentDuration%60)
        
       
        const progressSong = Math.floor(currentRemaining / currentDuration * 100)
        progressBar.value = progressSong
        

        if(secRemaining < 10){
            secRemaining = `0${secRemaining}`
        }
        remainingSong.innerText = `${minRemaining}:${secRemaining}`

        if(secDuration < 10){
            secDuration = `0${secDuration}`
        }
        durationSong.innerText = `${minDuration}:${secDuration}`
    })

    audio.addEventListener('ended', function(){
        if(repeatBtn.isRepeat){
            audio.play()
        }else{
            nextBtn.click()
        }
    })

    progressBar.addEventListener('change', function(e){
        const seek = audio.duration / 100 * e.target.value
        audio.currentTime = seek
    })

    randomBtn.addEventListener('click', function(){
        randomBtn.isRandom = !randomBtn.isRandom
        randomBtn.classList.toggle('activeBtn', randomBtn.isRandom)
        console.log(this.isRandom)
    })

    repeatBtn.addEventListener('click', function(){
        repeatBtn.isRepeat = !repeatBtn.isRepeat
        repeatBtn.classList.toggle('activeBtn', repeatBtn.isRepeat)
    })

    function changeSong(sig){
        if(sig == 1){
            currentSong++
            if(currentSong >= songs.length)
            currentSong = 0
            isPlaying = true
        }else if(sig == -1){
            currentSong--
            if(currentSong < 0)
            currentSong = songs.length
            isPlaying = true
        }
        audio.setAttribute('src', `${songs[currentSong].path}`)
        loadSong()
        playPause()
    }
    
    function loadSong() {
        titleSong.textContent = `${songs[currentSong].nameSong}`
        singerName.textContent = `${songs[currentSong].singer}`
        imageSong.setAttribute('src', `${songs[currentSong].image}`)
    }
    loadSong()

    function randomSong(){
        let newIndex
        do{
            newIndex = Math.floor(Math.random() * songs.length)
        }while ( newIndex === songs.currentSong)
        currentSong = newIndex
        changeSong()
        loadSong()
    }



