"use client";

import { useState } from "react";

const categories = [
  {
    name: "เสื้อผ้า",
    icon: "👕",
  },
  {
    name: "อุปกรณ์ไอที",
    icon: "🎧",
  },
  {
    name: "แฟชั่น",
    icon: "🎒",
  },
  {
    name: "หนังสือ",
    icon: "📚",
  },
  {
    name: "อาหาร",
    icon: "🍔",
  },
  {
    name: "อื่นๆ",
    icon: "📦",
  },
];

const products = [
  {
    id: 1,
    name: "เสื้อช็อปนักศึกษา",
    category: "เสื้อผ้า",
    price: 250,
    seller: "เจมส์",
    rating: 4.8,
    emoji: "👕",
  },
  {
    id: 2,
    name: "หูฟัง Bluetooth",
    category: "อุปกรณ์ไอที",
    price: 590,
    seller: "แม็กซ์",
    rating: 4.8,
    emoji: "🎧",
  },
  {
    id: 3,
    name: "กระเป๋าไปเรียน",
    category: "แฟชั่น",
    price: 350,
    seller: "มิน",
    rating: 4.9,
    emoji: "🎒",
  },
  {
    id: 4,
    name: "หนังสือเขียนโปรแกรม",
    category: "หนังสือ",
    price: 180,
    seller: "นัท",
    rating: 4.7,
    emoji: "📚",
  },
  {
    id: 5,
    name: "เมาส์ไร้สาย",
    category: "อุปกรณ์ไอที",
    price: 299,
    seller: "บีม",
    rating: 4.6,
    emoji: "🖱️",
  },
  {
    id: 6,
    name: "เสื้อ Hoodie",
    category: "เสื้อผ้า",
    price: 450,
    seller: "เจน",
    rating: 4.9,
    emoji: "🧥",
  },
];

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false);

  const [search, setSearch] = useState("");

  const [selectedCategory, setSelectedCategory] =
    useState("ทั้งหมด");

  const [favorites, setFavorites] = useState<number[]>([]);

  // =========================
  // FAVORITE
  // =========================

  const toggleFavorite = (id: number) => {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  // =========================
  // FILTER PRODUCT
  // =========================

  const filteredProducts = products.filter((product) => {
    const matchSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      selectedCategory === "ทั้งหมด" ||
      product.category === selectedCategory;

    return matchSearch && matchCategory;
  });

  return (
    <main className={darkMode ? "app dark-mode" : "app"}>

      {/* ==========================================
          NAVBAR
      ========================================== */}

      <nav className="navbar">

        <div className="navbar-inner">

          {/* LOGO */}

          <div className="brand">

            <div className="brand-icon">
              🛍️
            </div>

            <div>
              <h2>MarketPlate</h2>

              <span>
                College Marketplace
              </span>
            </div>

          </div>


          {/* DESKTOP SEARCH */}

          <div className="desktop-search">

            <span>
              🔍
            </span>

            <input
              type="text"
              placeholder="ค้นหาสินค้า..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

          </div>


          {/* NAV RIGHT */}

          <div className="nav-right">

            <button
              className="round-button"
              onClick={() =>
                setDarkMode(!darkMode)
              }
            >
              {darkMode ? "☀️" : "🌙"}
            </button>


            <button className="cart-button">
              🛒

              <small>
                2
              </small>
            </button>


            <button className="profile">
              👤
            </button>

          </div>

        </div>

      </nav>


      {/* ==========================================
          HERO
      ========================================== */}

      <section className="hero">

        <div className="hero-content">

          {/* HERO TEXT */}

          <div className="hero-text">

            <span className="hero-badge">
              ✦ CAMPUS MARKETPLACE
            </span>

            <h1>
              ซื้อขายง่ายๆ
              <br />
              <span>
                ในวิทยาลัยของเรา
              </span>
            </h1>

            <p>
              แหล่งซื้อขายสินค้าออนไลน์สำหรับนักศึกษา
              ค้นหา ซื้อ และขายสินค้าได้ง่ายในที่เดียว
            </p>

          </div>


          {/* 3D HERO PRODUCTS */}

          <div className="hero-visual">

            <div className="hero-circle">
              🛍️
            </div>

            <div className="floating-product product-one">
              👕
            </div>

            <div className="floating-product product-two">
              🎧
            </div>

            <div className="floating-product product-three">
              🎒
            </div>

          </div>

        </div>

      </section>


      {/* ==========================================
          MOBILE SEARCH
      ========================================== */}

      <div className="mobile-search">

        <span>
          🔍
        </span>

        <input
          type="text"
          placeholder="ค้นหาสินค้า..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

      </div>


      {/* ==========================================
          CATEGORY
      ========================================== */}

      <section className="section">

        <div className="section-title">

          <div>

            <span className="small-label">
              EXPLORE
            </span>

            <h2>
              หมวดหมู่สินค้า
            </h2>

          </div>


          <button className="view-all">
            ดูทั้งหมด →
          </button>

        </div>


        <div className="categories">

          {/* ALL */}

          <button
            className={
              selectedCategory === "ทั้งหมด"
                ? "category active"
                : "category"
            }
            onClick={() =>
              setSelectedCategory("ทั้งหมด")
            }
          >

            <div className="category-icon">
              ✨
            </div>

            <span>
              ทั้งหมด
            </span>

          </button>


          {/* CATEGORY LIST */}

          {categories.map((category) => (

            <button
              key={category.name}
              className={
                selectedCategory === category.name
                  ? "category active"
                  : "category"
              }
              onClick={() =>
                setSelectedCategory(category.name)
              }
            >

              <div className="category-icon">
                {category.icon}
              </div>

              <span>
                {category.name}
              </span>

            </button>

          ))}

        </div>

      </section>


      {/* ==========================================
          PRODUCTS
      ========================================== */}

      <section className="section products-section">

        <div className="section-title">

          <div>

            <span className="small-label">
              TRENDING NOW
            </span>

            <h2>
              สินค้ายอดนิยม
            </h2>

          </div>


          <button className="view-all">
            ดูทั้งหมด →
          </button>

        </div>


        <div className="product-grid">

          {filteredProducts.map((product) => (

            <article
              className="product-card"
              key={product.id}
            >

              {/* PRODUCT VISUAL */}

              <div className="product-visual">

                <span className="product-category">
                  {product.category}
                </span>


                {/* FAVORITE */}

                <button
                  className={
                    favorites.includes(product.id)
                      ? "favorite liked"
                      : "favorite"
                  }
                  onClick={() =>
                    toggleFavorite(product.id)
                  }
                >
                  {favorites.includes(product.id)
                    ? "♥"
                    : "♡"}
                </button>


                {/* 3D EMOJI */}

                <div className="product-3d">

                  <span>
                    {product.emoji}
                  </span>

                </div>


                <div className="product-shadow"></div>

              </div>


              {/* PRODUCT INFO */}

              <div className="product-info">

                <div className="product-name-row">

                  <h3>
                    {product.name}
                  </h3>

                  <div className="rating">
                    ★ {product.rating}
                  </div>

                </div>


                {/* SELLER */}

                <div className="seller">

                  <div className="seller-avatar">
                    {product.seller.charAt(0)}
                  </div>

                  <span>
                    ขายโดย {product.seller}
                  </span>

                </div>


                {/* PRICE */}

                <div className="product-bottom">

                  <div>

                    <span className="price-label">
                      ราคา
                    </span>

                    <strong>
                      ฿{product.price}
                    </strong>

                  </div>


                  <button className="detail-button">
                    ดูสินค้า →
                  </button>

                </div>

              </div>

            </article>

          ))}

        </div>


        {/* NO RESULT */}

        {filteredProducts.length === 0 && (

          <div className="no-products">

            <div>
              😢
            </div>

            <h3>
              ไม่พบสินค้า
            </h3>

            <p>
              ลองค้นหาด้วยคำอื่นดูนะ
            </p>

          </div>

        )}

      </section>


      {/* ==========================================
          SELL BANNER
      ========================================== */}

      <section className="sell-banner">

        <div>

          <span className="sell-icon">
            💰
          </span>

          <div>

            <span className="small-label">
              START SELLING
            </span>

            <h2>
              มีของที่ไม่ได้ใช้?
            </h2>

            <p>
              เปลี่ยนของที่ไม่ได้ใช้ให้เป็นเงินง่ายๆ
            </p>

          </div>

        </div>


        <button>
          + ลงขายสินค้า
        </button>

      </section>


      {/* ==========================================
          MOBILE BOTTOM NAV
      ========================================== */}

      <div className="bottom-nav">

        <button className="bottom-active">

          <span>
            ⌂
          </span>

          หน้าหลัก

        </button>


        <button>

          <span>
            🔍
          </span>

          ค้นหา

        </button>


        <button className="sell-nav">
          ＋
        </button>


        <button>

          <span>
            🛒
          </span>

          รถเข็น

        </button>


        <button>

          <span>
            👤
          </span>

          โปรไฟล์

        </button>

      </div>

    </main>
  );
}