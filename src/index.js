import myFunc from "./menuItems";
import makeDiv from "./addMenuFunction";

const body = document.querySelector('body');
body.appendChild(makeDiv(myFunc()[1]))


