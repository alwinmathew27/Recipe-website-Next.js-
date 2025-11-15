// "use client"
// import React, { useState, useEffect } from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// import ShimmerCard from '@/components/general/Shimmer'
// import useOnlineStatus from '@/hooks/useOnlineStatus'

// const FoodRecipe = () => {
//     const [fetchdata, setFetchdata] = useState([])
//     const [filtereddata, setFiltereddata] = useState([])
//     const [searchText, setSearchText] = useState("")
//     useEffect(() => {
//         fetch("https://dummyjson.com/recipes")
//             .then((res) => res.json())
//             .then((data) => {
//                 setFiltereddata(data.recipes)
//                 setFetchdata(data.recipes)
//             })
//     }, [])
//     const Topratedrecipes = () => {
//         const filteredrecipes = fetchdata.filter((res) => res?.rating > 4.8);
//         setFiltereddata(filteredrecipes)
//     }
//     const handleSearch = () => {
//         const searchResult = fetchdata.filter((res) => res?.name?.toLowerCase().includes(searchText.toLowerCase()));
//         setFiltereddata(searchResult)
//     }
//     const handleBackToSearch = () => {
//         setFiltereddata(fetchdata);
//         setSearchText("");
//     }

//     const onlineStatus = useOnlineStatus();
//     if (onlineStatus === false)
//         return<h2 className='text-4xl text-center mt-10'>
//             You are offline. Look like no internet connection.. !
//         </h2>
    

//     if (fetchdata.length === 0) {
//     return (
//             <div className="grid grid-cols-4 gap-6 p-4">
//             {[...Array(12)].map((_, index) => (
//                 <ShimmerCard key={index} />
//             ))}
//             </div>
//         );
//     }

//      if (filtereddata.length === 0) {
//         return (
//             <div className="h-[200px] w-full flex flex-col justify-start items-start p-4">
//                 <button
//                     onClick={handleBackToSearch}
//                     className="p-2 border border-gray-900 bg-amber-100 hover:bg-gray-300 cursor-pointer"
//                 >
//                     Click Back to Search
//                 </button>
//                 <div className="flex-grow flex items-center justify-center w-full ">
//                     <h2 className="text-4xl">No item found</h2>
//                 </div>
//             </div>
//         );
//      }




//   return (
//       <div>
//           <section className='flex items-center filter-section justify-evenly'>
//               <div>
//                   <input className='border border-gray-500 p-2 m-2' type="text" value={searchText}
//                       onChange={(e) => setSearchText(e.target.value)}
//                   placeholder='Search Recipes'/>
//                   <button onClick={handleSearch}>search</button>
//               </div>
//               <div>
//                   <button className='px-4 bg-orange-600 cursor-pointer font-bold border border-gray-900' onClick={Topratedrecipes}>
//                       Top Rated Recipes
//                   </button>
//               </div>
//           </section>
//           <div className='grid grid-cols-4 mx-4 flex-wrap gap-6'>
//               {filtereddata.map((res) => (
//                   <div className='flex-wrap' key={res.id}>
//                       <div className='p-2' >
//                         <img  src={res.image} alt={res.name} />
//                       </div>
//                       <h2>{res.name}</h2>
//                        <p>
//                         🍴 {res.mealType.join(", ")} | ⏰ {res.prepTimeMinutes} mins
//                         </p>
//                         <p>
//                         <strong>Rating: </strong> ⭐ {res.rating} ({res.reviewCount}{" "}
//                         reviews)
//                         </p>
//                   </div>
//               ))}
//           </div>
//     </div>
//   )
// }
// export default FoodRecipe

"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import ShimmerCard from '@/components/general/Shimmer'
import useOnlineStatus from '@/hooks/useOnlineStatus'
import { useSearchParams } from "next/navigation";

