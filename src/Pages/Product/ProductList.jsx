// File: src/Pages/ProductList/ProductList.jsx
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";

const products = [
  {
    id: 1,
    name: "Modern Sofa",
    price: "$499",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
    description:
      "A stylish and comfortable modern sofa perfect for any living room.",
  },
  {
    id: 2,
    name: "Elegant Chair",
    price: "$199",
    image: "https://images.unsplash.com/photo-1567016549631-1fabc739b6c9",
    description: "A sleek accent chair that adds charm and comfort.",
  },
  {
    id: 3,
    name: "Smart Table",
    price: "$299",
    image: "https://images.unsplash.com/photo-1622495894387-0c8e7ed4ce20",
    description:
      "A wooden smart table with built-in wireless charging and USB ports.",
  },
  {
    id: 4,
    name: "Luxury Lamp",
    price: "$89",
    image: "https://images.unsplash.com/photo-1616627562072-6cf29392f27c",
    description: "A minimalist lamp design with warm lighting.",
  },
  {
    id: 5,
    name: "Bookshelf XL",
    price: "$149",
    image: "https://images.unsplash.com/photo-1616628182502-7e3e54ff2357",
    description: "Spacious bookshelf with modern open frame design.",
  },
  {
    id: 6,
    name: "Wooden Coffee Table",
    price: "$179",
    image: "https://images.unsplash.com/photo-1598300054576-32e8cdb24042",
    description: "A rustic-style wooden coffee table with storage.",
  },
  {
    id: 7,
    name: "Wall Art Canvas",
    price: "$89",
    image: "https://images.unsplash.com/photo-1582560475940-175249a4d66e",
    description: "Abstract wall art canvas that elevates your space.",
  },
  {
    id: 8,
    name: "Indoor Plant Stand",
    price: "$49",
    image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f",
    description: "Elegant stand for your favorite indoor plants.",
  },
  {
    id: 9,
    name: "Queen Bed Frame",
    price: "$599",
    image: "https://images.unsplash.com/photo-1601979031925-3ccdebd9fc62",
    description: "A durable and stylish queen-size wooden bed frame.",
  },
  {
    id: 10,
    name: "Side Table Duo",
    price: "$129",
    image: "https://images.unsplash.com/photo-1595526114035-00d2d74a83f9",
    description: "Minimalist set of two side tables for your sofa or bed.",
  },
  {
    id: 11,
    name: "Leather Lounge Chair",
    price: "$399",
    image: "https://images.unsplash.com/photo-1582719200883-4ad9930e37d0",
    description: "Classic leather lounge chair with retro vibes.",
  },
  {
    id: 12,
    name: "Marble Dining Table",
    price: "$899",
    image: "https://images.unsplash.com/photo-1629394190493-83d1b45d0c1f",
    description: "Luxury marble top dining table that seats up to 6.",
  },
];

const ProductList = () => {
  return (
    <div>
      <div className="min-h-screen px-4 py-10 bg-gray-100 md:px-20 lg:px-32">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Shop All Products
        </h1>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
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
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ProductList;
