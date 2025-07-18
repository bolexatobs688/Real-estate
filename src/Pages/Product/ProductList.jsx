// File: src/Pages/ProductList/ProductList.jsx
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Footer from "../../components/footer/Footer";

const products = [
  {
    id: 1,
    name: "Modern Sofa",
    price: "$499",
    category: "Rent",
    image: "https://source.unsplash.com/featured/?sofa",
    description: "Comfortable and modern sofa.",
  },
  {
    id: 2,
    name: "Luxury Villa",
    price: "$5,000/mo",
    category: "Exclusive",
    image: "https://source.unsplash.com/featured/?villa",
    description: "High-end villa with sea view.",
  },
  {
    id: 3,
    name: "Downtown Apartment",
    price: "$1,200/mo",
    category: "Rent",
    image: "https://source.unsplash.com/featured/?apartment",
    description: "In the heart of the city.",
  },
  {
    id: 4,
    name: "Weekend Getaway",
    price: "$300",
    category: "Short Stays",
    image: "https://source.unsplash.com/featured/?cabin",
    description: "Peaceful cabin retreat.",
  },
  {
    id: 5,
    name: "Seaside Plot",
    price: "$30,000",
    category: "Waterfront Plot",
    image: "https://source.unsplash.com/featured/?beach",
    description: "Plot by the ocean.",
  },
  {
    id: 6,
    name: "Office Complex",
    price: "$150,000",
    category: "Commercial",
    image: "https://source.unsplash.com/featured/?office",
    description: "Spacious commercial space.",
  },
  {
    id: 7,
    name: "Bungalow",
    price: "$75,000",
    category: "Sale",
    image: "https://source.unsplash.com/featured/?bungalow",
    description: "Cozy family home.",
  },
  {
    id: 8,
    name: "Loft Apartment",
    price: "$2,000/mo",
    category: "Exclusive",
    image: "https://source.unsplash.com/featured/?loft",
    description: "Stylish and spacious loft.",
  },
  {
    id: 9,
    name: "Airbnb Retreat",
    price: "$120/night",
    category: "Short Stays",
    image: "https://source.unsplash.com/featured/?airbnb",
    description: "Perfect weekend getaway.",
  },
  {
    id: 10,
    name: "Penthouse Suite",
    price: "$3,500/mo",
    category: "Exclusive",
    image: "https://source.unsplash.com/featured/?penthouse",
    description: "Luxury in the sky.",
  },
  {
    id: 11,
    name: "Retail Shop",
    price: "$90,000",
    category: "Commercial",
    image: "https://source.unsplash.com/featured/?store",
    description: "Great location for business.",
  },
  {
    id: 12,
    name: "Suburban Home",
    price: "$150,000",
    category: "Sale",
    image: "https://source.unsplash.com/featured/?house",
    description: "Family-friendly neighborhood.",
  },
  {
    id: 13,
    name: "Studio Flat",
    price: "$850/mo",
    category: "Rent",
    image: "https://source.unsplash.com/featured/?studio",
    description: "Compact and efficient.",
  },
  {
    id: 14,
    name: "Island Property",
    price: "$200,000",
    category: "Waterfront Plot",
    image: "https://source.unsplash.com/featured/?island",
    description: "Tropical paradise plot.",
  },
  {
    id: 15,
    name: "Boutique Hotel Room",
    price: "$250/night",
    category: "Short Stays",
    image: "https://source.unsplash.com/featured/?hotel",
    description: "Elegance and comfort.",
  },
  {
    id: 16,
    name: "Duplex",
    price: "$170,000",
    category: "Sale",
    image: "https://source.unsplash.com/featured/?duplex",
    description: "Spacious duplex home.",
  },
  {
    id: 17,
    name: "Corporate Suite",
    price: "$4,000/mo",
    category: "Commercial",
    image: "https://source.unsplash.com/featured/?corporate",
    description: "High-end office suite.",
  },
  {
    id: 18,
    name: "Luxury Chalet",
    price: "$600/night",
    category: "Exclusive",
    image: "https://source.unsplash.com/featured/?chalet",
    description: "Mountain view luxury.",
  },
  {
    id: 19,
    name: "Rental Cabin",
    price: "$140/night",
    category: "Short Stays",
    image: "https://source.unsplash.com/featured/?rental",
    description: "Nature escape.",
  },
  {
    id: 20,
    name: "Affordable Condo",
    price: "$90,000",
    category: "Sale",
    image: "https://source.unsplash.com/featured/?condo",
    description: "Urban comfort.",
  },
];

const ProductList = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const defaultCategory = queryParams.get("category") || "All";

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(defaultCategory);

  const categories = [
    "All",
    "Rent",
    "Short Stays",
    "Exclusive",
    "Sale",
    "Waterfront Plot",
    "Commercial",
  ];

  useEffect(() => {
    setSelectedCategory(defaultCategory);
  }, [defaultCategory]);

  const filteredProducts = products.filter((product) => {
    const matchName = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    return matchName && matchCategory;
  });

  return (
    <div>
      <div className="min-h-screen px-4 py-10 bg-gray-100 md:px-20 lg:px-32">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Shop All Products
        </h1>

        {/* Filter */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full md:w-1/2 p-3 border border-gray-300 rounded"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="w-full md:w-1/4 p-3 border border-gray-300 rounded"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
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
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No products found.
            </p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductList;
