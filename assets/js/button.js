function redirictionToDoctorsPage(){
    window.location.href='./doctors.html'
}
function redirictionToContacPage(){
    window.location.href="./contact.html"
}
function scrollToTopPage(){
    window.scrollTo(0,0);
}

let btn = document.querySelector(".rediriction");

window.onscroll = function(){ (this.scrollY > 10) ? btn.classList.add("show") : btn.classList.remove("show");
}