// "use client"
// import Link from "next/link";
// import Image from "next/image";
// import CommonBtn from "../general/CommonBtn";
// import useOnlineStatus from "@/hooks/useOnlineStatus";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import { useSession, signIn, signOut } from "next-auth/react";
// const Header = () => {
//     const [searchText, setSearchText] = useState("");
//     const { data: session, status } = useSession();
//     const router = useRouter();

//     const onlineStatus = useOnlineStatus();
//     const handleSearch = () => {
//     if (searchText.trim() === "") return;
//     // Navigate to /foods?search=keyword
//     router.push(`/foods?search=${encodeURIComponent(searchText)}`);
//   };
//     return (
//         <>
//             <section className="pt-6 top-0 left-0 w-full bg-white shadow-md z-50  h-32">
//                 <div className="flex items-center justify-between text-center">
//                     <div><h1>
//                         <Link className="cursor-pointer " href="/">
//                             <Image
//                                 src="/Logo/svgexport-41.svg"   // ✅ image path (starts with /)
//                                 alt="Website Logo"
//                                 className="p-2 "
//                                 width={280}                  // ✅ must include width & height
//                                 height={80}
//                                 priority                                                  // ✅ loads fast
//                             />
//                         </Link>
//                     </h1>
//                     </div>
//                     <div className="items-center  flex">
//                         <input type="text" value={searchText} onChange={(e)=> setSearchText(e.target.value)} placeholder="Find a recipe or ingredient"
//                             className="  border border-gray-500 placeholder:text-xs p-2 w-[400px] rounded-l-md focus:outline-none rounded-r-0 border-r-0" />
//                         <button onClick={handleSearch} className="bg-[#D54215] border border-gray-500 p-2 rounded-r-md border-l-0 cursor-pointer ">
//                                <Image
//                                     src="/images/icons/searchicon.svg"
//                                     alt="Search"
//                                     width={24}
//                                     height={24}
//                                     />
//                         </button>
//                     </div>
//                     <div className="flex  divide-x divide-gray-200">
//                         {/* <button className="text-center items-center flex"><Image src="/images/icons/svgUserImage.svg" alt="UserLogin"
//                         width={20} height={20}
//                         />Login</button> */}
//                         <button className="flex items-center text-sm gap-1 px-2  text-black">
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     viewBox="0 0 24 24"
//                                     width="24"
//                                     height="24"
//                                     className="fill-[#D54215]"  // <-- fixed orange color
//                                 >
//                                     <path
//                                     fillRule="evenodd"
//                                     clipRule="evenodd"
//                                     d="M2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z"
//                                     />
//                                 </svg>
//                                 Log In
//                                 </button>


//                         <CommonBtn className="text-sm font-normal" text="News Letters"/>
//                         <CommonBtn className="text-sm font-normal" text="Steepstakes"/>
//                         <CommonBtn className="text-sm font-normal"text="My Recipes favocon"/>
//                     </div>
//                 </div>
//                 <div className="flex justify-between items-center">
//                     <nav className="flex gap-4 text-[14px] font-medium  text-center">
//                         <Link href="/">Home</Link>
//                         <Link href="/about">About Us</Link>
//                         <Link href="/dashboard">Dashboard</Link>
//                         <Link href="/Recipes">Occations</Link>
//                         <Link href="/Recipes">Cuisines</Link>
//                         <Link href="/Recipes">Kitchen Tips</Link>
//                         <Link href="/Recipes">News</Link>
//                         <Link href="/Recipes">Features</Link>
//                     </nav>
//                     <div>
//                         <ul>
//                             <li>Online Status: {onlineStatus ? "✅": "🔴"}</li>
//                         </ul>
//                     </div>

//                     <div className="user text-center">
//                         <CommonBtn text="Get Magazine"/>
//                     </div>

//                 </div>
//             </section>
//         </>
//     );
// }
// export default Header;


// "use client";
// import Link from "next/link";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import { useSession, signIn, signOut } from "next-auth/react";
// import CommonBtn from "../general/CommonBtn";
// import useOnlineStatus from "@/hooks/useOnlineStatus";

// const Header = () => {
//   const [searchText, setSearchText] = useState("");
//   const { data: session, status } = useSession();
//   const router = useRouter();
//   const onlineStatus = useOnlineStatus();

//   const handleSearch = () => {
//     if (searchText.trim() === "") return;
//     router.push(`/foods?search=${encodeURIComponent(searchText)}`);
//   };

//   return (
//     <header className="pt-6 top-0 left-0 w-full bg-white shadow-md z-50 h-32">
//       <div className="flex items-center justify-between text-center px-4">
//         {/* Logo */}
//         <Link href="/" className="cursor-pointer">
//           <Image
//             src="/Logo/svgexport-41.svg"
//             alt="Website Logo"
//             className="p-2"
//             width={180}
//             height={80}
//             priority
//           />
//         </Link>

