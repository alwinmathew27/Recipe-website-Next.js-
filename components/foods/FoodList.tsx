// "use client"
// import React, { useState, useEffect } from 'react'
// import Image from 'next/image'
// const FoodList = () => {
//     const [fetchdata, setFetchdata] = useState([])
//     useEffect(() => {
//         fetch("https://dummyjson.com/recipes")
//             .then((res) => res.json())
//         .then((data)=> setFetchdata(data.recipes))
//     }, [])
//     if (fetchdata === 0) {
//         return <div> LOADING</div>
//     }
//   return (
//       <div>
//           <div className='grid grid-cols-4 mx-4 flex-wrap gap-6'>
//               {fetchdata.map((res) => (
//                   <div className='flex-wrap' key={res.id}>
//                       <div className='p-2' >
//                         <img  src={res.image} alt="" />
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

// export default FoodList