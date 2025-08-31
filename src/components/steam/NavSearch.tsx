import React from "react";

export default function NavbarSearch() {
  return (
    <nav className="w-full bg-gradient-to-t from-purple-900 to-purple-200/10 flex flex-col md:flex-row items-center md:justify-between px-4 py-3 text-white text-sm gap-2">
      <div className="flex items-center gap-2 md:gap-6 w-full md:w-auto">
        <div className="hidden md:flex gap-6">
          <span className="bg-purple-700 px-4 py-1 rounded cursor-pointer hover:bg-purple-600">Home</span>
          <span className="hover:text-gray-300 cursor-pointer px-2 py-1">Browse</span>
          <span className="hover:text-gray-300 cursor-pointer px-2 py-1">Discover</span>
          <span className="hover:text-gray-300 cursor-pointer px-2 py-1">Points Shop</span>
          <span className="hover:text-gray-300 cursor-pointer px-2 py-1">Curators</span>
          <span className="hover:text-gray-300 cursor-pointer px-2 py-1">Gift Cards</span>
          <span className="hover:text-gray-300 cursor-pointer px-2 py-1">News</span>
        </div>
        <button className="md:hidden bg-purple-700 px-3 py-1 rounded">Menu</button>
      </div>

      <div className="flex items-center justify-center w-full md:w-auto">
        <div className="flex items-center bg-purple-700/50 rounded px-3 py-1 w-full md:w-96">
          <input
            type="text"
            placeholder="Search..."
            className="border-none bg-transparent text-white placeholder:text-gray-300 focus:outline-none flex-1 text-sm"
          />
          <span className="ml-2 cursor-pointer">🔍</span>
        </div>
      </div>

      <div className="flex gap-4 items-center">
        <span className="hidden md:inline hover:text-gray-300 cursor-pointer">Wishlist</span>
        <span className="hidden md:inline hover:text-gray-300 cursor-pointer">Cart</span>
        <span className="cursor-pointer">⚙️</span>
      </div>
    </nav>
  );
}
            