// File: src/Pages/Blog/Blog.jsx
import React from "react";
import Footer from "../../components/footer/Footer";

const blogPosts = [
  {
    id: 1,
    title: "Exploring Lagos Real Estate: Trends & Insights",
    date: "July 12, 2025",
    image: "https://via.placeholder.com/600x400",
    excerpt:
      "The Lagos real estate market is booming. Learn about the latest trends, hotspots, and investment opportunities in Nigeria's busiest city.",
  },
  {
    id: 2,
    title: "5 Things to Consider Before Buying Property",
    date: "July 5, 2025",
    image: "https://via.placeholder.com/600x400",
    excerpt:
      "Buying real estate requires careful planning. These 5 tips will help you make the right decision and avoid costly mistakes.",
  },
  {
    id: 3,
    title: "Why Waterfront Homes Are the Next Big Thing",
    date: "June 28, 2025",
    image: "https://via.placeholder.com/600x400",
    excerpt:
      "Waterfront properties are in high demand in Lagos. Here's why they're becoming a favorite among luxury home buyers and investors.",
  },
  {
    id: 4,
    title: "Short-Term Rentals: Profit or Pitfall?",
    date: "June 15, 2025",
    image: "https://via.placeholder.com/600x400",
    excerpt:
      "With platforms like Airbnb, short-term rentals are booming. But is it worth the hype? Let’s look at the pros and cons.",
  },
  {
    id: 5,
    title: "Top Neighborhoods to Live in Lagos (2025 Edition)",
    date: "June 1, 2025",
    image: "https://via.placeholder.com/600x400",
    excerpt:
      "From Lekki to Ikeja, we break down the best places to live in Lagos based on lifestyle, pricing, and accessibility.",
  },
  {
    id: 6,
    title: "How to Stage a Home for Quick Sale",
    date: "May 20, 2025",
    image: "https://via.placeholder.com/600x400",
    excerpt:
      "First impressions matter. Learn how to stage your home like a pro to attract buyers faster and sell at a better price.",
  },
];

const Blog = () => {
  return (
    <div>
      <div className="bg-gray-100 min-h-screen pt-28 pb-16 px-4 md:px-20 lg:px-32">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Our Latest Blog Articles
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Stay updated with real estate insights, investment tips, and the
            latest market news curated for you.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow hover:shadow-xl transition duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-56 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h2 className="text-xl font-semibold mb-2 text-gray-800">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                <button className="text-blue-600 hover:underline font-medium text-sm">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
