import './style.css';
import addToMenu from "./addMenuFunction";
import menuItems from './menuItems'


const body = document.querySelector('body');








addToMenu(menuItems(),body)

function deleteMenu(){
    while (body.firstChild)
    body.removeChild(body.firstChild)
}