//         {/* Search Bar */}
//         <div className="flex items-center">
//           <input
//             type="text"
//             value={searchText}
//             onChange={(e) => setSearchText(e.target.value)}
//             placeholder="Find a recipe or ingredient"
//             className="border border-gray-400 placeholder:text-xs p-2 w-[300px] rounded-l-md focus:outline-none"
//           />
//           <button
//             onClick={handleSearch}
//             className="bg-[#D54215] border border-gray-400 p-2 rounded-r-md cursor-pointer"
//           >
//             <Image
//               src="/images/icons/searchicon.svg"
//               alt="Search"
//               width={24}
//               height={24}
//             />
//           </button>
//         </div>

//         {/* Right Side - Auth + Buttons */}
//         <div className="flex items-center gap-4">
//           {/* Authentication Section */}
//           {status === "loading" ? (
//             <p>Loading...</p>
//           ) : session ? (
//             <div className="flex items-center gap-2">
//               <Image
//                 src={session.user?.image || "/images/icons/svgUserImage.svg"}
//                 alt="User"
//                 width={28}
//                 height={28}
//                 className="rounded-full"
//               />
//               <span className="text-sm font-medium">
//                 {session.user?.name || "User"}
//               </span>
//               <button
//                 onClick={() => signOut()}
//                 className="text-red-500 text-sm underline cursor-pointer"
//               >
//                 Logout
//               </button>
//             </div>
//           ) : (
//             <button
//               onClick={() => signIn("github")}
//               className="flex items-center text-sm gap-1 px-2 text-black cursor-pointer"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 width="20"
//                 height="20"
//                 className="fill-[#D54215]"
//               >
//                 <path
//                   fillRule="evenodd"
//                   clipRule="evenodd"
//                   d="M2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z"
//                 />
//               </svg>
//               Login
//             </button>
//           )}

//           {/* Other Buttons */}
//           <CommonBtn text="News Letters" />
//           <CommonBtn text="Steepstakes" />
//           <CommonBtn text="My Recipes" />
//         </div>
//       </div>

//       {/* Bottom Navigation */}
//       <div className="flex justify-between items-center px-4 mt-2">
//         <nav className="flex gap-4 text-[14px] font-medium">
//           <Link href="/">Home</Link>
//           <Link href="/about">About Us</Link>
//           <Link href="/dashboard">Dashboard</Link>
//           <Link href="/Recipes">Occasions</Link>
//           <Link href="/Recipes">Cuisines</Link>
//           <Link href="/Recipes">Kitchen Tips</Link>
//           <Link href="/Recipes">News</Link>
//           <Link href="/Recipes">Features</Link>
//         </nav>
//         <div>
//           Online Status: {onlineStatus ? "✅" : "🔴"}
//         </div>
//         <CommonBtn text="Get Magazine" />
//       </div>
//     </header>
//   );
// };
// export default Header;


"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import CommonBtn from "../general/CommonBtn";
import useOnlineStatus from "@/hooks/useOnlineStatus";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();
  const onlineStatus = useOnlineStatus();

  const handleSearch = () => {
    if (searchText.trim() === "") return;
    router.push(`/foods?search=${encodeURIComponent(searchText)}`);
    setMobileSearchOpen(false);
  };

  return (
    <header className="sticky top-0 left-0 w-full bg-white shadow-md z-50">
      {/* Mobile Header */}
      <div className="lg:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
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
              width={120}
              height={50}
              priority
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
              width={24}
              height={24}
            />
          </button>
        </div>

        {/* Mobile Search Bar */}
        {mobileSearchOpen && (
          <div className="px-4 pb-3">
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
          <div className="border-t border-gray-200 px-4 py-3">
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
      <div className="hidden lg:block pt-6 pb-2">
        <div className="flex items-center justify-between px-4 xl:px-8">
          {/* Logo */}
          <Link href="/" className="cursor-pointer flex-shrink-0">
            <Image
              src="/Logo/svgexport-41.svg"
              alt="Website Logo"
              width={180}
              height={80}
              priority
            />
          </Link>

          {/* Search Bar */}
          <div className="flex items-center mx-4">
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Find a recipe or ingredient"
              className="border border-gray-400 placeholder:text-xs p-2 w-[250px] xl:w-[300px] rounded-l-md focus:outline-none"
            />
            <button
              onClick={handleSearch}
              className="bg-[#D54215] border border-gray-400 p-2 rounded-r-md cursor-pointer"
            >
              <Image
                src="/images/icons/searchicon.svg"
                alt="Search"
                width={24}
                height={24}
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
                  width={28}
                  height={28}
                  className="rounded-full"
                />
                <span className="text-sm font-medium hidden xl:inline">
                  {session.user?.name || "User"}
                </span>
                <button
                  onClick={() => signOut()}
                  className="text-red-500 text-sm underline cursor-pointer"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => signIn("github")}
                className="flex items-center text-sm gap-1 px-2 text-black cursor-pointer"
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
                <span className="hidden xl:inline">Login</span>
              </button>
            )}

            {/* Other Buttons - Hidden on smaller desktop screens */}
            <div className="hidden xl:flex items-center gap-2">
              <CommonBtn text="News Letters" />
              <CommonBtn text="Steepstakes" />
              <CommonBtn text="My Recipes" />
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="flex justify-between items-center px-4 xl:px-8 mt-4">
          <nav className="flex gap-3 xl:gap-4 text-[14px] font-medium">
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
    </header>
  );
};

export default Header;