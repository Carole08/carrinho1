import createItem from "./items";

async function addItem (userCart){
 userCart.push(item);
}

async function deleteItem (userCart,name){
    const index= userCart.findIndex((item)=>item.name===name);
}

async function removeItem (userCart,index){
    
}


async function calculateTotal(userCart){
const result= userCart.reduce((total,item)=>total+item.subtotal(),0);
// userCart.calculateTotal(item);
console.log (result);
}


export {
    addItem,
    calculateTotal,
    removeItem,
    deleteItem,
}