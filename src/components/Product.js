import React, { useState } from 'react';
import './Product.css';

let initialProducts = [
  { id: 1, name: 'Product 1', category: 'Category A', price: 10.99, stockQuantity: 20 },
  { id: 2, name: 'Product 2', category: 'Category B', price: 15.99, stockQuantity: 15 },
  { id: 3, name: 'Product 3', category: 'Category C', price: 20.99, stockQuantity: 10 },
  { id: 4, name: 'Product 4', category: 'Category D', price: 10.99, stockQuantity: 20 },
  { id: 5, name: 'Product 5', category: 'Category E', price: 15.99, stockQuantity: 15 },
  { id: 6, name: 'Product 6', category: 'Category F', price: 20.99, stockQuantity: 10 },
  { id: 7, name: 'Product 7', category: 'Category A', price: 10.99, stockQuantity: 20 },
  { id: 8, name: 'Product 8', category: 'Category B', price: 15.99, stockQuantity: 15 },
  { id: 9, name: 'Product 9', category: 'Category C', price: 20.99, stockQuantity: 10 },
  { id: 10, name: 'Product 10', category: 'Category D', price: 10.99, stockQuantity: 20 },
  { id: 11, name: 'Product 11', category: 'Category E', price: 15.99, stockQuantity: 15 },
  { id: 12, name: 'Product 12', category: 'Category F', price: 20.99, stockQuantity: 10 },
];

function Product() {
  const [products, setProducts] = useState(initialProducts);
  const [productForm, setProductForm] = useState({ id: null, name: '', category: '', price: '', stockQuantity: '' });
  const [isEditing, setIsEditing] = useState(false);

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setProductForm(prevForm => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (isEditing) {
      updateProduct();
    } else {
      addProduct();
    }
  };

  const addProduct = () => {
    if (!productForm.name || !productForm.category || !productForm.price || !productForm.stockQuantity) {
      alert('All fields are required!');
      return;
    }
    const newProduct = { ...productForm, id: Date.now() };
    setProducts([...products, newProduct]);
    resetForm();
  };

  const updateProduct = () => {
    setProducts(products.map(product => product.id === productForm.id ? { ...productForm } : product));
    resetForm();
  };

  const editProduct = (product) => {
    setIsEditing(true);
    setProductForm({ ...product });
  };

  const deleteProduct = (productId) => {
    setProducts(products.filter(product => product.id !== productId));
  };

  const resetForm = () => {
    setProductForm({ id: null, name: '', category: '', price: '', stockQuantity: '' });
    setIsEditing(false);
  };

  return (
    <div className="container">
      <h2>Products Management</h2>
      <div className="form">
        <input name="name" value={productForm.name} onChange={handleFormChange} placeholder="Name" />
        <input name="category" value={productForm.category} onChange={handleFormChange} placeholder="Category" />
        <input type="number" name="price" value={productForm.price} onChange={handleFormChange} placeholder="Price" />
        <input type="number" name="stockQuantity" value={productForm.stockQuantity} onChange={handleFormChange} placeholder="Stock Quantity" />
        <button onClick={handleSubmit}>{isEditing ? 'Update' : 'Add'}</button>
        {isEditing && <button onClick={resetForm}>Cancel</button>}
      </div>
      <div className="products-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <div>{product.name}</div>
            <div>{product.category}</div>
            <div>${product.price}</div>
            <div>Stock: {product.stockQuantity}</div>
            <button onClick={() => editProduct(product)}>Edit</button>
            <button onClick={() => deleteProduct(product.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;