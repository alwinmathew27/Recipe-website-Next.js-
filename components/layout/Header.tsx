

"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import CommonBtn from "../general/CommonBtn";
import useOnlineStatus from "@/hooks/useOnlineStatus";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = () => {
    if (searchText.trim() === "") return;
    router.push(`/foods?search=${encodeURIComponent(searchText)}`);
    setMobileSearchOpen(false);
  };

  return (
    <header className="sticky top-0 left-0 w-full bg-white shadow-md z-50 transition-all duration-300 ease-in-out">
      {/* Mobile Header */}
      <div className="lg:hidden">
        <div className={`flex items-center justify-between px-4 transition-all duration-300 ${isScrolled ? "py-2" : "py-3"
          }`}>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2"
            aria-label="Toggle menu"
          >
            <svg
              className={`transition-all duration-300 ${isScrolled ? "w-5 h-5" : "w-6 h-6"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/Logo/svgexport-41.svg"
              alt="Website Logo"
              width={isScrolled ? 90 : 120}
              height={isScrolled ? 38 : 50}
              priority
              className="transition-all duration-300"
            />
          </Link>

          {/* Mobile Search Button */}
          <button
            onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
            className="p-2"
            aria-label="Toggle search"
          >
            <Image
              src="/images/icons/searchicon.svg"
              alt="Search"
              width={isScrolled ? 20 : 24}
              height={isScrolled ? 20 : 24}
              className="transition-all duration-300"
            />
          </button>
        </div>

        {/* Mobile Search Bar */}
        {mobileSearchOpen && (
          <div className="px-4 pb-3 animate-slideDown">
            <div className="flex items-center">
              <input
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Find a recipe or ingredient"
                className="border border-gray-400 placeholder:text-xs p-2 w-full rounded-l-md focus:outline-none"
              />
              <button
                onClick={handleSearch}
                className="bg-[#D54215] border border-gray-400 p-2 rounded-r-md"
              >
                <Image
                  src="/images/icons/searchicon.svg"
                  alt="Search"
                  width={24}
                  height={24}
                />
              </button>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="border-t border-gray-200 px-4 py-3 animate-slideDown">
            {/* Auth Section */}
            <div className="mb-4 pb-3 border-b border-gray-200">
              {status === "loading" ? (
                <p className="text-sm">Loading...</p>
              ) : session ? (
                <div className="flex items-center gap-2">
                  <Image
                    src={session.user?.image || "/images/icons/svgUserImage.svg"}
                    alt="User"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium">
                      {session.user?.name || "User"}
                    </p>
                    <button
                      onClick={() => signOut()}
                      className="text-red-500 text-xs underline"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => signIn("github")}
                  className="flex items-center gap-2 text-sm px-3 py-2 bg-gray-100 rounded-md w-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    className="fill-[#D54215]"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z"
                    />
                  </svg>
                  Login
                </button>
              )}
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col gap-3 mb-4 pb-3 border-b border-gray-200">
              <Link href="/" className="text-sm font-medium py-1">Home</Link>
              <Link href="/about" className="text-sm font-medium py-1">About Us</Link>
              <Link href="/dashboard" className="text-sm font-medium py-1">Dashboard</Link>
              <Link href="/Recipes" className="text-sm font-medium py-1">Occasions</Link>
              <Link href="/Recipes" className="text-sm font-medium py-1">Cuisines</Link>
              <Link href="/Recipes" className="text-sm font-medium py-1">Kitchen Tips</Link>
              <Link href="/Recipes" className="text-sm font-medium py-1">News</Link>
              <Link href="/Recipes" className="text-sm font-medium py-1">Features</Link>
            </nav>

            {/* Action Buttons */}
            <div className="flex flex-col gap-2">
              <CommonBtn text="News Letters" />
              <CommonBtn text="Steepstakes" />
              <CommonBtn text="My Recipes" />
              <CommonBtn text="Get Magazine" />
            </div>

            {/* Online Status */}
            <div className="mt-3 text-xs text-gray-900">
              Status: {onlineStatus ? "✅ Online" : "🔴 Offline"}
            </div>
          </div>
        )}
      </div>

      {/* Desktop Header */}
      <div className={`hidden lg:block transition-all duration-300 ${isScrolled ? "pt-2 pb-1" : "pt-6 pb-2"
        }`}>
        <div className="flex items-center justify-between px-4 xl:px-8">
          {/* Logo */}
          <Link href="/" className="cursor-pointer flex-shrink-0">
            <Image
              src="/Logo/svgexport-41.svg"
              alt="Website Logo"
              width={isScrolled ? 100 : 180}
              height={isScrolled ? 44 : 80}
              priority
              className="transition-all duration-300"
            />
          </Link>

          {/* Search Bar */}
          <div className="flex items-center mx-4">
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Find a recipe or ingredient"
              className={`border border-gray-400 placeholder:text-xs w-[250px] xl:w-[300px] rounded-l-md focus:outline-none transition-all duration-300  border-r-0 ${isScrolled ? "p-1 text-xs" : "p-2"
                }`}
            />
            <button
              onClick={handleSearch}
              className={`bg-[#D54215] border border-gray-400 rounded-r-md  border-l-0 cursor-pointer transition-all duration-300 ${isScrolled ? "p-1" : "p-2"
                }`}
            >
              <Image
                src="/images/icons/searchicon.svg"
                alt="Search"
                width={isScrolled ? 18 : 24}
                height={isScrolled ? 18 : 24}
                className="transition-all duration-300 white"
              />
            </button>
          </div>

          {/* Right Side - Auth + Buttons */}
          <div className="flex items-center gap-2 xl:gap-4 flex-shrink-0">
            {/* Authentication Section */}
            {status === "loading" ? (
              <p className="text-sm">Loading...</p>
            ) : session ? (
              <div className="flex items-center gap-2">
                <Image
                  src={session.user?.image || "/images/icons/svgUserImage.svg"}
                  alt="User"
                  width={isScrolled ? 24 : 28}
                  height={isScrolled ? 24 : 28}
                  className="rounded-full transition-all duration-300"
                />
                <span className={`font-medium hidden xl:inline transition-all duration-300 ${isScrolled ? "text-xs" : "text-sm"
                  }`}>
                  {session.user?.name || "User"}
                </span>
                <button
                  onClick={() => signOut()}
                  className={`text-red-500 underline cursor-pointer transition-all duration-300 ${isScrolled ? "text-xs" : "text-sm"
                    }`}
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => signIn("github")}
                className={`flex items-center gap-1 px-2 text-black cursor-pointer transition-all duration-300 ${isScrolled ? "text-xs" : "text-sm"
                  }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={isScrolled ? "18" : "20"}
                  height={isScrolled ? "18" : "20"}
                  className="fill-[#D54215] transition-all duration-300"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z"
                  />
                </svg>
                <span className="hidden xl:inline">Login</span>
              </button>
            )}

            {/* Other Buttons - Hidden on smaller desktop screens */}
            <div className={`hidden xl:flex items-center gap-2 transition-all duration-300 ${isScrolled ? "scale-90" : "scale-100"
              }`}>
              <CommonBtn text="News Letters" />
              <CommonBtn text="Steepstakes" />
              <CommonBtn text="My Recipes" />
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className={`flex justify-between items-center px-4 xl:px-8 overflow-hidden transition-all duration-300 ${isScrolled ? "max-h-0 opacity-0 mt-0" : "max-h-20 opacity-100 mt-4"
          }`}>
          <nav className={`flex gap-3 xl:gap-4 font-medium transition-all duration-300 text-[14px]`}>
            <Link href="/" className="hover:text-[#D54215] transition-colors">Home</Link>
            <Link href="/about" className="hover:text-[#D54215] transition-colors">About Us</Link>
            <Link href="/dashboard" className="hover:text-[#D54215] transition-colors">Dashboard</Link>
            <Link href="/Recipes" className="hover:text-[#D54215] transition-colors">Occasions</Link>
            <Link href="/Recipes" className="hover:text-[#D54215] transition-colors">Cuisines</Link>
            <Link href="/Recipes" className="hover:text-[#D54215] transition-colors">Kitchen Tips</Link>
            <Link href="/Recipes" className="hover:text-[#D54215] transition-colors">News</Link>
            <Link href="/Recipes" className="hover:text-[#D54215] transition-colors">Features</Link>
          </nav>
          <div className="flex items-center gap-4">
            <div className="text-sm">
              Online status {onlineStatus ? "✅" : "🔴"}
            </div>
            <CommonBtn text="Get Magazine" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </header>
  );
};

export default Header;