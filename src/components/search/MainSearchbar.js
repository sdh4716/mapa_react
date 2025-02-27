'use client'

import React from "react"
import { useState, useRef, useEffect } from 'react'
import {
    MoonIcon,
    SunIcon,
    ClockIcon,
    StarIcon,
    UserCircleIcon,
    FolderOpenIcon,
    PlusCircleIcon,
    ExclamationCircleIcon,
    Bars3Icon,
    MagnifyingGlassIcon
    
} from '@heroicons/react/24/solid'

export default function MainSearchbar(){

     const [searchTerm, setSearchTerm] = useState('')
        const [isSearchFocused, setIsSearchFocused] = useState(false)
        const [isDarkMode, setIsDarkMode] = useState(false)
        const searchInputRef = useRef(null)
    
        const mockHuntingSpots = [
            { id: 1, name: '엘리니아 숲', icon: 'https://maplestory.io/api/GMS/62/map/Ellinia/icon' },
            { id: 2, name: '페리온 폐허', icon: 'https://maplestory.io/api/GMS/62/map/Ellinia/icon' },
            { id: 3, name: '리프레의 숲', icon: 'https://maplestory.io/api/GMS/62/map/Ellinia/icon' },
            { id: 4, name: '루디브리엄 시계탑', icon: 'https://maplestory.io/api/GMS/62/map/Ellinia/icon' },
            { id: 5, name: '헤네시스 북쪽 초원', icon: 'https://maplestory.io/api/GMS/62/map/Ellinia/icon' },
            { id: 6, name: '마가티아 사막', icon: 'https://maplestory.io/api/GMS/62/map/Ellinia/icon' },
        ]
    
        const recentSearches = [
            { id: 1, name: '엘리니아 숲', icon: 'https://maplestory.io/api/GMS/62/map/Ellinia/icon' },
            { id: 2, name: '페리온 폐허', icon: 'https://maplestory.io/api/GMS/62/map/Ellinia/icon' },
            { id: 3, name: '리프레의 숲', icon: 'https://maplestory.io/api/GMS/62/map/Ellinia/icon' },
        ]
        const favoriteSpots = [
            { id: 5, name: '헤네시스 북쪽 초원', icon: 'https://maplestory.io/api/GMS/62/map/Ellinia/icon' },
            { id: 6, name: '마가티아 사막', icon: 'https://maplestory.io/api/GMS/62/map/Ellinia/icon' },
        ]
    
        useEffect(() => {
            if (isDarkMode) {
                document.documentElement.classList.add('dark')
            } else {
                document.documentElement.classList.remove('dark')
            }
        }, [isDarkMode])
    
        const toggleDarkMode = () => setIsDarkMode(!isDarkMode)
    
        const handleSearch = () => {
            console.log('Search for:', searchTerm)
            setIsSearchFocused(false)
        }
    
        const handleFocus = () => setIsSearchFocused(true)
    
        const handleBlur = () => {
            setTimeout(() => {
                setIsSearchFocused(false)
                setSearchTerm('') // 입력 내용 초기화
            }, 200)
        }
    
        const filteredHuntingSpots = mockHuntingSpots.filter((spot) =>
            spot.name.toLowerCase().includes(searchTerm.toLowerCase())
        )

    return(
        <div className="relative flex items-center justify-center mx-auto max-w-lg w-full">
            <input
                ref={searchInputRef}
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none ring-1 focus:ring-2 ring-orange-500 dark:bg-gray-700 dark:text-white"
                placeholder="사냥터 이름을 입력하세요"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />

            {isSearchFocused && (
                <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10 p-4 dark:bg-gray-900">
                    {!searchTerm ? (
                        <>
                            <div className="mb-4">
                                <h3 className="text-sm font-semibold mb-2 flex items-center dark:text-white">
                                    <ClockIcon className="h-4 w-4 mr-1 text-gray-500" />
                                    최근 검색어
                                </h3>
                                <ul>
                                    {recentSearches.map((spot) => (
                                        <li key={spot.id} className="flex items-center justify-between p-2 rounded cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-400">
                                            <div className="flex items-center">
                                                <img src={spot.icon} alt={spot.name} className="w-8 h-8 mr-3" />
                                                <span>{spot.name}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className='hover:text-orange-600'>찾기</span>
                                                <span>|</span>
                                                <span className='hover:text-orange-600'>생성</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold mb-2 flex items-center dark:text-white">
                                    <StarIcon className="h-4 w-4 mr-1 text-yellow-500" />
                                    즐겨찾기 사냥터
                                </h3>
                                <ul>
                                    {favoriteSpots.map((spot) => (
                                        <li key={spot.id} className="flex items-center justify-between p-2 rounded cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-400">
                                            <div className="flex items-center">
                                                <img src={spot.icon} alt={spot.name} className="w-8 h-8 mr-3" />
                                                <span>{spot.name}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className='hover:text-orange-600'>찾기</span>
                                                <span>|</span>
                                                <span className='hover:text-orange-600'>생성</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </>
                    ) : (
                        filteredHuntingSpots.length > 0 ? (
                            <ul>
                                {filteredHuntingSpots.map((spot) => (
                                    <li key={spot.id} className="flex items-center justify-between p-2 rounded cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-400">
                                        <div className="flex items-center">
                                            <img src={spot.icon} alt={spot.name} className="w-8 h-8 mr-3" />
                                            <span>{spot.name}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className='hover:text-orange-600'>찾기</span>
                                            <span>|</span>
                                            <span className='hover:text-orange-600'>생성</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-sm text-gray-500 flex items-center">
                                <ExclamationCircleIcon className="h-5 w-5 mr-2" />
                                검색 결과가 없습니다.
                            </p>
                        )
                    )}
                </div>
            )}
        </div>
    )
}