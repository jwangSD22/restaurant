//see menuItems.js for creating the array for this function's parameter//
function addToMenu (param,domElement) {
for (let i=0;i<param.length;i++)
{
let element = document.createElement('div')
element.id = 'menuItem'
let name = document.createElement('div')
let image = document.createElement('div')
image.id = 'innerMenuImgDiv'
let description = document.createElement('div')
let price = document.createElement('div')

element.appendChild(name)
element.appendChild(image)
element.appendChild(description)
element.appendChild(price)

name.innerHTML = param[i].name;
image.appendChild(param[i].image);
description.innerHTML = param[i].description;
price.innerHTML = param[i].price;

domElement.appendChild(element)
}
    }


export default addToMenu