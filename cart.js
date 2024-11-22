const cartData = localStorage.getItem("cart");
const objConverter = JSON.parse(cartData);

var content = document.querySelector("#QuantitytextItems")
content.innerHTML += `<p><span class="fw-bold">${+objConverter.length} items</span> in your cart.</p>`


const quantityIncrease = document.querySelector("#add")
// let quantity = document.querySelector("#counterQuantity")

function increase(id) {
    const item  = objConverter.find((product)=> product.id === id)
    console.log('iddd kia aye ha',item.id)
    console.log('item', item.quantity)
    if(item){
        item.quantity++
        document.querySelector(`#counterQuantity-${id}`).innerHTML = item.quantity;
    }

}

function decrease(id) {
    const item  = objConverter.find((product)=> product.id === id)
    console.log('iddd kia aye ha',item.id)
    console.log('item', item.quantity)
    if(item){
        item.quantity--
        document.querySelector(`#counterQuantity-${id}`).innerHTML = item.quantity
    } else if(item.quantity < 1){
        
    }

}


const heroSec = document.querySelector("#hero");

// function heroUIHaBhai() {
   
//     if (objConverter && objConverter.length > 0) {
//         const heroSectionUI = objConverter.map((item) => `
//             <div class="productTest d-flex bg-white py-3 px-2 mx-4">   
//                 <div class="mainContainerOfProduct d-flex align-items-center">
//                     <div class="headandImg">
//                         <h6>Product</h6>
//                         <img src="${item.Image}" alt="" style="border-radius: 20px; width: 170px; height: 200px;">
//                     </div>
//                     <div class="contentOfProduct">
//                         <p class="BrandHaBHai">${item.Brand}</p>
//                         <p class="fw-bold mt-4">${item.Name}</p>
//                         <p class="brrr">RAM &nbsp;<span class="fw-semibold-black">— ${item.RAM}</span></p>
//                         <p class="brr">ROM &nbsp;<span class="fw-semibold text-black">— ${item.ROM}</span></p>
//                     </div>
//                 </div>

//                 <div class="mainContainerOfPrice px-5">
//                     <div class="headandImg">
//                         <h6 class="text-center">Price</h6>
//                     </div>
//                     <div class="contentOfPrice d-flex align-items-center">
//                         <p class="PriceTagH fw-bold">$${item.Price}</p>
//                     </div> 
//                 </div>

//                 <div class="mainContainerOfQuantity px-5">
//                     <div class="headandImg">
//                         <h6 class="quantityHuBHai text-center">Quantity</h6>
//                     </div>
//                     <div class="contentOfQuantity d-flex justify-content-center align-items-center">
//                         <button class="minus" onclick="decrease(${item.id})"><span class="min">-</span></button>
//                         <div class="px-2">
//                             <p id="counterQuantity-${item.id}">${item.quantity}</p>
//                         </div>
//                         <button class="add" onclick="increase(${item.id})"><span class="bum">+</span></button>
//                     </div>
//                 </div>

//                 <div class="mainContainerOfTotalPrice px-5">
//                     <div class="headandImg">
//                         <h6>Total Price<h6>
//                     </div>
//                     <div class="contentOfTPrice d-flex justify-content-center align-items-center">
//                         <p class="totalPriceHuBHai text-center">${item.quantity * item.Price}</p>
//                     </div>
//                 </div> 
//             </div>
//         `)
        
//         heroSec.innerHTML = heroSectionUI;
//     } else {
//         heroSec.innerHTML = `<h1>NO ITEMS ARE ADDED IN YOUR CART</h1>`;
//     }
// }



// heroUIHaBhai()


  
   
