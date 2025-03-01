const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
document.addEventListener("DOMContentLoaded", function () {
    let carousel = document.querySelector("#multiItemCarousel");
    let carouselInstance = new bootstrap.Carousel(carousel, {
        interval: false,
        wrap: true
    });

    document.querySelector(".carousel-control-next").addEventListener("click", function () {
        carouselInstance.next();
    });

    document.querySelector(".carousel-control-prev").addEventListener("click", function () {
        carouselInstance.prev();
    });
});

function down(){
    document.getElementsByTagName("nav")[0].style.height="15rem"
    document.getElementsByTagName("nav")[0].getElementsByClassName("menu")[0].style.display="none"
    document.getElementsByTagName("nav")[0].getElementsByClassName("cross")[0].style.display="block"
    document.querySelectorAll("a").forEach(function(val){
        val.style.display="block"
    })
    document.getElementsByTagName("nav")[0].style.flexDirection="column"
    document.getElementsByTagName("nav")[0].classList.remove("justify-content-between")
    document.getElementsByTagName("nav")[0].classList.add("justify-content-start")
    document.getElementsByClassName("navlinks")[0].style.flexDirection="column"

}
function up(){
    document.getElementsByTagName("nav")[0].getElementsByClassName("menu")[0].style.display="block"
    document.getElementsByTagName("nav")[0].getElementsByClassName("cross")[0].style.display="none"
    document.getElementsByTagName("nav")[0].style.height="6rem"
    document.getElementsByTagName("nav")[0].querySelectorAll("a").forEach(function(val){
        val.style.display="none"
    })

}