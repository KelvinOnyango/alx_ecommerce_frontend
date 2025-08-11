// lib/api.ts
const API_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://alx-ecommerce-nexus.onrender.com/"
    : "http://localhost:8000/";

interface AuthResponse {
  access: string;
  refresh: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image?: string;
}

interface CartItem {
  product: number;
  quantity: number;
}

interface CartResponse {
  id: number;
  user: number;
  items: CartItem[];
}

export const apiService = {
  // Authentication
  async register(username: string, email: string, password: string) {
    const response = await fetch(`${API_BASE_URL}api/auth/register/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });
    return await response.json();
  },

  async login(username: string, password: string): Promise<AuthResponse> {
    const response = await fetch(`${API_BASE_URL}api/auth/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    return await response.json();
  },

  // Products
  async getProducts(): Promise<Product[]> {
    const response = await fetch(`${API_BASE_URL}api/products/`);
    return await response.json();
  },

  async getProduct(id: number): Promise<Product> {
    const response = await fetch(`${API_BASE_URL}api/products/${id}/`);
    return await response.json();
  },

  // Cart
  async getCart(token: string): Promise<CartResponse> {
    const response = await fetch(`${API_BASE_URL}api/cart/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return await response.json();
  },

  async addToCart(productId: number, quantity: number, token: string) {
    const response = await fetch(`${API_BASE_URL}api/cart/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ product_id: productId, quantity }),
    });
    return await response.json();
  },

  async updateCart(productId: number, quantity: number, token: string) {
    const response = await fetch(`${API_BASE_URL}api/cart/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ product_id: productId, quantity }),
    });
    return await response.json();
  },

  async removeFromCart(productId: number, token: string) {
    const response = await fetch(`${API_BASE_URL}api/cart/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ product_id: productId }),
    });
    return await response.json();
  },

  // Orders
  async createOrder(items: CartItem[], token: string) {
    const response = await fetch(`${API_BASE_URL}api/orders/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ items }),
    });
    return await response.json();
  },

  // Search
  async search(query: string) {
    const response = await fetch(`${API_BASE_URL}api/search/?q=${query}`);
    return await response.json();
  },
};
