const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');
const closeToggle = document.getElementById("closeToggle");
const mobileNavOverlay = document.getElementById("mobileNavOverlay");


menuToggle.addEventListener("click",openMenu);
closeToggle.addEventListener("click",closeMenu);


function openMenu(){
    mobileNavOverlay.style.display ="block";
    mobileNav.style.opacity = "1";
    menuToggle.style.display = "none";
}
function closeMenu(){
    mobileNavOverlay.style.display="none"
    mobileNav.style.opacity ="0";
    menuToggle.style.display ="block";
}