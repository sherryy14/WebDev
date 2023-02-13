const productList = {
    products : [
        {
            title : "Hawaiian Chicken Pizza",
            imageUrl : "pizza.avif",
            price : 8.99,
            description : "Modern pizza evolved from similar flatbread dishes"
        },
        {
            title : "Delicious Cake",
            imageUrl : "cake.avif",
            price : 4.99,
            description : "Delicious cake with pistachio and raspberries"
        } ,
        {
            title : "Avocado and Egg Toast",
            imageUrl : "egg.avif",
            price : 2.99,
            description : "Avocado and Egg Toasts for healthy food"
        }  
    ], 
    render(){
        const renderHook = document.getElementById("app");
        const productList = document.createElement("ul");
        productList.className = "product-list"
        for( const prod of this.products){
            const productEl = document.createElement("li");
            productEl.className = "product-item";
            productEl.innerHTML = `
            <div>
            <img src = "${prod.imageUrl}" alt="${prod.title}"/>
            <div class="content">
                <h4>${prod.title}</h4>
                <h5>\$Price: ${prod.price}</h5>
                <p class="description">${prod.description}</p>
                <button class="btnCart">Add To Cart </button>
            </div>
            </div>
            `
            productList.append(productEl)
        }
        renderHook.append(productList)
        
    }
};
productList.render();