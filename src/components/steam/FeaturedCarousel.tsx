"use client"
import React from "react";

const dataGames = [
  {
    title: "ROBLOX",
    mainImage: "/games/roblox-main.webp",
    thumbnails: [
      "/games/roblox-thumb1.jpg",
      "/games/roblox-thumb2.jpg",
      "/games/roblox-thumb3.jpg",
      "/games/roblox-thumb4.jpg"
    ],
    price: "$999.99",
    label: "Buy Now",
    description:
      "Roblox is a global platform where millions of people gather together every day to imagine, create, and share experiences in immersive 3D worlds built by the community.",
    tags: ["Gore", "Nudity", "Dark Fantasy", "Open-world"],
    wishlist: true
  },
  {
    title: "DOTA 2",
    mainImage: "/games/main1.png",
    thumbnails: [
      "/games/submain1-1.jpg",
      "/games/submain1-2.jpg",
      "/games/submain1-3.jpg",
      "/games/submain1-4.jpg"
    ],
    price: "Free to Play",
    label: "Play Now",
    description:
      "Dota 2 is a multiplayer online battle arena (MOBA) games where two teams of five players compete to destroy the enemy's Ancient. Choose from over 120 unique heroes and experience deep strategic gameplay.",
    tags: ["MOBA", "Strategy", "Multiplayer", "Free to Play"],
    wishlist: true
  },
  {
    title: "Elden Ring",
    mainImage: "/games/main-elden.png",
    thumbnails: [
      "/games/eldenring-thumb1.jpg",
      "/games/eldenring-thumb2.jpg",
      "/games/eldenring-thumb3.jpg",
      "/games/eldenring-thumb4.jpg"
    ],
    price: "$59.99",
    label: "Buy Now",
    description:
      "THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.",
    tags: ["Souls-like", "RPG", "Dark Fantasy", "Open-world"],
    wishlist: true
  },
  {
    title: "Cyber Punk 2077",
    mainImage: "/games/cyber-adventure-main.jpg",
    thumbnails: [
      "/games/cyber-thumb1.jpg",
      "/games/cyber-thumb2.jpg",
      "/games/cyber-thumb3.jpg",
      "/games/cyber-thumb4.jpg"
    ],
    price: "$49.99",
    label: "Buy Now",
    description: "Explore the neon city and uncover its secrets in this cyberpunk RPG adventure.",
    tags: ["Cyberpunk", "Adventure", "Story Rich", "Singleplayer"],
    wishlist: false
  }
];

export default function FeaturedCarousel() {
  const [current, setCurrent] = React.useState(0);
  const [wishlist, setWishlist] = React.useState<boolean>(dataGames[0].wishlist ?? false);
  const [direction, setDirection] = React.useState<1 | -1>(1);
  const [animKey, setAnimKey] = React.useState(0);
  const game = dataGames[current];

  React.useEffect(() => {
    setWishlist(dataGames[current].wishlist ?? false);
  }, [current]);

  const goNext = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % dataGames.length);
    setAnimKey((k) => k + 1);
  };

  const goPrev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + dataGames.length) % dataGames.length);
    setAnimKey((k) => k + 1);
  };

  React.useEffect(() => {
    const id = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % dataGames.length);
      setAnimKey((k) => k + 1);
    }, 5000);
    return () => clearInterval(id);
  }, []); // empty deps -> runs once

  return (
    <div className="w-full max-w-6xl mx-auto mt-8 px-4">
      <div className="text-lg text-gray-300 mb-3 font-semibold tracking-wide">FEATURED</div>
      <div
        key={animKey} // <-- key forces remount so CSS animation plays again
        className={`relative bg-gradient-to-b from-[#0f1115] to-[#171926] rounded-lg p-4 shadow-2xl ${direction === 1 ? "carousel-slide--in-right" : "carousel-slide--in-left"}`}
      >
        {/* Left / Right arrows */}
        <button
          aria-label="Previous"
          className="absolute -left-16 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60"
          onClick={goPrev}
        >
          ‹
        </button>

        <button
          aria-label="Next"
          className="absolute -right-16 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60"
          onClick={goNext}
        >
          ›
        </button>

        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-stretch">
          {/* Main image */}
          <div className="w-full md:w-[65%] flex-shrink-0">
            <div className="rounded-lg overflow-hidden border border-[#111418] bg-[#0b0d10]">
              <img
                src={game.mainImage}
                alt={game.title}
                className="w-full h-[220px] md:h-[400px] object-cover block"
              />
            </div>
          </div>

          {/* Right panel */}
          <div className="w-full md:w-[35%] flex flex-col justify-between pt-3 md:pt-0">
            <div>
              <div className="text-white text-xl font-bold">{game.title}</div>
              <div className="text-gray-400 text-xs leading-snug mt-2 mb-4">{game.description}</div>

      <div className="grid grid-cols-2 gap-3 mb-4">
                {game.thumbnails.map((thumb, idx) => (
                  <img
                    key={idx}
                    src={thumb}
                    alt={`${game.title} thumb ${idx + 1}`}
        className="w-full h-16 md:h-20 object-cover rounded-sm border border-[#1b2126]"
                  />
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-3">
                {game.tags?.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-[#121416] border border-[#23262a] text-gray-300 text-xs px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
                <button className="bg-[#121416] border border-[#23262a] text-gray-300 text-xs px-2 py-1 rounded">
                  +
                </button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mt-4 gap-3">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setWishlist((w) => !w)}
                  className="flex items-center gap-2 bg-[#121416] border border-[#23262a] text-gray-300 px-3 py-1 rounded text-sm"
                >
                  <span className="text-sm">{wishlist ? "♥" : "♡"}</span>
                  <span>Wishlist</span>
                </button>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-white text-lg font-bold">{game.price}</div>
                <button className="BuyButton">
                  {game.label}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}