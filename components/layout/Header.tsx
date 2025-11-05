"use client"
import Link from "next/link";
import Image from "next/image";
import CommonBtn from "../general/CommonBtn";
import useOnlineStatus from "@/hooks/useOnlineStatus";
import { useRouter } from "next/navigation";
import { useState } from "react";
const Header = () => {
    const [searchText, setSearchText] = useState("");
    const router = useRouter();

    const onlineStatus = useOnlineStatus();
    const handleSearch = () => {
    if (searchText.trim() === "") return;
    // Navigate to /foods?search=keyword
    router.push(`/foods?search=${encodeURIComponent(searchText)}`);
  };
    return (
        <>
            <section className="pt-6 top-0 left-0 w-full bg-white shadow-md z-50  h-32">
                <div className="flex items-center justify-between text-center">
                    <div><h1>
                        <Link className="cursor-pointer " href="/">
                            <Image
                                src="/Logo/svgexport-41.svg"   // ✅ image path (starts with /)
                                alt="Website Logo"
                                className="p-2 "
                                width={280}                  // ✅ must include width & height
                                height={80}
                                priority                                                  // ✅ loads fast
                            />
                        </Link>
                    </h1>
                    </div>
                    <div className="items-center  flex">
                        <input type="text" value={searchText} onChange={(e)=> setSearchText(e.target.value)} placeholder="Find a recipe or ingredient"
                            className="  border border-gray-500 placeholder:text-xs p-2 w-[400px] rounded-l-md focus:outline-none rounded-r-0 border-r-0" />
                        <button onClick={handleSearch} className="bg-[#D54215] border border-gray-500 p-2 rounded-r-md border-l-0 cursor-pointer ">
                               <Image
                                    src="/images/icons/searchicon.svg" 
                                    alt="Search"
                                    width={24}
                                    height={24}
                                    />
                        </button>
                    </div>
                    <div className="flex  divide-x divide-gray-200">
                        {/* <button className="text-center items-center flex"><Image src="/images/icons/svgUserImage.svg" alt="UserLogin"
                        width={20} height={20}
                        />Login</button> */}
                        <button className="flex items-center text-sm gap-1 px-2  text-black">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    className="fill-[#D54215]"  // <-- fixed orange color
                                >
                                    <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z"
                                    />
                                </svg>
                                Log In
                                </button>


                        <CommonBtn className="text-sm font-normal" text="News Letters"/>
                        <CommonBtn className="text-sm font-normal" text="Steepstakes"/>
                        <CommonBtn className="text-sm font-normal"text="My Recipes favocon"/>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <nav className="flex gap-4 text-[14px] font-medium  text-center">
                        <Link href="/">Home</Link>
                        <Link href="/about">About Us</Link>
                        <Link href="/contact">Contact</Link>
                        <Link href="/Recipes">Occations</Link>
                        <Link href="/Recipes">Cuisines</Link>
                        <Link href="/Recipes">Kitchen Tips</Link>
                        <Link href="/Recipes">News</Link>
                        <Link href="/Recipes">Features</Link>
                    </nav>
                    <div>
                        <ul>
                            <li>Online Status: {onlineStatus ? "✅": "🔴"}</li>
                        </ul>
                    </div>

                    <div className="user text-center">
                        <CommonBtn text="Get Magazine"/>
                    </div>

                </div>
            </section>
        </>
    );
}
export default Header;