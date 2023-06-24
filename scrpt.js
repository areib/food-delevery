let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick =() =>{

    menu.classlist.toggle('fa-times');
    navbar.classlist.toggle('active');
}
