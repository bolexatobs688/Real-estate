// File: src/Pages/ProductList/ProductList.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Footer from "../../components/footer/Footer";

// Sample product data
const products = [
  {
    id: 1,
    name: "Modern Sofa",
    price: "$499",
    category: "Sale",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
    description: "A stylish and comfortable modern sofa.",
  },
  {
    id: 2,
    name: "Elegant Chair",
    price: "$199",
    category: "Rent",
    image: "https://images.unsplash.com/photo-1567016549631-1fabc739b6c9",
    description: "Sleek accent chair.",
  },
  {
    id: 3,
    name: "Smart Table",
    price: "$299",
    category: "Exclusive",
    image: "https://images.unsplash.com/photo-1622495894387-0c8e7ed4ce20",
    description: "Smart table with wireless charging.",
  },
  {
    id: 4,
    name: "Luxury Lamp",
    price: "$89",
    category: "Short Stays",
    image: "https://images.unsplash.com/photo-1616627562072-6cf29392f27c",
    description: "Minimalist lamp.",
  },
  {
    id: 5,
    name: "Bookshelf XL",
    price: "$149",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1616628182502-7e3e54ff2357",
    description: "Modern bookshelf.",
  },
  {
    id: 6,
    name: "Queen Bed Frame",
    price: "$599",
    category: "Waterfront Plot",
    image: "https://images.unsplash.com/photo-1601979031925-3ccdebd9fc62",
    description: "Wooden bed frame.",
  },
];

const ProductList = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedCategory = queryParams.get("category");

  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (selectedCategory) {
      const filtered = products.filter(
        (product) => product.category === selectedCategory
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [selectedCategory]);

  return (
    <div>
      <div className="min-h-screen px-4 py-10 bg-gray-100 md:px-20 lg:px-32">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          {selectedCategory ? `${selectedCategory} Listings` : "All Products"}
        </h1>
        {filteredProducts.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <Link to={`/product/${product.id}`} key={product.id}>
                <div className="bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="rounded-t-lg w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold">{product.name}</h2>
                    <p className="text-gray-600 mt-2">{product.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No products found for this category.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ProductList;
