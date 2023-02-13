class Product {
    title = "Default";
    imageUrl;
    price;
    description;
    constructor(title, image, price , desc){
        this.title = title;
        this.imageUrl = image;
        this.description = desc;
        this.price = price;
    }
}
class ProductList{
    products = [
        new Product(
            "Hawaiian Chicken Pizza",
            "pizza.avif",
            8.99,
            "Modern pizza evolved from similar flatbread dishes"
            ),
        new Product(
            "Delicious Cake",
            "cake.avif",
            4.99,
            "Delicious cake with pistachio and raspberries"
            ),
        new Product(
            "Avocado and Egg Toast",
            "egg.avif",
            2.99,
            "Avocado and Egg Toasts for healthy food"
            ),
    ]
    constructor(){}
}
const productList = {
    products : [], 
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