function renderProduct(){
    let products = JSON.parse(localStorage.getItem("products")) || [];
    let idProduct = JSON.parse(localStorage.getItem("idProduct")) || [];
    // console.log(products);
    // const productContent = document.getElementById("product-content");
    const names = document.getElementById("names");
    const price = document.getElementById("price");
    const image = document.getElementById("image")
    // let text = ``;
    if(products.length === 0){
        return;
    }
    for(let i = 0; i < products.length; i++){
        if(idProduct === products[i].id){
            names.innerHTML = products[i].name;
            image.src = products[i].image;
            price.innerHTML = `${products[i].price}.000 `;
        }
    }
}
renderProduct();