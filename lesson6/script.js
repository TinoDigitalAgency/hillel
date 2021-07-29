const items = [
    {
        title: "IPhone 12",
        quantity: 2,
        price: 1000,
    },
    {
        title: "Magic Mouse",
        quantity: 3,
        price: 100,
    },
    {
        title: "MI Band 6",
        quantity: 4,
        price: 50,
    },
    {
        title: "Monitor ASUS",
        quantity: 1,
        price: 700,
    },
    {
        title: "USB Flash Drive",
        quantity: 5,
        price: 20,
    },
];
let totalAmount = alert(`Общая стоимость вашего заказа: ${totalAmout(items)}$`);
let averagePrice = alert(`Средняя стоимость товара: ${avaragePriceOfOneProduct(items)}$`);
printSorted(items);


function totalAmout(products) {
    let totalAmount = 0;
    for (let i = 0; i < products.length; i++) {
        totalAmount += products[i].price * products[i].quantity;
    }
    return totalAmount;
}

function avaragePriceOfOneProduct(products) {
    let totalAmount = totalAmout(products),
        productsCount = 0,
        averagePrice = 0;
    for (let i = 0; i < products.length; i++) {
        productsCount += products[i].quantity;
    }
    return averagePrice = totalAmount / productsCount;
}

function printSorted(products) {
    let productsSort = products.sort((a, b) => a.price > b.price ? 1 : -1);
    let parentsDiv = document.querySelector('.products-list');
    let content = '';
    for (let i = 0; i < productsSort.length; i++) {
        let productName = productsSort[i].title,
            productPrice = productsSort[i].price,
            productQuantity = productsSort[i].quantity;
        content += '<div class="product-item"><div class="product-name">' + productName + '</div><div class="product-price">' + productPrice + ' </div><div class="product-quantity">' + productQuantity + '</div></div>';
    }
    parentsDiv.innerHTML = content;
    return products
}