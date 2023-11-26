//header
let lyp = document.querySelector('.header__nav-list-item-search');
let pole = document.querySelector('.header__search-icon');
let exit = document.querySelector('.exit');

lyp.addEventListener('click', function(){
  pole.classList.toggle('header__search-icon-active');
});

exit.addEventListener('click', function(){
  pole.classList.toggle('header__search-icon-active');
});


let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('nav__link');

burger.addEventListener('click',

    function () {
        burger.classList.toggle('burger--active');

        menu.classList.toggle('header__nav--active');

        document.body.classList.toggle('stop-scroll');
    })

menuLinks.forEach(function (el) {
    el.addEventListener('click', function () {

        burger.classList.remove('burger--active');

        menu.classList.remove('header__nav--active');

        document.body.classList.remove('sotp-scroll');

    });
});

//search
const icon = document.querySelector('.icon');
const search = document.querySelector ('.nav__element');

icon.onclick = function() {
  search.classList.toggle('active');
};

//hero

new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 50,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
},
});

//work
let all_tabs = document.querySelectorAll('.work__link'); //получаем все табы
   let tab_header = document.querySelector('.work__title') //заголовок таба
   let tab_text = document.querySelector('.work__desc') //текст таба
   let tab_img = document.querySelector('.work__picture') //картинка таба

   //хранилище данных карточек табов
   let tabs_db = {
      "1 шаг": {
         "header": "Проводим консультацию",
         "text": "Влечет за собой процесс внедрения и модернизации приоритизации разума над эмоциями. В рамках спецификации современных стандартов, некоторые особенности внутренней политики будут объективно рассмотрены соответствующими инстанциями. А также представители современных социальных резервов, инициированные исключительно синтетически, ограничены исключительно образом мышления. Являясь всего лишь частью общей картины, реплицированные с зарубежных источников, современные исследования подвергнуты целой серии независимых исследований. Кстати,  стремящиеся вытеснить традиционное производство, нанотехнологии освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, призваны к ответу.",
         "img_url": "img/work-img-1.png",
      },
      "2 шаг": {
         "header": "Составляем смету",
         "text": "Внедрения и модернизации приоритизации разума над эмоциями. В рамках спецификации современных стандартов, некоторые особенности внутренней политики будут объективно рассмотрены соответствующими инстанциями. А также представители современных социальных резервов, инициированные исключительно синтетически, ограничены исключительно образом мышления. Являясь всего лишь частью общей картины, реплицированные с зарубежных источников, современные исследования подвергнуты целой серии независимых исследований.",
         "img_url": "img/work-img-2.png",
      },
      "3 шаг": {
         "header": "Привлекаем подрядчиков",
         "text": "Идейные соображения высшего порядка, а также новая модель организационной деятельности требует анализа прогресса профессионального сообщества. Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: высококачественный прототип будущего проекта напрямую зависит от дальнейших направлений развития. Разнообразный и богатый опыт говорит нам, что новая модель организационной деятельности говорит о возможностях системы массового участия. Принимая во внимание показатели успешности, постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнить важные задания по разработке прогресса профессионального сообщества.",
         "img_url": "img/work-img-3.png",
      },
      "4 шаг": {
         "header": "Инспектируем все этапы работ",
         "text": "Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: высококачественный прототип будущего проекта напрямую зависит от дальнейших направлений развития. Разнообразный и богатый опыт говорит нам, что новая модель организационной деятельности говорит о возможностях системы массового участия. Принимая во внимание показатели успешности, постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет.",
         "img_url": "img/work-img-4.png",
      }
   }

   all_tabs.forEach(function(el){
      el.addEventListener('click', function(e){
         e.preventDefault();

         // переключаем класс таба - меняем цвет шагов
         all_tabs.forEach(function(elem){
            elem.classList.remove("tab-active");
         });
         el.classList.add("tab-active");

         //меняем данные нашей таб-карточки
         tab_header.innerText = tabs_db[el.innerText]['header'];
         tab_text.innerText = tabs_db[el.innerText]['text'];
         tab_img.style.background = `url(${tabs_db[el.innerText]['img_url']}) center center no-repeat`;
         tab_img.style.backgroundSize = 'cover';

      });
   });


   /* Аккордеон */

   new Accordion('.question__items', {

  });
