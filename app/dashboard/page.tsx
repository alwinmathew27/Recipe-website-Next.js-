// import React from 'react'

// const Dashboard = () => {
//   return (
//     <div>
//       <h2 className='bg-green-500 text-4xl'>
//         this is a dashboard page
//       </h2>
//     </div>
//   )
// }

// export default Dashboard


"use client";

import { useSession, signOut } from "next-auth/react";

const DashboardPage = () => {
  const { data: session } = useSession();

  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow-md text-center">
        <h2 className="text-3xl font-bold text-green-600 mb-4">
          Welcome to your Dashboard
        </h2>

        {session ? (
          <>
            <p className="mb-4 text-gray-700">
              Logged in as <strong>{session.user?.name}</strong>
            </p>
            <button
              onClick={() => signOut()}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            >
              Logout
            </button>
          </>
        ) : (
          <p>You are not logged in.</p>
        )}
      </div>
    </section>
  );
};

export default DashboardPage;
