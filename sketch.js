console.log('%cMental health Plants 🌿', 'padding: 0.3rem 1.5rem; font-family: Roboto; font-size: 1.2em; line-height: 1.4em; color: white; background-color: #4158D0; background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);')

//making kittens replace all imgs on a page
//make sure to add web accessible resources for any images you want to add -> this is not dynamically done
let imgs = document.getElementsByTagName('img');

for (imgElt of imgs){
    console.log(imgElt.src);
}


//drawing on the canvas
// function setup(){
//     let c = createCanvas(400,400);
//     c.position(0,0);
// }

// function draw(){
//     background(0);
// }