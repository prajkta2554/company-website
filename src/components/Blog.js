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

const Tags = [
  "#SharePointIntegration",
  "#DocumentManagement #SaaS",
  "#ApplicationDevelopment #Startups",
  "#EnterpriseSolutions #CollaborationTools",
  "#CloudBasedSoftware"
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
  const [searchTerm, setSearchTerm] = useState("");

const filteredBlogs = blogs.filter((blog) => {
  const matchesCategory =
    selectedCategory === "All" || blog.category === selectedCategory;

  const matchesSearch =
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.category.toLowerCase().includes(searchTerm.toLowerCase());

  return matchesCategory && matchesSearch;
});



  return (
    <>
      <section className="blog-section">
        {/* Blog Title */}
        <h1 className="blogs-title">Blogs</h1>

        <div className="blog-layout">
          {/* Left Column - Blogs */}
          <div className="blog-main">
            
            {/* 🔍 Search Bar */}
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search blog..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <div className="category-filter">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`category-btn ${
                    selectedCategory === cat ? "active" : ""
                  }`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Blog List */}
            <div className="blogs-container">
              {filteredBlogs.length > 0 ? (
                filteredBlogs.map((blog) => (
                  <div key={blog.id} className="blog-card">
                    <img src={blog.image} alt={blog.title} className="blog-img" />
                    <div className="blog-content">
                      <h2>{blog.title}</h2>
                      <p>{blog.description}</p>
                      <button className="btn">Find out more</button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="no-results">No blogs found.</p>
              )}
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <aside className="blog-sidebar">
            <h3>Categories</h3>
            <ul>
              {categories.map((cat, index) => (
                <li key={index}>{cat}</li>
              ))}
            </ul>

            <h3>Tags</h3>
            <ul>
              {Tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
          </aside>  
        </div>

        {/* ✅ Reach Out Section */}
        <section className="reachout-section">
          <div className="reachout-container">
            <div className="reachout-content">
              <h2>Reach Out to Us</h2>
              <p>
                Have questions or want to collaborate?  
                We’re here to listen and help you grow your business.
              </p>

              <form className="reachout-form">
                <div className="form-row">
                  <input type="text" placeholder="Your Name" required />
                  <input type="email" placeholder="Your Email" required />
                </div>

                <input type="text" placeholder="Subject" required />
                <textarea placeholder="Your Message" rows="4" required></textarea>

                <button type="submit" className="reachout-btn">
                  Send Message
                </button>
              </form>
            </div>

            <div className="reachout-info">
              <h3>Contact Information</h3>
              <ul>
                <li><strong>Email:</strong> contact@logiclite.com</li>
                <li><strong>Phone:</strong> +91 98765 43210</li>
                <li><strong>Address:</strong> Jaipur, India</li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Blog;
