import React from 'react'
import './main.css'
const Main = () => {
  return (
   <div className="antialiased  text-white-600 p-5">
    <h1 className="text-4xl font-bold mb-6">LOOP</h1>
            <div x-show="card">
  <div className="space-y-4">

    <div>
      <label className="block text-sm font-medium mb-1" htmlFor="card-nr">Username<span className="text-red-500">*</span></label>
      <input  id="card-nr" className="text-sm text-white-800 bg-white border rounded leading-5 py-2 px-3 border-white-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full" type="text" placeholder="Enter Username..." />
    </div>

    <div className="flex space-x-4">
      <div className="flex-1">
        <label className="block text-sm font-medium mb-1" htmlFor="card-expiry">Movie Title<span className="text-red-500">*</span></label>
        <input  id="card-expiry" className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full" type="text" placeholder="What is the title of the movie?" />
      </div>

      <div className="flex-1">
        <label className="block text-sm font-medium mb-1" htmlFor="card-cvc">Rating</label>
        <input id="card-cvc" className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full" type="text" placeholder="What is the rating?" />
      </div>
    </div>
        
    <div>
      <label className="block text-sm font-medium mb-1" htmlFor="card-email">Genre</label>
      <input id="card-email" className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full" type="text" placeholder="Genre" />
    </div>
  </div>

  <div className="mt-6">
    <div className="mb-4">
      <button className="font-medium text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out w-full bg-indigo-500 hover:bg-indigo-600 text-white focus:outline-none focus-visible:ring-2">Add to LUP</button>
    </div>
    <div className="text-xs text-white-500 italic text-center">Reminder: You'll be Sacrificing 1:30:00 - 3:00:00 of your life</div>
    <div className="text-xs text-white-500 italic text-center">Twss Count, Aman: 3.5k, Betsi: 244</div>
  </div>
</div>
    </div>
      
  )
}

export default Main