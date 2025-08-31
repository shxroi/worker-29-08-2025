import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/steam/Navbar";
import NavbarSearch from "@/components/steam/NavSearch";
import FeaturedCarousel from "@/components/steam/FeaturedCarousel";
import Footer from "@/components/steam/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <NavbarSearch />
      <div className="relative w-full h-[250px] sm:h-[200px] md:h-[200px] lg:h-[400px]">
        <Image
          className="object-cover"
          src="/page_bg.jpg"
          alt="Page Background"
          fill
          priority
        />
      </div>
      <FeaturedCarousel />
      <Footer />
    </>
  );
}