import $01pozole from './images/01pozole-grande-surtido.jpg'
import $02chiles from './images/02chiles-rellenos.jpg'
import $03combo1 from './images/03combo1.jpg'
import $04enchiladas from './images/04enchiladas-de-mole.jpg'
import $05sopes from './images/05orden-de-sopes.jpg'
import $06papas from './images/06papa-con-crema.png'
import $07chicharron from './images/07chicharron.jpg'
import $08tostada from './images/08tostada-de-pata.jpg'

const _01pozole = new Image()
const _02chiles = new Image()
const _03combo1 = new Image()
const _04enchiladas = new Image()
const _05sopes = new Image()
const _06papas = new Image()
const _07chicharron = new Image()
const _08tostada = new Image()

_01pozole.src = $01pozole
_02chiles.src = $02chiles
_03combo1.src = $03combo1
_04enchiladas.src = $04enchiladas
_05sopes.src = $05sopes
_06papas.src = $06papas
_07chicharron.src =$07chicharron
_08tostada.src = $08tostada

//USE THIS TEMPLATE FOR ADDING MENU ITEMS//

//this is an **OBJECT ARRAY** that stores each menu item
//as an object and will return the final array so that
// addMenuFunction.js can create the DOM elements needed

function menuItems (){
let menu = [
//UNCOMMENT AND USE THIS TEMPLATE BELOW TO CREATE EACH MENU ITEM

// {
//     name:'string',
//     image:"insert img var",
//     description:'string',
//     price:'string',
// },

//****COPY AND PASTE BELOW THIS LINE****//

{
    name:'Tostada De Pata',
    image:_08tostada,
    description:'3 pickled pigs feet tostada. Served with lettuce, tomatoes, avocado, Mexican cheese , home-made cream, and salsa.',
    price:'$11.29',
},

{
    name:'Queso, Aguacate y Chicharron',
    image:_07chicharron,
    description:'Mexican Cheese, Avocado and Crispy Pork Rinds',
    price:'$13.09',
},

{
    name:'Papa Con Crema',
    image:_06papas,
    description:'Baked Potato served with cheese, tomato, onion, and creamy sauce.',
    price:'$9.29',
},

{
    name:'Sopes',
    image:_05sopes,
    description:'2 Sopes any combination. Served with lettuce tomatoes, avocado, Mexican cheese, home-made cream, and salsa.',
    price:'$8.99',
},

{
    name:'Enchiladas De Mole',
    image:_04enchiladas,
    description:'3 chicken, beef or pork enchiladas smothered in mole sauce. (not hot, not sweet ). Served with onion, lettuce, tomatoes, avocado, Mexican cheese, and home-made cream.',
    price:'$12.29',
},

{
    name:'Plato Combinado 1',
    image:_03combo1,
    description:'Enchilada verde de pallo, sope de pollo, toastada de carne y flauta de papa. Served with lettuce, tomatoes, avocado, Mexican cheese, home-made cream and salsa.',
    price:'$12.29',
},
{
    name:'Chiles Rellenos De Queso',
    image:_02chiles,
    description:'3 mild green peppers stuffed with cheese, onion and tomato, onion, and creamy sauce.',
    price:'$12.59',
},

{
    name:'Pozole Grande Surtido',
    image:_01pozole,
    description:'White pozole with mixed meat served with shredded cabbage,lemon,onion,and radish.',
    price:'$12.99',
}
]

menu.reverse()
    return menu
}
export default menuItems