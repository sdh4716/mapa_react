'use client'

import React from 'react'

export default function MergeControl({ floorNumber, onMerge, onSplit }) {
    return (
        <div className="flex space-x-2 mb-4">
            <button
                onClick={() => onMerge(floorNumber)}
                className="px-3 py-1 bg-blue-500 text-white rounded"
            >
                병합
            </button>
            <button
                onClick={() => onSplit(floorNumber)}
                className="px-3 py-1 bg-red-500 text-white rounded"
            >
                분할
            </button>
        </div>
    )
}
