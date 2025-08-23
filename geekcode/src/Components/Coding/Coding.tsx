import React from 'react'

const Coding = () => {
  return (
    <>
    <div className=''>
        <div className="coding-container flex h-screen">
        <div className="w-1/2 p-4 border-r border-gray-300">
            <textarea
            className="w-full h-full p-2 border rounded"
            placeholder="Type your code here..."
            ></textarea>
        </div>
        <div className="w-1/2 p-4">
            <pre className="h-full bg-gray-100 p-2 rounded">Output will be displayed here...</pre>
        </div>
        </div>
        </div>
    </>
  )
}

export default Coding
