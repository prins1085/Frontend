import React from 'react'

const GridBoxLayout = () => {
    return (
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 gap-1.5 overflow-hidden">
            {Array.from({ length: 144 }).map((_, i) => (
                <div key={i} className="bg-gray-800 transition-colors duration-300 hover:bg-gray-700" />
            ))}
        </div>
    )
}

export default GridBoxLayout
