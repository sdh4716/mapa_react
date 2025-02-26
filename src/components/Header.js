'use client'

import { useState, useRef, useEffect } from 'react'
import { Bars3Icon, MoonIcon, SunIcon, ClockIcon, StarIcon } from '@heroicons/react/24/solid'
import { TbLeaf2 } from "react-icons/tb"
import { PopoverGroup } from '@headlessui/react'
import { Link } from 'react-router-dom'

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [isSearchFocused, setIsSearchFocused] = useState(false)
    const [isDarkMode, setIsDarkMode] = useState(false)
    const searchInputRef = useRef(null)

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

    const recentSearches = ['루디브리엄 시계탑', '헤네시스 북쪽 초원', '마가티아 사막']
    const favoriteSpots = ['아쿠아리움 해저', '리프레의 숲']

    return (
        <>
            <header className="bg-gray-100 dark:bg-gray-800 fixed top-0 left-0 w-full z-50 shadow-md transition-colors">
                <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center -m-1.5 p-1.5">
                            <div className="relative h-8 w-8">
                                <TbLeaf2
                                    className="h-8 w-8"
                                    style={{
                                        fill: 'url(#leafGradient)',
                                        stroke: 'none'
                                    }}
                                />
                                <svg width="0" height="0">
                                    <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#f97316" />
                                        <stop offset="100%" stopColor="#e11d48" />
                                    </linearGradient>
                                </svg>
                            </div>
                            <h1 className="text-logo font-bold bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent ml-1">
                                MaPa.gg
                            </h1>
                        </Link>
                    </div>

                    <div className="relative flex items-center justify-center mx-auto max-w-lg w-full">
                        <input
                            ref={searchInputRef}
                            type="text"
                            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-700 dark:text-white"
                            placeholder="사냥터 이름을 입력하세요"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />

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

                    <div className="flex items-center gap-x-6">
                        <PopoverGroup className="hidden lg:flex lg:gap-x-6">
                            <Link to="/partyfinder" className="text-sm font-semibold text-gray-900 dark:text-white">
                                파티찾기
                            </Link>
                            <a href="#" className="text-sm font-semibold text-gray-900 dark:text-white">
                                로그인
                            </a>
                        </PopoverGroup>

                        <button
                            onClick={toggleDarkMode}
                            className="p-2 rounded-md bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 transition"
                        >
                            {isDarkMode ? (
                                <SunIcon className="h-5 w-5 text-yellow-400" />
                            ) : (
                                <MoonIcon className="h-5 w-5 text-gray-800" />
                            )}
                        </button>

                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(true)}
                            >
                                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                </nav>
            </header>

            <div className="pt-20"></div>
        </>
    )
}
