import img from './restaurant-image.jpg';




function home() {
    const myImg = new Image();
    myImg.src = img;
    myImg.style.width = "50%";

    const content = document.querySelector("content")

        const div = document.createElement('div'); 
        div.textContent = "home page"
        content.appendChild(div);
        content.appendChild(myImg);
        //content.innerHTML += `<img src=${img} />`

}

export default home;