const FoodRecipe = () => {
    const [fetchdata, setFetchdata] = useState([])
    const [filtereddata, setFiltereddata] = useState([])
    const [searchText, setSearchText] = useState("")
    const searchParams = useSearchParams();
    const searchQuery = searchParams.get("search") || "";

    useEffect(() => {
        fetch("https://dummyjson.com/recipes", {
             next: { revalidate: 300 }, // cache for 1 minute
                })
            .then((res) => res.json())
            .then((data) => {
                setFiltereddata(data.recipes)
                setFetchdata(data.recipes)
              if (searchQuery) {
          const searchResult = data.recipes.filter((res) =>
            res?.name?.toLowerCase().includes(searchQuery.toLowerCase())
          );
          setFiltereddata(searchResult);
        } else {
          setFiltereddata(data.recipes);
        }
      });
  }, [searchQuery]);
    
    
    const Topratedrecipes = () => {
        const filteredrecipes = fetchdata.filter((res) => res?.rating > 4.8);
        setFiltereddata(filteredrecipes)
    }
    
    const handleSearch = () => {
        const searchResult = fetchdata.filter((res) => 
            res?.name?.toLowerCase().includes(searchText.toLowerCase())
        );
        setFiltereddata(searchResult)
    }
    
    const handleBackToSearch = () => {
        setFiltereddata(fetchdata);
        setSearchText("");
    }

    const onlineStatus = useOnlineStatus();
    
    if (onlineStatus === false) {
        return (
            <h2 className='text-4xl text-center mt-10'>
                You are offline. Look like no internet connection.. !
            </h2>
        )
    }

    if (fetchdata.length === 0) {
        return (
            <div className="grid grid-cols-4 gap-6 p-4">
                {[...Array(12)].map((_, index) => (
                    <ShimmerCard key={index} />
                ))}
            </div>
        );
    }

    if (filtereddata.length === 0) {
        return (
            <div className="h-[200px] w-full flex flex-col justify-start items-start p-4">
                <button
                    onClick={handleBackToSearch}
                    className="p-2 border border-gray-900 bg-amber-100 hover:bg-gray-300 cursor-pointer"
                >
                    Click Back to Search
                </button>
                <div className="flex-grow flex items-center justify-center w-full">
                    <h2 className="text-4xl">No item found</h2>
                </div>
            </div>
        );
    }

    return (
        <div>
            <section className='flex items-center filter-section justify-evenly flex-wrap py-4'>
                <div className='sm:block hidden'>
                    <input 
                        className='border border-gray-500 p-2 m-2 rounded' 
                        type="text" 
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        placeholder='Search Recipes'
                    />
                    <button 
                        onClick={handleSearch}
                        className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'
                    >
                        Search
                    </button>
                </div>
                <div className='sm:block hidden'>
                    <button 
                        className='px-4 py-2 bg-orange-600 text-white cursor-pointer font-bold border border-gray-900 rounded hover:bg-orange-700' 
                        onClick={Topratedrecipes}
                    >
                        Top Rated Recipes
                    </button>
                </div>
            </section>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-4 gap-6 pb-8'>
                {filtereddata.map((res) => (
                    <Link 
                        href={`/foods/${res.id}`} 
                        key={res.id}
                        className='block'
                    >
                        <div className='border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 bg-white'>
                            <div className='relative h-48 w-full'>
                                <img 
                                    src={res.image} 
                                    alt={res.name}
                                    className='w-full h-full object-cover'
                                />
                            </div>
                            <div className='p-4'>
                                <h2 className='font-bold text-lg mb-2 text-gray-800 line-clamp-2'>
                                    {res.name}
                                </h2>
                                <p className='text-sm text-gray-600 mb-2'>
                                    🍴 {res.mealType.join(", ")} | ⏰ {res.prepTimeMinutes} mins
                                </p>
                                <p className='text-sm text-gray-700'>
                                    <strong>Rating: </strong> ⭐ {res.rating} ({res.reviewCount} reviews)
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
export default FoodRecipe