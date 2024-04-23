import * as cartService from "./service/cart.js";
import  createItem from  "./service/items.js";
console.log ("hello mundo");

const uCart = [];
//const desejos =[];


const item1=  await createItem ("urpr11",89.00,1);
const item2= await createItem ("deva11",45.00,3);


await   cartService.addItem(uCart,item1);
await  cartService.addItem(uCart,item2);

//console.log (item2.subtotal());
await cartService.calculateTotal(uCart());