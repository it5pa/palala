
  const worksButton = document.querySelector(".works");
  const otherButton = document.querySelector(".other");
  const infoButton = document.querySelector(".info");
  const infoButtonMobile = document.querySelector(".info-mobile");
  const closeButton = document.querySelector(".close");

  worksButton.addEventListener("click", worksToggle);
  otherButton.addEventListener("click", otherToggle);
  infoButton.addEventListener("click", infoToggle);
  infoButtonMobile.addEventListener("click", infoToggleMobile);
  closeButton.addEventListener("click", closeToggle);


  var moreInfo = document.querySelector(".more-info");
  var projects = document.querySelector(".projects");
  var other = document.querySelector(".other-container");

  function worksToggle() {
    if (projects.classList.contains("show-projects")) {
      projects.classList.toggle("show-projects");
      worksButton.style.color = "#DCDCDC"; 
    } else {
      projects.classList.toggle("show-projects");
      worksButton.style.color = "#7ae423";
    }

    if (other.classList.contains("show-other")) {
      projects.style.zindex = "5";
    }
  };


  function infoToggle() {
    if (moreInfo.classList.contains("show-more-info")) {
      moreInfo.classList.toggle("show-more-info");
      infoButton.style.color = "#960909;";
    } else {
      moreInfo.classList.toggle("show-more-info");
      infoButton.style.color = "#7ae423";
    }
  };

  function infoToggleMobile() {
    if (moreInfo.classList.contains("show-more-info")) {
      moreInfo.classList.toggle("show-more-info");
      infoButtonMobile.style.color = "#DCDCDC";
      document.querySelector(".info-container").style.backgroundColor = "unset";
      document.querySelector(".header-container").style.display = "flex";
      document.querySelector(".voicememos").style.display = "inherit";
    } else {
      moreInfo.classList.toggle("show-more-info");
      infoButtonMobile.style.color = "#7ae423";
      document.querySelector(".info-container").style.backgroundColor = "#82816d";
      document.querySelector(".header-container").style.display = "none";
      document.querySelector(".voicememos").style.display = "none";
    }
  };

  function closeToggle() {
    if (moreInfo.classList.contains("show-more-info")) {
      moreInfo.classList.toggle("show-more-info");
      infoButtonMobile.style.color = "#DCDCDC";
      document.querySelector(".info-container").style.backgroundColor = "unset";
      document.querySelector(".header-container").style.display = "flex";
      document.querySelector(".voicememos").style.display = "inherit";
    } 
  };



  function otherToggle() {
    if (other.classList.contains("show-other")) {
      other.classList.toggle("show-other");
      otherButton.style.color = "#DCDCDC";
    } else {
      other.classList.toggle("show-other");
      otherButton.style.color = "#7ae423";
    }
  };


  var mobileView = window.matchMedia("(max-width: 640px)")

  // if (mobileView.matches) { 
  //   worksButton.style.width = "unset";
  //   infoButton.style.display = "none";
  //   worksButton.style.color = "#7ae423";
  // };
