'use client'

import React, { useState } from 'react'
import { MagnifyingGlassIcon, ExclamationCircleIcon } from '@heroicons/react/24/solid'

const mockHuntingSpots = [
    { id: 1, name: '엘리니아 숲', icon: 'https://maplestory.io/api/GMS/62/mob/100100/render/stand' },
    { id: 2, name: '페리온 폐허', icon: 'https://maplestory.io/api/GMS/62/mob/100101/render/stand' },
    { id: 3, name: '리프레의 숲', icon: 'https://maplestory.io/api/GMS/62/mob/100102/render/stand' },
    { id: 4, name: '루디브리엄 시계탑', icon: 'https://maplestory.io/api/GMS/62/mob/100103/render/stand' },
    { id: 5, name: '헤네시스 북쪽 초원', icon: 'https://maplestory.io/api/GMS/62/mob/100104/render/stand' },
    { id: 6, name: '마가티아 사막', icon: 'https://maplestory.io/api/GMS/62/mob/100105/render/stand' },
]

export default function PartyMaker() {
    const [searchTerm, setSearchTerm] = useState('')

    const filteredHuntingSpots = mockHuntingSpots.filter(spot =>
        spot.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const handleSelectHuntingSpot = (spot) => {
        console.log('Selected Hunting Spot:', spot)
        // 다음 단계로 넘어가는 로직을 여기에 추가
    }

    return (
        <main className="flex flex-col items-center py-16 bg-gray-50 dark:bg-gray-900 transition-colors min-h-screen">
            <div className="w-full max-w-4xl p-4">
                
                <div className="flex items-center justify-center mb-8 ">
                    <img 
                        src="https://maplestory.io/api/GMS/62/mob/3000005/render/stand" 
                        alt="Maple Mob" 
                        className="w-24 h-24 object-contain"
                    />
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white ">
                        파티 생성
                    </h1>
                </div>

                {/* 검색 영역 */}
                <div className="relative mb-8">
                    <div className="flex items-center space-x-3">
                        <input
                            type="text"
                            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-700 dark:text-white"
                            placeholder="사냥터 이름을 입력하세요"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                {/* 검색 결과 영역 */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md min-h-[300px] transition-colors">
                    {searchTerm && filteredHuntingSpots.length > 0 ? (
                        <ul className="space-y-4">
                            {filteredHuntingSpots.map((spot) => (
                                <li
                                    key={spot.id}
                                    className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition cursor-pointer"
                                    onClick={() => handleSelectHuntingSpot(spot)}
                                >
                                    <img
                                        src={spot.icon}
                                        alt={spot.name}
                                        className="w-10 h-10 mr-4 rounded-md"
                                    />
                                    <span className="text-lg font-medium text-gray-800 dark:text-white">
                                        {spot.name}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className="flex flex-col items-center justify-center h-full text-gray-500 dark:text-gray-400">
                            <ExclamationCircleIcon className="h-12 w-12 mb-4" />
                            <p className="text-lg font-semibold">검색 결과가 없습니다.</p>
                        </div>
                    )}
                </div>

            </div>
        </main>
    )
}
