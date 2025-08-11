import axios from "axios";

// Use environment variables for the base URL
const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://127.0.0.1:8000/api/",
  timeout: 10000,
});

// Define TypeScript interfaces for type safety
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
}

export interface Category {
  id: string;
  name: string;
}

export interface ProductReview {
  id: string;
  productId: string;
  rating: number;
  comment: string;
}

export interface ProductStats {
  totalProducts: number;
  totalCategories: number;
  totalReviews: number;
}

// Fetch all products with pagination
export const fetchProducts = async (page: number): Promise<Product[]> => {
  try {
    const response = await apiClient.get<Product[]>(`products/?page=${page}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

// Fetch a single product by ID
export const fetchProductById = async (id: number): Promise<Product> => {
  try {
    const response = await apiClient.get<Product>(`products/${id}/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    throw error;
  }
};

// Create a new product
export const createProduct = async (productData: Product): Promise<Product> => {
  try {
    const response = await apiClient.post<Product>("products/", productData);
    return response.data;
  } catch (error) {
    console.error("Error creating product:", error);
    throw error;
  }
};

// Update a product by ID
export const updateProduct = async (
  id: number,
  productData: Product
): Promise<Product> => {
  try {
    const response = await apiClient.put<Product>(
      `products/${id}/`,
      productData
    );
    return response.data;
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
};

// Delete a product by ID
export const deleteProduct = async (id: number): Promise<void> => {
  try {
    await apiClient.delete(`products/${id}/`);
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
};

// Fetch all categories
export const fetchCategories = async (): Promise<Category[]> => {
  try {
    const response = await apiClient.get<Category[]>("categories/");
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

// Fetch a single category by ID
export const fetchCategoryById = async (id: number): Promise<Category> => {
  try {
    const response = await apiClient.get<Category>(`categories/${id}/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching category by ID:", error);
    throw error;
  }
};

// Create a new category
export const createCategory = async (
  categoryData: Category
): Promise<Category> => {
  try {
    const response = await apiClient.post<Category>(
      "categories/",
      categoryData
    );
    return response.data;
  } catch (error) {
    console.error("Error creating category:", error);
    throw error;
  }
};

// Update a category by ID
export const updateCategory = async (
  id: number,
  categoryData: Category
): Promise<Category> => {
  try {
    const response = await apiClient.put<Category>(
      `categories/${id}/`,
      categoryData
    );
    return response.data;
  } catch (error) {
    console.error("Error updating category:", error);
    throw error;
  }
};

// Delete a category by ID
export const deleteCategory = async (id: number): Promise<void> => {
  try {
    await apiClient.delete(`categories/${id}/`);
  } catch (error) {
    console.error("Error deleting category:", error);
    throw error;
  }
};

// Fetch product reviews by product ID
export const fetchProductReviews = async (
  productId: number
): Promise<ProductReview[]> => {
  try {
    const response = await apiClient.get<ProductReview[]>(
      `products/${productId}/reviews/`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching product reviews:", error);
    throw error;
  }
};

// Fetch product statistics
export const fetchProductStats = async (): Promise<ProductStats> => {
  try {
    const response = await apiClient.get<ProductStats>("stats/");
    return response.data;
  } catch (error) {
    console.error("Error fetching product stats:", error);
    throw error;
  }
};

export default apiClient;
