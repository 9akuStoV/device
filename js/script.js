let slide1 = document.querySelector('.slider_item:nth-child(1)');
let slide2 = document.querySelector('.slider_item:nth-child(2)');
let slide3 = document.querySelector('.slider_item:nth-child(3)');

let slide_btn1 = document.querySelector('.slider_pagination_item:nth-child(1) .slider_button');
let slide_btn2 = document.querySelector('.slider_pagination_item:nth-child(2) .slider_button');
let slide_btn3 = document.querySelector('.slider_pagination_item:nth-child(3) .slider_button');

slide_btn1.onclick= function() {
    slide1.classList.add('slider_active');
    slide2.classList.remove('slider_active');
    slide3.classList.remove('slider_active');
    slide_btn1.classList.add('slider_button_active');
    slide_btn2.classList.remove('slider_button_active');
    slide_btn3.classList.remove('slider_button_active');
}

slide_btn2.onclick= function() {
    slide2.classList.add('slider_active');
    slide1.classList.remove('slider_active');
    slide3.classList.remove('slider_active');
    slide_btn2.classList.add('slider_button_active');
    slide_btn1.classList.remove('slider_button_active');
    slide_btn3.classList.remove('slider_button_active');
}

slide_btn3.onclick= function() {
    slide3.classList.add('slider_active');
    slide2.classList.remove('slider_active');
    slide1.classList.remove('slider_active');
    slide_btn3.classList.add('slider_button_active');
    slide_btn2.classList.remove('slider_button_active');
    slide_btn1.classList.remove('slider_button_active');
}

//Переключатель сервисов

let service_btn1 = document.querySelector('.service_pag_item:nth-child(1) .service_button');
let service_btn2 = document.querySelector('.service_pag_item:nth-child(2) .service_button');
let service_btn3 = document.querySelector('.service_pag_item:nth-child(3) .service_button');

let service1 = document.querySelector('.service_list .service_item:nth-child(1)');
let service2 = document.querySelector('.service_list .service_item:nth-child(2)');
let service3 = document.querySelector('.service_list .service_item:nth-child(3)');

service_btn1.onclick= function() {
    service_btn1.classList.add('service_button_active');
    service_btn2.classList.remove('service_button_active');
    service_btn3.classList.remove('service_button_active');    
    service1.classList.add('service_item_atcive');
    service2.classList.remove('service_item_atcive');
    service3.classList.remove('service_item_atcive');
}

service_btn2.onclick= function() {
    service_btn2.classList.add('service_button_active');
    service_btn3.classList.remove('service_button_active');
    service_btn1.classList.remove('service_button_active');
    service2.classList.add('service_item_atcive');
    service3.classList.remove('service_item_atcive');
    service1.classList.remove('service_item_atcive');
}

service_btn3.onclick= function() {
    service_btn3.classList.add('service_button_active');
    service_btn2.classList.remove('service_button_active');
    service_btn1.classList.remove('service_button_active');    
    service3.classList.add('service_item_atcive');
    service2.classList.remove('service_item_atcive');
    service1.classList.remove('service_item_atcive');
}

// Модалка с контактом

const feedback_btn = document.querySelector('.contact_button');
const feedback_modal = document.querySelector('.feedback');
const feedback_close = feedback_modal.querySelector('.button_close');
const feedback_form = feedback_modal.querySelector('.feedback_form');
const feedback_name = feedback_modal.querySelector('.feedback_name_input');
const feedback_email = feedback_modal.querySelector('.feedback_email_input');
const feedback_text = feedback_modal.querySelector('.feedback_textarea');

let isStorageSupport = true;
let storage = '';

try {
  storage = localStorage.getItem('name');
} catch (err) {
  isStorageSupport = false;
}

feedback_btn.addEventListener('click', function (evt) {
    evt.preventDefault();
    feedback_modal.classList.add('modal_show');
    if (storage) {
        feedback_name.value = storage;
        feedback_email.focus();
    } else {
        feedback_name.focus();
      }
});

feedback_close.addEventListener('click', function (evt) {
    evt.preventDefault();
    feedback_modal.classList.remove('modal_show');
    feedback_modal.classList.remove('modal_error');    
    feedback_name.classList.remove('feedback_invalid');
    feedback_email.classList.remove('feedback_invalid');
    feedback_text.classList.remove('feedback_invalid');
});

feedback_form.addEventListener('submit', function (evt) {
    if (!feedback_name.value || !feedback_email.value || !feedback_text.value) {
        evt.preventDefault();
        feedback_modal.classList.remove('modal_error');
        feedback_modal.offsetWidth = feedback_modal.offsetWidth;
        feedback_modal.classList.add('modal_error');
      } else {
        if (isStorageSupport) {
        localStorage.setItem('name', feedback_name.value);
      }
    }
    if (!feedback_name.value) {
        feedback_name.classList.add('feedback_invalid');
    }
    if (!feedback_email.value) {
        feedback_email.classList.add('feedback_invalid');
    }
    if (!feedback_text.value) {
        feedback_text.classList.add('feedback_invalid');
    }
});

document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      if (feedback_modal.classList.contains('modal_show')) {
        evt.preventDefault();
        feedback_modal.classList.remove('modal_show');        
        feedback_modal.classList.remove('modal_error');
        feedback_name.classList.remove('feedback_invalid');
        feedback_email.classList.remove('feedback_invalid');
        feedback_text.classList.remove('feedback_invalid');
      }
    }
  });

// Модалка с картой

const map_btn = document.querySelector('.map');
const map_modal = document.querySelector('.full_map');
const map_close = map_modal.querySelector('.button_close');

map_btn.addEventListener('click', function (evt) {
    evt.preventDefault();
    map_modal.classList.add('modal_show');
});

map_close.addEventListener('click', function (evt) {
    evt.preventDefault();
    map_modal.classList.remove('modal_show');
});

document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      if (map_modal.classList.contains('modal_show')) {
        evt.preventDefault();
        map_modal.classList.remove('modal_show');
      }
    }
  });