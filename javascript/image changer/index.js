let myImage = document.querySelector('img');

myImage.onclick = function() {
 let imgSrc = myImage.getAttribute('src')
 if(imgSrc == 'img.jpeg'){
    myImage.setAttribute('src','jpeg-home.jpg');
 } else{
    myImage.setAttribute('src','img.jpeg');
 }
}