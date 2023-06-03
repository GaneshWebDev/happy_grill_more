/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/*==================== ITEM TYPE =======================*/
const btnEl = document.querySelectorAll(".button");
const type_cont = document.querySelector(".type");
const Indian_cont = document.querySelector(".Indian");
const European_cont = document.querySelector(".European");
const South_African_cont = document.querySelector(".South_African");
const Appetizers_cont = document.querySelector(".Appetizers");
const Desserts_cont = document.querySelector(".Desserts");
const Beverages_cont = document.querySelector(".Beverages");
const total_cont = document.querySelector(".total_menu");
const close_icon_cont = document.querySelector(".close");
close_icon_cont.addEventListener('click',()=>{
    console.log('hello');
    total_cont.style.display="none";
    type_cont.style.display="grid";
    Indian_cont.style.display="none";
    European_cont.style.display="none";
    South_African_cont.style.display="none";
    Appetizers_cont.style.display="none";
    Desserts_cont.style.display="none";
    Beverages_cont.style.display="none";
})
btnEl.forEach(element=>element.addEventListener('click',()=>{
    if(element.innerText=="Indian"){
        total_cont.style.display="flex";
        Indian_cont.style.display="grid";
        type_cont.style.display="none";
    }else if(element.innerText=="European"){
        total_cont.style.display="flex";
        European_cont.style.display="grid";
        type_cont.style.display="none";
    }else if(element.innerText=="South African"){
        total_cont.style.display="flex";
        South_African_cont.style.display="grid";
        type_cont.style.display="none";
    }else if(element.innerText=="Appetizers"){
        total_cont.style.display="flex";
        Appetizers_cont.style.display="grid";
        type_cont.style.display="none";
    }else if(element.innerText=="Desserts"){
        total_cont.style.display="flex";
        Desserts_cont.style.display="grid";
        type_cont.style.display="none";
    }else if(element.innerText=="Beverages"){
        total_cont.style.display="flex";
        Beverages_cont.style.display="grid";
        type_cont.style.display="none";
    }
   
    
}))
/*====================ADD TO CART=====================*/
const menu_cont=document.querySelectorAll(".menu__content");
const item_name=[]
menu_cont.forEach(element=>element.addEventListener('click',(event)=>{
    event.preventDefault();
    element.classList.add("icon_after_click");
    item_name.push(element.querySelector(".menu__name").innerText);
    
})
);
/*=================place Order=================*/
const place_btn=document.querySelectorAll(".order_button");
const del_form=document.querySelector(".delivery_form");
place_btn.forEach(element=>element.addEventListener('click',()=>{
    del_form.style.display="flex";
    total_cont.style.display="none";
    Indian_cont.style.display="none";
    European_cont.style.display="none";
    South_African_cont.style.display="none";
    Appetizers_cont.style.display="none";
    Desserts_cont.style.display="none";
    Beverages_cont.style.display="none";
    console.log(item_name)
}))
/*==============form data============*/
const fromEl=document.querySelector(".deliver_form");
var nameUser;
var number;
var addres;
fromEl.addEventListener('submit',(e)=>{
    e.preventDefault();
    nameUser= fromEl.querySelector("#name").value;
    number=fromEl.querySelector("#no").value;
    addres=fromEl.querySelector("#address").value;
    total_cont.style.display="none";
    type_cont.style.display="grid";
    Indian_cont.style.display="none";
    European_cont.style.display="none";
    South_African_cont.style.display="none";
    Appetizers_cont.style.display="none";
    Desserts_cont.style.display="none";
    Beverages_cont.style.display="none";
    del_form.style.display="none";
})
/*===============admin=============*/
var userId="kp";
var password="1234";
const admin_fromEl=document.querySelector(".login_form");
const form_cont=document.querySelector(".login_form_cont");
const admin_btn=document.querySelector(".admin");
const order_container=document.querySelector(".orders_container");
const itemEl=document.querySelector("#items");
const nameEl=document.querySelector("#c_name");
const numberEl=document.querySelector("#c_number");
const addressEl=document.querySelector("#c_address");
const sectionEl1=document.querySelector(".menu");
const sectionEl2=document.querySelector(".contact");
const sectionEl3=document.querySelector(".footer");
admin_btn.addEventListener('click',()=>{
    form_cont.style.display="flex";
    type_cont.style.display="none";
    sectionEl1.style.height="200px";
    sectionEl2.style.display="none";
    sectionEl3.style.display="none";
})
console.log(admin_fromEl);
admin_fromEl.addEventListener('submit',(e)=>{
e.preventDefault();
console.log("hello");
if(admin_fromEl.querySelector("#userId").value==userId && admin_fromEl.querySelector("#password")){
console.log("ok");
admin_fromEl.style.display="none";
order_container.style.display="flex";
item_name.forEach(element=>{
    const list=document.createElement("li");
    list.innerText=`${element}`;
    itemEl.appendChild(list);
})
nameEl.innerText=`Name:${nameUser}`;
numberEl.innerText=`Number:${number}`;
addressEl.innerText=`Address:${addres}`;
          }
})
/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.home__data, .home__img,
            .about__data, .about__img,
            .services__content,
            .app__data, .app__img,
            .contact__data, .contact__button,
            .footer__content, .type`, {
    interval: 200
})