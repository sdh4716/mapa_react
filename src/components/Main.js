// src/components/Main.js
import React, { useState, useRef } from 'react'
import { MagnifyingGlassIcon, FireIcon, ClockIcon, StarIcon } from '@heroicons/react/24/solid'

export default function Main() {
    const [searchTerm, setSearchTerm] = useState('')
    const [isSearchFocused, setIsSearchFocused] = useState(false)
    const searchInputRef = useRef(null)

    const handleSearch = () => {
        console.log('Search for:', searchTerm)
        setIsSearchFocused(false)
    }

    const handleClearSearch = () => {
        setSearchTerm('')
        searchInputRef.current?.focus()
    }

    const handleFocus = () => setIsSearchFocused(true)
    const handleBlur = () => setTimeout(() => setIsSearchFocused(false), 200)

    // 목업 데이터
    const recentSearches = ['루디브리엄 시계탑', '헤네시스 북쪽 초원', '마가티아 사막']
    const favoriteSpots = ['아쿠아리움 해저', '리프레의 숲']

    // 인기 사냥터 목업 데이터
    const popularHuntingSpots = [
        { name: '엘리니아 숲', description: '저레벨 캐릭터를 위한 최고의 사냥터' },
        { name: '페리온 폐허', description: '빠른 경험치 획득이 가능한 인기 장소' },
        { name: '리프레의 숲', description: '중간 레벨 유저들이 선호하는 사냥터' },
        { name: '루디브리엄 시계탑', description: '파티 사냥에 적합한 맵 구조' },
        { name: '헤네시스 북쪽 초원', description: '편안하게 몬스터를 사냥할 수 있는 곳' },
        { name: '마가티아 사막', description: '드롭 아이템이 좋은 지역' },
        { name: '아쿠아리움 해저', description: '고레벨 사냥터로 인기가 많음' },
    ]

    return (
        <div className="flex flex-col min-h-screen bg-gray-50 py-10">
            <main className="flex flex-grow flex-col items-center justify-center">
                <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-2xl">
                    <h1 className="text-3xl font-extrabold text-center mb-8 text-gray-900">
                        메이플랜드 파티구인 시스템
                    </h1>

                    <div className="mb-8 bg-gray-200 rounded-lg h-20 flex items-center justify-center">
                        <span className="text-gray-600">[광고] 와이드형 광고 배너 (헤더 아래)</span>
                    </div>

                    <div className="relative mb-8">
                        <div className="flex items-center space-x-3">
                            <input
                                ref={searchInputRef}
                                type="text"
                                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                                placeholder="사냥터 이름을 입력하세요"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                            />
                            {/* <button
                                className="flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-4 rounded-lg shadow-md hover:from-orange-600 hover:to-red-600 transition"
                                onClick={handleSearch}
                            >
                                <MagnifyingGlassIcon className="h-6 w-6" />
                            </button> */}
                        </div>

                        {isSearchFocused && (
                            <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10 p-4">
                                <div className="mb-4">
                                    <h3 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                                        <ClockIcon className="h-4 w-4 mr-1 text-gray-500" />
                                        최근 검색어
                                    </h3>
                                    <ul className="text-sm text-gray-600">
                                        {recentSearches.map((item, index) => (
                                            <li key={index} className="hover:bg-gray-100 p-2 rounded cursor-pointer">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                                        <StarIcon className="h-4 w-4 mr-1 text-yellow-500" />
                                        즐겨찾기 사냥터
                                    </h3>
                                    <ul className="text-sm text-gray-600">
                                        {favoriteSpots.map((item, index) => (
                                            <li key={index} className="hover:bg-gray-100 p-2 rounded cursor-pointer">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                        <FireIcon className="h-6 w-6 text-red-500 mr-2" />
                        인기 사냥터
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {popularHuntingSpots.map((spot, index) => (
                            <div
                                key={index}
                                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
                            >
                                <h3 className="text-lg font-semibold text-gray-900">{spot.name}</h3>
                                <p className="text-sm text-gray-500 mt-2">{spot.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}
