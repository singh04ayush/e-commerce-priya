import React, { useContext, useState } from "react";
import { assets } from "../assets/assets.js";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext.jsx";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);

  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  const handleCategoryClick = (mainCategory, menuItem) => {
    navigate(`/collection?navlink=${encodeURIComponent(mainCategory)}&sub-category=${encodeURIComponent(menuItem)}`);
    setHoveredMenu(null);
  };

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };

  const menuItems = {
    Clothing: {
      columns: [
        {
          category: "WOMEN",
          items: ["Kurta Sets", "Lehenga", "Sarees", "Salwar Kameez", "Kurtis", "Anarkali"],
        },
        {
          category: "MEN",
          items: ["Kurtas", "Sherwani", "Kurta Sets", "Nehru Jacket", "Kurta Pajama", "Bandhgalas", "Shirts", "Blazers"],
        },
        {
          category: "GIRLS",
          items: ["Lehengas", "Salwar Suits", "Sarees", "Frocks", "Dresses", "Gowns"],
        },
        {
          category: "BOYS",
          items: ["Kurta Pajamas", "Dhoti Kurta", "Nehru Jacket", "Sherwani", "Indo Western"],
        },
      ],
    },
    Accessories: {
      columns: [
        {
          category: "ACCESSORIES",
          items: ["Bags", "Gifts", "Clutches", "Wallet", "Pouches"],
        },
        {
          category: "JEWELLERY",
          items: ["Necklaces", "Necklace Sets", "Earrings", "Bangles & Bracelets", "Maang Tikkas", "Anklets", "Pendants", "Rings"],
        },
      ],
    },
    Artisans: {
      columns: [
        {
          category: "CRAFTS",
          items: ["Embroidery", "Hand Weaving", "Crochet", "Handblock Printing", "Metal Craft", "Pottery", "Tie and Dye", "Eco Printing"],
        },
        {
          category: "GOODS",
          items: ["Candles", "Perfumes", "Copper Enamelling", "Terracotta", "Jalaldozi", "Macrame", "Ajrakh", "Dokra"],
        },
      ],
    },
    Decor: {
      columns: [
        {
          category: "HOME DECOR",
          items: ["Wall Art", "Cushions", "Rugs", "Throws", "Mirrors", "Lamps", "Vases", "Planters"],
        },
        {
          category: "TABLE DECOR",
          items: ["Table Runners", "Placemats", "Coasters", "Napkins", "Centerpieces", "Candle Holders"],
        },
      ],
    },
  };

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/">
        <p
          style={{
            backgroundImage:
              "linear-gradient(90deg, #f5d76e, #ffd700, #f9a602)",
            WebkitBackgroundClip: "text",
            fontWeight: "bold",
            fontSize: "1.875rem", // equivalent to text-3xl
            textAlign: "center",
            textShadow:
              "0 0 8px rgba(255, 215, 0, 0.6), 0 0 15px rgba(255, 215, 0, 0.4)",
            fontFamily: '"Times New Roman", sans-serif',
            width: "9rem", // equivalent to w-36
          }}
        >
          nyima
        </p>
      </Link>

      <ul className="hidden sm:flex gap-5 text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p className="text-sm">Home</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        {/* Clothing */}
        <div
          className="relative group flex flex-col items-center gap-1 cursor-pointer"
          onMouseEnter={() => setHoveredMenu("Clothing")}
          onMouseLeave={() => setHoveredMenu(null)}
        >
          <p className="text-sm">Clothing</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 group-hover:block hidden" />
          {hoveredMenu === "Clothing" && (
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 z-50">
              <div className="bg-white shadow-lg rounded p-6 grid grid-cols-4 gap-8 min-w-max">
                {menuItems.Clothing.columns.map((column) => (
                  <div key={column.category} className="min-w-40">
                    <p className="text-red-700 font-semibold text-sm mb-3">{column.category}</p>
                    {column.items.map((item) => (
                      <p key={item} onClick={() => handleCategoryClick('Clothing', item)} className="text-gray-700 text-sm py-1 hover:text-red-700 cursor-pointer whitespace-nowrap">
                        {item}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Accessories */}
        <div
          className="relative group flex flex-col items-center gap-1 cursor-pointer"
          onMouseEnter={() => setHoveredMenu("Accessories")}
          onMouseLeave={() => setHoveredMenu(null)}
        >
          <p className="text-sm">Accessories</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 group-hover:block hidden" />
          {hoveredMenu === "Accessories" && (
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 z-50">
              <div className="bg-white shadow-lg rounded p-6 grid grid-cols-2 gap-8 min-w-max">
                {menuItems.Accessories.columns.map((column) => (
                  <div key={column.category} className="min-w-40">
                    <p className="text-red-700 font-semibold text-sm mb-3">{column.category}</p>
                    {column.items.map((item) => (
                      <p key={item} onClick={() => handleCategoryClick('Accessories', item)} className="text-gray-700 text-sm py-1 hover:text-red-700 cursor-pointer whitespace-nowrap">
                        {item}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Artisans */}
        <div
          className="relative group flex flex-col items-center gap-1 cursor-pointer"
          onMouseEnter={() => setHoveredMenu("Artisans")}
          onMouseLeave={() => setHoveredMenu(null)}
        >
          <p className="text-sm">Artisans</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 group-hover:block hidden" />
          {hoveredMenu === "Artisans" && (
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 z-50">
              <div className="bg-white shadow-lg rounded p-6 grid grid-cols-2 gap-8 min-w-max">
                {menuItems.Artisans.columns.map((column) => (
                  <div key={column.category} className="min-w-40">
                    <p className="text-red-700 font-semibold text-sm mb-3">{column.category}</p>
                    {column.items.map((item) => (
                      <p key={item} onClick={() => handleCategoryClick('Artisans', item)} className="text-gray-700 text-sm py-1 hover:text-red-700 cursor-pointer whitespace-nowrap">
                        {item}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Decor */}
        <div
          className="relative group flex flex-col items-center gap-1 cursor-pointer"
          onMouseEnter={() => setHoveredMenu("Decor")}
          onMouseLeave={() => setHoveredMenu(null)}
        >
          <p className="text-sm">Decor</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 group-hover:block hidden" />
          {hoveredMenu === "Decor" && (
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 z-50">
              <div className="bg-white shadow-lg rounded p-6 grid grid-cols-2 gap-8 min-w-max">
                {menuItems.Decor.columns.map((column) => (
                  <div key={column.category} className="min-w-40">
                    <p className="text-red-700 font-semibold text-sm mb-3">{column.category}</p>
                    {column.items.map((item) => (
                      <p key={item} onClick={() => handleCategoryClick('Decor', item)} className="text-gray-700 text-sm py-1 hover:text-red-700 cursor-pointer whitespace-nowrap">
                        {item}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p className="text-sm">About</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p className="text-sm">Contact</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          className="w-5 cursor-pointer"
          alt=""
        />

        <div className="group relative">
          <img
            onClick={() => (token ? null : navigate("/login"))}
            src={assets.profile_icon}
            className="w-5 cursor-pointer"
            alt=""
          />
          {/* drop down */}
          {token && (
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-50">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <p
                  onClick={() => navigate("/profile")}
                  className="cursor-pointer hover:text-black"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("/orders")}
                  className="cursor-pointer hover:text-black"
                >
                  Orders
                </p>
                <p onClick={logout} className="cursor-pointer hover:text-black">
                  Logout
                </p>
              </div>
            </div>
          )}
        </div>

        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>

        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt=""
        />
      </div>

      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3"
          >
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="" />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/collection/new"
          >
            New
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/collection/sarees"
          >
            Sarees
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/collection/lehengas"
          >
            Lehengas
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/collection/salwar-kameez"
          >
            Salwar Kameez
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/collection/kurtis"
          >
            Kurtis
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/collection/jewellery"
          >
            Jewellery
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/collection/men"
          >
            Men
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/collection/kids"
          >
            Kids
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
