let slide1 = document.querySelector(".slider_item:nth-child(1)");
let slide2 = document.querySelector(".slider_item:nth-child(2)");
let slide3 = document.querySelector(".slider_item:nth-child(3)");

let slide_btn1 = document.querySelector(".slider_pagination_item:nth-child(1) .slider_button");
let slide_btn2 = document.querySelector(".slider_pagination_item:nth-child(2) .slider_button");
let slide_btn3 = document.querySelector(".slider_pagination_item:nth-child(3) .slider_button");

slide_btn1.onclick= function() {
    slide1.classList.add("slider_active");
    slide2.classList.remove("slider_active");
    slide3.classList.remove("slider_active");
    slide_btn1.classList.add("slider_button_active");
    slide_btn2.classList.remove("slider_button_active");
    slide_btn3.classList.remove("slider_button_active");
}

slide_btn2.onclick= function() {
    slide2.classList.add("slider_active");
    slide1.classList.remove("slider_active");
    slide3.classList.remove("slider_active");
    slide_btn2.classList.add("slider_button_active");
    slide_btn1.classList.remove("slider_button_active");
    slide_btn3.classList.remove("slider_button_active");
}

slide_btn3.onclick= function() {
    slide3.classList.add("slider_active");
    slide2.classList.remove("slider_active");
    slide1.classList.remove("slider_active");
    slide_btn3.classList.add("slider_button_active");
    slide_btn2.classList.remove("slider_button_active");
    slide_btn1.classList.remove("slider_button_active");
}

