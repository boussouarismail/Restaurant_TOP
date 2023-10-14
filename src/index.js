
import _ from 'lodash';
import home from "./home";
import contactUs from "./contactUs";
import menu from "./menu";


import './style.css';

console.log("i am connected");

    const page = document.querySelector("#content");

    const head = document.createElement('header');

        const button0 = createButton("Home");
        const button2 = createButton("Our menu")
        const button1 = createButton("Contact Us")

    page.appendChild(head);

    const content = document.createElement('content');

        // const div = document.createElement('div'); 
        // div.textContent = "home page"
        // content.appendChild(div);
        

    page.appendChild(content);

    const foot = document.createElement('footer');

        foot.textContent = "BOUSSOUAR Ismail The Odin Project 2023";

    page.appendChild(foot);

    home(); 

    button0.addEventListener('click', function () {
        clear();
        home();
    });

    button1.addEventListener('click', function () {
        clear();
        contactUs();
    });

    button2.addEventListener('click', function () {
        clear();
        menu();
    });


function clear(){
    const content = document.querySelector("content");
    content.textContent = "";
}

function createButton(name){

    const button = document.createElement('button'); 
        button.textContent = name;
        button.id = name;
        button.className = "tag";
        head.appendChild(button);
    return button;
}

    


