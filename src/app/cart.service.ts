import { Injectable } from '@angular/core';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root', // Makes the service available throughout the app
})
export class CartService {
  private items: CartItem[] = []; // Array to hold cart items

  constructor() {}

  // Add an item to the cart
  addToCart(product: CartItem) {
    const existingItem = this.items.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += product.quantity; // Increment quantity if product exists
    } else {
      this.items.push(product); // Add new product
    }
  }

  // Get all items in the cart
  getCartItems() {
    return this.items;
  }

  // Remove an item from the cart
  removeFromCart(productId: number) {
    this.items = this.items.filter(item => item.id !== productId);
  }

  // Clear the cart
  clearCart() {
    this.items = [];
  }

  // Get the total price of the cart
  getTotalPrice() {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}
