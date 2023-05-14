// navbar
let navBarMenu = document.querySelector('.navsecond-part');

let navBarMenuBtn = document.querySelector('.toggle-nav');

const toggleNavOnClick = () => {
    const visibility = navBarMenu.getAttribute('data-visible');

    if(visibility == "false"){
        navBarMenu.setAttribute('data-visible',"true");
        navBarMenu.setAttribute('aria-expanded',"true");
        navBarMenuBtn.innerHTML = '<h3 class="close"> X </h3>';
    } else if(visibility == "true") {
        navBarMenu.setAttribute('data-visible',"false");
        navBarMenu.setAttribute('aria-expanded',"false");
        navBarMenuBtn.innerHTML = "|||";
    }
}

navBarMenuBtn.addEventListener('click',toggleNavOnClick);

// accordian
let btn = document.querySelectorAll('.accordian-trigger');
let accordianContent = document.querySelectorAll('.accordian-content');


btn.forEach((_button,index)=>{
    btn[index].addEventListener('click',()=>{
        btn[index].classList.toggle('open')
        accordianContent[index].classList.toggle('active');
    })
})
