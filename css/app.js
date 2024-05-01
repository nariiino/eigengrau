const video = document.querySelector(".video")
const cameraButtom = document.querySelector(".camera")
const canvas =document.querySelector(".canvas")

navigator.mediaDevices.getUserMedia({video: true})
.then(stream=> {

    video.srcObject

})