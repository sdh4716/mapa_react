'use client'

import React from 'react'
import { ArrowsPointingOutIcon, ArrowsPointingInIcon } from '@heroicons/react/24/solid'

export default function Slot({ 
    slotName, 
    status, 
    onMerge, 
    onSplit, 
    isSplit, 
    direction 
}) {
    return (
        <div 
            className={`relative p-4 bg-gray-100 border rounded-lg shadow-md mb-2 transition-all ${
                isSplit ? (direction === 'horizontal' ? 'w-1/2' : 'h-1/2') : 'w-full h-full'
            }`}
        >
            <p className="text-center text-sm font-semibold">{slotName}</p>
            <p className="text-center text-xs text-gray-500">{status}</p>

            <div className="absolute top-2 right-2 flex space-x-1">
                {onMerge && (
                    <button onClick={onMerge} className="text-xs text-blue-500">
                        <ArrowsPointingInIcon className="w-4 h-4" />
                    </button>
                )}
                {onSplit && (
                    <button onClick={() => onSplit('horizontal')} className="text-xs text-red-500">
                        H
                    </button>
                )}
                {onSplit && (
                    <button onClick={() => onSplit('vertical')} className="text-xs text-red-500">
                        V
                    </button>
                )}
            </div>
        </div>
    )
}
