import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="relative flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* Decorative Images */}
        <img src={assets.decor8} className='absolute -top-8 -left-8 w-24 h-24 opacity-50 hidden md:block' alt="Decor" />
        <img src={assets.decor10} className='absolute -bottom-8 -right-8 w-24 h-24 opacity-50 hidden md:block' alt="Decor" />
        
        {/* Flower Doodle Top Right */}
        <svg className='absolute -top-6 right-20 w-12 h-12 opacity-40 hidden md:block' viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="6" fill="#d4a574"/>
          <circle cx="50" cy="30" r="5" fill="#c9a961"/>
          <circle cx="70" cy="50" r="5" fill="#c9a961"/>
          <circle cx="50" cy="70" r="5" fill="#c9a961"/>
          <circle cx="30" cy="50" r="5" fill="#c9a961"/>
        </svg>

        {/* Leaf Doodle Bottom Left */}
        <svg className='absolute -bottom-6 left-20 w-12 h-12 opacity-40 hidden md:block' viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 10 Q70 30 60 70 Q50 80 40 70 Q30 30 50 10" stroke="#8b9d6f" strokeWidth="2" fill="none"/>
          <path d="M50 20 Q55 40 50 70" stroke="#8b9d6f" strokeWidth="1.5" fill="none"/>
        </svg>

        {/* Small Flower Bottom Right */}
        <svg className='absolute -bottom-4 -right-4 w-10 h-10 opacity-40 hidden md:block' viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="4" fill="#d4a574"/>
          <circle cx="50" cy="35" r="3" fill="#c9a961"/>
          <circle cx="65" cy="50" r="3" fill="#c9a961"/>
          <circle cx="50" cy="65" r="3" fill="#c9a961"/>
          <circle cx="35" cy="50" r="3" fill="#c9a961"/>
        </svg>

        {/* Small Leaf Top Left */}
        <svg className='absolute -top-4 -left-4 w-10 h-10 opacity-40 hidden md:block' viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="50" cy="50" rx="15" ry="30" fill="none" stroke="#8b9d6f" strokeWidth="2" transform="rotate(-45 50 50)"/>
          <path d="M50 25 Q52 50 50 75" stroke="#8b9d6f" strokeWidth="1.5" fill="none"/>
        </svg>
        
        <div>
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
          <p className="w-full md:w-2/3 text-gray-600">
            A 100% Artisan Owned Brand
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">Get in Touch</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91 88607 97971</li>
            <li>support@nyima.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025@ nyima.com - All rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
