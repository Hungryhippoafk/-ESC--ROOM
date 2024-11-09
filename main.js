const menuToggle = document.querySelector('.menuToggle');
const mobileNav = document.getElementById('mobileNav');
const closeToggle = document.getElementById("closeToggle");
const mobileNavOverlay = document.getElementById("mobileNavOverlay");

menuToggle.addEventListener("click",openMenu);
closeToggle.addEventListener("click",closeMenu);



function closeMenu(){
  mobileNav.style.display="none";
  mobileNavOverlay.style.display="none";

}

function openMenu() {
    mobileNav.style.display ="block";
    mobileNavOverlay.style.display="block";
    
}
