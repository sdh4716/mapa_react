'use client'

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
import { TbLeaf2 } from "react-icons/tb"
import { PopoverGroup } from '@headlessui/react'
import { Link } from 'react-router-dom'
import MainSearchbar from '../search/MainSearchbar'

export default function Header({ toggleSidebar }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
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
                        <MainSearchbar/>
                    </div>

                    <div className="flex items-center gap-x-6">
                        <PopoverGroup className="hidden lg:flex lg:gap-x-6">
                            {/* <Link to="/partyfinder" className="text-sm font-semibold text-gray-900 dark:text-white">
                                파티찾기
                            </Link>
                            <Link to="/partymaker" className="text-sm font-semibold text-gray-900 dark:text-white">
                                파티생성
                            </Link> */}
                            <a href="#" className="text-sm font-semibold text-gray-900 dark:text-white">
                                로그인
                            </a>
                            <Link to="/myInfoReg" className="text-sm font-semibold text-gray-900 dark:text-white">
                                내정보
                            </Link>
                        </PopoverGroup>

                        <button
                            onClick={toggleSidebar}  
                            className="p-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-500 transition">
                            <UserCircleIcon className="h-6 w-6 text-gray-800 dark:text-white"/>
                        </button>

                        <button
                            onClick={toggleDarkMode}
                            className="p-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-500 transition"
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
