'use client'

import React, { useState } from 'react'
import { MagnifyingGlassIcon, PlusCircleIcon } from '@heroicons/react/24/solid'

const mockParties = [
    {
        id: 1,
        name: '루디브리엄 시계탑 파티',
        leader: 'MapleMaster',
        requiredLevel: 'Lv.100+',
        maxMembers: '6명',
        location: '루디브리엄',
        description: '빠른 사냥과 퀘스트를 위한 파티입니다.'
    },
    {
        id: 2,
        name: '혼테일 레이드 팀',
        leader: 'DragonSlayer',
        requiredLevel: 'Lv.150+',
        maxMembers: '10명',
        location: '리프레',
        description: '보스레이드 참여할 분 모십니다!'
    },
    {
        id: 3,
        name: '헤네시스 북쪽 초원 사냥',
        leader: 'MushroomKing',
        requiredLevel: 'Lv.50+',
        maxMembers: '4명',
        location: '헤네시스',
        description: '편하게 몬스터를 사냥할 수 있는 파티'
    }
]

export default function PartyFinder() {
    const [searchTerm, setSearchTerm] = useState('')

    const filteredParties = mockParties.filter(party =>
        party.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        party.location.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <main className="flex flex-col items-center py-16 bg-gray-50 dark:bg-gray-900 transition-colors min-h-screen">
            <div className="w-full max-w-4xl p-4">
                <h1 className="text-3xl font-extrabold text-center mb-8 text-gray-900 dark:text-white">
                    메이플랜드 파티찾기 시스템
                </h1>

                {/* 검색 영역 */}
                <div className="relative mb-8">
                    <div className="flex items-center space-x-3">
                        <input
                            type="text"
                            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-700 dark:text-white"
                            placeholder="파티 이름, 사냥터, 보스 이름을 입력하세요"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button
                            className="flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-4 rounded-lg shadow-md hover:from-orange-600 hover:to-red-600 transition"
                        >
                            <MagnifyingGlassIcon className="h-6 w-6" />
                        </button>
                    </div>
                </div>

                {/* 파티 목록 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredParties.map((party) => (
                        <div
                            key={party.id}
                            className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
                        >
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{party.name}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
                                리더: {party.leader} | {party.requiredLevel} | {party.maxMembers}
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">
                                위치: {party.location}
                            </p>
                            <p className="text-sm text-gray-700 dark:text-gray-400 mt-2">{party.description}</p>
                            <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded-lg shadow-md hover:bg-orange-600 transition">
                                참여하기
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}
