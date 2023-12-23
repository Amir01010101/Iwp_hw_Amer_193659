var cartItems = [];
var cartId = 1;

function addToCart(product, details, price, image) {
    var quantity = 1;
    var totalPrice = price;

    // Check if the item is already in the cart
    var existingItem = cartItems.find(item => item.product === product);
    if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.quantity * price;

        updateCartTable();
        return;
    }

    cartItems.push({
        id: cartId++,
        product: product,
        details: details,
        price: price,
        quantity: quantity,
        totalPrice: totalPrice,
        image: image
    });

    updateCartTable();
}

function updateCartTable() {
    var cartTable = document.getElementById("shopping-cart");
    cartTable.innerHTML = "";

    cartItems.forEach(function (item) {
        var row = cartTable.insertRow();
        var idCell = row.insertCell(0);
        var productCell = row.insertCell(1);
        var detailsCell = row.insertCell(2);
        var priceCell = row.insertCell(3);
        var quantityCell = row.insertCell(4);
        var totalPriceCell = row.insertCell(5);

        idCell.innerHTML = item.id;
        productCell.innerHTML = item.product;
        detailsCell.innerHTML = item.details;
        priceCell.innerHTML = item.price;
        quantityCell.innerHTML = item.quantity;
        totalPriceCell.innerHTML = item.totalPrice;
    });
}

function cancelCart() {
    cartItems = [];
    updateCartTable();
}

function showPurchaseForm() {
    var purchaseForm = document.getElementById("purchase-form");
    purchaseForm.style.display = "block";
}