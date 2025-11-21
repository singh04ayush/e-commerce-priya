import React, { useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [searchParams] = useSearchParams();
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relavent');

  // Set category and subcategory from URL query parameters on component mount
  useEffect(() => {
    const navlinkParam = searchParams.get('navlink');
    const subCategoryParam = searchParams.get('sub-category');
    
    if (navlinkParam) {
      setCategory([navlinkParam]);
    }
    
    if (subCategoryParam) {
      setSubCategory([subCategoryParam]);
    }
  }, [searchParams]);

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

  // Flatten all categories and subcategories from menuItems
  const allCategories = Object.keys(menuItems);
  
  const subcategoryMap = {};
  Object.entries(menuItems).forEach(([mainCat, data]) => {
    const items = [];
    data.columns.forEach(column => {
      column.items.forEach(item => {
        items.push({
          name: item,
          columnCategory: column.category,
          uniqueKey: `${mainCat}-${column.category}-${item}`
        });
      });
    });
    subcategoryMap[mainCat] = items;
  });

  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory(prev => {
      const updated = prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value];
      // Clear subcategories when category changes
      setSubCategory([]);
      return updated;
    });
  };

  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubCategory(prev =>
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    );
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }

    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case 'high-low':
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch, products]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Left Filters */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>
          FILTERS
          <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} alt="" />
        </p>

        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            {allCategories.map(cat => (
              <label key={cat} className='flex gap-2'>
                <input
                  type="checkbox"
                  value={cat}
                  className='w-3'
                  onChange={toggleCategory}
                  checked={category.includes(cat)}
                />
                {cat}
              </label>
            ))}
          </div>
        </div>

        {/* Subcategory Filter */}
        {category.length > 0 && (
          <div className={`border border-gray-300 pl-5 py-3 mt-5 ${showFilter ? '' : 'hidden'} sm:block`}>
            <p className='mb-3 text-sm font-medium'>TYPE</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700 max-h-60 overflow-y-auto'>
              {category.map(cat =>
                (subcategoryMap[cat] || []).map(sub => (
                  <label key={sub.uniqueKey} className='flex gap-2'>
                    <input
                      type="checkbox"
                      value={sub.name}
                      className='w-3'
                      onChange={toggleSubCategory}
                    />
                    {sub.name}
                  </label>
                ))
              )}
            </div>
          </div>
        )}
      </div>

      {/* Right Products Section */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={category.length > 0 ? category[0].toUpperCase() : 'ALL'} text2={'COLLECTION'} />
          <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value="relavent">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
