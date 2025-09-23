import React, { useState } from "react";
import "./Blog.css";
import a1 from "../assets/about.webp";
import a2 from "../assets/seo.webp";
import a3 from "../assets/cloud.jpg";

const categories = [
  "All",
  "AI/ML",
  "Cloud Services",
  "Design",
  "Development",
  "Human Resource",
  "Mobile Application",
  "Operations",
  "Salesforce",
  "Security",
];

const blogs = [
  {
    id: 1,
    title: "Secure Document Management with SharePoint and Azure AD",
    description:
      "Revolutionizing Document Management: SharePoint Integration wrapped up an exciting project...",
    image: a1,
    category: "Cloud Services",
  },
  {
    id: 2,
    title: "Beyond the Job Description: Why We Let Candidates Interview Us",
    description:
      "A hiring approach we truly believe in at our company. When most people think of job interviews...",
    image: a2,
    category: "Human Resource",
  },
  {
    id: 3,
    title: "Simplifying Kubernetes Management: A Review of Lens IDE",
    description:
      "Exploring Kubernetes management tools and how Lens IDE makes it easier for developers...",
    image: a3,
    category: "Development",
  },
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredBlogs = blogs.filter((blog) => {
    return (
      (selectedCategory === "All" || blog.category === selectedCategory) &&
      blog.title.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="blogs-container">
      <h1 className="blogs-title">Blogs</h1>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search blogs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Categories */}
      <div className="categories" data-aos="fade-up" data-aos-delay="100">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-btn ${selectedCategory === cat ? "active" : ""
              }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Layout */}
      <div className="blogs-layout" data-aos="fade-right" data-aos-delay="100">
        {/* Blog List */}
        <div className="blogs-list">
          {filteredBlogs.map((blog) => (
            <div key={blog.id} className="blog-card">
              <img src={blog.image} alt={blog.title} className="blog-img" />
              <div className="blog-info">
                <h2>{blog.title}</h2>
                <p>{blog.description}</p>
                <button className="read-btn">Find out more</button>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="sidebar">
          <div className="banner" data-aos="fade-left" data-aos-delay="100">
            <h3>Ready to Make a Difference?</h3>
            <p>
              Our company is an IT consulting and services company with rich
              experience working with enterprises.
            </p>
            <button className="banner-btn">Get Ahead of the Game</button>
          </div>
          <div className="categories-list" data-aos="fade-left" data-aos-delay="100">
            <h4>Categories</h4>
            <ul>
              {categories.map((cat) => (
                <li key={cat}>{cat}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Contact Section */}
      <div className="blog-contact-section" data-aos="fade-up" data-aos-delay="100">
        <h2>How can we help you scale?</h2>
        <p>We’re excited to hear from you, and brew your digital success together!</p>
        <form className="blog-contact-form">
          <div className="blog-form-row">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Contact Number" required />
            <input type="text" placeholder="Business Name" />
          </div>
          <textarea placeholder="Message" rows="4"></textarea>
          <div className="blog-form-row">
            <label>What is 8 + 1 ?</label>
            <input type="text" placeholder="Type your answer" required />
          </div>
          <button type="submit" className="blog-submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Blog;
