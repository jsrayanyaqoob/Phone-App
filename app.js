// console.log("Hello World!");



// ARRAY PRODUCTS


// Apple, Samsung, Xiaomi, OnePlus, Google. Oppo, Vivo, Realme, Sony, Motorola, Nokia, Huawei 


let mobilePhones = [
    { id: 1, Image: "/assets/iphone14.png", Brand: "iPhone", Name: "iPhone 14", ROM: "128GB", RAM: "6GB", Price: 999 },
    { id: 2, Image: "/assets/galaxys22.jpeg", Brand: "Samsung", Name: "Galaxy S22", ROM: "256GB", RAM: "8GB", Price: 899 },
    { id: 3, Image: "/assets/XiomiX11.jpg", Brand: "Xiaomi", Name: "Xiaomi Mi 11", ROM: "128GB", RAM: "8GB", Price: 499 },
    { id: 4, Image: "/assets/oneplus9.jpeg", Brand: "OnePlus", Name: "OnePlus 9", ROM: "256GB", RAM: "12GB", Price: 699 },
    { id: 5, Image: "/assets/googlepixel9.jpeg", Brand: "Google", Name: "Google Pixel 6", ROM: "128GB", RAM: "8GB", Price: 599 },
    { id: 6, Image: "/assets/huaweip40.jpeg", Brand: "Huawei", Name: "Huawei P40 Pro", ROM: "256GB", RAM: "8GB", Price: 799 },
    { id: 7, Image: "/assets/oppox3.jpeg", Brand: "Oppo", Name: "Oppo Find X3", ROM: "128GB", RAM: "8GB", Price: 729 },
    { id: 8, Image: "/assets/vivox60.jpeg", Brand: "Vivo", Name: "Vivo X60 Pro", ROM: "256GB", RAM: "12GB", Price: 649 },
    { id: 9, Image: "/assets/realmeGT.jpeg", Brand: "Realme", Name: "Realme GT Master", ROM: "128GB", RAM: "8GB", Price: 399 },
    { id: 10, Image: "/assets/sonyxperia.jpeg", Brand: "Sony", Name: "Sony Xperia 5", ROM: "128GB", RAM: "6GB", Price: 849 },
    { id: 11, Image: "/assets/motrolag100.jpeg", Brand: "Motorola", Name: "Motorola Moto G100", ROM: "128GB", RAM: "8GB", Price: 549 },
    { id: 12, Image: "/assets/nokis8.3.jpeg", Brand: "Nokia", Name: "Nokia 8.3", ROM: "128GB", RAM: "8GB", Price: 499 },
    { id: 13, Image: "/assets/iphone13.jpeg", Brand: "iPhone", Name: "Apple iPhone 13", ROM: "256GB", RAM: "6GB", Price: 1099 },
    { id: 14, Image: "/assets/galaxyA52.jpeg", Brand: "Samsung", Name: "Samsung Galaxy A52", ROM: "128GB", RAM: "6GB", Price: 429 },
    { id: 15, Image: "/assets/xiominote10.jpeg", Brand: "Xiaomi", Name: "Xiaomi Redmi Note 10", ROM: "64GB", RAM: "4GB", Price: 199 },
    { id: 16, Image: "/assets/oneplusnode2.jpeg", Brand: "OnePlus", Name: "OnePlus Nord 2", ROM: "128GB", RAM: "8GB", Price: 399 },
    { id: 17, Image: "/assets/pixel5a.jpeg", Brand: "Google", Name: "Google Pixel 5a", ROM: "128GB", RAM: "6GB", Price: 449 },
    { id: 18, Image: "/assets/huaweimate40.jpeg", Brand: "Huawei", Name: "Huawei Mate 40 Pro", ROM: "256GB", RAM: "8GB", Price: 999 },
    { id: 19, Image: "/assets/opporeno6.jpeg", Brand: "Oppo", Name: "Oppo Reno 6", ROM: "128GB", RAM: "8GB", Price: 499 },
    { id: 20, Image: "/assets/vivoV21.jpeg", Brand: "Vivo", Name: "Vivo V21", ROM: "128GB", RAM: "8GB", Price: 329 },
    { id: 21, Image: "/assets/realmex7.jpeg", Brand: "Realme", Name: "Realme X7 Pro", ROM: "256GB", RAM: "8GB", Price: 399 },
    { id: 22, Image: "/assets/xperia1.jpeg", Brand: "Sony", Name: "Sony Xperia 1", ROM: "128GB", RAM: "8GB", Price: 1199 },
    { id: 23, Image: "/assets/motrola20.jpeg", Brand: "Motorola", Name: "Motorola Edge 20", ROM: "128GB", RAM: "6GB", Price: 499 },
    { id: 24, Image: "/assets/nokiag50.jpeg", Brand: "Nokia", Name: "Nokia G50", ROM: "128GB", RAM: "4GB", Price: 279 }
];







let cartItems;
const checkDataFromLocalStorage = JSON.parse(localStorage.getItem("cart"));
if (checkDataFromLocalStorage === null) {
  cartItems = [];
} else {
  cartItems = [...checkDataFromLocalStorage];
}

console.log("cartitems===>", cartItems);



const div = document.querySelector("#containerCard");

  
  
let renderProducts = mobilePhones.map(function (product , index) {
    div.innerHTML += `
         <div class="cards border p-4 d-flex flex-column gap-1 rounded px-5">
            <img src=${product.Image} width="160px" height="150px" class="mb-2">
            <h5 class="m-0">Model: ${product.Name}</h5>
            <h5 class="m-0">RAM: ${product.RAM}</h5> 
            <span>
                <small class="dollarSign fs-6"></small>$ <span class="fs-5 fw-semibold">${product.Price}</span>
            </span>
            <button class="btn btn-primary btn-sm" onclick='addedToCart(${index})'>Add to Cart</button>
        </div>
    `})

    if(mobilePhones(index) === cartItems){
        Swal.fire({
            title: "Product added to cart successfvndifnvvnfully!",   
            icon: "NOOOOOOOOOOo"
          });
    } else{
        addedToCart()
    }




function addedToCart(index){

    // const checkIndex = cartItems.indexOf(mobilePhones[index]);
    const checkIndex = cartItems.findIndex(item => item.id === mobilePhones[index].id);
            console.log("index kia ha",checkIndex)
    if(checkIndex === -1){
        mobilePhones[index].quantity = 1
        cartItems.push(mobilePhones[index]) 
        Swal.fire({
        title: "Product added to cart successfully!",   
        icon: "success"
      });
    } else{
        // mobilePhones[index].quantity = 1 
        cartItems[checkIndex].quantity += 1;
        Swal.fire({
            title: "Product quantity increased",   
            icon: "success"
          });
    }

    console.log(cartItems);
    


   
}


function checkout(){
    const convertArrIntoStr = JSON.stringify(cartItems);
    localStorage.setItem("cart", convertArrIntoStr);

    window.location = "cart.html"
}