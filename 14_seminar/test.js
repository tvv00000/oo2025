var InventoryManager = /** @class */ (function () {
    function InventoryManager() {
        this.products = [];
    }
    // Add
    InventoryManager.prototype.addProduct = function (product) {
        this.products.push(product);
    };
    // Remove
    InventoryManager.prototype.removeProductById = function (id) {
        this.products = this.products.filter(function (product) { return product.id !== id; });
    };
    // Get all in stock
    InventoryManager.prototype.getInStockProducts = function () {
        return this.products.filter(function (product) { return product.inStock; });
    };
    // Get the total value of in-stock
    InventoryManager.prototype.getTotalValue = function () {
        return this.products
            .filter(function (product) { return product.inStock; })
            .reduce(function (total, product) { return total + product.price; }, 0);
    };
    return InventoryManager;
}());
var manager = new InventoryManager();
manager.addProduct({ id: 1, name: "Laptop", price: 1500, inStock: true });
manager.addProduct({ id: 2, name: "Mouse", price: 20, inStock: true });
manager.addProduct({ id: 3, name: "Keyboard", price: 50, inStock: false });
console.log("In stock:", manager.getInStockProducts());
console.log("Total value:", manager.getTotalValue());
manager.removeProductById(2);
console.log("After removal:", manager.getInStockProducts());
console.log("Total value after removal:", manager.getTotalValue());
