import { newElm, rmvChil } from './DOM.js';
import { makeHome } from './home.js';
import { makeMenu } from './menu.js';
import { makeContact } from './contact.js';
import './styles.css';

const content = document.getElementById("content");

function handleBtn(event){
    const btn = event.target.classList[0];

    rmvChil(pageContentContainer);
    switch (btn) {
        case 'btn-home':
            makeHome(pageContentContainer);
            break;
        case 'btn-menu':
            makeMenu(pageContentContainer);
            break;
        case 'btn-contact':
            makeContact(pageContentContainer);
            break;
    }
};

function makeBtns(parent){

    const div = newElm("div", "", "btn-container", parent);
    // Make buttons
    newElm("button", "Home", "btn-home", div);
    const btnHome = document.querySelector(".btn-home");
    btnHome.addEventListener("click", handleBtn);

    newElm("button", "Menu", "btn-menu", div);
    const btnMenu = document.querySelector(".btn-menu");
    btnMenu.addEventListener("click", handleBtn);

    newElm("button", "Contact", "btn-contact", div);
    const btnContact = document.querySelector(".btn-contact");
    btnContact.addEventListener("click", handleBtn);
    return div;
};

function makeFooter(parent){
    const div = newElm("div","","footer-container", parent);
    newElm("p","I'm a footer!","footer-text", div);
    return div; 
};

const btnContainer = makeBtns(content);
const pageContentContainer = newElm("div","","container",content);
const footerContainer = makeFooter(content);

makeHome(pageContentContainer);