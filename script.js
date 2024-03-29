const listen = document.querySelector(".listen");
const mixes = document.querySelector(".mixes");

listen.addEventListener('mouseover', ()=>{
  mixes.style ="display:block";
})

mixes.addEventListener('mouseover', ()=>{
  mixes.style ="display:block";
})

mixes.addEventListener('mouseout', ()=>{
  mixes.style ="display:none";
})


if (window.innerWidth < 960) {
  listen.addEventListener('click', ()=> {
    if (mixes.style.display == "none") {
      mixes.style.display = "block";
    } else {
      mixes.style.display = "none";
    }
  })
}

$(function() {

    new Slider({
        images: '.slider-1 img',
        btnPrev: '.slider-1 .buttons .prev',
        btnNext: '.slider-1 .buttons .next',
        auto: false
    });
});


function Slider(obj) {

  this.images = $(obj.images);
  this.auto = obj.auto;
  this.btnPrev = obj.btnPrev;
  this.btnNext = obj.btnNext;
    this.rate = obj.rate || 1000;

  var i = 0;
    var slider = this;

    // The "Previous" button: to remove the class .showed, show the previous image and add the .showed class
  this.prev = function () {
    slider.images.eq(i).removeClass('shown');
    i--;

    if (i < 0) {
      i = slider.images.length - 1;
    }

    slider.images.eq(i).addClass('shown');
  }

    // The "Next" button: to remove the class .showed, show the next image and add the .showed class
  this.next = function () {
    slider.images.eq(i).removeClass('shown');
    i++;

    if (i >= slider.images.length) {
      i = 0;
    }

    slider.images.eq(i).addClass('shown');
  }

    // To add next and prev functions when clicking the corresponding buttons
    $(slider.btnPrev).on('click', function(){ slider.prev();});
    $(slider.btnNext).on('click', function(){ slider.next();});

    document.addEventListener("keydown", event => {
  //every time a key is pushed, this function will fire
  event.code === "ArrowLeft" && slider.prev();
  event.code === "ArrowRight" && slider.next();
});

$("#right-arrow").click(function() { slider.next();});
$("#left-arrow").click(function() {slider.prev();});

};