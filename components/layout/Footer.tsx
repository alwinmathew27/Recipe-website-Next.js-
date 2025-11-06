// const Footer = () => {
//   return (
//     <div>
//       <div>
//         <h2>this is a footer page </h2>
//       </div>
//       <ul>
//         <li>about</li>
//         <li>foodis</li>
//         <li>favorates</li>
//         <li>our vision</li>
//         <li>time management</li>
//       </ul>
//     </div>
//   );
// };
// export default Footer;
import Link from "next/link";
import Image from "next/image";
import FooterText from "../general/FooterText";


export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Column 1: Pinch of Yum */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4 uppercase tracking-wide">
              ALL RECIPE
            </h3>
            <nav className="flex flex-col space-y-3">
              <FooterText
                href="/about"
                text="About text"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              />
              
              <Link
                href="/about"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                About
              </Link>
              <Link
                href="/blog"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/recipe-index"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Recipe Index
              </Link>
              <Link
                href="/blogging-resources"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Blogging Resources
              </Link>
              <Link
                href="/income-reports"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Income Reports
              </Link>
              <Link
                href="/sponsored-content"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Sponsored Content
              </Link>
              <Link
                href="/media-mentions"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Media Mentions
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Column 2: Food & Recipes */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4 uppercase tracking-wide">
              Food & Recipes
            </h3>
            <nav className="flex flex-col space-y-3">
              <Link
                href="/sugar-free-january"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Sugar Free January
              </Link>
              <Link
                href="/freezer-meals-101"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Freezer Meals 101
              </Link>
              <Link
                href="/quick-and-easy-recipes"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Quick and Easy Recipes
              </Link>
              <Link
                href="/instant-pot-recipes"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Instant Pot Recipes
              </Link>
              <Link
                href="/pasta-recipes"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Pasta Recipes
              </Link>
              <Link
                href="/vegan-recipes"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Vegan Recipes
              </Link>
              <Link
                href="/soup-recipes"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Soup Recipes
              </Link>
              <Link
                href="/taco-recipes"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Taco Recipes
              </Link>
              <Link
                href="/meal-prep-recipes"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Meal Prep Recipes
              </Link>
            </nav>
          </div>

          {/* Column 3: Newsletter Signup */}
          <div>
            <div className="bg-gradient-to-r from-[#D54215]  to-red-600 rounded-lg p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">
                <span className="italic">signup</span> FOR EMAIL UPDATES
              </h3>
              <p className="text-purple-100 italic mb-4 text-sm">
                Get a free Cookbook with our top 25 recipes.
              </p>
              <form className="space-y-3">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 rounded bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <button
                  type="submit"
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded uppercase tracking-wider transition-colors"
                >
                  GO
                </button>
              </form>
            </div>

            {/* Other Brands */}
            <div className="mt-8">
              <h3 className="text-sm font-bold text-gray-800 mb-4 uppercase tracking-wide text-center">
                Our Other Brands
              </h3>
              <div className="flex items-center justify-center gap-6">
                <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center">
                  <span className="text-white text-xs font-bold text-center leading-tight">
                    kerala
                    <br />
                    tasty
                    <br />
                    recipes
                  </span>
                </div>
                <div className="text-gray-800">
                  <span className="font-bold text-2xl">DailyMeals</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="mt-12 flex justify-center gap-4">
          {/* Instagram */}
          <a
            href="#"
            className="w-12 h-12 rounded-full bg-[#D54215]  hover:bg-red-700 flex items-center justify-center transition-colors"
            aria-label="Instagram"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>

          {/* Pinterest */}
          <a
            href="#"
            className="w-12 h-12 rounded-full bg-[#D54215]  hover:bg-red-700 flex items-center justify-center transition-colors"
            aria-label="Pinterest"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
            </svg>
          </a>

          {/* TikTok */}
          <a
            href="#"
            className="w-12 h-12 rounded-full bg-[#D54215]  hover:bg-red-700 flex items-center justify-center transition-colors"
            aria-label="TikTok"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
            </svg>
          </a>

          {/* Facebook */}
          <a
            href="#"
            className="w-12 h-12 rounded-full bg-[#D54215]  hover:bg-red-700 flex items-center justify-center transition-colors"
            aria-label="Facebook"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>

          {/* X (Twitter) */}
          <a
            href="#"
            className="w-12 h-12 rounded-full bg-[#D54215]  hover:bg-red-700 flex items-center justify-center transition-colors"
            aria-label="X"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>

          {/* YouTube */}
          <a
            href="#"
            className="w-12 h-12 rounded-full bg-[#D54215]  hover:bg-red-700 flex items-center justify-center transition-colors"
            aria-label="YouTube"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
        </div>

        {/* Logo and Copyright */}
        <div className="mt-12 text-center">
          <div className="mb-4">
            <h2 className="text-4xl font-serif text-gray-800">
              allRecipe <span className="italic font-light">of</span> world
            </h2>
          </div>
          <p className="text-gray-600 text-sm mb-1">
            © 2025 allRecipe. All Rights Reserved.
          </p>
          <p className="text-gray-600 text-sm">A Raptive Partner Site.</p>
        </div>

        {/* Footer Links */}
        <div className="mt-8 flex justify-center gap-6 text-sm">
          <Link
            href="/privacy-policy"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Terms
          </Link>
        </div>
        {/* Privacy Notice */}
        <div className="mt-8 text-center text-xs text-gray-500 max-w-2xl mx-auto space-y-2">
          <p>
            Information from your device can be used to personalize your ad
            experience.
          </p>
          <button className="text-gray-600 hover:text-gray-900 underline transition-colors">
            Do not sell or share my personal information.
          </button>
        </div>
      </div>
    </footer>
  );
}