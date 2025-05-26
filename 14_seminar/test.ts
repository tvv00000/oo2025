interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
}

class InventoryManager {
  private products: Product[] = [];

  // Add
  addProduct(product: Product): void {
    this.products.push(product);
  }

  // Remove
  removeProductById(id: number): void {
    this.products = this.products.filter(product => product.id !== id);
  }

  // Get all in stock
  getInStockProducts(): Product[] {
    return this.products.filter(product => product.inStock);
  }

  // Get the total value of in-stock
  getTotalValue(): number {
    return this.products
      .filter(product => product.inStock)
      .reduce((total, product) => total + product.price, 0);
  }
}



const manager = new InventoryManager();

manager.addProduct({ id: 1, name: "Laptop", price: 1500, inStock: true });
manager.addProduct({ id: 2, name: "Mouse", price: 20, inStock: true });
manager.addProduct({ id: 3, name: "Keyboard", price: 50, inStock: false });

console.log("In stock:", manager.getInStockProducts());
console.log("Total value:", manager.getTotalValue());

manager.removeProductById(2);

console.log("After removal:", manager.getInStockProducts());
console.log("Total value after removal:", manager.getTotalValue());
