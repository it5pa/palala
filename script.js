$(document).ready(function(){
    $('.project').slick({
      dots: false,
      respondTo: 'slider',
      draggable: true,
      infinite: true,
      slidesToShow: 1,
      speed: 150,
      fade: true,
      cssEase: 'linear',
      responsive: [
        {
          breakpoint: 620,
          settings: {
          arrows: false,
          adaptiveHeight: true
          }
        },
        {
          breakpoint: 345,
          settings: {
          arrows: false,
          adaptiveHeight: true
          }
        }
        ]
    });
  });

  

  const worksButton = document.querySelector(".works");

  worksButton.addEventListener("click", worksToggle);

  var moreInfo = document.getElementById("more-info");
  var projects = document.getElementById("projects");
  var mobileView = window.matchMedia("(max-width: 640px)")
  const infoButton = document.querySelector(".info");

  if (mobileView.matches) { 
    worksButton.innerHTML = "Works & More";
    worksButton.style.width = "unset";
    infoButton.style.display = "none";
    worksButton.style.color = "#EC825B";
  };

  function worksToggle() {
    var projects = document.getElementById("projects");

    if (projects.style.opacity == "0") {
      projects.style.opacity = "1";
      projects.style.display = "block"
      projects.style.pointerEvents = "unset";
      worksButton.style.color = "#DCDCDCDC";
    } else {
      projects.style.pointerEvents = "none";
      projects.style.display = "none"
      projects.style.opacity = "0";
      worksButton.style.color = "#EC825B";
    }

    var mobileView = window.matchMedia("(max-width: 640px)")

    function mobileProjectsToggle(mobileView) {
      worksButton.style.color = "#DCDCDCDC";
      if (mobileView.matches) { // If media query matches
        if (projects.style.display == "block") {
          moreInfo.style.display = "none";
          worksButton.style.color = "#EC825B";
        } else if (projects.style.display == "none") {
          moreInfo.style.display = "block";
        } 
      } 
    }
  
    mobileProjectsToggle(mobileView);
  };


  infoButton.addEventListener("click", infoToggle);

  function infoToggle() {
    var moreInfo = document.getElementById("more-info");
    if (moreInfo.style.opacity == "1") {
      moreInfo.style.opacity = "0";
      moreInfo.style.display = "none"
      moreInfo.style.pointerEvents = "none";
      infoButton.style.color = "#EC825B";
    } else {
      moreInfo.style.opacity = "1";
      moreInfo.style.display = "block"
      moreInfo.style.pointerEvents = "unset";
      infoButton.style.color = "#DCDCDCDC";
    }

    var mobileView = window.matchMedia("(max-width: 640px)")

    function mobileInfoToggle(mobileView) {
      if (mobileView.matches) { // If media query matches
        var moreInfo = document.getElementById("more-info");
        if (projects.style.display == "block") {
          moreInfo.style.display = "block";
          projects.style.display = "none";
        } else {
          moreInfo.style.display = "block";
        }
      }
    }
  
    mobileInfoToggle(mobileView);
  };

  