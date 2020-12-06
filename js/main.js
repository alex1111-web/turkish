/*
document.addEventListener("DOMContentLoaded", function(event) {
  const modal = document.querySelector('.modal');
  // таким образом мы обратимся к модальному окну
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  // переменная в которой перебирается неск вложенных элементов 
  const closeBtn = document.querySelector('.modal__close');
  // функц закрывает модальное окно
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  }/* функц вызывает модальное окно (добавляя класс в div ) 

  modalBtn.forEach(element => {
    // element - кнопка 1 или кнопка 2 | addEventListener - слушатель событий | toggle - кнопка вкл/выкл
    element.addEventListener('click', switchModal);
  });

  closeBtn.addEventListener('click', switchModal);
  // switchModal (так называн) - toggle вкл и выкл доп. класс
});
*/

$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close');
      
  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });

  var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',/* обычные точки в свайпе */
    },
    navigation: {/* чтобы кнопки нажимались */
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  var next = $('.swiper-button-next');/* стрелка вперед */
  var prev = $('.swiper-button-prev');/* назад */
  var bullets = $('.swiper-pagination');

  // адаптив для стрелок с булетами(если добавлять слайды)
  next.css('left', prev.width() + 10 + bullets.width() + 10)
  bullets.css('left', prev.width() + 10)

  new WOW().init();

  // Валидация формы
  $('.modal__form').validate({
    errorClass: "invalid",/* какой класс присвоить эл */
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2, /* минимально кол-во букв */
        maxlength: 15
      },
      userPhone: "required",/*бобязательно к заполнению */
      userEmail: {
        required: true,
        email: true
      }
    },/* сообщения  */
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не более пятнадцати букв"
      },
      userPhone: "Телефон обязателен",
      userEmail: {
        required: "Обязательно укажите email",
        email: "Введите в формате: name@domain.com"
      }
    }
  });

  // маска для номера телефона
  $('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "+7 (___) ___-__-__"});

});

