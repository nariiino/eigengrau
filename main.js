const video = document.querySelector(".video")
const cameraButtom = document.querySelector(".camera")
const canvas =document.querySelector(".canvas")

navigator.mediaDevices.getUserMedia({video: true})
.then(stream=> {

    video.srcObject = stream;
    video.play();

})

cameraButtom.addEventListener("click", () => {
    video.classList.toggle("effect")
    setTimeout(() => video.classList.toggle("effect"), 400);

    canvas.getContext("2d").drawImage(video, 0, 0, canvas.Width, canvas.height)
    let image_data_url = canvas.toDataURL("image/jpeg")

    //download the image directly
    const downloadLink = document.createElement("a")
    downloadLink.href = image_data_url
    downloadLink.download = "botpic.jpeg"
    document.body.appendChild(downloadLink)
    downloadLink.click();
    document.body.removeChild

})

const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    btn.style.backgroundColor = '#ffac09';
    btn.style.boxShadow = '0 0 40px #ffac09';
    btn.style.transition = '.5s ease';
});