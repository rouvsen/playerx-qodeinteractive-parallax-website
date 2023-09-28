const searchModal = document.getElementById("myModal");
const infoModal = document.getElementById("info-modal");

function showSearchModal() {
    console.log(searchModal);
    searchModal.style.display = "block";
}

function closeSearchModal() {
    console.log(searchModal);
    searchModal.style.display =  "none";
}


function showInfoModal() {
    console.log(infoModal);
    infoModal.style.display =  "block";
}

function closeInfoModal() {
    console.log(infoModal);
    infoModal.style.display =  "none";
}

function hideOnScroll() {
    const elements = document.getElementsByClassName("fixed-right");
    const el2 = document.getElementById("fixed-section");
    const scrollY = window.pageYOffset;
    if (scrollY > 500) {
        Array.from(elements).forEach(element => {
            element.style.display = "none";
        })
      el2.style.width = "50px"
    }
  }
  
  window.onscroll = hideOnScroll;