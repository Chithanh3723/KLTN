const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const comment = document.querySelector('#list-comment')
const commentItem = document.querySelectorAll('#list-comment .item')
var translateY = 0
var count = commentItem.length

next.addEventListener('click', function (event) {
  event.preventDefault()
  if (count == 1) {
    // Xem hết bình luận
    return false
  }
  translateY += -400
  comment.style.transform = `translateY(${translateY}px)`
  count--
})

prev.addEventListener('click', function (event) {
  event.preventDefault()
  if (count == 3) {
    // Xem hết bình luận
    return false
  }
  translateY += 400
  comment.style.transform = `translateY(${translateY}px)`
  count++
})
const slider = document.querySelector('.slider')
const sliderMain = document.querySelector('.slider-main')
const sliderItems = document.querySelectorAll('.slider-item')
const prevImg = document.querySelector('.prevImg')
const nextImg = document.querySelector('.nextImg')
const sliderLength = sliderItems.length
const sliderItemWidth = sliderItems[0].offsetWidth
sliderMain.style.width = `${sliderLength * sliderItemWidth}px`
let positionX = 0
let index = 0

prevImg.addEventListener('click', function(){
    handleChangeSlider(-1)
})

nextImg.addEventListener('click', function(){
    handleChangeSlider(1)
})

function handleChangeSlider(direction){
    if (direction == 1){
        index++
        if(index >= sliderLength){
            index = sliderLength
            return
        } 
        console.log(positionX)
        console.log(index)
        positionX = positionX - sliderItemWidth
        sliderMain.style =`transform: translateX(${positionX}px)`


    }else if (direction == -1){
        index--
        if(index <= 0){
            index = 0
            return
        }
        positionX = positionX + sliderItemWidth
        sliderMain.style =`transform: translateX(${positionX}px)`
        console.log(positionX)
        console.log(index)
    }
}
