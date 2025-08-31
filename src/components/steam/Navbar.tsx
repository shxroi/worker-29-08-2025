import Image from "next/image";

export default function Navbar() {
  
  return (
    <nav className="w-full bg-[#171a21] flex items-center p-5 md:px-4 text-white shadow-md">
      {/* Left: Logo and menu */}
      <div className="flex items-center gap-4 flex-1">
        <Image
          src="/header_logo.png"
          alt="Steam logo"
          width={120}
          height={40}
          priority
          className="h-8 w-auto"
        />

        {/* primary menu hidden on small screens */}
        <div className="hidden md:flex items-center gap-6">
          <span className="text-blue-400 font-bold tracking-wide text-sm cursor-pointer">STORE</span>
          <span className="hover:text-blue-400 cursor-pointer text-sm">COMMUNITY</span>
          <span className="hover:text-blue-400 cursor-pointer text-sm">PROFILE</span>
          <span className="hover:text-blue-400 cursor-pointer text-sm">LIBRARY</span>
          <span className="hover:text-blue-400 cursor-pointer text-sm">DOWNLOADS</span>
        </div>

        {/* compact menu button for small screens */}
        <button className="md:hidden ml-40 p-2 rounded bg-transparent hover:bg-white/5" aria-label="Open menu">
          <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="1" width="20" height="2" rx="1" fill="#cbd5e1"/><rect y="6" width="20" height="2" rx="1" fill="#cbd5e1"/><rect y="11" width="20" height="2" rx="1" fill="#cbd5e1"/></svg>
        </button>
      </div>

      {/* Right: Icons and profile */}
      <div className="flex items-center gap-3">
        <div className="hidden sm:flex gap-2">
          <span className="bg-[#222] rounded px-2 py-1 flex items-center"><i className="lucide lucide-users text-gray-400 text-lg" /></span>
          <span className="bg-[#222] rounded px-2 py-1 flex items-center"><i className="lucide lucide-bell text-gray-400 text-lg" /></span>
        </div>
        <div className="flex items-center bg-[#222] rounded px-2 py-1 ml-2">
          <Image
            src="/header_logo.png"
            alt="Profile"
            width={24}
            height={24}
            className="rounded-full mr-2"
          />
          <span className="font-semibold text-sm hidden sm:inline">User</span>
          <span className="ml-1 text-xs text-gray-300 hidden sm:inline">$99.99</span>
        </div>
      </div>
    </nav>
  );
}

