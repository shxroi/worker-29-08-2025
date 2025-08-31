"use client"
import React, { useState } from 'react';
import { Search, ShoppingCart, User, Bell, ChevronLeft, ChevronRight, Star, Download } from 'lucide-react';

const SteamStoreRedesign = () => {
  const [wishlistCount, setWishlistCount] = useState(2);
  const [cartItems, setCartItems] = useState(2);

  const featuredGame = {
    title: "WARFACE",
    description: "Join one of the most intense online shooters with console-quality graphics, precise controls, advanced matchmaking, and fair competition mechanics. Experience the ultimate free-to-play FPS on mobile.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=400&fit=crop"
  };

  const specialOffers = [
    {
      id: 1,
      title: "Metro Exodus",
      image: "https://images.unsplash.com/photo-1551079400-63daf7e1c47e?w=300&h=150&fit=crop",
      originalPrice: "$39.99",
      discountedPrice: "$7.19",
      discount: "82%",
      endsIn: "17 Sep @ 10:30pm"
    },
    {
      id: 2,
      title: "Mirror's Edge",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300&h=150&fit=crop",
      originalPrice: "$19.99",
      discountedPrice: "$3.59",
      discount: "82%",
      endsIn: "17 Sep @ 10:30pm"
    },
    {
      id: 3,
      title: "Assetto Corsa",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=150&fit=crop",
      originalPrice: "$19.99",
      discountedPrice: "$3.59",
      discount: "82%",
      endsIn: "17 Sep @ 10:30pm"
    },
    {
      id: 4,
      title: "Star Wars Jedi",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=150&fit=crop",
      originalPrice: "$59.99",
      discountedPrice: "$10.79",
      discount: "82%",
      endsIn: "17 Sep @ 10:30pm"
    },
    {
      id: 5,
      title: "Cyberpunk 2077",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300&h=150&fit=crop",
      originalPrice: "$59.99",
      discountedPrice: "$10.79",
      discount: "82%",
      endsIn: "17 Sep @ 10:30pm"
    }
  ];

  const discoveryQueue = [
    {
      title: "Overwatch 2",
      image: "https://images.unsplash.com/photo-1560253021-d9864314e529?w=300&h=150&fit=crop",
      tags: ["Action", "FPS", "Multiplayer"]
    },
    {
      title: "Fall Guys",
      image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=300&h=150&fit=crop",
      tags: ["Party", "Platformer", "Multiplayer"]
    },
    {
      title: "Destiny 2",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300&h=150&fit=crop",
      tags: ["Action", "RPG", "Multiplayer"]
    },
    {
      title: "Apex Legends",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300&h=150&fit=crop",
      tags: ["Battle Royale", "FPS", "Free"]
    }
  ];

  const recommendedGames = [
    {
      title: "Warface",
      price: "$79.00",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=150&h=100&fit=crop"
    },
    {
      title: "Call of Duty",
      price: "$59.99",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=150&h=100&fit=crop"
    },
    {
      title: "Battlefield",
      price: "$39.99",
      image: "https://images.unsplash.com/photo-1560253021-d9864314e529?w=150&h=100&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-300">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Left Section */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold text-gray-800">STEAM</span>
            </div>
            <nav className="flex space-x-6 text-sm">
              <a href="#" className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1">STORE</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">COMMUNITY</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">CHAT</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">SUPPORT</a>
            </nav>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm">
              <Bell className="w-4 h-4 text-gray-600" />
              <span className="text-gray-700">+21°</span>
            </div>
            <div className="flex items-center space-x-2">
              <ShoppingCart className="w-4 h-4 text-gray-600" />
              <span className="text-sm text-gray-700">{cartItems}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-600 font-semibold text-sm">$3105.00</span>
            </div>
            <div className="flex items-center space-x-2">
              <User className="w-5 h-5 text-gray-600" />
              <span className="text-sm text-gray-700">BEAST△</span>
            </div>
          </div>
        </div>

        {/* Sub Navigation */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="flex items-center justify-between px-4 py-2">
            <div className="flex items-center space-x-8 text-sm">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
                <Download className="w-4 h-4" />
                <span>Install Steam Now</span>
              </button>
              <button className="text-blue-600 font-medium border-b border-blue-600">Your Store</button>
              <button className="text-gray-600 hover:text-blue-600">New & Noteworthy</button>
              <button className="text-gray-600 hover:text-blue-600">Categories</button>
              <button className="text-gray-600 hover:text-blue-600">Points Shop</button>
              <button className="text-gray-600 hover:text-blue-600">News</button>
              <button className="text-gray-600 hover:text-blue-600">Labs</button>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-10 pr-4 py-1 bg-white border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
                Wishlist (+{wishlistCount})
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
          <div className="p-4">
            {/* Gift Cards Section */}
            <div className="mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-4 text-white text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold">S</span>
                </div>
                <h3 className="font-bold text-sm mb-1">STEAM</h3>
                <p className="text-xs opacity-90">GIFT CARDS</p>
                <p className="text-xs font-medium mt-2">Now Available On Steam</p>
              </div>
            </div>

            {/* Recommended Section */}
            <div className="mb-6">
              <h3 className="text-blue-600 font-semibold text-sm mb-3 uppercase tracking-wide">Recommended</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Tags</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">By Friends</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">By Curators</a></li>
              </ul>
            </div>

            {/* Discovery Queues */}
            <div className="mb-6">
              <h3 className="text-blue-600 font-semibold text-sm mb-3 uppercase tracking-wide">Discovery Queues</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Recommendations</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">New Releases</a></li>
              </ul>
            </div>

            {/* Browse Categories */}
            <div>
              <h3 className="text-blue-600 font-semibold text-sm mb-3 uppercase tracking-wide">Browse Categories</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Top Sellers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">New Releases</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Upcoming</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Specials</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Virtual Reality</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Controller Friendly</a></li>
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="text-blue-600 font-semibold text-sm mb-3 uppercase tracking-wide">Browse By Genre</h3>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Featured Game */}
          <div className="relative bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-8">
            <div className="relative h-80">
              <img
                src={featuredGame.image}
                alt={featuredGame.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
              
              {/* Navigation arrows */}
              <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors">
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors">
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              {/* Game Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h1 className="text-4xl font-bold mb-4 tracking-wider">{featuredGame.title}</h1>
                <p className="text-gray-200 max-w-2xl leading-relaxed">{featuredGame.description}</p>
              </div>

              {/* Dots indicator */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                <div className="w-2 h-2 bg-white/50 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Special Offers */}
          <section className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">SPECIAL OFFERS</h2>
              <button className="text-blue-600 hover:text-blue-700 text-sm">Browse All</button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {specialOffers.map((game) => (
                <div key={game.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow group cursor-pointer">
                  <div className="relative">
                    <img
                      src={game.image}
                      alt={game.title}
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">
                      -{game.discount}
                    </div>
                  </div>
                  
                  <div className="p-3">
                    <h3 className="font-medium text-gray-900 text-sm mb-2 truncate">{game.title}</h3>
                    <div className="text-xs text-gray-500 mb-2">MIDWEEK MADNESS</div>
                    <div className="text-xs text-gray-500 mb-3">Offer Ends 17 Sep @ 10:30pm</div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-gray-500 line-through">{game.originalPrice}</span>
                        <span className="text-sm font-bold text-green-600">{game.discountedPrice}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Your Discovery Queue */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">YOUR DISCOVERY QUEUE</h2>
              <button className="text-blue-600 hover:text-blue-700 text-sm">Browse All</button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {discoveryQueue.map((game, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow group cursor-pointer">
                  <div className="relative">
                    <img
                      src={game.image}
                      alt={game.title}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-medium text-gray-900 mb-2">{game.title}</h3>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {game.tags.map((tag) => (
                        <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm text-gray-600 ml-1">4.5</span>
                      </div>
                      <span className="text-green-600 font-semibold">Free</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>

        {/* Right Sidebar */}
        <aside className="w-80 bg-white border-l border-gray-200 p-4">
          <div className="mb-6">
            <h3 className="font-bold text-gray-900 mb-4">Warface</h3>
            <div className="text-right mb-4">
              <span className="text-2xl font-bold text-gray-900">$79.00</span>
            </div>
            
            <div className="space-y-3 mb-4">
              {recommendedGames.map((game, index) => (
                <div key={index} className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded cursor-pointer">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-12 h-8 object-cover rounded"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{game.title}</p>
                  </div>
                  <span className="text-sm text-gray-600">{game.price}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 pt-4">
              <h4 className="font-medium text-gray-900 mb-3">Recommended</h4>
              <p className="text-sm text-gray-600 mb-4">Because You Played Games Tagged</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {["FPS", "Multiplayer", "Action", "Online", "Shooter"].map((tag) => (
                  <span key={tag} className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-end">
                <div className="w-6 h-6 bg-gray-800 rounded flex items-center justify-center">
                  <span className="text-white text-xs">⊞</span>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default SteamStoreRedesign;